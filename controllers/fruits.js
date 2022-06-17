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
  res.render
  ('fruits/new')
}

function create(req, res) {
  console.log(req.body)
  Fruit.create(req.body)
  .then(fruit => {
    res.redirect('/fruits')
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
}