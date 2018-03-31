// Node Modules
import React from 'react';

// Styles
import styles from './Question.scss';

class Question extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      questionText: '',
      animation: null,
      loading: true
    };
  }

  componentDidMount() {
    const animation = setInterval(() => {
      this.animateText();
    }, 35);
  }

  animateText = () => {
    let { questionModel, character } = this.props;
    let { questionText, animation, loading } = this.state;

    questionText = questionModel.getText({ character }).substring(0, questionText.length + 1);

    if (questionText.length === questionModel.getText({ character }).length) {
      loading = false;
      clearInterval(animation);
    }

    this.setState({ questionText, loading });
  }

  render() {
    const { questionModel } = this.props;
    const { questionText, loading } = this.state;

  	return (
  		<div className={styles.className}>
        <h1>{questionText}</h1>
        {!loading && (
          questionModel.options.map(option => {
            return (
              <div key={option.id}>
                {option.text}
                {/* <input
                  type="text" autoComplete="new-password"
                  onChange={this.handleChange}
                  value={value}
                /> */}
                <div onClick={() => this.submitAnwser({ option })}>submit</div>
              </div>
            )}
          )
        )}
  		</div>
  	);
  }
}

export default Question