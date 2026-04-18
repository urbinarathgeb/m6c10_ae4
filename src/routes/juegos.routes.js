import {Router} from 'express';
import data from '../data/data.json' with {type: 'json'};

const router = Router();

router.get('/', (req, res) => {
	const featuredGames = data.filter(juego => juego.isFeatured);
	res.render('index', {games: featuredGames});
});

router.get('/games', (req, res) => res.render('games', {games: data})
)

router.get('/games/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const game = data.find(game => game.id === id);

	if(!game) return res.status(404).send('Juego no encontrado');

	console.log(game)
	res.render('game', {game})
})

export default router;