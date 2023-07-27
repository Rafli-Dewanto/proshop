import express from 'express';
import products from './data';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT ?? 5176;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/products', (_req, res) => {
    res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
        res.status(400).json({
            error: ['product id must be a number'],
        });
    }
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
