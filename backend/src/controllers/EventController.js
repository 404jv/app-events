const Event =  require('../model/Event');

/* index: listar, store: criar, update: atualizar, destroy: deletar, show: listar 1 */

module.exports = {
  async index(req, res) {
    const eventos = await Event.find();
  
    return res.json(eventos);
  },

  async store(req, res) {
    const { title, description, date } = req.body;

    const event = await Event.create({
      title,
      description,
      date
    });

    return res.json(event);
  },

  async show(req, res) {
    const event = await Event.findById(req.params.id);

    return res.json(event);
  },

  async update(req, res) {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(event);
  },

  async destroy(req, res) {

    await Event.findByIdAndRemove(req.params.id);

    return res.json({});
  }
}
