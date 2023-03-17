const express = require('express');
const app = express();
const cors = require('cors');
const home = require('./routes/Homeroute')
const bollywood = require('./routes/Bollywoodroute');
const hollywood = require('./routes/Hollywoodroute');
const technology = require('./routes/Technologyroute');
const fitness = require('./routes/Fitnessroute');
const food = require('./routes/Foodroute');



app.use(cors());
app.use('/',home)
app.use("/",bollywood);
app.use("/",hollywood);
app.use("/",technology);
app.use("/",fitness);
app.use("/",food);

app.listen(5000, () => {
    console.log('server is running on 5000');
})