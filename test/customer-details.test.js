import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
it('checks for handlers',async ()=>{
const el=await fixture(html `<customer-details></customer-details>`);
const spy=Sinon.spy(el,'submitHandler');
const tags=el.shadowRoot.querySelector('lion-input')[0];
tags.click();
expect(spy.calledOnce).to.be.true;
});
it('checks for another  fun spy',async ()=>{
    const el=await fixture(html `<customer-details></customer-details>`);
    const spys=Sinon.spy(el,'_toEmidetails');
    spys();
    expect(spys.called).to.be.true;
});
it('checks for another spy',async ()=>{
    const el=await fixture(html `<customer-details></customer-details>`);
    const spys=Sinon.stub(el,'getMessage').returns('This is a valid');
    el.getMessage();
    expect(spys.called).to.be.true;
});
it('checks for handlers',async ()=>{
    const el=await fixture(html `<customer-details></customer-details>`);
    const vars=el.shadowRoot.querySelector('.validators')
   expect(vars).to.be.accessible();

})
});
