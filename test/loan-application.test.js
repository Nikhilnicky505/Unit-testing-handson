import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../loan-application.js';
 var LoanApplication =require('../loan-application')
describe('LoanApplication', () => {
  
  const fun=Sinon.stub(LoanApplication,'_increment').returns(true);
  LoanApplication._increment();
  expect(fun).to.be.true;
})
