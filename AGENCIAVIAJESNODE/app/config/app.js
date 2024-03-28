import express from 'express';
import router from "../routes/router.js";
import sequelize from "../db/init.js";
import path from 'path';
import dotenv from 'dotenv';
import { copyFileSync } from 'fs';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

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
const server = app.listen(port, () => {
    console.log(`Server opened on ${port}`);
    sequelize.sync()
        .then(() => console.log('Database synchronized succesfully'))
        .catch(err => console.log(err));
});
server.on('close', () => {
    
})
process.on('SIGINT', () => {
    console.log('Cerrando el servidor Express...');
    server.close(() => {
      console.log('Servidor Express cerrado');
      app.emit('close'); // Emitir el evento 'close' para cerrar la conexión a la base de datos
      process.exit(0);
    });
  });