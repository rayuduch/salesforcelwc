import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {

    openWebsite(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://chavadam.com'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    openOppListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    // openCaseRecord(){
    //     this[NavigationMixin.Navigate]({
    //         type : 'standard__recordPage',
    //         attributes: {
    //             recordId: "5006D0000011U9mQAE",
    //             objectApiName: 'Case', // objectApiName is optional
    //             actionName: 'view'
    //         }
    //     });
    // }

    openCalculatorTab(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes: {
                apiName: 'Calculator'
            }
        });
    }

    // previewFile(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__namedPage',
    //         attributes: {
    //             pageName: 'filePreview'
    //         },
    //         state : {
    //             recordIds: '0696D0000004eENQAY,0696D0000004eEIQAY',
    //             selectedRecordId:'0696D0000004eENQAY'
    //         }
    //     });
    // }

}