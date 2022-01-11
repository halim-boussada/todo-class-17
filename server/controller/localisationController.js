const LocalisationService = require("../service/localisationService.js");

module.exports = {
  async getLocalisation(req, res, next) {
    try {
      var Localisation = await LocalisationService.get();
      res.send(Localisation);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async deleteByParams(req, res, next) {
    try {
      var Localisation = await LocalisationService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      console.log(req.body, req.params.id);
      var Localisation = await LocalisationService.update(
        req.params.id,
        req.body
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async create(req, res, next) {
    try {
      var Localisation = await LocalisationService.create(req.body);
      res.send({ msg: "inserted" });
    } catch (next) {
      console.log(next);
      res.status(401).json(next);
    }
  },
};
