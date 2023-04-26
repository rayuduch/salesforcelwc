import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    // private property
    cardTitle = 'BMI calculator';

    weight;
    height;
    @track bmiResult;
    onWeightHandler(event){
        this.weight = parseFloat(event.target.value);
    }

    onHeightHandler(event){
        this.height = parseFloat(event.target.value);
    }

    bmiHandler(){
        try{
            this.bmiResult = this.weight/(this.height*this.height);
        } catch(error){
            this.bmiResult = undefined;
        }
    }

    get bmiValue(){
        if(this.bmiResult === undefined){
            return "";
        } 
            return `Your BMI is: ${this.bmiResult}`;

    }
}