import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export class DropAnswers extends React.Component {
    render() {
      return (
        this.props.options.map( (item) => 
            <Dropdown.Item eventKey={item} key={item}>{item}</Dropdown.Item>
        )
      );
    }
}