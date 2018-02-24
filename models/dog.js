module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
id: {type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    owner_id: {type: Sequelize.INTEGER,
        allowNull: false,
        REFERENCES: {model: "user",
                        key: "id"}
    },
    dog_name: {type: Sequelize.STRING,
        allowNull: false
    },
    breed: {type: Sequelize.STRING,
        allowNull: true
    },
    sex: {type: Sequelize.STRING,
        allowNull: false
    },
    age: {type: Sequelize.DATEONLY, 
        allowNull: false
    },
    dog_weight: {type: Sequelize.INTEGER,
        allowNull: false,
    },
    demeanor: {type: Sequelize.STRING,
        allowNull: false
    },
    energylvl: {type: Sequelize.STRING,
        allowNull:false
    },
    size: {type: Sequelize.STRING, /* sm, md, lg, xl */
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });
  return Dog;
};