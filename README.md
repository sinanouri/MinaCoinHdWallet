
# MinaHDWallet Github Readme

## Introduction

MinaHDWallet is a Node.js package that allows you to generate a hierarchical deterministic wallet (HD wallet) for the Mina cryptocurrency. This readme file provides information on how to use the package, along with a brief explanation of the code snippet provided above.

## Installation

To use MinaHDWallet, you'll need to install it in your Node.js environment using npm:

Copy code

`npm install minacoin-hdwallet` 

## Usage

Once you've installed MinaHDWallet, you can use it in your Node.js code like this:



    const MinaHDWallet = require("minacoin-hdwallet")
    
    const mnemonic = 'offer confirm miss away reunion type shrimp april crush lawsuit name glory'
    const derivationPath = "m/44'/12586'/0'/0/0"
    const wallet = MinaHDWallet(mnemonic,derivationPath)
    console.log(wallet)

The code above generates a new HD wallet for the Mina cryptocurrency using the specified mnemonic and derivation path. The resulting wallet object is then logged to the console.

## API

MinaHDWallet exposes a single function that takes two arguments:

javascriptCopy code

    MinaHDWallet(mnemonic, derivationPath)

### Arguments

-   `mnemonic` (string, required): The 12-word mnemonic phrase used to generate the HD wallet.
-   `derivationPath` (string, required): The derivation path used to generate the HD wallet.

### Return Value

The function returns an object representing the HD wallet. The object contains the following properties:

-   `address`: The Mina address generated from the public key and derivation path.
-   `privateKey`: The private key generated from the seed.

## Contributing

If you'd like to contribute to MinaHDWallet, please fork the repository and submit a pull request. All contributions are welcome!

## License

MinaHDWallet is licensed under the MIT License. See the LICENSE file for more information.
