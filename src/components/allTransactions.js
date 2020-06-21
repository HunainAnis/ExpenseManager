import React, { useContext } from 'react'
import { Row, Col, Card, Button } from 'reactstrap'
import { GlobalContext } from '../MainState'


export const AllTransactions = () => {
    const { delTrans, transactions } = useContext(GlobalContext)
    console.log(transactions)
    const controlDel = (id) => {
        delTrans(id)
        alert(`'Transaction of ${transactions.filter(i=>i.id===id)[0].name} is deleted successfully!'`)
    }
    return(
        <Row>
            <Col>
                <h3>History of Transaction</h3>
                {
                    transactions !== undefined && transactions.map(trans => (
                        <Card key={trans.id}>
                            <Row>
                                <Col xs={{ size:6, offset:1 }}><h6 style={{marginTop:'auto', marginBottom:'auto'}}>{trans.name}</h6></Col>
                                <Col xs='3'><h6 style={{marginTop:'auto', marginBottom:'auto'}}>{trans.type === 'expense'?'-':'+'}${Math.abs(trans.amount)}</h6></Col>
                                <Col><Button onClick={() => controlDel(trans.id)} color='white' style={{color:'red'}}>X</Button></Col>
                            </Row>
                        </Card>
                    ))
                }
            </Col>
        </Row>
    )
}