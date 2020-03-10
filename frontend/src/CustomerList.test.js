import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from  "react-test-renderer";
import CustomersList from "./CustomersList";

import Enzyme, { shallow,mount } from 'enzyme';

describe('CustomersList', () => {
    let didMountSpy; // Reusing the spy, and clear it with mockClear()
    afterEach(() => {
      didMountSpy.mockClear();
    });
  
    didMountSpy = jest.spyOn(CustomersList.prototype, 'componentDidMount');
   it('renders without crashing', () => {
      mount(<CustomersList />);
    });
    it('check props',() => {
        const state={'customers': [{"pk":1,"first_name":"shimeng","last_name":"chen","email":"844650898@qq.com","phone":"123456789","address":"white house","description":"waterloo"}],'nextPageURL':  'alowha'}
        const wrapper=mount(<CustomersList  />);
        wrapper.setProps(state);
        expect(wrapper.props().customers).toEqual(state['customers']);
    });
    it('check table',() => {
        const cols = ['#','First Name','Last Name','Phone','Email','Address','Description','Actions'];
        const state={'customers': [{"pk":1,"first_name":"shimeng","last_name":"chen","email":"844650898@qq.com","phone":"123456789","address":"white house","description":"waterloo"}],'nextPageURL':  'alowha'};
        const wrapper=mount(<CustomersList  />);
        wrapper.setProps(state);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
        const headers = thead.find('th');
        expect(headers).toHaveLength(8);
        headers.forEach((th,idx)=>{
            expect(th.text()).toEqual(cols[idx]);
        });
    });
    test('should call did mount', () => {
        expect(didMountSpy).toHaveBeenCalledTimes(0);   
        const wrapper=mount(<CustomersList  />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
      });
});

