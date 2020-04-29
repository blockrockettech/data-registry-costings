const _ = require('lodash');
const {BN, ether,} = require('@openzeppelin/test-helpers');

require('chai').should();

const DataRegistry = artifacts.require('DataRegistry');

contract('show me the money ... GAS costs', function ([deployer, ...accounts]) {

    const ONE_ETH = ether('1');
    const ETH_PRICE_IN_DOLLARS = 210; // $210 per ETH
    const GAS = {gasPrice: 10000000000}; // 10 GWEI

    beforeEach(async function () {
        this.registry = await DataRegistry.new();
    });

    describe('setting strings', async function () {

        it('20 character', async function () {
            const receipt = await this.registry.setString(web3.utils.fromAscii('40-CHARACTERS'), randomString(20), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('40 character', async function () {
            const receipt = await this.registry.setString(web3.utils.fromAscii('40-CHARACTERS'), randomString(40), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('100 character', async function () {
            const receipt = await this.registry.setString(web3.utils.fromAscii('100-CHARACTERS'), randomString(100), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('200 character', async function () {
            const receipt = await this.registry.setString(web3.utils.fromAscii('200-CHARACTERS'), randomString(200), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('overriding 50 characters', async function () {
            // Set the storage slot
            const originalWrite = await this.registry.setString(web3.utils.fromAscii('50-CHARACTERS'), randomString(50), GAS);
            console.log(`Original - Gas used: ${originalWrite.receipt.gasUsed}`);
            console.log(`Original - Gas expenditure: ${new BN(originalWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Original Cost: $${usdCosts(originalWrite.receipt.gasUsed)}`);

            // Re-set the same ket - no initialisation costs for the mapping
            const newWrite = await this.registry.setString(web3.utils.fromAscii('50-CHARACTERS'), randomString(50), GAS);
            console.log(`Overridden - Gas used: ${newWrite.receipt.gasUsed}`);
            console.log(`Overridden - Gas expenditure: ${new BN(newWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Overridden Cost: $${usdCosts(newWrite.receipt.gasUsed)}`);
        });

        it('overriding 100 characters', async function () {
            // Set the storage slot
            const originalWrite = await this.registry.setString(web3.utils.fromAscii('100-CHARACTERS'), randomString(100), GAS);
            console.log(`Original - Gas used: ${originalWrite.receipt.gasUsed}`);
            console.log(`Original - Gas expenditure: ${new BN(originalWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Original Cost: $${usdCosts(originalWrite.receipt.gasUsed)}`);

            // Re-set the same ket - no initialisation costs for the mapping
            const newWrite = await this.registry.setString(web3.utils.fromAscii('100-CHARACTERS'), randomString(100), GAS);
            console.log(`Overridden - Gas used: ${newWrite.receipt.gasUsed}`);
            console.log(`Overridden - Gas expenditure: ${new BN(newWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Overridden Cost: $${usdCosts(newWrite.receipt.gasUsed)}`);
        });

    });

    describe('setting bytes', async function () {

        it('20 bytes', async function () {
            const receipt = await this.registry.setBytes(web3.utils.fromAscii('20-BYTES'), randomBytes(20), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('40 bytes', async function () {
            const receipt = await this.registry.setBytes(web3.utils.fromAscii('40-BYTES'), randomBytes(40), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('100 bytes', async function () {
            const receipt = await this.registry.setBytes(web3.utils.fromAscii('100-BYTES'), randomBytes(100), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('200 bytes', async function () {
            const receipt = await this.registry.setBytes(web3.utils.fromAscii('200-BYTES'), randomBytes(200), GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('overriding 50 bytes', async function () {
            // Set the storage slot
            const originalWrite = await this.registry.setBytes(web3.utils.fromAscii('50-BYTES'), randomBytes(50), GAS);
            console.log(`Original - Gas used: ${originalWrite.receipt.gasUsed}`);
            console.log(`Original - Gas expenditure: ${new BN(originalWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Original Cost: $${usdCosts(originalWrite.receipt.gasUsed)}`);

            // Re-set the same ket - no initialisation costs for the mapping
            const newWrite = await this.registry.setBytes(web3.utils.fromAscii('50-BYTES'), randomBytes(50), GAS);
            console.log(`Overridden - Gas used: ${newWrite.receipt.gasUsed}`);
            console.log(`Overridden - Gas expenditure: ${new BN(newWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Overridden Cost: $${usdCosts(newWrite.receipt.gasUsed)}`);
        });

        it('overriding 100 bytes', async function () {
            // Set the storage slot
            const originalWrite = await this.registry.setBytes(web3.utils.fromAscii('100-BYTES'), randomBytes(100), GAS);
            console.log(`Original - Gas used: ${originalWrite.receipt.gasUsed}`);
            console.log(`Original - Gas expenditure: ${new BN(originalWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Original Cost: $${usdCosts(originalWrite.receipt.gasUsed)}`);

            // Re-set the same ket - no initialisation costs for the mapping
            const newWrite = await this.registry.setBytes(web3.utils.fromAscii('100-BYTES'), randomBytes(100), GAS);
            console.log(`Overridden - Gas used: ${newWrite.receipt.gasUsed}`);
            console.log(`Overridden - Gas expenditure: ${new BN(newWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Overridden Cost: $${usdCosts(newWrite.receipt.gasUsed)}`);
        });

    });

    describe('setting uint256', async function () {

        it('5 digits number', async function () {
            const receipt = await this.registry.setUint256(web3.utils.fromAscii('5-DIGITS'), 12345, GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('10 digits number', async function () {
            const receipt = await this.registry.setUint256(web3.utils.fromAscii('10-DIGITS'), 12345567891, GAS);

            console.log(`Gas used: ${receipt.receipt.gasUsed}`);
            console.log(`Gas expenditure: ${new BN(receipt.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Cost: $${usdCosts(receipt.receipt.gasUsed)}`);
        });

        it('overriding 10 digits', async function () {
            // Set the storage slot
            const originalWrite = await this.registry.setUint256(web3.utils.fromAscii('10-DIGITS'), 12345567891, GAS);
            console.log(`Original - Gas used: ${originalWrite.receipt.gasUsed}`);
            console.log(`Original - Gas expenditure: ${new BN(originalWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Original Cost: $${usdCosts(originalWrite.receipt.gasUsed)}`);

            // Re-set the same ket - no initialisation costs for the mapping
            const newWrite = await this.registry.setUint256(web3.utils.fromAscii('10-DIGITS'), 12345567891, GAS);
            console.log(`Overridden - Gas used: ${newWrite.receipt.gasUsed}`);
            console.log(`Overridden - Gas expenditure: ${new BN(newWrite.receipt.gasUsed).mul(new BN(GAS.gasPrice))}`);
            console.log(`Overridden Cost: $${usdCosts(newWrite.receipt.gasUsed)}`);
        });
    });

    function randomString(length) {
        return _.times(length, () => _.random(35).toString(36)).join('');
    }

    function randomBytes(length) {
        return web3.utils.fromAscii(randomString(length));
    }

    function usdCosts(gasUsed) {
        const totalUsed = new BN(gasUsed).mul(new BN(GAS.gasPrice));
        const etherCost = web3.utils.fromWei(totalUsed, 'ether');
        return etherCost * ETH_PRICE_IN_DOLLARS;
    }
});
