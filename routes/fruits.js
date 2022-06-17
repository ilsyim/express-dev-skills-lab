import { Router } from 'express'
import { route } from 'express/lib/application'
import * as fruitsCtrl from '../controllers/fruits.js'

const router = Router()

router.get('/', fruitsCtrl.index)

router.get('/new', fruitsCtrl.new)



router.post('/', fruitsCtrl.create)

export {
  router
}