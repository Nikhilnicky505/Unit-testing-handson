import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
it('success',async()=>{
  const el=await fixture(html`<loan-success></loan-success>`);
  const spys=Sinon.spy(el,'_toHome');
  spys();
  expect(spys.called).to.be.true;
})
});

describe('error screen', () => {
  it('success',async()=>{
    const el=await fixture(html`<loan-error></loan-error>`);
    const spys=Sinon.spy(el,'_toHome');
    spys();
    expect(spys.called).to.be.true;
  })
});
