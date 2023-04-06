import React from 'react'
import { Badge, Card, Col, Table } from 'react-bootstrap'
import { GoTriangleRight } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
export default function MovieStory({ title, year, posterUrl, actors, director, runtime, plot, genres, imgError }) {

    return (
        <Col md={12}>
            <Card className='card-content'>
                <Card.Header>
                    {title}
                </Card.Header>
                <NavLink to='/MovieApp' className='ps-4'>Main Page</NavLink>
                <Card.Body className='d-flex'>
                    <div className='col-md-3'>
                        <div className='card-img'>
                            <Card.Img variant='left' src={posterUrl} onError={imgError} />
                            <h6><Badge bg=''> {runtime} min</Badge></h6>
                        </div>
                    </div>
                    <Card.Body className='col-md-9'>
                        <Card.Text>
                            {plot}
                        </Card.Text>
                        <Table striped variant='light'>
                            <tbody>
                                <tr>
                                    <td>
                                        <GoTriangleRight fontSize={10} className="me-2" />
                                        Director
                                    </td>
                                    <td>{director}</td>
                                </tr>
                                <tr>
                                    <td><GoTriangleRight fontSize={10} className="me-2" />Actors</td>
                                    <td>{actors}</td>
                                </tr>
                                <tr>
                                    <td><GoTriangleRight fontSize={10} className="me-2" />Year</td>
                                    <td>{year}</td>
                                </tr>
                                <tr>
                                    <td><GoTriangleRight fontSize={10} className="me-2" />Genres</td>
                                    <td>{genres.join(', ')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    )
}
