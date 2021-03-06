import React, {Component} from 'react';
import './index.css';

class Image extends Component {
  render() {
    const src = this.props.src || '##';
    const alt = this.props.alt || '';
    const style = `${this.props.grayscale ? 'img-gray' : ''} ${this.props.blur ? 'img-blur' : ''}`;

    return (
      <img src={src} alt={alt} width="100%" height="100%" className={style} />
    );
  }
}

export { Image };
