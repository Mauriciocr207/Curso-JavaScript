import express from 'express';
import PaginasController from '../controllers/paginasController.js';
import TestimonialController from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', PaginasController.inicio);
router.get('/nosotros', PaginasController.nosotros);
router.get('/viajes', PaginasController.viajes);
router.get('/viajes/:viajeSlug', PaginasController.mostrarViaje);
router.get('/testimoniales', PaginasController.testimoniales);
router.post('/testimoniales', TestimonialController.guardar);

export default router;