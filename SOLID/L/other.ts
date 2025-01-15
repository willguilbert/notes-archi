abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    // implementation details for processing credit card payment...
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment of $${amount}`);
    // implementation details for processing debit card payment...
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    // implementation details for processing PayPal payment...
  }
}

function executePayment(paymentProcessor: PaymentProcessor, amount: number) {
  paymentProcessor.processPayment(amount);
}

// Now, we can process payments using any of the payment methods:

const creditCardProcessor = new CreditCardProcessor();
executePayment(creditCardProcessor, 100);

const debitCardProcessor = new DebitCardProcessor();
executePayment(debitCardProcessor, 200);

const payPalProcessor = new PayPalProcessor();
executePayment(payPalProcessor, 300);

// Possible to add a BitCoin payment processor !

class BitcoinProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Bitcoin payment of ${amount} BTC`);
    // Implementation details for processing Bitcoin payment...
  }
}

const bitcoinProcessor = new BitcoinProcessor();
executePayment(bitcoinProcessor, 2); // Process a payment of 2 BTC
