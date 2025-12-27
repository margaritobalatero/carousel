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

  // ✅ Modal state ONLY
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

  // ✅ Detail button handler
  function openDetail(item) {
    setSelectedItem(item)
    setShowModal(true)
  }

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

        {/* ✅ ORIGINAL CAROUSEL (UNCHANGED) */}
        <section className="mb-8">
          <h2 className="text-xl mb-2">Carousel</h2>
          <div className="bg-white p-4 rounded shadow">
            {data?.length ? <Carousel images={data} /> : <p>No images yet</p>}
          </div>
        </section>

        {/* ADD IMAGE */}
        <form onSubmit={addImage} className="flex gap-2 mb-6">
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
          <button className="bg-green-600 text-white px-3 rounded">
            Add
          </button>
        </form>

        {/* LIST */}
        <table className="w-full bg-white rounded shadow">
          <tbody>
            {data?.map(item => (
              <tr key={item._id}>
                <td className="p-2">{item.title}</td>
                <td className="p-2">
                  <button
                    onClick={() => openDetail(item)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* ✅ MODAL — VIDEO PLAYS ONLY HERE */}
      {showModal && selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-lg"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">
              {selectedItem.title}
            </h3>

            {isVideo(selectedItem.url) ? (
              <video
                controls
                autoPlay
                className="w-full rounded"
              >
                <source src={selectedItem.url} />
              </video>
            ) : (
              <img
                src={selectedItem.url}
                className="w-full rounded"
              />
            )}

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
