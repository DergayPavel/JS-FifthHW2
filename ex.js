class Deposit{
    constructor(){
        this.nameDeposit=[];
        this.percent=[];
        this.capitalization=[];
    }
    saveDeposit(names, percent, capitalization){
        this.nameDeposit.push(names);
        this.percent.push(percent);
        this.capitalization.push(capitalization);    
    }
}

const deposits=new Deposit();

function contributor(names, summ, month){
    summ=Number(summ);
    for(let i=0; i<deposits.nameDeposit.length; i++){
        if(deposits.nameDeposit[i]==names){
            let kolCap=Math.floor(month/deposits.capitalization[i]);
            for (let k=0; k<kolCap; k++){
                summ+=summ*deposits.percent[i];
            }
        }
    }
    return summ; 
}

function getValues() {
    return [
        document.querySelector('.summDeposit1').value,
        document.querySelector('.dayDeposit1').value
    ];
}

function getValues2() {
    return [
        document.querySelector('.summDeposit2').value,
        document.querySelector('.dayDeposit2').value
    ];
}

function getNames(){
    return[
        document.querySelector('#nameDeposit1').value
    ];
}

function getNames2(){
    return[
        document.querySelector('#nameDeposit2').value
    ];
}

function validateNumbers(values) {
    const a=values[0];
    const b = values[1];
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return false;
    }
    return true;
}

function validateName(valuesName) {
    const a = valuesName;
    for(let i=0; i<deposits.nameDeposit.length; i++){
        if (a==deposits.nameDeposit[i]){
            return true;
        }
    }
    return false;
}

function record(value) {
    document.querySelector('#result1').innerHTML = String(value);
}

function record2(value) {
    document.querySelector('#result2').innerHTML = String(value);
}

function main1() {
    let values = getValues();
    let nameForCheck = getNames();
    if (!validateNumbers(values)) {
        record('bad Input');
        return;
    }
    if (!validateName(nameForCheck)) {
        record('Bad name');
        return;
    }
    const result1 = contributor(nameForCheck,...values);
    record(result1);
}

function getNewValues() {
    return [
        document.querySelector('.percentNewDeposit').value,
        document.querySelector('.capitalizationNewDeposit').value
    ];
}

function getNewNames(){
    return[
        document.querySelector('#nameNewDeposit').value
    ]
}

function accountant (){
    const newName = getNewNames();
    const [newPercent, newCapitalization]=getNewValues();

    deposits.saveDeposit(newName[0],newPercent,newCapitalization);
}

function main2() {
    let values = getValues2();
    let nameForCheck = getNames2();
    if (!validateNumbers(values)) {
        record2('bad Input');
        return;
    }
    if (!validateName(nameForCheck)) {
        record2('Bad name');
        return;
    }
    const result2 = contributor(nameForCheck,...values);
    record2(result2);
}

function addDeposit(){
    let liLast = document.createElement('li');
    liLast.innerHTML = deposits.nameDeposit[deposits.nameDeposit.length-1];
    ol.append(liLast); 
    return false
}
document
    .querySelector('#btn1')
    .addEventListener('click', main1);

document
    .querySelector('#btn2')
    .addEventListener('click', main2);

document
    .querySelector('#btn3')
    .addEventListener('click', accountant);

document
    .querySelector('#btn3')
    .addEventListener('click', addDeposit);

