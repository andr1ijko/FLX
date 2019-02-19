/* Your code goes here */
function userCard(value) {
    let aboutCard = {
        key: value,
        balance: 100,
        transactionLimit: 100,
        historyLog: []
    };


    function cardLogs(credits, operation) {
        let logs ={
            credits,
            operation,
            operationTime: new Date().toLocaleString('en-GB')
        };
        aboutCard.historyLog.push(logs);
    }

    function getCardOptions() {
        return aboutCard;
    }

    function putCredit(addCredit) {
        aboutCard.balance +=addCredit;
        cardLogs(addCredit);
    }

    function takeCredit(creditsOut) {
        if (creditsOut <= aboutCard.balance && creditsOut <= aboutCard.transactionLimit) {
            aboutCard.balance -= creditsOut;
        } else {
            console.error(
              `Aborted! Make sure the requested amount: ${creditsOut} 
               does not exceed available balance: ${aboutCard.balance} 
               or transaction limit: ${aboutCard.transactionLimit}`
            );
        }
          cardLogs('Withdrawal of credits', creditsOut);
    }

    function setTransactionLimit(transaction) {
        aboutCard.transactionLimit = transaction;
        cardLogs('limit change', transaction);
    }

    return {
        getCardOptions,
        putCredit,
        takeCredit,
        setTransactionLimit
    };
}

class UserAccount {
    constructor(name) {
      this.name = name;
      this.cards = [];
      this.cardsNum = 3;
    }
    addCard() {
      this.cards.length < this.cardsNum
        ? this.cards.push(userCard(this.cards.length + 1))
        : console.error(`Card limit exceeded ${this.cardsNum}`);
    }
    getCardByKey(key) {
      return key > this.cardsNum
        ? `Card not found`
        : this.cards[key - 1];
    }
  }