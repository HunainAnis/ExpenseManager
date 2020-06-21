import React, { useContext } from 'react'
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap'
import { GlobalContext } from '../MainState'

export const MainTiles = () => {
    const state = useContext(GlobalContext)
    let sumOfTransactions = 0
    let expense = 0
    let credit = 0
    state.transactions.map(i=>{
        sumOfTransactions = sumOfTransactions + parseInt(i.amount)
        expense = i.amount < 0 ? expense + parseInt(i.amount) : expense
        console.log('expense updated')
        return credit = i.amount > 0 ? credit + parseInt(i.amount) : credit
    })
    console.log(credit)
    return(
        <>
            <Card color='light' body>
                <CardTitle style={{color:'black'}} >Total Balance</CardTitle>
                <CardTitle style={{ fontSize: 30, color:sumOfTransactions > 0?'green':'red'}}>{sumOfTransactions<0 && '-'}${Math.abs(sumOfTransactions)}</CardTitle>
            </Card>
            <Row>
                <Col xs='6' style={{paddingRight:0}} sm={{ size: 6}}>
                    <Card body color='light'>
                        <CardTitle style={{color:'black'}} >Credit</CardTitle>
                        <CardText style={{ fontSize: 30, color:'green'}} >${credit}</CardText>
                    </Card>
                </Col>
                <Col xs='6' style={{paddingLeft:0}} sm={{ size: 6}}>
                    <Card body color='light'>
                        <CardTitle style={{color:'black'}} >Expense</CardTitle>
                        <CardText style={{ fontSize: 30, color:'red'}} >-${Math.abs(expense)}</CardText>
                    </Card>
                </Col>
            </Row>
        </>
    )
}