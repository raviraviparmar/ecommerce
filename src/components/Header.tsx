import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">E-commerce</a>
        </Link>
        <Link href="/cart">
          <a className="flex items-center">
            <span className="mr-2">Cart</span>
            <span className="bg-red-500 text-white rounded-full px-2 py-1">
              {cart.length}
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
