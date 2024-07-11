"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GoStar } from "react-icons/go";
import { BsChatSquareText } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

function ShopListComponent() {
  const [shops, setShops] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const address = searchParams.get("address") || "";
  const loadMoreRef = useRef();
  const observer = useRef();

  const fetchShops = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/shop_list?page=${page}&limit=20&address=${address}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.length < 20) {
        setHasMore(false);
      }
      setShops((prevShops) => [...prevShops, ...data]);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    setShops([]);
    setPage(1);
    setHasMore(true);
    fetchShops(1);
  }, [address]);
  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        fetchShops(newPage);
        return newPage;
      });
    }
  };
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {
            loadMore();
          }, 2000); // 2초 후에 로드
        }
      },
      { threshold: 1 }
    );
    if (loadMoreRef.current) observer.current.observe(loadMoreRef.current);
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, hasMore]);
  const copyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다!");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };
  return (
    <>
      <div className="list-container">
        <div className="ratelist">
          <GoStar />
          평점 높은 네일샵
        </div>
        <div className="list">
          {shops.slice(0, 6).map((shop) => (
            <div className="main__list" key={`${shop._id}-rating`}>
              <Link href={`/about?shop_id=${shop._id}`}>
                <div className="list_item">
                  <img
                    className="list_image"
                    src={shop.image_urls[0]}
                    alt={shop.title}
                  />
                  <div
                    className="svg-box"
                    onClick={(e) => {
                      e.preventDefault();
                      copyLink(`http://localhost:3000/about?shop_id=${shop._id}`);
                    }}
                  >
                    <FaLink className="Link-svg" />
                  </div>
                  <div className="list_text">
                    <span className="list_title">{shop.title}</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
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
          {shops.slice(0, 6).map((shop, i) => (
            <div className="main__list" key={i}>
              <Link href={`/about?shop_id=${shop._id}`}>
                <div className="list_item">
                  <img
                    className="list_image"
                    src={shop.image_urls[0]}
                    alt={shop.title}
                  />
                  <div
                    className="svg-box"
                    onClick={(e) => {
                      e.preventDefault();
                      copyLink(`http://localhost:3000/about?shop_id=${shop._id}`);
                    }}
                  >
                    <FaLink className="Link-svg" />
                  </div>
                  <div className="list_text">
                    <span className="list_title">{shop.title}</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
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
        <div id="last-list" className="list">
          {shops.map((shop, i) => (
            <div className="main__list" key={i}>
              <Link href={`/about?shop_id=${shop._id}`}>
                <div className="list_item">
                  <img
                    className="list_image"
                    src={shop.image_urls[0]}
                    alt={shop.title}
                  />
                  <div
                    className="svg-box"
                    onClick={(e) => {
                      e.preventDefault();
                      copyLink(`http://localhost:3000/about?shop_id=${shop._id}`);
                    }}
                  >
                    <FaLink className="Link-svg" />
                  </div>
                  <div className="list_text">
                    <span className="list_title">{shop.title}</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="load-more">
            <button onClick={loadMore} disabled={loading}>
              {loading ? "로딩 중..." : "더보기"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default function List() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopListComponent />
    </Suspense>
  );
}