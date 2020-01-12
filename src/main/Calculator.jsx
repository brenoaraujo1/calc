import React, { Component } from 'react';
import './css/Calculator.css';

import Display from '../components/display/Display';
import Button from '../components/button/Button'

export default class Calculator extends Component{

    constructor(props) { 
        super(props);
        
        this.clearCalcMemory = this.clearCalcMemory.bind(this);
        this.setCalcOperation = this.setCalcOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearCalcMemory() {
        console.log('limpar');
    }

    setCalcOperation(op) {
        console.log(op);
    }

    addDigit(n){
        console.log(n)
    }

    render() {

        return (
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC" click={this.clearCalcMemory} triple />
                <Button label="/" click={this.setCalcOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="*" click={this.setCalcOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setCalcOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setCalcOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setCalcOperation} operation />
            </div>
        )
    }
}