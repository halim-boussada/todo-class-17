var Localisation = require("../model/localisation.js");

module.exports = new (class LocalisationService {
  create(data) {
    return Localisation.create(data);
  }
  get() {
    return Localisation.find();
  }
  delete(_id) {
    return Localisation.findOneAndDelete({ _id });
  }
  update(_id, data) {
    console.log({ data, _id });
    return Localisation.findOneAndUpdate({ _id }, data);
  }
})();
