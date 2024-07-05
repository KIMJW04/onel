import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
    const { shop_id } = params;

    // Ensure shop_id is a valid ObjectId
    if (!ObjectId.isValid(shop_id)) {
        return new Response(JSON.stringify({ error: 'Invalid shop ID format' }), {
            status: 400,
        });
    }

    const client = await clientPromise;
    const db = client.db('onel-list');

    let shop;
    try {
        shop = await db.collection('nailshops').findOne({ _id: new ObjectId(shop_id) });
    } catch (error) {
        console.error("Database error:", error);
        return new Response(JSON.stringify({ error: 'Database error' }), {
            status: 500,
        });
    }

    if (!shop) {
        return new Response(JSON.stringify({ error: `Shop with ID ${shop_id} not found` }), {
            status: 404,
        });
    }

    return new Response(JSON.stringify(shop), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
