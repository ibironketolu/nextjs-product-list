import { GetServerSideProps } from 'next';
import axios from 'axios';
import Head from 'next/head';
import { Product } from '../../types/product';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Header />
      <main className="p-4">
        <div className="max-w-2xl mx-auto">
          <Image 
            src={product.thumbnail} 
            alt={product.title} 
            width={500} 
            height={500} 
            className="w-full h-80 object-cover mb-4 rounded" 
          />
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-800">{product.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = response.data;

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
