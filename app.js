var express = require('express');
var app = express();
require('dotenv').config();

const sequelize = require('./db/conection');


app.use(express.json())

app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

async function serverStart() {
    try {
        await sequelize.authenticate();
        console.log('Correct conexion');
        app.listen(process.env.PORT, () => {
            console.log(`Sistem start http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('DB conexion error:', error);
    }
}

serverStart();