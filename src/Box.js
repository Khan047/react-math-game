import React from 'react';

class Box extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div
        className="box"
        style={{ backgroundColor: '' }}
        draggable='true'
        onDragStart={this.props.onDragStart({ id: this.props.id })}
        onDragOver={this.props.onDragOver({ id: this.props.id })}
        onDrop={this.props.onDrop({ id: this.props.id })}
          >
          <div className="content">{this.props.box}</div>
        </div>
      );
    }
  }

  export default  Box;