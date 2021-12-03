import {Settings as Set} from './../core/contacts/settings'
import * as Utils from './../core/utils/index'

export default class DonateList {

    #donatesContainer
    #donates 

    constructor(donates) {
        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container';        
        this.#donates = donates;
    }

    updateDonates(updatedDonates) {
        console.log('updateDonates', updatedDonates)
        const containerDonates = document.querySelector('.donates-container__donates');
        if(containerDonates) {            
            containerDonates.remove();
        }        

        const newDonatesList = document.createElement('div');
        newDonatesList.className = 'donates-container__donates';
        updatedDonates.forEach(donate => {
            const item = document.createElement('div');
            item.className = 'donate-item';
            const bold = document.createElement('b');
            bold.textContent = `${donate.amount}${Set.currency}`;
            item.textContent = Utils.getFormattedTime(donate.date) + ' - ';
            item.append(bold);
            newDonatesList.append(item);
        });
        this.#donatesContainer.append(newDonatesList);        
    }    

    render() {
        const donatesTittle = document.createElement('h2');
        donatesTittle.className = 'donates-container__title';
        donatesTittle.textContent = 'Список донатов';

        this.#donatesContainer.append(donatesTittle);
        this.updateDonates(this.#donates);

        return this.#donatesContainer;
    }
}