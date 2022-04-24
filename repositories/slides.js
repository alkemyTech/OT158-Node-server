const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);
};
const remove = async (slideId) => {
  return await Slides.destroy({ where: { id: slideId } });
};

const getById = async (slideId) => {
  return await Slides.findByPk(slideId);
};

const getAll = async () => {
  return await Slides.findAll({
    attributes: ['order', 'imageUrl'],
  });
};

const slidesForOrg= async (organization_id=1)=>{
  return Slides.findAll({
    order:[
      ['order','DESC']
    ],
    where:{
      organization_id
    }
  });
}

const update = async (id, body) => {
  return await Slides.update(body, {where: {id:id}});
}

module.exports = { create, getById, getAll, update, remove , slidesForOrg };
