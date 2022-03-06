const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getUser(req, res);
        }

        case 'POST': {
            return addUser(req, res);
        }

        case 'PUT': {
            return updateUser(req, res);
        }

        case 'DELETE': {
            return deleteUser(req, res);
        }
    }
}

// Getting all posts.
async function getUser(req, res) {
    try {
        let { db } = await connectToDatabase();
        let posts = await db
            .collection('info')
            .find({})
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(req.body)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Adding a new post
async function addUser(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('info').insertOne(req.body);
        return res.json({
            message: 'User added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Updating a post
async function updateUser(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('info').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'User updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// deleting a post
async function deleteUser(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('info').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'User deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}