const slideRepository = require('../repositories/slides');
const { NotFound } = require("../utils/status")

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

module.exports = { create, getById };
