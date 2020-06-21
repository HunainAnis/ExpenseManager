import React from 'react'
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap'
import { InputForm } from './inputForm'
import { MainTiles } from './creditExpenseTiles'
import { AllTransactions } from './allTransactions'

const Main = () => {

    return(
        <div>
            <Container>
                <Row sm='8'>
                    <Col>
                        <Card>
                            <CardHeader><h2 style={{color:'maroon', textAlign:'center'}}>Expense Manager App</h2></CardHeader>
                            <CardBody>
                                <MainTiles />
                                <InputForm />
                                <AllTransactions />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main