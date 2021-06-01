import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProductById,
  updatedProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updatedProduct)

export default router
