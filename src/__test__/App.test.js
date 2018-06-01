import React from 'react'; 
import axios from 'axios';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import App from './../App'; 
import ReactTestUtils from 'react-dom/test-utils';

describe('[App.js]', () => {
  it('1. Renders without crashing', () => {
    const wrapper = renderer.create(
      <App />
    );

    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('2. Calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toBe(true);
  });

  it('3. Show form elements', () => {
    const wrapper = mount(
      <App />
    );

    const form = wrapper.find('form');
    expect(form.length).toBe(1);
    expect(form.find('input[type|="text"]').length).toBe(1);
    expect(form.find('select').length).toBe(1);
    expect(form.find('input[type|="submit"]').length).toBe(1);
  });

  it('4. Shows 3 projects', async() => {
    const wrapper = shallow(
      <App />
    );

    expect.assertions(1);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('projects').length).toBe(3);
  });

  it('5. Get promised todos v1', async() => {    
    expect.assertions(1);
    await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        expect(response.data.length).toBe(200);
      })
  });

  it('6. Get promised todos v2', () => {

    const onButtonClick = sinon.spy();
    const wrapper = render(<App onButtonClick={onButtonClick} />);
    // wrapper.find('input[type|="submit"]').simulate('click');
    expect(wrapper[0].children).toBe(1);
    // expect(onButtonClick).toHaveProperty('callCount', 1);

    // # working
    // const wrapper = mount(<App bar="baz" />);
    // expect(wrapper.props().bar).toEqual('baz');
    // wrapper.setProps({ bar: 'foo' });
    // expect(wrapper.props().bar).toEqual('foo');

    // var f = sinon.fake();
    // var date1 = new Date();
    // var date2 = 'fsfad';

    // f('sfsfs', date1);
    // f('a', 2, date2);

    // f.lastArg === date2;
    // expect(f.lastArg).toBe('fsfad');
    
    
    
    // expect.assertions(1);
    // await axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => {
    //     expect(response.data.length).toBe(200);
    //   })
    // const component = renderer.create(
    //   <App />
    // );

    // return ... then(data => {
    //   expect(data.name).toEqual('');
    // })
    
    // return App.getTodos().then(data => {
    //   expect(data.name).toEqual('shit shit');
    // })
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <Foo onButtonClick={onButtonClick} />
  //   ));
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });
});
