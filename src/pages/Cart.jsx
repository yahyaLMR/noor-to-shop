import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-noor-gold">Your Cart is Empty</h2>
        <p className="text-noor-light mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="rounded-full bg-noor-gold text-noor-darkest px-6 py-3 text-sm font-semibold hover:bg-noor-brown hover:text-noor-lightest transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-noor-gold">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-4">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="bg-noor-darker/50 border border-noor-medium/50 rounded-2xl p-6 h-fit">
          <h3 className="text-xl font-semibold text-noor-lightest mb-4">Order Summary</h3>
          <div className="space-y-2 text-noor-light">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{cartTotal} DH</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-noor-medium my-4"></div>
            <div className="flex justify-between text-noor-lightest font-semibold text-lg">
              <span>Total</span>
              <span>{cartTotal} DH</span>
            </div>
          </div>
          <button className="w-full mt-6 rounded-full bg-noor-gold text-noor-darkest px-6 py-3 text-sm font-semibold hover:bg-noor-brown hover:text-noor-lightest transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
