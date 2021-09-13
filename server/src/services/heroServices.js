const Superhero = require("../schemas/heroSchema");

const listHeros = async () => {
  const results = await Superhero.find({});

  return results;
};

const getOneHero = async (id) => {
  const result = await Superhero.findById(id);
  return result;
};

const addHero = async (body) => {
  const results = await Superhero.create({ ...body });

  return results;
};

const updateHero = async (id, body) => {
  const results = await Superhero.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  );
  return results;
};

const removeHero = async (id) => {
  const results = await Superhero.findByIdAndRemove(id);
  return results;
};

module.exports = {
  addHero,
  getOneHero,
  listHeros,
  updateHero,
  removeHero,
};
