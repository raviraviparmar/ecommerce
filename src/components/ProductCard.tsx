import Link from 'next/link';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded">
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">${product.price}</p>
        </a>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
