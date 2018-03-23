// Node Modules
import React from 'react';

// Styles
class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      left: 0,
      width: 0
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

    let top  = rect.top + rect.height + 5;
    let left = rect.left;    
    let width = rect.width;

    let style = {
      top,
      left,
      width
    };

    this.setState(style);
  }

  render() {
    let { top, left, width } = this.state;

    return(
      <div className="help-tooltip" style={{ top, left, width }}>{this.props.children}</div>
    );
  }
}

export default Tooltip;