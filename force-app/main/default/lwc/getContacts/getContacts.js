import { LightningElement, track } from 'lwc';  
 export default class GetContact extends LightningElement {   
   @track selectedContactRecord;  
   handlelookupselectcontact(event) {  
     this.selectedContactRecord = event.detail;  
   }  
 }  