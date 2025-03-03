import path from 'path';
import express from 'express';
//import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import uploadRoutes from './routes/uploadRoutes.js';

const port = process.env.PORT || 5000;
connectDB();

const app = express();
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cookie parser middleware
app.use(cookieParser());

// app.get('/', (req,res) => {
//     res.send('API is running......');
// });

app.get('/api/config/paypal', (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  );

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

// app.get('/api/products', (req,res) => {
//     res.json(products);
// });

// app.get('/api/products/:id', (req,res) => {
//     const product = products.find((p) => p._id === Number(req.params.id));
//     res.json(product);
// })


if (process.env.NODE_ENV === 'production') {
    // const __dirname = path.resolve();
    app.use('/uploads', express.static('/var/data/uploads'));
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    const __dirname = path.resolve();
    app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

app.listen(port, () => {
    console.log(`Server running on port${port}`);
})
