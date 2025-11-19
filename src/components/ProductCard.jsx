function ProductCard({ product }) {
  return (
    <article className="group bg-noor-darkest/70 border border-noor-medium/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-noor-gold/70 transition-all duration-200 flex flex-col">
      <div className="relative h-72 bg-noor-medium/40">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-noor-gold text-noor-darkest font-semibold">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-xs uppercase tracking-[0.2em] text-noor-light mb-2">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-noor-lightest mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-noor-light mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-noor-gold font-semibold text-xl">${product.price}</p>
            {product.note && (
              <p className="text-[0.7rem] text-noor-light mt-1">{product.note}</p>
            )}
          </div>
          <button className="bg-noor-gold text-noor-darkest px-4 py-2 rounded-full text-sm font-semibold hover:bg-noor-brown hover:text-noor-lightest transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;