import {Fruit} from '../models/fruit.js'


function index(req, res) {
  Fruit.find({})
  .then( fruits => {
    res.render('fruits/index', {
      fruits: fruits
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newFruit(req, res) {
  res.render('fruits/new')
}

function create(req, res) {
  Fruit.create(req.body)
  .then(fruit => {
    console.log(fruit)
    res.redirect('/fruits')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/fruits')
  })
}

function show(req, res) {
  Fruit.findById(req.params.id)
  .then(fruit => {
    res.render('fruits/show', {
      fruit: fruit
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/fruits')
  })
}

export {
  index,
  newFruit as new,
  create,
  show,
}