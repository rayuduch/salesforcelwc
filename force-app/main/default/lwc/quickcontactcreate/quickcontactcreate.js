import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
export default class Quickcontactcreate extends LightningElement {
contactfields = [FIRST_NAME, LAST_NAME, Email, Phone];
@api recordId;

handleSuccess(event){
    const evt = new ShowToastEvent({
        title: "Contact Saved",
        message: "Record ID: " + event.target.id,
        variant: "Success"
    })
    this.dispatchEvent(evt);

}

handleSubmit(event){
    event.preventDefault();
     const fields = event.detail.fields;
     fields.AccountId = this.recordId;
    this.template.querySelector('lightning-record-form').submit(fields);
    eval("$A.get('e.force:refreshView').fire();")

}

}