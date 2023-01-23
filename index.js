const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || PORT;
const userRoute = require('./backend/routes/user');
const authRoute = require('./backend/routes/auth');
const productRoute = require('./backend/routes/product');
const cartRoute = require('./backend/routes/cart');
const orderRoute = require('./backend/routes/order');
const stripeRoute = require('./backend/routes/stripe');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connection Successful'))
.catch((err) => {
    console.log(err)
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(PORT, () => {
    console.log('Backend running')
});
