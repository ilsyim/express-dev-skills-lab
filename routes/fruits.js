import { Router } from 'express'
import * as fruitsCtrl from '../controllers/fruits.js'

const router = Router()

router.get('/', fruitsCtrl.index)

router.get('/new', fruitsCtrl.new)

router.get('/:id', fruitsCtrl.show)

router.get('/:id/edit', fruitsCtrl.edit)

router.post('/', fruitsCtrl.create)

router.delete('/:id', fruitsCtrl.delete)

router.put('/:id', fruitsCtrl.update)


export {
  router
}