import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '@/components/Rating'
import useProductById from '@/hooks/use-product-by-id'

const ProductScreen = () => {
    const { id: productId } = useParams()

    const { product, isLoading, errors } = useProductById(parseInt(productId!, 10))

    if (errors.length > 0) {
        return (
            <div>
                <h1 className='text-center mid'>404 | Not Found</h1>
            </div>
        )
    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className=''>
            <Link className='my-3 btn btn-light' to={`/`}>
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