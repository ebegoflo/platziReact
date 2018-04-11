import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TextFieldExampleSimple extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 140
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked(e)
    {
        e.preventDefault();
        this.setState((prevState) => ({
            count:(prevState.count - 1)
        }));
    }

    render(){
        return(
            <div>
            <TextField
              hintText="Hint Text"
            /><br />
            <br />
      
            <Button onClick={this.clicked} variant="raised" color="primary">
              {this.state.count}
            </Button>
      
          </div>
        )
       

    }
    
}




export default TextFieldExampleSimple;

// import React from 'react';
// import Button from 'material-ui/Button';
//
//  const Button = () => (
//    <Button variant="raised" color="primary">
//      Hello World
//    </Button>
//  );
//
// export default Button
