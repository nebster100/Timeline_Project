module.exports = function(sequelize, DataTypes) {
	return sequelize.define('timelineObject', {
		timelineName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 7]
			}
		},
		description: {
			type: DataTypes.STRING(2000),
			allowNull: false
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			isUrl: true 
      		}
		},
		img: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};