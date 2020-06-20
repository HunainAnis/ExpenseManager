import React from 'react'
import { Card, CardTitle, CardHeader, CardBody, Container, Row, Col, Input, Label, Form, Button, ButtonGroup } from 'reactstrap'

const Main = () => {
    return(
        <div>
            <Container>
                <Row sm='2'>
                    <Col>
                        <Card>
                            <CardHeader>Expense Manager App</CardHeader>
                                <CardBody>
                                    <Card body>
                                        <CardTitle>Total Balance</CardTitle>
                                        <CardTitle>$0</CardTitle>
                                    </Card>
                                    <Row>
                                        <Col sm={{ size: 6}}>
                                            <Card body color='success'>
                                                <CardTitle style={{color:'white'}} >Credit</CardTitle>
                                                <CardTitle style={{color:'white'}} >$0</CardTitle>
                                            </Card>
                                        </Col>
                                        <Col sm={{ size: 6}}>
                                            <Card body color='danger'>
                                                <CardTitle style={{color:'white'}} >Expense</CardTitle>
                                                <CardTitle style={{color:'white'}} >$0</CardTitle>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form>
                                            <Label>Name of Transaction</Label>
                                            <Input type='text' />
                                            <Label>Amount</Label>
                                            <Input type='number' />
                                            <ButtonGroup>
                                                <Button color='info'>Add Credit</Button>
                                                <Button color='danger'>Add Expense</Button>
                                            </ButtonGroup>
                                        </Form>
                                        </Col>
                                    </Row>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main