import React, { useState } from 'react';

// 20 ta noutbuklar bazasi
const PRODUCTS = [
  // --- RTX & Windows Noutbuklar (10 ta) ---
  {
    id: 1,
    title: 'Lenovo IdeaPad Gaming 3 (Ryzen 5 5600H, RTX 3050)',
    price: 9500000,
    oldPrice: 11000000,
    monthly: '950 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    rating: 4.8,
    reviews: 142,
  },
  {
    id: 2,
    title: 'ASUS TUF Gaming F15 (Core i5-12500H, RTX 3050 Ti)',
    price: 10800000,
    oldPrice: 12500000,
    monthly: '1 080 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    title: 'HP Victus 15 (Core i7-12650H, RTX 4050 6GB)',
    price: 13200000,
    oldPrice: 15000000,
    monthly: '1 320 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80',
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 4,
    title: 'Acer Nitro 5 (Ryzen 7 6800H, RTX 3060 6GB)',
    price: 14500000,
    oldPrice: 16800000,
    monthly: '1 450 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    rating: 4.9,
    reviews: 115,
  },
  {
    id: 5,
    title: 'Lenovo Legion 5 (Ryzen 7 7735HS, RTX 4060 8GB)',
    price: 17200000,
    oldPrice: 19500000,
    monthly: '1 720 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    rating: 5.0,
    reviews: 210,
  },
  {
    id: 6,
    title: 'ASUS ROG Strix G16 (Core i7-13650HX, RTX 4060)',
    price: 21000000,
    oldPrice: 24000000,
    monthly: '2 100 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    rating: 4.9,
    reviews: 95,
  },
  {
    id: 7,
    title: 'MSI Katana 15 (Core i9-13900H, RTX 4070 8GB)',
    price: 24800000,
    oldPrice: 28000000,
    monthly: '2 480 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    rating: 4.8,
    reviews: 53,
  },
  {
    id: 8,
    title: 'Dell Alienware m16 (Ryzen 9 7845HX, RTX 4070)',
    price: 29500000,
    oldPrice: 33000000,
    monthly: '2 950 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80',
    rating: 4.9,
    reviews: 38,
  },
  {
    id: 9,
    title: 'ASUS ROG Zephyrus G16 (Core i9-14900HX, RTX 4080)',
    price: 38000000,
    oldPrice: 42000000,
    monthly: '3 800 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    rating: 5.0,
    reviews: 47,
  },
  {
    id: 10,
    title: 'Razer Blade 18 (Core i9-14900HX, RTX 4090 16GB)',
    price: 52000000,
    oldPrice: 58000000,
    monthly: '5 200 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    rating: 5.0,
    reviews: 29,
  },

  // --- MacBook'lar ($1000 dan boshlangan) (10 ta) ---
  {
    id: 11,
    title: 'Apple MacBook Air 13 M2 (8GB RAM, 256GB SSD)',
    price: 12800000, // ~$1000
    oldPrice: 14200000,
    monthly: '1 280 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    rating: 4.9,
    reviews: 310,
  },
  {
    id: 12,
    title: 'Apple MacBook Air 15 M2 (8GB RAM, 512GB SSD)',
    price: 16500000,
    oldPrice: 18000000,
    monthly: '1 650 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 4.9,
    reviews: 185,
  },
  {
    id: 13,
    title: 'Apple MacBook Air 13 M3 (16GB RAM, 512GB SSD)',
    price: 18200000,
    oldPrice: 20000000,
    monthly: '1 820 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    rating: 5.0,
    reviews: 140,
  },
  {
    id: 14,
    title: 'Apple MacBook Air 15 M3 (16GB RAM, 512GB SSD)',
    price: 20500000,
    oldPrice: 22800000,
    monthly: '2 050 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 5.0,
    reviews: 92,
  },
  {
    id: 15,
    title: 'Apple MacBook Pro 14 M3 (8GB RAM, 512GB SSD)',
    price: 21500000,
    oldPrice: 24000000,
    monthly: '2 150 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 16,
    title: 'Apple MacBook Pro 14 M3 Pro (18GB RAM, 512GB SSD)',
    price: 26500000,
    oldPrice: 29500000,
    monthly: '2 650 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    rating: 5.0,
    reviews: 112,
  },
  {
    id: 17,
    title: 'Apple MacBook Pro 16 M3 Pro (18GB RAM, 512GB SSD)',
    price: 32000000,
    oldPrice: 35500000,
    monthly: '3 200 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 5.0,
    reviews: 64,
  },

  // --- BOZORNING ENG ZOR ENG QIMMAT TOP 3 MAHSULOTLARI ---
  {
    id: 18,
    title: '🔥 TOP 3: Apple MacBook Pro 16 M3 Max (36GB RAM, 1TB SSD)',
    price: 45000000,
    oldPrice: 49000000,
    monthly: '4 500 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    rating: 5.0,
    reviews: 88,
  },
  {
    id: 19,
    title: '👑 TOP 2: ASUS ROG Strix SCAR 18 (Core i9-14900HX, RTX 4090 16GB, 64GB RAM)',
    price: 58000000,
    oldPrice: 63000000,
    monthly: '5 800 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    rating: 5.0,
    reviews: 35,
  },
  {
    id: 20,
    title: '🚀 TOP 1: Apple MacBook Pro 16 M3 Max (128GB RAM, 8TB SSD Extreme)',
    price: 89000000,
    oldPrice: 95000000,
    monthly: '8 900 000 so\'m/oy',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    rating: 5.0,
    reviews: 19,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlertModal, setShowAlertModal] = useState(false);

  // Savatchaga qo'shish
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Savatchada miqdorni o'zgartirish (+ va -)
  const updateCartQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1 && delta === -1) {
            // Soni 1 ta bo'lsa va - bosilsa prikol warning modal chiqadi!
            setShowAlertModal(true);
            return item;
          }
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
    );
  };

  // Savatchadan batamom o'chirish
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Sevimlilar (Yurakcha)
  const toggleFavorite = (product, e) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Hisob-kitoblar
  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">

      {/* ⚠️ PRIKOL WARNING MODAL (0 BO'LGANDA CHIQADI) */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-purple-100 animate-bounce">
            <div className="text-5xl mb-3">🤣🤣</div>
            <h3 className="text-xl font-extrabold text-purple-900 mb-2">Afsus!</h3>
            <p className="text-gray-700 font-medium mb-6">
              Bizda qarzdorlikka buyumlar yo'q afsus 🤣🤣
            </p>
            <button
              onClick={() => setShowAlertModal(false)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-2xl shadow-lg transition"
            >
              Tushundim 😄
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

          <div
            onClick={() => setActiveTab('home')}
            className="cursor-pointer flex items-center gap-2"
          >
            <div className="bg-purple-600 text-white font-extrabold text-xl px-3 py-1.5 rounded-xl tracking-wider">
              KV
            </div>
            <span className="font-bold text-lg text-purple-900 hidden sm:inline">
              Kechiktirilgan uyga vazifa
            </span>
          </div>

          <div className="flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Noutbuklarni qidirish (M3, RTX 4090, i9...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-600 transition"
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-2 text-sm font-medium transition ${activeTab === 'favorites' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
            >
              <svg className="w-6 h-6" fill={favorites.length > 0 ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="hidden md:inline">Izbrannoe</span>
              {favorites.length > 0 && (
                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`flex items-center gap-2 text-sm font-medium transition relative ${activeTab === 'cart' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden md:inline">Korzina</span>
              {totalCartCount > 0 && (
                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ASOSIY QISM */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* KATALOG (5 TA USTUN / XATORLI GRID) */}
        {activeTab === 'home' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Noutbuklar Katalogi (20 ta top model)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredProducts.map((product) => {
                const isFavorite = favorites.some((fav) => fav.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-3 flex flex-col justify-between relative group"
                  >
                    <button
                      onClick={(e) => toggleFavorite(product, e)}
                      className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur shadow hover:scale-110 transition"
                    >
                      <svg
                        className={`w-5 h-5 transition ${isFavorite ? 'text-blue-500 fill-blue-500' : 'text-gray-400 hover:text-blue-500'
                          }`}
                        fill={isFavorite ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    <div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 object-cover rounded-xl mb-3"
                      />
                      <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-2 h-8">
                        {product.title}
                      </h3>

                      <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-2">
                        <span className="text-amber-500 font-bold">★ {product.rating}</span>
                        <span>({product.reviews} sharh)</span>
                      </div>

                      <div className="mb-3">
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {product.monthly}
                        </span>
                        <div className="text-[11px] text-gray-400 line-through mt-1">
                          {product.oldPrice.toLocaleString()} so'm
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {product.price.toLocaleString()} so'm
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2.5 rounded-xl transition shadow"
                    >
                      Savatchaga qo'shish
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SAVATCHA SAHIFASI */}
        {activeTab === 'cart' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Savatcha ({totalCartCount} ta mahsulot)</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-12">Savatchangiz bo'sh.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-4 gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl" />
                      <div>
                        <h4 className="font-semibold text-sm max-w-md">{item.title}</h4>
                        <p className="text-gray-500 text-xs">{item.price.toLocaleString()} so'm</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                      <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-xl">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="font-bold text-lg px-1 text-gray-700 hover:text-purple-600">-</button>
                        <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="font-bold text-lg px-1 text-gray-700 hover:text-purple-600">+</button>
                      </div>

                      <span className="font-bold text-purple-600 w-32 text-right">
                        {(item.price * item.quantity).toLocaleString()} so'm
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <span className="text-lg font-bold">Jami summa:</span>
                  <span className="text-2xl font-extrabold text-purple-600">
                    {totalCartPrice.toLocaleString()} so'm
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEVIMLILAR SAHIFASI */}
        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Sevimlilar (Izbrannoe)</h2>
            {favorites.length === 0 ? (
              <p className="text-gray-500 text-center py-12">Hozircha sevimlilar qo'shilmagan.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {favorites.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex flex-col justify-between relative">
                    <button
                      onClick={(e) => toggleFavorite(product, e)}
                      className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 shadow"
                    >
                      <svg className="w-5 h-5 text-blue-500 fill-blue-500" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <div>
                      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-xl mb-3" />
                      <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-2 h-8">{product.title}</h3>
                      <div className="text-sm font-bold text-gray-900 mb-3">{product.price.toLocaleString()} so'm</div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2.5 rounded-xl transition"
                    >
                      Savatchaga qo'shish
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}