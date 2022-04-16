const newsRepository = require('../repositories/news');

const remove = async (req) => {
	const { id } = req.params;
	const newToRemove = await newsRepository.getById(id);
	if (!newToRemove) throw new Error('Esa id no existe en la BD!');
	return await newsRepository.remove(id);
};

const getAll = () => {
	return newsRepository.getAll();
};

const create = ({ body }) => {
	body.type = 'news';
	return newsRepository.create(body);
};

module.exports = {
	getAll,
	create,
	remove
};
