'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.creatTable('user',{
    id: {type: Sequelized.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    user_login: {type: Sequelized.STRING,
        allowNull: false
    },
    user_passwd: {type: Sequelized.STRING(50),
        allowNull: false,
    },
    fname: {type: Sequelized.STRING,
        aloowNull:true,
    },
    lname: {type: Sequelized.STRING,
        allowNull:true
    },
    addr1: {type: Sequelized.STRING,
        allowNull: true
    },
    addr2: {type: Sequelized.STRING,
        allowNull: true
    },
    city: {type: Sequelized.STRING(25),
        allowNull: true
    },
    state: {type: Sequelized.STRING(2),
        allowNull: true
    },
    zip: {type: Sequelized.STRING(10),
        allowNull: true
    },
    owner_profile: {type: Sequelized.STRING,
        allowNull: true
    } 
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
