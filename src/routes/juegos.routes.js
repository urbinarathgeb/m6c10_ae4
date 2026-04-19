import {Router} from 'express';
import data from '../data/data.json' with {type: 'json'};

const router = Router();

router.get('/', (req, res) => {
	const featuredGames = data.filter(juego => juego.isFeatured);
	res.render('index', {
		title: 'Juegos destacados',
		description: 'Descubre tu próxima aventura épica entre nuestra selección de juegos',
		games: featuredGames
	});
});

router.get('/games', (req, res) => res.render('games', {
		title: 'Todos los juegos',
		games: data
	})
);

router.get('/games/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const game = data.find(game => game.id === id);

	if (!game) return res.status(404).send('Juego no encontrado');

	res.render('gameDetail', {game})
});

router.get('/contact', (req, res) => {
	res.render('contact', {
		title: 'Contacto',
		message: 'Puedes contactarnos enviando un correo a contacto@gamevibe.com'
	});
});

router.get('/about', (req, res) => {

	res.render('about', {
		title: 'Sobre el proyecto',
		name: 'Javier Urbina',
		description: 'Este es un proyecto de aprendizaje del Bootcamp Fullstack JavaScrip de Talento Digital, correspondiente a la AE4 de la clase número 10 del módulo 6: Desarrollo de aplicaciones web Node Express. '
	});
})

export default router;