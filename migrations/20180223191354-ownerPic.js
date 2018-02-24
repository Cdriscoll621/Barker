'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('ownerPic', { 
    id: {type: Sequelized.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    }, 
    owner_id: {type: Sequelized.INT,
        allowNull: false,
        REFERENCES: {model: USER,
                      key: id}
    }, 
    pic_name: {type: Sequelized.STRING(50)
    },
    pic_ref: {type: Sequelized.STRING (50)
    },/*  -- for future use to store CDN reference */
    pic: {type: Sequelized.BLOB
    }, /* -- pic storage in database */
   });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
