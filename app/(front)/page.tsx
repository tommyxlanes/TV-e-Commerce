import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import Image from 'next/image';

import Scrollable from '@/components/Scrollable';
import Scroll from '@/components/Scroll';

export default function Home() {
  return (
    <>
      <Scroll />
      {/* <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          data.products.map(product => (
            <ProductItem key={product.slug} product={product} />
          ))
        }
      </div> */}
    </>
  );
}
