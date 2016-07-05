module.exports = function(sequelize, DataTypes) {
	return sequelize.define('timelineObject', {
		timelineName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		startYear: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,4]
			},
			allowNull: false
		},
		endYear: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,4]
			},
			allowNull: true
		},
		startMonth: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2],
				min: 1,
				max: 12
			},
			allowNull: true
		},
		endMonth: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2],
				min: 1,
				max: 12
			},
			allowNull: true
		},
		startDay: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2],
				min: 1,
				max: 31
			},
			allowNull: true
		},
		endDay: {
			type: DataTypes.INTEGER,
			validate: {
				len: [1,2],
				min: 1,
				max: 31
			},
			allowNull: true
		},
		nameTitle: {
			type: DataTypes.STRING,
			allowNull: false

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