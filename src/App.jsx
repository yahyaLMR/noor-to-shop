import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewArrivals from './pages/NewArrivals'
import Collections from './pages/Collections'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="min-h-screen bg-noor-darkest text-noor-lightest">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
