// make React available
import React from 'react';

import renderer from 'react-test-renderer';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

//make the Card component available
import List from './List';

//this is the test case
describe('List Componet', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<List 
        header={''}
        cards={[]}
        />, 
        div);


    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
     .create(<List
        header={''}
        cards={[]}
        />)
     .toJSON();
     expect(tree).toMatchSnapshot();
  });
});