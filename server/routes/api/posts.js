const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();


//get posts
router.get('/', async (req, res) => {
    
    const posts = await loadPostsCollection()
    res.send(await posts.find({}).toArray())
    
});

//add posts
router.post('/', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createAt: new Date()
    });
    res.sendStatus(201).send();
});

//delete posts

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://gayathri_123:gayathri123@cluster0-gfcor.mongodb.net/test', {
        useNewUrlParser: true
    });
    return client.db('sample_vue').collection('posts');
}
module.exports = router;