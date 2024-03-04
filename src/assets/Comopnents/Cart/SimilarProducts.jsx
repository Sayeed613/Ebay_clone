import { useState, useEffect } from 'react';
import { BiLoader } from 'react-icons/bi'; // Importing BiLoader from react-icons
import Products from '../Product/Products';

export default function SimilarProducts() {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {

        const randomIndexes = getRandomIndexes(data.length, 4);
        const randomProducts = randomIndexes.map(index => data[index]);
        setSimilarProducts(randomProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching similar products:', error);
        setLoading(false);
      });
  }, []);

  // Function to generate random indexes
  const getRandomIndexes = (length, count) => {
    const indexes = new Set();
    while (indexes.size < count) {
      const index = Math.floor(Math.random() * length);
      indexes.add(index);
    }
    return Array.from(indexes);
  };

  return (
    <div>
      <div className="border-b py-1 max-w-[1200px] mx-auto" />
      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>
        {loading ? (
          <div className='flex items-center justify-center'>
            <BiLoader size={30} className="text-blue-400 animate-spin" />
            Loading Products ....
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {similarProducts.map(product => (
              <Products {...product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
