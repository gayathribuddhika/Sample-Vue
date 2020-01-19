const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const morgan = require ('morgan');

const app = express();

//middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//const posts = require('./routes/api/posts');

//app.use('/api/posts', posts);
app.post('/register',(req, res) => {
    res.send({
        message:`Hello ${req.body.email}! Successfully Registered.Have fun`
    })
}) 


app.listen(process.env.PORT || 8081);