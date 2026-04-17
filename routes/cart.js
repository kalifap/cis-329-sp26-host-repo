const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const cart = req.cookies.shopping_cart || [];
    res.json(cart);
});

router.post('/add', (req, res) => {
    const newItem = req.body;
    let cart = req.cookies.shopping_cart || [];
    
    cart.push(newItem);
    
    res.cookie('shopping_cart', cart, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.status(200).json({ message: "Item added", cart });
});

router.post('/clear', (req, res) => {
    res.clearCookie('shopping_cart');
    res.status(200).json({ message: "Cart cleared" });
});

module.exports = router;