import { Router } from "express";
import data from '../data/data.json' with { type: 'json' };

const router = Router();

router.get('/', (req, res) => {
	res.render('index', { juegos: data });
});

export default router;