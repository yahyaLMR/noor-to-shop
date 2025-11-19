import { useCart } from '../hooks/useCart';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      updateQuantity(item.id, quantity);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-noor-darker/30 border border-noor-medium/40 p-4 rounded-lg">
      <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-1">
        <h4 className="text-noor-lightest font-semibold">{item.name}</h4>
        <p className="text-sm text-noor-light">${item.price}</p>
        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-300 transition-colors mt-1 cursor-pointer">
          Remove
        </button>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor={`quantity-${item.id}`} className="text-sm text-noor-light">Qty:</label>
        <input
          id={`quantity-${item.id}`}
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 rounded-md bg-noor-darker border border-noor-medium px-2 py-1 text-sm text-noor-lightest focus:outline-none focus:border-noor-gold"
        />
      </div>
    </div>
  );
}

export default CartItem;
