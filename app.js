import express from 'express';
import hb from 'hbs';
import {fileURLToPath} from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static('public'));

app.get('/', (res, req) => res.send('API OK'));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}, http://localhost:${PORT}`));
