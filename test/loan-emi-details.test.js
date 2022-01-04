import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

const el=await fixture(html `<loanemi-details></loanemi-details>`);
const val=el.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {
 
it('checks for methods',async ()=>{
const el=await fixture(html `<loanemi-details></loanemi-details>`);
const spys=Sinon.spy(el,'super')
el.constructor();
expect(spys.calledOnce).to.be.true;
});
it('checks for method',async ()=>{
  const el= await fixture(html `<loanemi-details></loanemi-details>`);
  const spys=Sinon.spy(el,'_toBasicDetails')
  const hh=el.shadowRoot.querySelector('lion-button')[0]
  hh.click();
  expect(spys.called).to.be.true;
  });
  it('checks for methodssss', ()=>{
    const spys=Sinon.spy(el,'_toBasicDetails');
    val[0].click();
    expect(spys.calledOnce).to.be.true;
     
});
it('checks for methodssss', ()=>{
  const spys=Sinon.spy(el,'_toCustomer');
  val[1].click();
  expect(spys.calledOnce).to.be.true;
   
});
});
