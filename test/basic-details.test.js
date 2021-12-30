import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const hi={
  hii:"hi"
}
const el=await fixture(html`<basic-details .values=${hi}></basic-details>`);

describe('Basic details', () => {
  
  it('hi',()=>{
  
    expect(el).to.be.accessible();
  });
  it('hi',()=>{
 
   expect(el.values.hii).to.equals('hi');
  });
  // Write test cases inside this block
  // refer basic-details.js files
});
