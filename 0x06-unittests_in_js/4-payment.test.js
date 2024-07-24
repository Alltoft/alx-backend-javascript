const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi usin calculate method', () => {
        const agent = sinon.spy(console);
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        sendPaymentRequestToApi(100, 20);
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(stub.callCount).to.be.equal(1);
        expect(agent.log.calledWith('The total is: 10')).to.be.true;
        expect(agent.log.callCount).to.be.equal(1);
        stub.restore();
        agent.log.restore();
    });
});
