import Sequelize from 'sequelize'
import  {connection} from '../database/connection.js'

export const treinadores = connection.define(
    'treinadores',{
        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true, 
        },
        img:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        nome:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        descricao:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
       
    },{
        freezeTableName:true,
        createdAt: false,
        updatedAt:false,
        timestamps:false
    }
)

const initTable = async () => {
    await treinadores.sync()
}

initTable()