module.exports = function(sequelize, DataTypes) {
    const Behavdata = sequelize.define("Behavdata", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        behavInfo: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
    });

    Behavdata.associate = function(models) {
        Behavdata.belongsTo(models.Behavior, {
            foreignKey: {
            allowNull: false
            }
        });
    };
    
    return Behavdata;
};