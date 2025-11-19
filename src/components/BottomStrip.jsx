function BottomStrip() {
  return (
    <section className="bg-noor-darkest border-t border-noor-medium py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-[2fr,3fr] gap-8 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-noor-lightest mb-2">
            Stay close to the warm light.
          </h3>
          <p className="text-sm text-noor-light">
            Be the first to hear about limited drops, seasonal collections, and slow-living notes from the studio.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full bg-noor-darker border border-noor-medium px-4 py-2.5 text-sm text-noor-lightest placeholder:text-noor-light focus:outline-none focus:border-noor-gold"
          />
          <button className="rounded-full bg-noor-gold text-noor-darkest px-6 py-2.5 text-sm font-semibold hover:bg-noor-brown hover:text-noor-lightest transition-colors cursor-pointer">
            Join newsletter
          </button>
        </form>
      </div>
    </section>
  );
}

export default BottomStrip;