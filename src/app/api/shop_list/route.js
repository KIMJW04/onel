import clientPromise from "@/lib/mongodb";
import { CITY_MAP } from "@/constants/index";

export async function GET(req) {
  // 환경 변수 확인
  if (!process.env.MONGODB_URI) {
    return new Response(JSON.stringify({ error: "Environment variable not set" }), {
      status: 500, // 상태 코드를 500으로 설정하여 환경 변수가 설정되지 않았음을 명확히 함
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log("Environment Variable TEST:", process.env.MONGODB_URI); // 환경 변수 출력

  const { searchParams } = new URL(req.url);
  const cityKey = searchParams.get("address");
  const city = CITY_MAP[cityKey];
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);

  try {
    const client = await clientPromise;
    const db = client.db("onel-list"); // 여기에 실제 MongoDB 데이터베이스 이름을 입력하세요.

    let query = {};
    if (city) {
      if (Array.isArray(city)) {
        query = { addresses: { $in: city.map((c) => new RegExp(c, "i")) } }; // 대소문자 구분 없음
      } else {
        query = { addresses: new RegExp(city, "i") }; // 대소문자 구분 없음
      }
    }

    let shops;
    if (Object.keys(query).length === 0) {
      // 전체 리스트를 랜덤하게 가져오기
      shops = await db
        .collection("nailshops")
        .aggregate([
          { $sample: { size: limit } },
          {
            $project: {
              _id: 1,
              shop_id: 1,
              title: 1,
              image_urls: 1,
              addresses: 1,
            },
          },
        ])
        .toArray();
    } else {
      // 특정 도시 리스트를 가져오기
      shops = await db
        .collection("nailshops")
        .find(query, {
          projection: {
            _id: 1,
            shop_id: 1,
            title: 1,
            image_urls: 1,
            addresses: 1,
          },
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();
    }

    return new Response(JSON.stringify(shops), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
