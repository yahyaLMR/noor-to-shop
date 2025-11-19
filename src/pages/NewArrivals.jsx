import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function NewArrivals() {
  const now = new Date();
  const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;
  const newItems = products.filter(p => {
    const addedDate = p.addedAt ? new Date(p.addedAt) : null;
    const isRecent = addedDate ? (now - addedDate) <= THIRTY_DAYS : false;
    const badgeQualifies = ['New', 'Limited'].includes(p.badge);
    return badgeQualifies || isRecent;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-noor-gold">New Arrivals</h2>
        <p className="text-noor-light text-sm md:text-base leading-relaxed">
          Discover the latest additions curated for warmth, utility, and understated aesthetics. These pieces have just landed or are in limited release.
        </p>
      </div>
      {newItems.length === 0 && (
        <div className="text-noor-light bg-noor-darker/60 border border-noor-medium rounded-lg p-6">
          Nothing fresh right now—check back soon for new drops.
        </div>
      )}
      {newItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewArrivals;