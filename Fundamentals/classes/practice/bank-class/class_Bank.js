class Bank {
    constructor(balance){
        this.balance = balance
    }

// console.log(getBalance())

depositeMoney(amount){
    this.balance += amount
    console.log('Deposited: ', `$${amount}`)
    console.log({balance: this.balance})
    }

withdrawMoney(amount){
    // guard clause
    if(this.balance - amount <= 0){
        console.log('Insufficient Funds')
        console.log({balance: this.balance})
        return
    }
    this.balance -= amount
    console.log('Withdrawn: ', `$${amount}`)
    console.log({balance: this.balance})
    }
}

const bank = new Bank(0)
// console.log(bank.balance)
// bank.depositeMoney(550)
// bank.withdrawMoney(200)
// bank.withdrawMoney(460)

const depositeButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

depositeButton.onclick = () => {
    const amount = Number(amountInput.value)
    bank.depositeMoney(amount)
    balanceDiv.innerText = `Balance: ${bank.balance}`
}

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value)
    bank.withdrawMoney(Number(amountInput.value))
    balanceDiv.innerText = `Balance: ${bank.balance}`
}