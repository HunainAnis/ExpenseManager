import React, { useState } from 'react'
import { Row, Col, Form, Label, Input, Button, ButtonGroup } from 'reactstrap'

export const InputForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    return(
        <Row>
            <Col>
            <Form>
                <Label>Name of Transaction</Label>
                <Input onChange={(e)=>setName(e.target.value)} value = {name} type='text' />
                <Label>Amount</Label>
                <Input onChange={(e)=>setAmount(e.target.value)} value = {amount} type='number' />
                <Row>
                    <Col sm={{size:4, offset:3}} xs={{size:10, offset:1}}>
                        <ButtonGroup>
                            <Button size='lg' color='info'>Add Credit</Button>
                            <Button size='lg' color='danger'>Add Expense</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
            </Col>
        </Row>
    )
}