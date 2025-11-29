const express = require('express');
const app = express();
const PORT = 4000;

// Przykładowa baza danych
const products = {
    '1': { id: '1', name: 'Laptop Gamingowy', price: 4500 },
    '2': { id: '2', name: 'Myszka Bezprzewodowa', price: 150 },
    '3': { id: '3', name: 'Monitor 27 cali', price: 1200 }
};

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`[Product Service] Otrzymano zapytanie o produkt ID: ${productId}`);

    const product = products[productId];

    if (product) {
        console.log(`[Product Service] ZNALEZIONO produkt: ${product.name}. Wysyłam dane.`);
        return res.json(product);
    } else {
        console.error(`[Product Service] BŁĄD: Nie znaleziono produktu o ID: ${productId}`);
        return res.status(404).json({ error: 'Produkt nie istnieje' });
    }
});

app.listen(PORT, () => {
    console.log(`Serwis Produktów działa i nasłuchuje na porcie ${PORT}`);
});