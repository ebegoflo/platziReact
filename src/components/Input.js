import React from 'react';
import TextField from 'material-ui/TextField';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>

      <Input
        placeholder="Escribe una nota"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
          'width':'100%'
        }}
      />


    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);
