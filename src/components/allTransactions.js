import React, { useContext } from 'react'
import { Row, Col, Card, Button } from 'reactstrap'
import { GlobalContext } from '../MainState'


export const AllTransactions = () => {
    const context = useContext(GlobalContext)
    console.log(context)
    return(
        <Row>
            <Col>
                <h1>History of Transaction</h1>
                {
                    context.transactions.length !== 0 &&
                    context.transactions.map(trans => (
                        <Card key={trans.id}>
                            <Row>
                                <Col xs={{ size:6, offset:1 }}><h6 style={{marginTop:'auto', marginBottom:'auto'}}>{trans.name}</h6></Col>
                                <Col xs='3'><h6 style={{marginTop:'auto', marginBottom:'auto'}}>{trans.type === 'expense'?'-':'+'}${Math.abs(trans.amount)}</h6></Col>
                                <Col><Button color='white' style={{color:'red'}}>X</Button></Col>
                            </Row>
                        </Card>
                    ))
                }
            </Col>
        </Row>
    )
}