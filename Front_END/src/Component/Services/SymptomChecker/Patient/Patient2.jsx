import React, { Component } from "react";
import "./Patient2.css";

class Patient2 extends Component {
  state = {
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    next_button_available: "",
    all_answer: [],
  };

  handleOnChange = (e) => {
    const { className, value } = e.target;
    this.setState({ [className.split(" ")[1]]: value }, this.updateAnswers);
  };

  updateAnswers = () => {
    const {
      question_1,
      question_2,
      question_3,
      question_4,
      question_5,
      question_6,
    } = this.state;

    const allAnswers = [
      { question: "Patient is overweight or obese", answer: question_1 },
      { question: "Patient smokes cigarettes", answer: question_2 },
      { question: "Patient has been recently injured", answer: question_3 },
      { question: "Patient has high cholesterol", answer: question_4 },
      { question: "Patient has hypertension", answer: question_5 },
      { question: "Patient has diabetes", answer: question_6 },
    ];

    const nextButtonStatus = allAnswers.every((ans) => ans.answer !== "")
      ? "Available"
      : "Not available";

    this.setState({ all_answer: allAnswers, next_button_available: nextButtonStatus }, () => {
      this.props.callback(allAnswers, nextButtonStatus);
    });
  };

  renderQuestion = (label, className) => (
    <div className="radioButtonDiv">
      <div className="Tag">
       <h2>{label}</h2>
      </div>
      <form className="usa-form FormElement">
        {["Yes", "No", "Patient doesn't know"].map((option) => (
          <div className="usa-radio" key={option}>
            <input
              className={`usa-radio__input ${className}`}
              onChange={this.handleOnChange}
              type="radio"
              checked={this.state[className] === option}
              value={option}
              name={className}
              id={`${className}_${option}`}
            />
            <label className="usa-radio__label" htmlFor={`${className}_${option}`}>
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );

  render() {
    return (
      <div id="Patient2">
        {this.renderQuestion("I am overweight", "question_1")}
        {this.renderQuestion("I smoke cigarettes", "question_2")}
        {this.renderQuestion("I have recent injury", "question_3")}
        {this.renderQuestion("I have cholesterol", "question_4")}
        {this.renderQuestion("I have hypertension", "question_5")}
        {this.renderQuestion("I have diabetes", "question_6")}
      </div>
    );
  }
}

export default Patient2;
