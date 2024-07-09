'use client'

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Search from '@/components/Search';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { IoMdHeartEmpty } from 'react-icons/io';

async function fetchShopData(shop_id) {
  const res = await fetch(`/api/shop/${shop_id}`);
  if (!res.ok) {
    throw new Error(`Error fetching shop data: ${res.statusText}`);
  }
  return res.json();
}

export default function AboutPage({ searchParams }) {
  const { shop_id } = searchParams;
  const [shop, setShop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getShopData() {
      try {
        const data = await fetchShopData(shop_id);
        setShop(data);
      } catch (err) {
        setError(err.message);
      }
    }

    if (shop_id) {
      getShopData();
    }
  }, [shop_id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!shop) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Search />
      <main className="detail_main">
        <div className="detail_top">
          <h1>{shop.title || '값이 없습니다'}</h1>
          <div className="save">
            <p><IoMdHeartEmpty />저장하기</p>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item-large">
            <img src={shop.image_urls && shop.image_urls[0] ? shop.image_urls[0] : '/img/default-image.jpg'} alt="이미지사진1" />
          </div>
          <div className="gallery">
            {shop.image_urls && shop.image_urls.length > 1 ? (
              shop.image_urls.slice(1).map((url, index) => (
                <div key={index} className="gallery-item">
                  <img src={url} alt={`이미지사진${index + 2}`} />
                </div>
              ))
            ) : (
              <p>이미지가 없습니다</p>
            )}
          </div>
        </div>
        <div className="detail_mid">
          <div className="detail_left">
            <div className="detail_title">
              <img src="/img/location.png" alt="프로필이미지" />
              <p>{shop.addresses || '주소가 없습니다'}</p>
            </div>
            <div className="detail_info">
              <h2>운영시간</h2>
              <div className="profile2">
                {shop.operating_hours ? (
                  Object.entries(shop.operating_hours).map(([day, hours]) => (
                    <p key={day}>{day}: {hours}</p>
                  ))
                ) : (
                  <p>운영시간 정보가 없습니다</p>
                )}
              </div>
            </div>
            <div className="details">
              <h2>편의시설 및 서비스</h2>
              {shop.facilities && shop.facilities.length > 0 ? (
                shop.facilities.map((facility, index) => (
                  <div key={index} className="detail_info2">
                    <div className="info2_icon">
                      <img src="/img/check.png" alt="프로필이미지" />
                    </div>
                    <div className="info2">
                      <h3>{facility}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p>편의시설 정보가 없습니다</p>
              )}
            </div>
            <div className="info_text">
              <h3>소개</h3>
              <pre>{shop.introduction || '소개 정보가 없습니다'}</pre>
            </div>
            <div className="info_place">
              <h2>기본가격</h2>
              {shop.price_info ? (
                Object.entries(shop.price_info).map(([category, items]) => (
                  <div key={category} className="place">
                    <section>
                      <h3>{category}</h3>
                      {items.map((item, index) => (
                        <div key={index}>
                          <p>{item.name}</p>
                          <span><em>{item.price}</em></span>
                        </div>
                      ))}
                    </section>
                  </div>
                ))
              ) : (
                <p>가격 정보가 없습니다</p>
              )}
            </div>
          </div>
          <div className="detail_right">
            <div className="detail__review">
              <Link href="/write" className="wirte-button_a">
                <button type="submit" className="review-button">
                  리뷰 작성
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="map">
          <h2>숙소 위치</h2>
          <img src="/img/map.jpg" alt="위치 지도" />
        </div>
      </main>
      <Footer />
    </>
  );
}
