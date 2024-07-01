import { GetServerSideProps } from 'next';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

type Props = {
  products: Product[];
};

const ProductsPage = ({ products }: Props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.example.com/products');
  const products: Product[] = await res.json();

  return { props: { products } };
};

export default ProductsPage;
