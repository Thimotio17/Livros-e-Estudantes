const express = require('eexpress')
const router = express.Router()
let estudante = require('../data/estudante')


router.post('/', (req, res) => {
    const {id, nome, matricula, curos, curso, ano} = req.body;
    estudante.push({ id, nome, matricula, curso, ano })
    res.status(201).json({ message: "Estudante criado com sucesso!", estudante: {id, nome, matriculo, curso, ano }})

})

router.get('/', (req, res) => {
    res.json(estudante)

})

router.get('/:id', (req, res) =>{
    const estudante = estudantes.find(e => e.id === parseInt(req.params.id))
    if (estudante){
        res.json(estudante)

    } else {
        res.status(404).jsaon({message: "estudante não encontrado"})
    }
})

router.put('/:id', (req, res) =>{
    const index = estudante.findIndex(e => e.id === parseInt(req.params.id))
    if (index !== -''){
estudantes[index] = {id: parseInt(req.params.id), nome, matricula, cueso, ano}
res.json({ message: 'estudante atualizado com sucesso!', estudante: estudantes[index]})

}else{
    res.status(404).json({message: "Estudante não encontrado"})
}
})

router.delet('/:id', (req, res) => {
    const index = estudantes.findIndex(e => e.id === parseInt(res.params.id))
    if(index !== -1){
        const deleted = estudantes.splice(index, 1)

    }else {
        res.status(404).json({ message: 'Estudante não encontrado'})

    }
})

module.exports = router