// Node Modules
import React from 'react';

// Styles
class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0,
      maxWidth: 0
    };
  }

  componentDidMount() {
    this.getStyle();
    document.addEventListener('scroll', () => this.getStyle());
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', () => this.getStyle());
  }

  getStyle = () => {
    const { element } = this.props;

    const rect = element.getBoundingClientRect();

    this.setState({
      top: rect.top + rect.height + 5,
      left: rect.left,
      maxWidth: rect.width
    });
  }

  render() {
    let { top, left, maxWidth } = this.state;

    return(
      <div className="help-tooltip" style={{ top, left, maxWidth }}>{this.props.children}</div>
    );
  }
}

export default Tooltip;