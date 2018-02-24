module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    id: {type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    user_login: {type: Sequelize.STRING,
        allowNull: false,
        validate: {isEmail: true
        }  
    },
    user_passwd: {type: Sequelize.STRING(50),
        allowNull: false,
    },
    fname: {type: Sequelize.STRING,
        aloowNull:true,
    },
    lname: {type: Sequelize.STRING,
        allowNull:true
    },
    addr1: {type: Sequelize.STRING,
        allowNull: true
    },
    addr2: {type: Sequelize.STRING,
        allowNull: true
    },
    city: {type: Sequelize.STRING(25),
        allowNull: true
    },
    state: {type: Sequelize.STRING(2),
        allowNull: true
    },
    zip: {type: Sequelize.STRING(10),
        allowNull: true
    },
    owner_profile: {type: Sequelize.STRING,
        allowNull: true
    }, 
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    }
  });
  return Dog;
};