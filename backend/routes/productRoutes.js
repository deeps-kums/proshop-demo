import express from 'express';
//import products from '../data/products';
//import asyncHandler from '../middleware/asyncHandler.js';
//import Product from '../models/productModel.js';
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } from '../controllers/productController.js';
import { protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct) .delete(protect, admin, deleteProduct);;


//Get product logic shifted to productController.js

// router.get('/', asyncHandler(async (req,res) => {
//     const products = await Product.find({});
//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async (req,res) => {
//     const product = await Product.findById(req.params.id);
//     if(product){
//         return res.json(product); 
//     } else {
//         res.status(404);
//         throw new Error('Resource not found');
//     }
// }));

export default router;