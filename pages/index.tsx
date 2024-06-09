// pages/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '../types/product';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState<string>('asc');
  const [filter, setFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(20);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let sortedProducts = [...products];
    if (sort === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(
      sortedProducts.filter(product => 
        product.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [sort, filter, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <Head>
        <title>Product List</title>
        <meta name="description" content="A responsive product list built with Next.js and Tailwind CSS" />
      </Head>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="border p-2 rounded w-full max-w-md" 
            onChange={(e) => setFilter(e.target.value)} 
          />
          <select 
            className="border p-2 rounded" 
            onChange={(e) => setSort(e.target.value)} 
            value={sort}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <select 
            className="border p-2 rounded ml-4" 
            onChange={(e) => setProductsPerPage(parseInt(e.target.value))} 
            value={productsPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={products.length}>All</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <motion.div 
                key={product.id} 
                className="border p-4 rounded-lg shadow hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={product.thumbnail} 
                  alt={product.title} 
                  width={500} 
                  height={500} 
                  className="w-full h-40 object-cover mb-2 rounded" 
                />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex list-none">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <li key={number} className="mx-1">
                  <button 
                    onClick={() => paginate(number)} 
                    className={`px-3 py-2 rounded ${number === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
