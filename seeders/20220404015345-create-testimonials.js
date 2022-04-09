'use strict';

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Testimonials',
			[
				{
					name: 'Testimonial 1',
					image:
						'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586',
					content: 'blah 1',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Testimonial 2',
					image:
						'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586',
					content: 'blah 2',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Testimonial 3',
					image:
						'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586',
					content: 'blah 3',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Testimonials', null, {});
	}
};
