// Node Modules
import React from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './Editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    const data = this.props.data;

    this.state = {
      placeholder : data.field.placeholder, 
      currentValue: data.currentValue
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', () => {
      // Si le champ est vide, reset le placeholder lors d'un clic sur la page
      if (!this.state.currentValue || this.state.currentValue === '<p><br></p>') {
        this.props.updateForm({
          id   : this.props.data.id,
          value: this.state.placeholder
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.data;

    if (!data.field.richtext && data.currentValue !== this.state.currentValue) {
      this.setState({currentValue: data.currentValue});
    } else if (data.field.richtext && data.currentValue === this.state.placeholder) {
      this.setState({currentValue: data.currentValue});
    }
  }

  /**
   * Retire le placehoder au clic sur un editeur de texte
   */
  removePlaceholder = () => {
    if (this.state.currentValue === this.state.placeholder || this.state.currentValue ===  '<p>' + this.state.placeholder + '</p>') {
      this.setState({currentValue: ''});
    }
  }

  handleChange = (value) => {
    this.setState({currentValue: value});
    this.props.handleChange(value);
  }

  render() {
    const data = this.props.data;

    const className = [styles.editor];

    if (this.state.currentValue === this.state.placeholder || this.state.currentValue ===  '<p>' + this.state.placeholder + '</p>') {
      className.push(styles.placeholder);
    }

    let editor;

    return(
      <div className={className.join(' ')}>    
        <textarea id={`form_${data.field.label.toLowerCase()}`} ref={(editor) => { this.editor = editor; }} 
          type="text" value={this.state.currentValue}
          onClick={this.removePlaceholder} onFocus={this.removePlaceholder} onChange={(e) => {this.props.handleChange(e.target.value)}}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
