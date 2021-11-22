require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan repeat pizza pudding hover kangaroo army gather'; 
let testAccounts = [
"0x43bb376d181542e9cf98f5ef995e76fadb4223299302cc1283feba8138f82f5d",
"0x308e2d77024c1bb298245df9a3b0d80f4d70f60c898fe9816d1a57b0b2633f0f",
"0xdc28b53b73df58fe33f6824897aad6ebbafbd85667119844b41f437ee0b815d5",
"0x65ef3ab13727887a728ea1780036c13c833f45fa25e7de55c3019584ceed2b82",
"0xbd959d68b384034b7df1b4c7495882390a6377a0210f184ccd5380a3bc6fd898",
"0x6618344610fc561a3f107db146a8e631996c65395c389d1e8e2a3b0b775d6f61",
"0x477307a811654efc1746f9fe026f1e1cf2e885940b93812ccc5739a8f673aec9",
"0x7c37ef3c8da15614dfb266ca50325345470f39ecc29a5c8969eeb49e50809390",
"0xfed1af51fc1b4a0bd55cd37592d19443f572ea47c4169cca80d1630e9707ab04",
"0x506eb8f4efd7500906a827cde998c7cbc73f505199b07841cc5f6ef74effa508"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


