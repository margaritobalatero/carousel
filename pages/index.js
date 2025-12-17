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
  const [search, setSearch] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    async function whoami() {
      try {
        const me = await axios.get('/api/auth/me')
        setAddress(me.data.address)
      } catch {
        setAddress(null)
      }
    }
    whoami()
  }, [])

  async function login() {
    if (!window.ethereum) return alert('Install MetaMask')
    await window.ethereum.request({ method: 'eth_requestAccounts' })

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const address = await signer.getAddress()

    const { data } = await axios.get(`/api/auth/nonce?address=${address}`)
    const message = `Sign this message to login. Nonce: ${data.nonce}`
    const signature = await signer.signMessage(message)

    const res = await axios.post('/api/auth/login', { address, signature })
    if (res.status === 200) {
      setAddress(address)
      mutate()
    }
  }

  async function logout() {
    await axios.post('/api/auth/logout')
    setAddress(null)
  }

  async function addImage(e) {
    e.preventDefault()
    await axios.post('/api/images', { url, title })
    setUrl('')
    setTitle('')
    mutate()
  }

  function openDetail(img) {
    setSelectedImage(img)
    setShowModal(true)
  }

  const filteredData = data?.filter(img =>
    img.title?.toLowerCase().includes(search.toLowerCase()) ||
    img.owner?.toLowerCase().includes(search.toLowerCase()) ||
    img.url?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Carousel App</h1>
          {address ? (
            <div className="flex gap-3 items-center">
              <span className="text-sm">{address}</span>
              <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={login} className="px-4 py-2 bg-blue-600 text-white rounded">
              Login with MetaMask
            </button>
          )}
        </header>

        {/* CAROUSEL */}
        <section className="mb-8">
          <h2 className="text-xl mb-2">Carousel</h2>
          <div className="bg-white p-4 rounded shadow">
            {filteredData?.length ? <Carousel images={filteredData} /> : <p>No images</p>}
          </div>
        </section>

        {/* ADD IMAGE */}
        <section className="mb-6">
          <h2 className="text-xl mb-2">Add Image</h2>
          <form className="flex gap-2" onSubmit={addImage}>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Image URL"
              className="flex-1 p-2 border rounded"
            />
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              className="w-48 p-2 border rounded"
            />
            <button className="px-3 bg-green-600 text-white rounded">Add</button>
          </form>
        </section>

        {/* 🔍 SEARCH (moved below Add Image) */}
        <section className="mb-8">
          <input
            type="text"
            placeholder="Search by title, owner, or URL..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </section>

        {/* MANAGE */}
        <section>
          <h2 className="text-xl mb-2">Manage Images</h2>
          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Title</th>
                  <th>Owner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.map(img => (
                  <tr key={img._id}>
                    <td className="py-2">
                      <img src={img.url} className="w-36 h-20 object-cover rounded" />
                    </td>
                    <td>{img.title}</td>
                    <td>{img.owner}</td>
                    <td>
                      <button
                        onClick={() => openDetail(img)}
                        className="px-2 py-1 bg-blue-500 text-white rounded"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* MODAL */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
             onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg p-6 max-w-lg w-full"
               onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-3">{selectedImage.title}</h3>
            <img src={selectedImage.url} className="w-full rounded mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Owner: {selectedImage.owner}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
