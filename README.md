# crypto-earning
Get profit information about your cryptocurrency investments

## prerequisites
Make sure to have installed in your machine:
- Node JS (v8.2.0 or higher) 
- NPM (v5.5.1 or higher)

## setup
- Clone the repo and locate the root folder via Terminal
- Run **npm install** to install node dependencies.
- In index.js, add your transactions or modify the sample ones
- Via terminal locate the root of the repo and run **npm start**

## result

The following transactions

```
transactions.push({ currency : 'BRL', amountBTC : 0.098583, amountPaid : 2000,  url: mcdBrl });
transactions.push({ currency : 'EUR', amountBTC : 0.075435, amountPaid : 500,   url: cexEur });
transactions.push({ currency : 'GBP', amountBTC : 0.085432, amountPaid : 500,   url: cexGbp });
```

will produce the result below (based on the market price at that time):

<img width="350" alt="qrcode-example" src="https://user-images.githubusercontent.com/4924744/33527291-4a48fecc-d835-11e7-9752-b6d2aaaffaba.png">

