import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import Header from '@/components/Header';
import Search from '@/components/Search';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { IoMdHeartEmpty } from 'react-icons/io';

async function getShopData(shop_id) {
  const client = await clientPromise;
  const db = client.db('sample_db');

  let shop;
  try {
    shop = await db.collection('nailshops').findOne({ _id: new ObjectId(shop_id) });
  } catch (error) {
    console.error("Invalid ObjectId format or database error:", error);
    return null;
  }

  return shop;
}

export default async function AboutPage({ searchParams }) {
  const { shop_id } = searchParams;

  // Ensure shop_id is a valid ObjectId
  if (!ObjectId.isValid(shop_id)) {
    console.error("Invalid ObjectId format");
    return <div>Invalid shop ID format.</div>;
  }

  const shop = await getShopData(shop_id);

  if (!shop) {
    return <div>Shop with ID {shop_id} not found.</div>;
  }

  return (
    <>
      <Header />
      <Search />
      <main className="detail_main">
        <div className="detail_top">
          <h1>{shop.title}</h1>
          <div className="save">
            <p><IoMdHeartEmpty />저장하기</p>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item-large">
            <img
              src={shop.image_urls[0]}
              alt="이미지사진1"
            />
          </div>
          <div className="gallery">
            {shop.image_urls.slice(1).map((url, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={url}
                  alt={`이미지사진${index + 2}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="detail_mid">
          <div className="detail_left">
            <div className="detail_title">
              <img src="/img/location.png" alt="프로필이미지" />
              <p>{shop.addresses}</p>
            </div>

            <div className="detail_info">
              <h2>운영시간</h2>
              <div className="profile2">
                {Object.entries(shop.operating_hours).map(([day, hours]) => (
                  <p key={day}>{day}: {hours}</p>
                ))}
              </div>
            </div>

            <div className="details">
              <h2>편의시설 및 서비스</h2>
              {shop.facilities.map((facility, index) => (
                <div key={index} className="detail_info2">
                  <div className="info2_icon">
                    <img src="/img/check.png" alt="프로필이미지" />
                  </div>
                  <div className="info2">
                    <h3>{facility}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="info_text">
              <h3>소개</h3>
              <p>{shop.introduction}</p>
            </div>

            <div className="info_place">
              <h2>기본가격</h2>
              {Object.entries(shop.price_info).map(([category, price], index) => (
                <div key={index} className="place">
                  <section>
                    <h3>{category}</h3>
                    <p>{price.description}</p>
                    <span>
                      <em>{price.amount}원</em>
                    </span>
                  </section>
                </div>
              ))}
            </div>
          </div>

          <div className="detail_right">
            <div className="detail__review">
              {/* 리뷰 섹션은 데이터 형식에 맞게 추가 */}
              <Link href={"/write"} className="wirte-button_a">
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
