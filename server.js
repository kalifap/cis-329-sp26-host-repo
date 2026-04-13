const express = require('express');
const cookieParser = require('cookie-parser');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use('/cart', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});