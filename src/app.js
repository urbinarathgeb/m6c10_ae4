import express from 'express';
import hbs from 'hbs';
import {fileURLToPath} from 'url';
import path from 'path';
import juegosRoutes from './routes/juegos.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', juegosRoutes);


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}, http://localhost:${PORT}`));
