const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();

//get posts
router.get('/', (req, res) => {
    res.send('Hello');
});

//add posts

//delete posts

async function loadPOstsCollection(){
    const client = await mongodb.MongoClientconnect('mongodb+srv://gayathri_123:gayathri123@cluster0-gfcor.mongodb.net/test', {
        useNewUrlParser: true
    })
}
module.exports = router;