const slideRepository = require('../repositories/slides');
const { NotFound, Forbidden } = require("../utils/status")
const { throwError } = require('../utils/errorHandler');

const create = async (req)  => {

    let imageUrl = req.body.imageUrl;

    /*
        Envio al servidor s3...
    */

    const slide = { ...req.body };
    slide.imageUrl = imageUrl;//cambiar por el link que retorne aws luego de la subida del archivos

    const result = await slideRepository.create(slide);
    return result;
}

const getById = async (slideId) => {
  const slide = await slideRepository.getById(slideId);

  if(!slide){
    const error = new Error("Slide not founde");
    error.status = NotFound
    throw error
  }

  return slide;
}

const updateSlide = async (id, body) => {
  const slide = await slideRepository.getById({ where: { slideId : id } });

  if (slide) {
    const newSlide = await slideRepository.update(body);

    if (!newSlide) {
      throwError('Bad Request', Forbidden);
    }

    return newSlide;

  } else {
    throwError('Record not found', NotFound);
  };
}

module.exports = { create, getById, updateSlide };
