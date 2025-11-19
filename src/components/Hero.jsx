import { useState, useRef, useEffect } from 'react';
import { products as sourceProducts } from '../data/products';

function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = sourceProducts.slice(0, 3).map(p => ({
    id: p.id,
    name: p.name,
    price: `${p.price} DH`,
    originalPrice: p.badge === 'New' ? null : `${(p.price * 1.2).toFixed(2)} DH`,
    discount: p.badge === 'New' ? 'NEW' : (p.badge || '-20%'),
    rating: 5,
    description: p.description,
    image: p.imageUrl
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 deg

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden bg-noor-darker min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/12/1200/800"
          alt="Warm, ambient lifestyle setting"
          className="w-full h-full object-cover opacity-20 scale-105 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noor-darker via-noor-darker/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-noor-darker/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-sm uppercase tracking-[0.25em] text-noor-gold mb-4 font-medium">
                New Season • Handpicked
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-noor-lightest mb-6 leading-tight tracking-tight">
                Elevate your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-noor-lightest to-noor-light">everyday ritual.</span>
              </h1>
              <p className="text-lg md:text-xl text-noor-light/90 max-w-xl leading-relaxed">
                Discover curated pieces for home, coffee, and slow living. Crafted with care,
                chosen for comfort, and made to last.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button className="group relative px-8 py-4 bg-noor-gold text-noor-darkest rounded-full font-bold text-sm md:text-base overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(189,145,90,0.4)] hover:scale-105">
                <span className="relative z-10">Shop Collection</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 border border-noor-gold/40 text-noor-gold rounded-full font-semibold text-sm md:text-base hover:bg-noor-gold/10 transition-all hover:border-noor-gold">
                Explore Categories
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            <div className="flex gap-8 text-xs md:text-sm text-noor-light/80 border-t border-white/10 pt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-noor-gold animate-pulse" />
                <div>
                  <p className="font-semibold text-noor-lightest">Free shipping</p>
                  <p>On orders over 120 DH</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-noor-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div>
                  <p className="font-semibold text-noor-lightest">Ethically sourced</p>
                  <p>Trusted makers</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" perspective-1000">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-1 shadow-2xl backdrop-blur-sm animate-float"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-noor-gold/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative rounded-[1.3rem] bg-noor-darkest/90 p-6 md:p-8 overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-noor-gold/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 min-h-[480px] flex flex-col">
                  <div className="flex-1 relative">
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${
                          index === currentSlide 
                            ? 'opacity-100 translate-x-0 pointer-events-auto' 
                            : 'opacity-0 translate-x-8 pointer-events-none'
                        }`}
                      >
                        <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-row gap-6 group hover:bg-white/10 transition-colors">
                          <div className="relative w-1/2 h-full rounded-xl overflow-hidden shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {product.discount && (
                              <div className="absolute top-3 left-3">
                                <span className="text-xs px-2 py-1 rounded-full bg-noor-gold text-noor-darkest font-bold shadow-lg">
                                  {product.discount}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-noor-lightest font-bold text-xl mb-2 line-clamp-1">
                                {product.name}
                              </h3>
                              <div className="flex gap-1 mb-3">
                                {[...Array(product.rating)].map((_, i) => (
                                  <span key={i} className="text-noor-gold text-xs">★</span>
                                ))}
                              </div>
                              <p className="text-sm text-noor-light mb-4 leading-relaxed line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex flex-col">
                                {product.originalPrice && (
                                  <span className="text-noor-light/50 text-xs line-through">{product.originalPrice}</span>
                                )}
                                <span className="text-noor-gold font-bold text-2xl">{product.price}</span>
                              </div>
                              <button className="w-10 h-10 rounded-full bg-noor-gold text-noor-darkest flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-noor-gold/20">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-6 px-2">
                    <div className="flex gap-2">
                      {products.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentSlide ? 'bg-noor-gold w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={prevSlide}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-noor-gold hover:text-noor-darkest transition-colors text-noor-light"
                      >
                        ←
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-noor-gold hover:text-noor-darkest transition-colors text-noor-light"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
