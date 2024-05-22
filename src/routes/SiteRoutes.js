import { Router } from 'express'
import { home,main,services,products,about } from '../controllers/SiteController.js'

const router = Router()

router.get( '/home', home )
router.get( '/main', main )
router.get( '/services', services )
router.get( '/products', products )
router.get( '/about', about )

export default router