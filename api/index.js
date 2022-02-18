const app = require('express')();
const PORT = 8080;
const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Home route
app.get('/', (req,res) => {
    res.send('We are on home!')
})

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const stalkerRoute = require('./routes/stalker');
app.use('/stalker', stalkerRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!');
});

//Start listening to server
app.listen(
    PORT,
    () => console.log('Hell yeah')
)