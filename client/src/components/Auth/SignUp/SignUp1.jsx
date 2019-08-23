/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionCreators as infosUser } from '../../../store/Register';

class SignUp1 extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  // eslint-disable-next-line react/static-property-placement
  static contextTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object,
  };


  handleChangeEmail = (e) => this.setState({ email: e.target.value });


  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.actions.infosUser(this.state.email);
    this.props.history.push({
      pathname: '/signup2',
      state: { email: this.state.email },
    });


    // this.onFormSubmit(user);
  };


  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
          New Account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>

              <Form.Field>
                <input
                  icon="user"
                  onChange={this.handleChangeEmail}
                  placeholder="Enter your work email address"
                  type="email"
                  name="email"
                />
              </Form.Field>

              <Button primary color="teal" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            If you already Signed Up
            <Link to="signing">Sign In </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  (state) => state.register,
  (dispatch) => ({
    actions: bindActionCreators(infosUser, dispatch),
  }),
)(SignUp1);
