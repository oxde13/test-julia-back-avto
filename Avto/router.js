import Router from 'express';
import AvtoController from './AvtoController.js';

const router = new Router();

router.post('/avto', AvtoController.create);
router.get('/avto', AvtoController.getAll);
router.get('/avto/by-brand/:brand', AvtoController.getAllByBrand);
router.get('/avto/:id', AvtoController.getOne);
router.put('/avto', AvtoController.update);
router.delete('/avto/:id', AvtoController.delete);

export default router;
