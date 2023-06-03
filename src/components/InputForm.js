import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      textInput: e.target.value,
    });
  }

  render() {
    const { text, show, onChangeData, editText } = this.props;

    return (
      <div className="input-form">
        <p>{`${text} :`}</p>
        {!show ? (
          editText !== undefined ? (
            <input
              type="text"
              required
              onChange={onChangeData}
              value={editText}
            />
          ) : (
            <input type="text" required onChange={onChangeData} />
          )
        ) : (
          <div className="underline">
            <p>{editText}</p>
          </div>
        )}
      </div>
    );
  }
}

export default InputForm;
