import clientPromise from '@/lib/mongodb';

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db('onel-list'); // 여기에 실제 MongoDB 데이터베이스 이름을 입력하세요.
        const shops = await db.collection('nailshops').find({}, { projection: { shop_id: 1, title: 1, image_urls: 1 } }).toArray();

        return new Response(JSON.stringify(shops), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
