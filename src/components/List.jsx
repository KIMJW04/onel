import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GoStar } from 'react-icons/go';
import { BsChatSquareText } from 'react-icons/bs';
import { BsShop } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function List() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch('/api/shop_list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setShops(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <>
      <div className="ratelist">
        <GoStar />
        평점 높은 네일샵
      </div>
      <div className="list">
        {shops.map(shop => (
          <div className="main__list" key={shop._id}>
            <Link href={`/about?shop_id=${shop._id}`}>
              <div className="list_item">
                <img className="list_image" src={shop.image_urls[0]} alt={shop.title} />
                <div className="list_text">
                  <span className="list_title">{shop.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="reviewlist">
        <BsChatSquareText />
        리뷰 많은 네일샵
      </div>
      <div className="list">
        {shops.map(shop => (
          <div className="main__list" key={shop._id}>
            <Link href={`/about?shop_id=${shop._id}`}>
              <div className="list_item">
                <img className="list_image" src={shop.image_urls[0]} alt={shop.title} />
                <div className="list_text">
                  <span className="list_title">{shop.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="allist">
        <BsShop />
        네일샵 전체 보기
      </div>
      <div className="list">
        {shops.map(shop => (
          <div className="main__list" key={shop._id}>
            <Link href={`/about?shop_id=${shop._id}`}>
              <div className="list_item">
                <img className="list_image" src={shop.image_urls[0]} alt={shop.title} />
                <div className="list_text">
                  <span className="list_title">{shop.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
