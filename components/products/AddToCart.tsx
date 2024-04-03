'use client';

import { useEffect, useState } from 'react';
import { OrderItem } from '@/lib/models/OrderModal';
import { useRouter } from 'next/navigation';
import useCartService from '@/lib/hooks/useCartStore';

type Props = {
  item: OrderItem;
};

export const AddToCart = ({ item }: Props) => {
  const router = useRouter();
  const { items, increase } = useCartService();
  const [existItem, setexistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setexistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
  };

  return existItem ? (
    <div>
      <button className="btn" type="button">
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      type="button"
      onClick={addToCartHandler}
      className="btn btn-primary w-full">
      Add to cart
    </button>
  );
};
