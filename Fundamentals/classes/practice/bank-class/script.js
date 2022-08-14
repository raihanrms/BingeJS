class Bank {
    constructor(balance){
        this.balance = balance;
    }
}

getBalance = () => {
    return this.balance;
}

// console.log(getBalance())

depositeMoney = (amount) => {
    this.balance += amount;
    console.log('Deposite button is working')
    console.log('Amount deposited: ' + amount)
    console.log('New balance: ' + this.balance)
}

withdrawMoney = (amount) => {
    this.balance -= amount;
    console.log('Withdraw button is working')
    console.log('Amount withdrawn: ' + amount)
    console.log('New balance: ' + this.balance)
}

// connect with dom
const balance = document.getElementById('balance').values;
const deposite = document.getElementById('deposite')
const withdraw = document.getElementById('withdraw')



const bank = new Bank(100)
console.log(bank.balance)

const showBalance = () => {
    console.log(bank.balance)
    document.getElementById('balance').innerHTML = bank.balance
    document.getElementById('deposite').innerHTML = bank.depositeMoney
    document.getElementById('withdraw').innerHTML = bank.withdrawMoney
}