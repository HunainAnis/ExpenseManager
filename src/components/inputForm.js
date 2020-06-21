import React, { useState, useContext } from 'react'
import { Row, Col, Form, Label, Input, Button, ButtonGroup } from 'reactstrap'
import { GlobalContext } from '../MainState'
import { addTransaction } from '../appActions'

export const InputForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const { addNewTransaction } = useContext(GlobalContext)
    const controlNewTransaction = () => {
        let data = {id: name, name, amount, type:amount<0?'expense':'credit', timestamp:new Date()}
        if(name === '') {
            alert('Please give your transaction a good name!')
        }
        else if(amount === 0) {
            alert('Amount must not be zero!')
        }else{
            addNewTransaction(data)
            setAmount(0)
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
                <Row>
                    <Col>
                            <Button onClick={()=>controlNewTransaction()} color='info'>Add Transaction</Button>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    )
}