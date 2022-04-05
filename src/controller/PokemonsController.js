import {
    treinadores
} from '../model/treinadores.js'

export const getIndex = async (req, res) => {
    try {
        const pokeTreinadores = await treinadores.findAll()
        res.status(200).render('index.ejs', {
            pokeTreinadores
        })
    } catch (err) {
        res.send(err.message)
    }

}

export const getDetalhes = async (req, res) => {
    try {
        const pokeTreinadores = await treinadores.findByPk(req.params.id)
        res.status(200).render('detalhes.ejs', {
            pokeTreinadores
        })
    } catch (err) {
        res.send(err.message)
    }

}

export const getDeletar = async (req, res) => {
    try {
        await treinadores.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect("/")
    } catch (err) {
        res.send(err.message)
    }
}

export const getCriar = (req, res) => {
    res.status(200).render('criar.ejs')
}

export const postCriar = async (req, res) => {
    try {
        const {
            nome,
            img,
            descricao,
        } = req.body
        await treinadores.create({
            nome,
            img,
            descricao,
        })
        res.status(200).redirect("/")

    } catch (err) {
        res.send(err.message)
    }


}

export const getEditar = async (req, res) => {
    const pokeTreinadores = await treinadores.findByPk(req.params.id)
    res.status(200).render('editar.ejs', {
        pokeTreinadores
    })
}

export const postEditar = async (req, res) => {
    const {
        nome,
        img,
        descricao,
    } = req.body

    try {
        await treinadores.update({
            nome: nome,
            img: img,
            descricao: descricao,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect("/") 
    } 
    catch (err) {
        res.status(500).send(err.message)
    }
}   