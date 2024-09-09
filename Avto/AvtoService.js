import Avto from './Avto.js';

class AvtoService {
  async create(avto) {
    const createdAvto = await Avto.create(avto);
    return createdAvto;
  }

  async getAll() {
    const cars = await Avto.find();
    return cars;
  }

  async getAllByBrand(brand) {
    if (!brand) {
      throw new Error('не указан brand');
    }
    const ByBrand = await Avto.find({ brand });
    return ByBrand;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const avto = await Avto.findById(id);
    return avto;
  }

  async update(avto) {
    // eslint-disable-next-line no-underscore-dangle
    if (!avto._id) {
      throw new Error('не указан ID');
    }
    // eslint-disable-next-line no-underscore-dangle
    const updateAvto = await Avto.findByIdAndUpdate(avto._id, avto, { new: true });
    return updateAvto;
  }

  async delete(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const avto = await Avto.findByIdAndDelete(id);
    return avto;
  }
}
export default new AvtoService();
