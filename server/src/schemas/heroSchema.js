const { Schema, model } = require("mongoose");

const SuperheroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: [true, "Nickname​ is required."],
    },
    real_name: {
      type: String,
      required: [true, "Real name is required."],
    },
    origin_description: {
      type: String,
      required: [true, "Origin description is required."],
    },
    superpowers: {
      type: String,
      required: [true, "Superpowers is required."],
    },
    catch_phrase: {
      type: String,
      required: [true, "Catch phrase is required."],
    },
  },
  { versionKey: false, timestamps: true }
);

const Superhero = model("Superhero", SuperheroSchema);

module.exports = Superhero;
