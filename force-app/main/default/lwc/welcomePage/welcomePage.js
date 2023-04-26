import { LightningElement, track } from 'lwc';

export default class WelcomePage extends LightningElement {
    @track greetings = 'sfdx' ;

    greetingsChangeHandler(event){
        this.greetings = event.target.value

    }

    @track project = "Seipe";

    projectChangeHandler(event){
        this.project = event.target.value;
    }


}