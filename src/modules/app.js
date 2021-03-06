import DonateForm from './donate-form'
import DonateList from './donate-list'
import Settings from './../core/contacts/settings'
import * as Utils from './../core/utils/index'

export default class App {

    #donateForm
    #donateList    

    constructor() {

        const mockDonates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 1, date: new Date() },
        ];        

        this.state = {
            donates: mockDonates,
            totalAmount: Utils.calculateSumOfNumbers(mockDonates.map((item) => {
                return item.amount;
            }))
        }        
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(this.state.donates);
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate);
        this.#donateList.updateDonates(this.state.donates);
        this.state.totalAmount += Number(newDonate.amount);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
    }

    run() {
        const donateForm = this.#donateForm.render();            
        const donateList = this.#donateList.render();
        document.body.append(donateForm, donateList);        
    }
}