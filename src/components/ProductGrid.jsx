import ProductCard from './ProductCard';
import { useState, useMemo } from 'react';
import { products } from '../data/products';

function ProductGrid() {

  // Derive categories dynamically from products to avoid mismatch
  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const displayedProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="bg-noor-darker py-14 md:py-18 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-noor-lightest mb-2">
              Featured this week
            </h2>
            <p className="text-sm md:text-base text-noor-light">
              A snapshot of what our community is loving right now.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            {categories.map((cat) => {
              const active = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition-colors ${
                    active
                      ? 'bg-noor-gold text-noor-darkest border-noor-gold'
                      : 'border-noor-medium text-noor-light hover:border-noor-gold hover:text-noor-gold'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
