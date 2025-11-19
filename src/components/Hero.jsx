function Hero() {
  return (
    <section className="relative overflow-hidden bg-noor-darker">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/12/1200/800"
          alt="Warm, ambient lifestyle setting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noor-darker via-noor-darker/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-noor-light mb-4">
              NEW SEASON • HANDPICKED
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-noor-lightest mb-6 leading-tight">
              Elevate your everyday with
              <span className="block text-noor-gold">warm, timeless essentials.</span>
            </h1>
            <p className="text-base md:text-lg text-noor-light mb-8 max-w-xl">
              Discover curated pieces for home, coffee, and slow living. Crafted with care,
              chosen for comfort, and made to last in your daily ritual.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <button className="bg-noor-gold text-noor-darkest px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-noor-brown hover:text-noor-lightest transition-colors">
                Shop featured collection
              </button>
              <button className="border border-noor-gold/60 text-noor-gold px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-noor-gold hover:text-noor-darkest transition-colors">
                Explore all categories
              </button>
            </div>

            <div className="flex gap-8 text-xs md:text-sm text-noor-light">
              <div>
                <p className="font-semibold text-noor-lightest">Free shipping</p>
                <p>On orders over 120 DH</p>
              </div>
              <div>
                <p className="font-semibold text-noor-lightest">Ethically sourced</p>
                <p>Trusted makers & materials</p>
              </div>
              <div>
                <p className="font-semibold text-noor-lightest">Secure checkout</p>
                <p>Encrypted & protected</p>
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="rounded-3xl bg-noor-darkest/70 border border-noor-medium/70 p-5 md:p-6 lg:p-8 shadow-xl max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="col-span-2 rounded-2xl bg-noor-medium/40 border border-noor-medium/80 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-noor-lightest font-semibold text-sm">
                      Cozy Ritual Set
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-noor-gold/15 text-noor-gold border border-noor-gold/30">
                      Bestseller
                    </span>
                  </div>
                  <p className="text-xs text-noor-light mb-3">
                    A curated bundle of artisan coffee, ceramic mug, and raw honey for calm mornings.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-noor-gold font-semibold text-lg">89.00 DH</span>
                    <button className="text-xs px-3 py-2 rounded-full bg-noor-darkest text-noor-lightest border border-noor-gold/60 hover:bg-noor-gold hover:text-noor-darkest transition-colors">
                      Quick add
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl bg-noor-darkest/60 border border-noor-medium/80 p-3 flex flex-col justify-between">
                  <p className="text-xs text-noor-light mb-2">Handcrafted leather bag</p>
                  <p className="text-noor-gold font-semibold text-base">149.99DH</p>
                </div>

                <div className="rounded-2xl bg-noor-darkest/60 border border-noor-medium/80 p-3 flex flex-col justify-between">
                  <p className="text-xs text-noor-light mb-2">Organic wildflower honey</p>
                  <p className="text-noor-gold font-semibold text-base">18.99 DH</p>
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
