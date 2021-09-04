import { LightningElement, api } from 'lwc';
export default class createContact extends LightningElement {
    @api objectApiName = "Contact";
    handleSuccess(){
        alert('Record Created !!');
    }
}