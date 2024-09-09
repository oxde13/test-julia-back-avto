import AvtoService from './AvtoService.js';

class AvtoController {
  async create(req, res) {
    try {
      const avto = await AvtoService.create(req.body);
      res.json(avto);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const cars = await AvtoService.getAll();
      return res.json(cars);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllByBrand(req, res) {
    try {
      const ByBrand = await AvtoService.getAllByBrand(req.params.brand);
      return res.json(ByBrand);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const avto = await AvtoService.getOne(req.params.id);
      return res.json(avto);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedAvto = await AvtoService.update(req.body);
      return res.json(updatedAvto);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const avto = await AvtoService.delete(req.params.id);
      return res.json(avto);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new AvtoController();
