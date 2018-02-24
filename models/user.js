module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    id: {type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    user_login: {type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: true
        }  
    },
    user_passwd: {type: DataTypes.STRING(50),
        allowNull: false,
    },
    fname: {type: DataTypes.STRING,
        aloowNull:true,
    },
    lname: {type: DataTypes.STRING,
        allowNull:true
    },
    addr1: {type: DataTypes.STRING,
        allowNull: true
    },
    addr2: {type: DataTypes.STRING,
        allowNull: true
    },
    city: {type: DataTypes.STRING(25),
        allowNull: true
    },
    state: {type: DataTypes.STRING(2),
        allowNull: true
    },
    zip: {type: DataTypes.STRING(10),
        allowNull: true
    },
    owner_profile: {type: DataTypes.STRING,
        allowNull: true
    }, 
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    
  });
  return user;
};