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
              <Button onClick={this.clicked} variant="raised" color="primary">
                {this.state.count}
              </Button>

          </div>
        )


    }

}

export default TextFieldExampleSimple;
