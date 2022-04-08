const slideRepository = require('../repositories/slides');

const create = async (req) => {

  let imageUrl = req.body.imageUrl;

  /* 
      Envio al servidor s3...
  */

  const slide = {
    ...req.body
  };
  slide.imageUrl = imageUrl; //cambiar por el link que retorne aws luego de la subida del archivos

  const result = await slideRepository.create(slide);
  return result;
}

const getAll = async (req) => {
  const result = await slideRepository.getAll();
  return result;
}

module.exports = {
  create,
  getAll
};
