import {Settings as Setts} from './../core/contacts/settings'

export default class DonateForm {
    
    #container;    

    constructor(totalAmount, createNewDonate) {
        this.#container = document.createElement('div');
        this.totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    }

    updateTotalAmount(newAmount) {
        const amount = document.querySelector('#total-amount');
        if(amount) {
            this.totalAmount += newAmount;
            console.log('updateTotalAmount', this.totalAmount, 'newAmout', newAmount);
            amount.textContent = `${newAmount}${Setts.currency}`;
        }
    }

    render() {
        let form = document.createElement('form');
        form.className = 'donate-form';        

        let h1 = document.createElement('h1');
        h1.id = 'total-amount';
        h1.textContent = `${this.totalAmount}${Setts.currency}`;

        let input = document.createElement('input');
        input.className = 'donate-form__donate-input';
        input.name = 'amount';
        input.type = 'number';
        input.min = '1';
        input.max = '100';

        let label = document.createElement('label');
        label.className = 'donate-form__input-label';
        label.textContent = `Введите сумму в ${Setts.currency}`;
        label.append(input);

        let button = document.createElement('button');
        button.className = 'donate-form__submit-button';
        button.type = 'submit';
        button.textContent = 'Задонатить';

        form.append(h1);
        form.append(label);
        form.append(button);

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const input = document.querySelector('.donate-form__donate-input');
            if(input?.value.trim()) {
                let donate = {
                    date: new Date(),
                    amount: input.value
                }
                console.log(donate);
                this.createNewDonate(donate);
            }
            
            if(input) {
                input.value = '';
            }

            console.log('Submit clicked');
        });

        this.#container.append(form);
        return this.#container;
    }
}