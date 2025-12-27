import { useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Carousel from '../components/Carousel'
import { ethers } from 'ethers'

const fetcher = url => axios.get(url).then(r => r.data)

function isVideo(url) {
  return /\.(mp4|webm|ogg)$/i.test(url)
}

export default function Home() {
  const { data, mutate } = useSWR('/api/images', fetcher)
  const [address, setAddress] = useState(null)
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [search, setSearch] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => setAddress(res.data.address))
      .catch(() => setAddress(null))
  }, [])

  async function login() {
    if (!window.ethereum) return alert('Install MetaMask')
    await window.ethereum.request({ method: 'eth_requestAccounts' })

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const address = await signer.getAddress()

    const { data } = await axios.get(`/api/auth/nonce?address=${address}`)
    const signature = await signer.signMessage(
      `Sign this message to login. Nonce: ${data.nonce}`
    )

    await axios.post('/api/auth/login', { address, signature })
    setAddress(address)
    mutate()
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

  function openDetail(item) {
    setSelectedItem(item)
    setShowModal(true)
  }

  const filtered = data?.filter(i =>
    i.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <header className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Carousel App</h1>
          {address ? (
            <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          ) : (
            <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded">
              Login with MetaMask
            </button>
          )}
        </header>

        {/* ✅ RESTORED CAROUSEL */}
        <section className="mb-8">
          <h2 className="text-xl mb-2">Carousel</h2>
          <div className="bg-white p-4 rounded shadow">
            {filtered?.length ? (
              <Carousel images={filtered.filter(i => !isVideo(i.url))} />
            ) : (
              <p>No images</p>
            )}
          </div>
        </section>

        {/* ADD */}
        <form onSubmit={addImage} className="flex gap-2 mb-4">
          <input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Image or video URL"
            className="flex-1 p-2 border rounded"
          />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            className="w-48 p-2 border rounded"
          />
          <button className="bg-green-600 text-white px-3 rounded">Add</button>
        </form>

        {/* SEARCH */}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 border rounded mb-6"
        />

        {/* LIST */}
        <table className="w-full bg-white rounded shadow">
          <tbody>
            {filtered?.map(item => (
              <tr key={item._id}>
                <td className="p-2">{item.title}</td>
                <td>
                  <button
                    onClick={() => openDetail(item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
             onClick={() => setShowModal(false)}>
          <div className="bg-white p-6 rounded w-full max-w-lg"
               onClick={e => e.stopPropagation()}>
            <h3 className="font-bold mb-3">{selectedItem.title}</h3>

            {isVideo(selectedItem.url) ? (
              <video controls className="w-full">
                <source src={selectedItem.url} />
              </video>
            ) : (
              <img src={selectedItem.url} className="w-full rounded" />
            )}

            <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
