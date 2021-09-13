const { HttpCode } = require("../helpers/constants");
const {
  addHero,
  getOneHero,
  listHeros,
  updateHero,
  removeHero,
} = require("../services/heroServices");

const getAllHerosControler = async (req, res, next) => {
  try {
    const superheros = await listHeros();
    res.json({
      status: "success",
      code: HttpCode.OK,
      superheros,
    });
  } catch (error) {
    next(error);
  }
};

const getOneHeroControler = async (req, res, next) => {
  try {
    const superhero = await getOneHero(req.params.id);
    if (superhero) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        superhero,
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found Superhero",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createHeroControler = async (req, res, next) => {
  try {
    const superhero = await addHero(req.body);
    res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      superhero,
    });
  } catch (error) {
    next(error);
  }
};

const updateHeroControler = async (req, res, next) => {
  try {
    const superhero = await updateHero(req.params.id, req.body);
    if (superhero) {
      return res.json({
        status: "success",
        code: HttpCode.OK,
        superhero,
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found Superhero",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const removeHeroControler = async (req, res, next) => {
  try {
    const data = await removeHero(req.params.id);
    if (data) {
      return res.json({
        status: HttpCode.OK,
        message: "Superhero deleted",
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: "Not found Superhero",
        data: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHeroControler,
  getAllHerosControler,
  getOneHeroControler,
  removeHeroControler,
  updateHeroControler,
};
