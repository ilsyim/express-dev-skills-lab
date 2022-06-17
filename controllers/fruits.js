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

export {
  index,
  newFruit as new,
}