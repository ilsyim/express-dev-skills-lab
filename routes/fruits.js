import { Router } from 'express'
import * as fruitsCtrl from '../controllers/fruits.js'

const router = Router()

router.get('/', fruitsCtrl.index)

router.get('/new', fruitsCtrl.new)

router.get('/:id', fruitsCtrl.show)

router.post('/', fruitsCtrl.create)

export {
  router
}