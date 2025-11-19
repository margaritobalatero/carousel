import { useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Carousel from '../components/Carousel'
import { ethers } from 'ethers'

const fetcher = url => axios.get(url).then(r => r.data)

export default function Home() {
  const { data, mutate } = useSWR('/api/images', fetcher)
  const [address, setAddress] = useState(null)
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    async function whoami() {
      try {
        const me = await axios.get('/api/auth/me')
        setAddress(me.data.address)
      } catch (e) { setAddress(null) }
    }
    whoami()
  }, [])

  async function login() {
    try {
      if (!window.ethereum) return alert('Install MetaMask')
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      const res = await axios.get(`/api/auth/nonce?address=${address}`)
      const nonce = res.data.nonce
      const message = `Sign this message to login. Nonce: ${nonce}`
      const signature = await signer.signMessage(message)

      const loginRes = await axios.post('/api/auth/login', { address, signature })
      if (loginRes.status === 200) {
        setAddress(address)
        mutate()
      }
    } catch (err) {
      console.error(err)
      alert('Login failed')
    }
  }

  async function logout() {
    await axios.post('/api/auth/logout')
    setAddress(null)
  }

  async function addImage(e) {
    e.preventDefault()
    try {
      await axios.post('/api/images', { url, title })
      setUrl('')
      setTitle('')
      mutate()
    } catch (err) { console.error(err); alert('Failed') }
  }

  async function remove(id) {
    if (!confirm('Delete?')) return
    await axios.delete(`/api/images/${id}`)
    mutate()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Carousel App</h1>
          <div>
            {address ? (
              <div className="flex items-center gap-3">
                <div className="text-sm">{address}</div>
                <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
              </div>
            ) : (
              <button onClick={login} className="px-4 py-2 bg-blue-600 text-white rounded">Login with MetaMask</button>
            )}
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Carousel</h2>
          <div className="bg-white p-4 rounded shadow">
            {data?.length ? <Carousel images={data} /> : <p>No images yet</p>}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-2">Add Image (authenticated)</h2>
          <form className="flex gap-2" onSubmit={addImage}>
            <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Image URL" className="flex-1 p-2 border rounded" />
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-48 p-2 border rounded" />
            <button className="px-3 bg-green-600 text-white rounded">Add</button>
          </form>
        </section>

        <section>
          <h2 className="text-xl mb-2">Manage Images</h2>
          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-left">
              <thead>
                <tr><th>Preview</th><th>Title</th><th>Owner</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {data?.map(img => (
                  <tr key={img._id} className="align-top">
                    <td className="py-2"><img src={img.url} alt={img.title} className="w-36 h-20 object-cover rounded"/></td>
                    <td>{img.title}</td>
                    <td>{img.owner}</td>
                    <td>
                      {address === img.owner && (
                        <button onClick={() => remove(img._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
