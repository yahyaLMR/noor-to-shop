import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '../hooks/useCart'

function Header() {
  const { cartCount } = useCart()
  const baseLink = 'hover:text-noor-gold transition-colors'
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close when clicking outside panel (only if open)
  useEffect(() => {
    function onClick(e) {
      if (!open) return
      // If click is inside panel, ignore
      if (panelRef.current && panelRef.current.contains(e.target)) return
      // If click is on toggle button, ignore (toggle handles state)
      if (toggleRef.current && toggleRef.current.contains(e.target)) return
      // Otherwise close
      setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  function handleNavClick() {
    setOpen(false)
  }

  return (
    <header className="bg-noor-darkest/95 backdrop-blur sticky top-0 z-30 border-b border-noor-medium">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-noor-gold flex items-center justify-center ">
            <img className='rounded-md' src="https://noortolearn.com/assets/logo-BRdXjARY.jpeg" alt="" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-noor-lightest tracking-wide">
              noor to shop
            </h1>
            <p className="text-xs text-noor-light">Curated essentials, warm aesthetics</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : ''}`}>Home</NavLink>
          <NavLink to="/new" className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : ''}`}>New Arrivals</NavLink>
          <NavLink to="/collections" className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : ''}`}>Collections</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : ''}`}>About</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative flex items-center gap-2 bg-noor-gold text-noor-darkest px-4 py-2 rounded-full text-sm font-semibold hover:bg-noor-brown hover:text-noor-lightest transition-colors">
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-noor-darkest text-noor-gold text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-noor-medium text-noor-light hover:text-noor-gold hover:border-noor-gold transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[5px]">
              <span className={`h-[2px] w-5 bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}></span>
              <span className={`h-[2px] w-5 bg-current ${open ? 'opacity-0' : 'opacity-100'} transition-opacity`}></span>
              <span className={`h-[2px] w-5 bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      <div
        ref={panelRef}
        className={`md:hidden bg-noor-darkest/95 backdrop-blur border-t border-noor-medium overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
          <NavLink to="/" end onClick={handleNavClick} className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : 'text-noor-light'}`}>Home</NavLink>
          <NavLink to="/new" onClick={handleNavClick} className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : 'text-noor-light'}`}>New Arrivals</NavLink>
          <NavLink to="/collections" onClick={handleNavClick} className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : 'text-noor-light'}`}>Collections</NavLink>
          <NavLink to="/about" onClick={handleNavClick} className={({ isActive }) => `${baseLink} ${isActive ? 'text-noor-gold' : 'text-noor-light'}`}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header