import React from "react"
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { withStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'

const Nform = theme => ({
  mailForm: {
    textAlign: 'center',
  },
  emailInput :{
    backgroundColor: 'white',
    width: '300px',
    paddingBottom: '20px',
  }
});



class MailchimpForm extends React.Component {
  constructor() {
    super();
    this.state = {email: null};
  }
  handleChange = (event) => {
    this.setState({email: event.target.value});
  }
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email)
    .then(data => {
      console.log(data)
    })
    .catch(() => {

    })
  }
  render() {
    const { classes } = this.props;

    return(
      <form className={classes.mailForm} onSubmit={this._handleSubmit}>

      <TextField
      id="outlined-email-input"
      label="Email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="outlined"
      onChange={this.handleChange}
      />
      <br/>
      <Button variant="success"  label="submit" type="submit">
      Receive newsletter
      </Button>
      </form>
      )
    };


}

MailchimpForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(Nform)(MailchimpForm)
