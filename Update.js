export default class Update {
    #inputs = document.querySelectorAll('input')

    #tipPercentElem = document.querySelector('#tipPercent');
    #tipElem = document.querySelector('#tipValue');
    #totalElem = document.querySelector('#totalWithTip');
    #splitElem = document.querySelector('#splitValue');
    #billEachElem = document.querySelector('#billEach');
    #tipEachElem = document.querySelector('#tipEach');

    #bill = 0;
    #tipPercent = 0;
    #splitPerson = 1;
    #tip;
    #total;
    #billEach;
    #tipEach;

    constructor() {

    }

    listenInput() {
        this.#inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                let target = e.target;

                switch (target.id) {
                    case 'yourBill':
                        this.#bill = +target.value;
                        break;

                    case 'tipInput':
                        this.#tipPercent = +target.value;
                        break;

                    case 'splitInput':
                        this.#splitPerson = +target.value;
                        break;
                }
            this.calc();
            });
        });
    }

    calc() {
        this.#tip = this.#bill * this.#tipPercent / 100;
        this.#total = this.#tip + this.#bill;
        this.#billEach = this.#total / this.#splitPerson;
        this.#tipEach = this.#tip / this.#splitPerson;

        this.render();
    }

    render() {
        this.#tipPercentElem.innerHTML = this.#tipPercent + '%';
        this.#splitElem.innerHTML = this.#splitPerson + ' person';
        this.#tipElem.innerHTML = `${this.#tip}`;
        this.#totalElem.innerHTML = `${this.#total.toFixed(2)}`;
        this.#billEachElem.innerHTML = `${this.#billEach.toFixed(2)}`;
        this.#tipEachElem.innerHTML = `${this.#tipEach.toFixed(2)}`;
    }

    main() {
        this.listenInput();
    }
}
