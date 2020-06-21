import React, { useState, useContext } from 'react'
import { Row, Col, Form, Label, Input, Button } from 'reactstrap'
import { GlobalContext } from '../MainState'

export const InputForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addNewTransaction } = useContext(GlobalContext)
    const controlNewTransaction = () => {
        let data = {id: new Date().toLocaleString(), name, amount, type:amount<0?'expense':'credit', timestamp:new Date().toLocaleString()}
        if(name === '') {
            alert('Please give your transaction a good name!')
        }
        else if(amount === '') {
            alert('Amount must not be empty!')
        }else{
            addNewTransaction(data)
            setAmount('')
            setName('')
            alert('New Transaction Added!')
        }
    }
    return(
        <Row>
            <Col>
            <Form>
                <Label>Name of Transaction</Label>
                <Input onChange={(e)=>setName(e.target.value)} value = {name} type='text' />
                <Label>Amount</Label>
                <Input onChange={(e)=>setAmount(e.target.value)} value = {amount} type='number' />
                        Insert (-) before the amount in order to add the expense
                <Row>
                    <Col>
                        <Button block onClick={()=>controlNewTransaction()} color='info'>Add Transaction</Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    )
}