// import './dashboard/Dashboard-menu.js';
 import Sinon from 'sinon'
import { html,fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard-menu.js'

describe('dashboard menu',() =>{
it('checks dashboard menu',async ()=>{
 const el=await fixture(html `<dashboard-menu></dashboard-menu>`);
 const spy=Sinon.spy(el,'navigateToDetails');
 el._setTypeInLS();
 expect(spy.calledOnce).to.be.true;
})
})