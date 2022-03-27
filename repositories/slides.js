const { Slides } = require('../models')

const create = async (slide) => {
    let result = await Slides.create(slide);
    return result;
}

module.exports = { create };

