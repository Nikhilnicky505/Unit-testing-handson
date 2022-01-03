import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

let el=await fixture(html`<basic-details></basic-details>`);
let form=el.shadowRoot.querySelector('lion-button');

describe('Basic details', () => {
  it('checks for spy',()=>{
const fun=Sinon.spy(el,"_toDashboard");
form.click();
expect(fun.calledOnce).to.be.true;
  });
  it('checks for spy',()=>{
    let input_amount=el.shadowRoot.querySelector('lion-input-amount');
    const func=Sinon.spy(el,"_numToWord");
input_amount.modelValue=10,111.00;
    el._numToWord();
    expect(func).to.have.called;
      });
      it('checks for spys',()=>{
        let input_amount=el.shadowRoot.querySelectorAll('lion-button')[1];
        const func=Sinon.spy(el,"_captureDetails");
        input_amount.click();
        expect(func).to.have.called;
          })
});
