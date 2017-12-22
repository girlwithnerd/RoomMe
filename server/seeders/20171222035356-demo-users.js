'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      password: 'test',
      birthdate: new Date(),
      bio: 'I am a new user to this application',
      location: '20871',
      radius: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [{
      firstName: 'John'
    }])
  }
};
