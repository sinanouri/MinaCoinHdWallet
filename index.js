var codaSDK = require("./codaSDK");
var MinaSDK = codaSDK.minaSDK;
const bip39 = require("bip39");
const hdkey = require('hdkey');
function generateKeyPair(mnemonic,path){
    const master = bip39.mnemonicToSeedSync(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(master).derive(path);
    const seed = Uint8Array.from(hdWallet._privateKey)
    const privateKey = MinaSDK.generatePrivatekeyFromSeed(seed).privateKey
    let address = MinaSDK.publicKeyOfPrivateKey(privateKey)
    return { address,privateKey }
}
module.exports = generateKeyPair
