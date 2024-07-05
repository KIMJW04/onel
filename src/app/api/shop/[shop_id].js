import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
    const { shop_id } = req.query;
    const client = await clientPromise;
    const db = client.db('sample_db');
    const shop = await db.collection('nailshops').findOne({ shop_id: new ObjectId(shop_id) });

    if (!shop) {
        res.status(404).json({ message: 'Shop not found' });
        return;
    }

    res.status(200).json(shop);
}
