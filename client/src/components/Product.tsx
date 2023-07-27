import { Card } from "react-bootstrap";
import React from 'react';
import IProduct from "@/utils/types/product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

interface IProductProps {
    product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => {

    return (
        <Card className='p-3 my-3 rounded'>
            <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/products/${product._id}`}>
                    <Card.Title className="product-title" as={`div`}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating value={product.rating as number} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h3'>${product.price}</Card.Text>
                <Card.Text className="text-truncate" as="p">{product.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
