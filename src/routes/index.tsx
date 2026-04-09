import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import products from '@/data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const FIRST_NAMES = ['Rahul', 'Priya', 'Amit', 'Sneha', 'Vikram', 'Pooja', 'Arjun', 'Divya', 'Suresh', 'Neha', 'Karan', 'Anjali', 'Rohit', 'Simran', 'Manish']
const LAST_NAMES = ['S.', 'K.', 'M.', 'P.', 'R.', 'G.', 'V.', 'N.', 'T.', 'B.']

function randomName() {
  return FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + ' ' + LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]
}

function randomProduct() {
  return products[Math.floor(Math.random() * products.length)].name
}

function generatePurchases(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: randomName(),
    product: randomProduct(),
    time: `${Math.floor(Math.random() * 10) + 1}m ago`,
  }))
}

interface ModalProps {
  product: typeof products[0]
  onClose: () => void
}

function PurchaseModal({ product, onClose }: ModalProps) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('99')
  const [txnId, setTxnId] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Product: ${product.name}\nName: ${name}\nAmount: ₹${amount}\nTransaction ID: ${txnId}`
    )
    window.open(`https://wa.me/918052756153?text=${msg}`, '_blank')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-[#0f172a] border border-green-500/30 rounded-2xl p-6 w-full max-w-md shadow-2xl shadow-green-500/10 mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl leading-none"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-white mb-1">{product.name}</h2>
        <p className="text-green-400 text-sm mb-4">Complete your purchase via UPI</p>

        <div className="flex justify-center mb-4">
          <div className="p-2 bg-white rounded-xl">
            <img
              src="https://i.ibb.co/fzC0grG5/qr.png"
              alt="QR Code"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mb-4">Scan QR to pay ₹{product.discountedPrice}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Your Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Amount Paid (₹)</label>
            <input
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="99"
              className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Transaction ID</label>
            <input
              required
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
              placeholder="Enter UPI transaction ID"
              className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
          >
            <span>✅</span> Confirm & Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

function HomePage() {
  const [viewers, setViewers] = useState(87)
  const [purchases, setPurchases] = useState(() => generatePurchases(20))
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [stockMap] = useState<Record<number, number>>(() =>
    Object.fromEntries(products.map((p) => [p.id, Math.floor(Math.random() * 5) + 1]))
  )
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Live viewer counter
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 60) + 60)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Update purchases scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setPurchases((prev) => {
        const newEntry = {
          id: Date.now(),
          name: randomName(),
          product: randomProduct(),
          time: 'just now',
        }
        return [newEntry, ...prev.slice(0, 19)]
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#020617]/95 backdrop-blur border-b border-green-500/20 shadow-lg shadow-green-500/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-white tracking-tight">Premium Database Store</span>
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">✓ VERIFIED</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-400 font-semibold">🔥 127+ Sold Today</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              <span>{viewers} watching now</span>
            </span>
          </div>
        </div>
      </header>

      {/* Marquee Bar */}
      <div className="bg-[#0f172a] border-b border-green-500/10 py-2 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...purchases, ...purchases].map((p, i) => (
            <span key={i} className="text-sm text-gray-400 flex-shrink-0">
              <span className="text-green-400 font-medium">{p.name}</span>
              {' '}purchased{' '}
              <span className="text-white">{p.product}</span>
              {' '}·{' '}
              <span className="text-gray-500">{p.time}</span>
              <span className="mx-4 text-green-500/30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Text */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          🗄️ Premium Database Collection
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          High-quality, verified databases for your business needs. Limited time offer — <span className="text-green-400 font-semibold">80% OFF</span> today only!
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => {
          const stock = stockMap[product.id]
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="relative bg-[#1e293b] border border-green-500/20 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5 group"
            >
              {/* Sale Badge */}
              <div className="absolute -top-2.5 -right-2.5 bg-green-500 text-black text-xs font-black px-2.5 py-1 rounded-full shadow-lg shadow-green-500/30">
                SALE
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-500/20 transition-colors">
                🗃️
              </div>

              <h3 className="font-bold text-white text-base mb-2 leading-snug">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-black text-green-400">₹{product.discountedPrice}</span>
                <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                <span className="text-green-500 text-xs font-bold bg-green-500/10 px-1.5 py-0.5 rounded">80% OFF</span>
              </div>

              {/* Low stock */}
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block"></span>
                Only {stock} left in stock!
              </div>

              <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-500/20">
                Buy Now — ₹99
              </button>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <PurchaseModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
