'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTY0OTE3NDg0NywiZXhwIjoxNjQ5MjYxMjQ3fQ.Sj5kmPvkUM1WzoFdrJhByKa7kZokR60V79bVusrEPfc
     * }], {});
    */

    const data = [
      {
        name: 'Apoyo Escolar para el nivel Primario',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'El espacio de apoyo escolar es el corazon del area educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno. Los sabados tambien se realiza el taller para niños y niñas que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atencion especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller esta pensado para ayudar a los alumnos con el material que traen de la escuela, tambien tenemos una docente que les da clases de lengua y matematica con una planificacion propia que armamos en Monos para nivelar a los nños y que se vayan con mas herramientas a la escuela.',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Apoyo Escolar Nivel Secundaria',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'Del mismo modo que en primaria, este taller es el corazon del area secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años. Aqui los jovenes se presentan con el material que traen del colegio y una docente de la institucion y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio tambien es utilizado por los jovenes como un punto de encuentro y relacion entre ellos y la institucion.        ',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Tutorias',
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        content: 'Es un programa destinado a jovenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y contruir un proyecto de vida que da sentido al colegio. EL objetivo de esta propuesta es lograr la integracion escolar de niños y jovenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a traves de la articulacion de nuestras intervenciones conlas escuelas que las alojan, conlas familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan.',
        createdAt: new Date,
        updatedAt: new Date
      },
    ]

    await queryInterface.bulkInsert('Activities', data, {});
  },

  async down(/* queryInterface, Sequelize */) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
