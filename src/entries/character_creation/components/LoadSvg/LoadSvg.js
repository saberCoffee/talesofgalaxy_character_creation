// Node Modules
import React from 'react';

class LoadSvg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svg: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.loadSvg(nextProps.svgName, nextProps.color);
  }

  componentDidMount() {
    this.loadSvg(this.props.svgName, this.props.color);
  }

  loadSvg = (svgName, color) => {
    let svg;

    switch (svgName)
    {
      case 'cross':
        svg = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M590.007,678.662l6.655-6.655,1.331,1.331-6.655,6.655Zm0-5.324,1.331-1.331,6.655,6.655-1.331,1.331Z" transform="translate(-590 -672)"/></svg>;
        break;

      case 'triangle':
        svg = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7"><path d="M721,638h8l-4,7Z" transform="translate(-721 -638)"/></svg>;
        break;

      case 'tick':
        svg = <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74"> <path d="M827,754a37,37,0,1,1-37,37A37,37,0,0,1,827,754Zm0,5a32,32,0,1,1-32,32A32,32,0,0,1,827,759Zm12.524,20.453-16.736,16.379a1.717,1.717,0,0,1-2.391,0l-5.977-5.85a1.717,1.717,0,0,0-2.391,0l-2.391,2.34a1.63,1.63,0,0,0,0,2.34l7.173,7.019,3.586,3.51a1.717,1.717,0,0,0,2.391,0l3.586-3.51,17.931-17.548a1.629,1.629,0,0,0,0-2.34l-2.391-2.34A1.716,1.716,0,0,0,839.524,779.452Z" transform="translate(-790 -754)" fill={color}/></svg>;
        break;

      case 'userDefault':
        svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.84 68.72"><path d="M43,35.51l-.82-.15C40.89,34.9,39.38,34.14,39,33a3.26,3.26,0,0,1,.57-2.62l.1-.12.39-.37c3.77-3.85,7.34-14.74,4.13-22.38C42.73,4.1,39.34,0,31.37,0S20,4.1,18.56,7.54c-3.21,7.63.36,18.52,4.13,22.37.13.14.26.26.39.38l.1.12A3.22,3.22,0,0,1,23.75,33c-.39,1.14-2,1.9-3.21,2.35l-.78.15C11,37.2,0,39.29,0,59.18c0,8.61,21.79,9.54,31.16,9.54h.53a126.21,126.21,0,0,0,16.06-1.08c10.16-1.46,15.09-4.22,15.09-8.46C62.84,39.23,51.84,37.17,43,35.51ZM21.7,8.86c1.54-3.67,4.71-5.46,9.67-5.46s8.13,1.79,9.68,5.46c2.55,6.06-.32,15.51-3.42,18.68-.11.11-.22.2-.33.3l-.14.13a1.43,1.43,0,0,0-.3.35c-1.66,2.59-1.5,4.6-1.08,5.82a6.21,6.21,0,0,0,2.61,3.15l.49.32-7.51,8.22-7.51-8.22.49-.33A6.25,6.25,0,0,0,27,34.15c.43-1.23.59-3.24-1.08-5.84a1.87,1.87,0,0,0-.29-.34l-.13-.11a3.43,3.43,0,0,1-.33-.32C22,24.37,19.15,14.92,21.7,8.86ZM47.27,64.28a121.72,121.72,0,0,1-15.59,1h-.52c-15.57,0-27.76-2.7-27.76-6.14,0-17.08,8.13-18.62,16.73-20.26l.28-.05L30.12,49.5a1.76,1.76,0,0,0,2.51,0l9.72-10.65.28,0c8.65,1.62,16.82,3.15,16.82,20.28C59.45,60.8,56.25,63,47.27,64.28Z" fill={color}/></svg>;
        break;        
    }

    this.setState({svg});
  }

  render() {
    
    return (
      <div className={this.props.className} onClick={this.props.handleClick}>
        {this.state.svg}
      </div>
    );
  }
}

export default LoadSvg;
