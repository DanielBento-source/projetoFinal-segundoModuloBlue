import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const port = 3002
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const __dirname = path.resolve(path.dirname(""))

app.use(routes)
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))


app.listen(port, (req,res) => {
    console.log(`rodando na porta ${port}`)
})
