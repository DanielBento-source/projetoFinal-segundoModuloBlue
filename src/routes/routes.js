import express from 'express'
import { 
    getIndex, 
    getDetalhes,
    getDeletar, 
    getCriar,
    postCriar,
    getEditar,
    postEditar } from '../controller/PokemonsController.js'

export const routes = express.Router()

routes.get("/",getIndex)
routes.get("/detalhes/:id",getDetalhes)
routes.get("/deletar/:id",getDeletar)

routes.get("/criar", getCriar)
routes.post("/criar", postCriar)

routes.get("/editar/:id", getEditar)
routes.post("/editar/:id", postEditar)