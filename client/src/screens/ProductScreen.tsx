import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '@/components/Rating'
import useProductById from '@/hooks/use-product'

const ProductScreen = () => {
    const { id: productId } = useParams()

    if (Number.isNaN(parseInt(productId!, 10))) {
        return <>Not found</>
    }
    
    const product = useProductById(parseInt(productId!, 10))

    return (
        <div>
            <Link className='btn btn-light my-3' to={`/`}>
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product?.image} alt={product?.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product?.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product?.rating ?? 0} text={`${product?.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>{product?.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>

                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product?.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>{product?.countInStock! > 0 ? 'In Stock' : 'Out of stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Button
                                    disabled={product?.countInStock === 0}
                                    type='button'
                                    className='btn-block'>
                                    Add to cart
                                </Button>
                            </ListGroupItem>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen