import Sinon from 'sinon'
import { html,fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js';

describe('dashboard menu',() =>{
    it('checks dashboard menu',async ()=>{
     const el=await fixture(html `<dash-board></dash-board>`);
     const spy=Sinon.spy(el,'getOverview');
     el.firstUpdated();
     expect(spy.calledOnce).to.be.true;
    })
    })