import React, { useContext } from 'react'
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap'
import { GlobalContext } from '../MainState'

export const MainTiles = () => {
    const state = useContext(GlobalContext)
    let sumOfTransactions = 0
    state.transactions.map(i=>(
        sumOfTransactions = sumOfTransactions + parseInt(i.amount)
    ))
    return(
        <>
            <Card color='light' body>
                <CardTitle style={{color:'black'}} >Total Balance</CardTitle>
                <CardTitle style={{ fontSize: 40, color:'green'}}>${sumOfTransactions}</CardTitle>
            </Card>
            <Row>
                <Col xs='6' style={{paddingRight:0}} sm={{ size: 6}}>
                    <Card body color='light'>
                        <CardTitle style={{color:'black'}} >Credit</CardTitle>
                        <CardText style={{ fontSize: 40, color:'green'}} >$0</CardText>
                    </Card>
                </Col>
                <Col xs='6' style={{paddingLeft:0}} sm={{ size: 6}}>
                    <Card body color='light'>
                        <CardTitle style={{color:'black'}} >Expense</CardTitle>
                        <CardText style={{ fontSize: 40, color:'red'}} >$0</CardText>
                    </Card>
                </Col>
            </Row>
        </>
    )
}