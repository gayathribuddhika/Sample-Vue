const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();

//get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//add posts
//delete posts

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('test').collection('posts');
}

module.exports = router;
