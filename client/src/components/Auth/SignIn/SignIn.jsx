/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '../../../avatar.png';
import { actionCreators as userToken } from '../../../store/AccessToken';


// eslint-disable-next-line react/prefer-stateless-function
class SignIn extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    this.userSignIn(user);
  };

  userSignIn = (user) => fetch('http://localhost:3000/api/Users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log(data);
      if (data.error) {
        // eslint-disable-next-line no-alert
        alert('Error');
      } else {
        this.props.actions.userToken(data.id);
        this.props.history.push('/dashboard');
      }
    });

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={Logo} />
            Login to your account
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

              <Form.Field>
                <input
                  icon="lock"
                  onChange={this.handleChangePassword}
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
              </Form.Field>

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            If you already Signed Up
            <Link to="signup1">Sign Up </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  (state) => state.accessToken,
  (dispatch) => ({
    actions: bindActionCreators(userToken, dispatch),
  }),
)(SignIn);
