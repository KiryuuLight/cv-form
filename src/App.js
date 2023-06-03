import React, { Component } from 'react';

import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <>
        <Form
          title={'General Info'}
          bgColor={'grey'}
          arrayText={['Name', 'Email', 'Phone number']}
        />
        <Form
          title={'Educational Experience'}
          bgColor={'yellow'}
          arrayText={['School Name', 'Date of study', 'Title of study']}
        />
        <Form
          title={'Practical Experience'}
          bgColor={'aqua'}
          arrayText={['Company Name', 'Contributions', 'Position title']}
        />
      </>
    );
  }
}

export default App;
