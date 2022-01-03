import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';
describe('Loan EMI details', () => {
it('checks for methods',async ()=>{
const el=await fixture(html `<loanemi-details></loanemi-details>`);
const spys=Sinon.spy(el,'super')
el.constructor();
expect(spys.calledOnce).to.be.true;
});
it('checks for method',async ()=>{
  const el=await fixture(html `<loanemi-details></loanemi-details>`);
  const spys=Sinon.spy(el,'_toBasicDetails')
  const hh=el.shadowRoot.querySelector('lion-button')
  hh.click();
  expect(spys.calledOnce).to.be.true;
  })
});
