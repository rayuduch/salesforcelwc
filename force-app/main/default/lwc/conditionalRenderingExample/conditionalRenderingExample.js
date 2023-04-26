import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayCondition = false;
    @track cityList = ['Jaipur', 'Bangluru', 'Hyderabad'];

    changeHandler(event){

        this.displayCondition = event.target.checked;
    }
}