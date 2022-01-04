import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
it('checks for header',async ()=>{
  const el=await fixture(html`<loan-header></loan-header>`);
  const objs={e:{
    target:{
      id:'hi' && el.shadowRoot.getElementById('en-GB').classList.contains('btn-cursor'),
    }}}
    ;
  el.localeChanged(objs);
  expect(el).to.be.accessible();
})
});
