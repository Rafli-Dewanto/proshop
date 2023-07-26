import { Card } from "react-bootstrap";
import React from 'react'
import IProduct from "@/utils/types/product";

export default function Product({
    product
}: {
    product: IProduct
}) {
    return (
        <Card className='p-3 my-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as={`div`}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='h3'>${product.price}</Card.Text>
                <Card.Text className="text-truncate" as="p">{product.description}</Card.Text>
            </Card.Body>
        </Card>
    )
};
