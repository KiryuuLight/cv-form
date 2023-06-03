import React, { Component } from 'react';
import InputForm from './InputForm';

const Button = ({ variant, text, onClick }) => {
  return !variant ? (
    <button className="btn" type="button" onClick={onClick}>
      {text}
    </button>
  ) : (
    <button className="btn btn-variant" type="submit">
      {text}
    </button>
  );
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      editMode: false,
      list: [],
      inputValues: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({
      show: false,
      editMode: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newArrayText = Object.values(this.state.inputValues);
    console.log(newArrayText);

    this.setState({
      show: true,
      editMode: false,
      list: [...this.state.list, ...newArrayText],
    });
  }

  handleData(text, data) {
    this.setState((prevState) => ({
      inputValues: {
        ...prevState.inputValues,
        [text]: data,
      },
    }));
  }

  iterateInput(arr) {
    return arr.map((text, index) => (
      <InputForm
        key={index}
        text={text}
        show={this.state.show}
        onChangeData={(e) => this.handleData(text, e.target.value)}
        editText={this.state.inputValues[text] || ''}
      ></InputForm>
    ));
  }

  render() {
    const { title, bgColor, arrayText } = this.props;
    const { show, editMode } = this.state;

    return (
      <form className="form-cv" onSubmit={this.handleSubmit}>
        <h4 className="form-title">{title}</h4>
        <div className={`section ${bgColor}`}>
          {this.iterateInput(arrayText, show && !editMode)}
        </div>

        <div className="button-position">
          <Button text={'Edit'} onClick={this.handleEdit} />
          <Button variant={true} text={'Submit'} />
        </div>
      </form>
    );
  }
}

export default Form;
