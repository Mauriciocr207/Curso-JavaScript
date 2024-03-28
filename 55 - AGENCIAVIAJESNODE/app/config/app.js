import express from 'express';
import router from "../routes/router.js";
import sequelize from "../db/init.js";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.port || 4000;

app.set('view engine', 'pug');
app.set('views', path.resolve('./app/views'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next) => {
    const date = new Date();
    res.locals.actualYear = date.getFullYear();
    res.locals.siteName = "Agencia de viajes";
    next();
})
app.use('/', router);
app.listen(port, () => {
    console.log(`Server opened on ${port}`);
    sequelize.sync()
        .then(() => console.log('Database synchronized succesfully'))
        .catch(err => console.log(err));
});