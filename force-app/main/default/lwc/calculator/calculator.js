import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber
    secondNumber
    @track result
    @track previousResults = [];
@track showPreviousResults = false;

    calculationHandler(event){
        const eventName = event.target.name;
        if(eventName === 'firstNumber'){
            this.firstNumber=event.target.value;
        } else if(eventName === 'secondNumber'){
            this.secondNumber=event.target.value;
        }
    }
    
    addHandler(){
        const firstNum = parseInt(this.firstNumber, 10);
        const secNum = parseInt(this.secondNumber, 10);
        this.result = `Result of ${firstNum} + ${secNum} is ${firstNum+secNum}`;
        this.previousResults.push(this.result);
    }

    subHandler(){
        const firstNum = parseInt(this.firstNumber, 10);
        const secNum = parseInt(this.secondNumber, 10);
        this.result = `Result of ${firstNum} - ${secNum} is ${firstNum-secNum}`;
        this.previousResults.push(this.result);
    }

    mulHandler(){
        const firstNum = parseInt(this.firstNumber, 10);
        const secNum = parseInt(this.secondNumber, 10);
        this.result = `Result of ${firstNum} X ${secNum} is ${firstNum*secNum}`;
        this.previousResults.push(this.result);
    }
    divideHandler(){
        const firstNum = parseInt(this.firstNumber, 10);
        const secNum = parseInt(this.secondNumber, 10);
        this.result = `Result of ${firstNum} / ${secNum} is ${firstNum/secNum}`;
        this.previousResults.push(this.result);
    }


    resultHandler(event){
        const firstNum = parseInt(this.firstNumber, 10);
        const secNum = parseInt(this.secondNumber, 10);
        const operator = event.target.name;
        if(operator === 'add'){
            this.result = `Result of ${firstNum} + ${secNum} is ${firstNum+secNum}`;
            this.previousResults.push(this.result);
        } else if(operator === 'sub'){
            this.result = `Result of ${firstNum} - ${secNum} is ${firstNum-secNum}`;
            this.previousResults.push(this.result);
        } else if(operator === 'mul'){
            this.result = `Result of ${firstNum} X ${secNum} is ${firstNum*secNum}`;
            this.previousResults.push(this.result);
        } else if(operator === 'divide'){
            this.result = `Result of ${firstNum} / ${secNum} is ${firstNum/secNum}`;
            this.previousResults.push(this.result);
        }
    }


    showPreviousResultsToggle(event){
this.showPreviousResults = event.target.checked;

    }
}