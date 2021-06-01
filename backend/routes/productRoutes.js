import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProductById,
  updatedProduct,
  createProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updatedProduct)

export default router
