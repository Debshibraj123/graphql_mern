const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config;
const connectDB = require('./config/db')
const schema = require('./schema/schema');
const cors = require('cors')
const port =  5000;

const app = express();

connectDB()
app.use(cors())

app.use('/graphql',
        graphqlHTTP({
           schema,
           graphiql: true
    })
);


app.listen(port, console.log(`Server running on port ${port}`))
