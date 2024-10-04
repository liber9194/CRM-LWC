import { LightningElement, api, wire, track } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import userRatingFIELD from '@salesforce/schema/Account.Rating__c';

export default class AccountInsights extends LightningElement {
    @api recordId;
    rating;
    totalAmount = 1;
    totalCase = 2;

    @wire(getRecord, { recordId: '$recordId', fields: [userRatingFIELD]})
    wiredAccount({error, data})
    {
        if(data)
        {
            this.rating = data.fields.Rating__c.value;
        }
        else if(error)
        {
            this.error = error;
        }
    }
}