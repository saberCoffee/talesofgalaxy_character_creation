// Node Modules
import React, { Component } from 'react';

// Components
import { get } from 'data';
import Question from './components/Question';

// Utils
import getQuestion from 'utils/questions/getQuestion';

// Styles
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    let { data } = this.props;

    this.state = {
      character: {},
      questionsList: data.questionsList,
      currentQuestion: {
        id: 0,
        version: 0
      },
      value: ''
    };
  }

  // updateCharacter = () => {
  //   let { data, data: { character, step1, step2, step3 } } = this.state;

  //   // let formData = step1.concat(step2, step3);
  //   let formData = step1;

  //   Object.keys(formData).forEach(key => {
  //     character[key] = formData[key].data.currentValue;
  //   });

  //   this.setState({data});
  // }

  handleChange = (e) => {
    let { value } = e.target;
    this.setState({ value });
  };

  validInput = () => {
    let { character, currentQuestion, value } = this.state;
    let question = getQuestion({ character, currentQuestion });

    question.setAnwser({ character, value });

    this.setState({
      currentQuestion: {
        id: question.options[0].goto.id,
        version: question.options[0].goto.version,
      }
    });
  }

  submitAnwser = ({ option }) => {
    let { character, questionsList, currentQuestion, value: text } = this.state;
    let question = getQuestion({ currentQuestion, questionsList });

    let callback = () => {
      let newCharacter = Object.assign({}, character);
      newCharacter[question.key] = text;

      this.setState({
        character: newCharacter,
        currentQuestion: {
          id: option.goto.id,
          version: option.goto.version,
        }
      });
    };

    let value = {
      text,
      option
    };
 
    question.setAnwser({ value, callback });
  }

  render() {
    let { character, questionsList, currentQuestion, value } = this.state;
    console.log(this.state)
    let questionModel = getQuestion({ currentQuestion, questionsList });

    return (
      <div className={styles.App}>
        <Question questionModel={questionModel} character={character} />
      </div>
    );
  }
}

export default App;