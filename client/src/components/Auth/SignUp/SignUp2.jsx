/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
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
  Select,
  Checkbox,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionCreators as infosUser } from '../../../store/Register';
import { actionCreators as userToken } from '../../../store/AccessToken';

class SignUp2 extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      password: '',
      teamName: '',
      useOfType: '',
      peopleCollaborate: '',
      thingToManage: '',
      teamDomain: '',
      termsCond: '',
    };

    console.log(this.props.location.state.email);
  }

  // eslint-disable-next-line react/static-property-placement
  static contextTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object,
  };

  handleChangeFullName = (e) => this.setState({ fullname: e.target.value });

  handleChangePassword = (e) => this.setState({ password: e.target.value });

  handleChangeTeamName = (e) => this.setState({ teamName: e.target.value });

  handleChangeUseOfType = (e, { value }) => this.setState({ useOfType: value });

  handleChangePeopleCollaborate = (e, { value }) => this.setState({ peopleCollaborate: value });

  handleChangethingToManage = (e, { value }) => this.setState({ thingToManage: value });

  handleChangeTeamDomain = (e, { value }) => this.setState({ teamDomain: value });

  handleChangeTermsCond = (e, { checked }) => {
    console.log(checked);
    return this.setState({ termsCond: checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullname,
      password,
      teamName,
      useOfType,
      peopleCollaborate,
      thingToManage,
      teamDomain,
      termsCond,
    } = this.state;

    const { email } = this.props.location.state;
    console.log(email, password, fullname);
    const user = {
      fullname,
      password,
      teamName,
      useOfType,
      peopleCollaborate,
      thingToManage,
      teamDomain,
      termsCond,
      email,
    };

    console.log('user', user);
    this.userSignUp(user);

    // this.onFormSubmit(user);
  };

  userSignUp = (user) => fetch('http://localhost:3000/api/Users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      realm: user.fullname,
      username: user.fullname,
      email: user.email,
      password: user.password,
      emailVerified: true,
      teamName: user.teamName,
      useOfType: user.useOfType,
      peopleCollaborate: user.peopleCollaborate,
      thingToManage: user.thingToManage,
      teamDomain: user.teamDomain,
      termsCond: user.termsCond,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert('Error');
      } else {
      // this.props.history.push('/dashboard');
        console.log(this.props);
        this.props.actions.infosUser(user.fullname);

        fetch('http://localhost:3000/api/Users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: user.fullname,
            password: user.password,
          }),
        })
          .then((response) => response.json())
          .then((loginData) => {
            // eslint-disable-next-line no-console
            console.log(loginData);
            if (loginData.error) {
              // eslint-disable-next-line no-alert
              alert('Error');
            } else {
              this.props.actions.userToken(loginData.id);
              this.props.history.push('/dashboard');
            }
          });
      }
    });

  render() {
    const UseOfTypeOptions = [
      { key: 'wk', value: 'work', text: 'Work' },
      { key: 'per', value: 'personal', text: 'Personal' },
      { key: 'sch', value: 'school', text: 'School' },
    ];

    const PeopleCollaborateOptions = [
      { key: 'me', value: 'only-me', text: 'Only me' },
      { key: 'five', value: 'five', text: '2-5' },
      { key: 'ten', value: 'ten', text: '6-10' },
      { key: 'thir-five', value: 'thir-five', text: '11-15' },
      { key: 'twen-five', value: 'twen-five', text: '16-25' },
      { key: 'hundred', value: 'hundred', text: '51-100' },
      { key: 'five-hundr', value: 'five-hundr', text: '101-500' },
      { key: 'over', value: 'over', text: '500+' },
    ];

    const thingToManageOptions = [
      {
        key: 'proj-clien',
        value: 'projects for clients',
        text: 'Projects for clients',
      },
      {
        key: 'inside-proj',
        value: 'internal projects',
        text: 'Internal projects',
      },
      { key: 'todoList', value: "to-do's & lists", text: "To-do's & lists" },
      { key: 'sal-crm', value: 'sales & CRM', text: 'Sales & CRM' },
      {
        key: 'mark-crea',
        value: 'marketing & creative',
        text: 'Marketing & creative',
      },
      { key: 'prod-rd', value: 'products and R&D', text: 'Products and R&D' },
    ];

    const TeamDomainOptions = [
      { key: 'ad', value: 'administration', text: 'Administration' },
      { key: 'ac', value: 'accounting', text: 'Accounting' },
      { key: 'ar', value: 'architecture', text: 'Architecture' },
      { key: 'bi', value: 'bi', text: 'BI' },
      {
        key: 'bd',
        value: 'business development',
        text: 'Business development',
      },
      { key: 'bo', value: 'business owner', text: 'Business owner' },
      { key: 'five-hundr', value: 'five-hundr', text: '101-500' },
      { key: 'co', value: 'consulting', text: 'Consulting' },
      { key: 'cons', value: 'construction', text: 'Construction' },
      { key: 'cus', value: 'custom support', text: 'Custom support' },
      { key: 'da', value: 'data', text: 'data' },
      { key: 'de', value: 'design', text: 'Design' },
      { key: 'ed', value: 'education', text: 'Education' },
      { key: 'ev', value: 'events', text: 'Events' },
      { key: 'he', value: 'healthcare', text: 'Healthcare' },
      { key: 'hr', value: 'hr', text: 'HR' },
      { key: 'it', value: 'it', text: 'IT' },
      { key: 'ma', value: 'manufacturing', text: 'Manufacturing' },
      { key: 'mar', value: 'marketing', text: 'Marketing' },
      { key: 'op', value: 'operations', text: 'Operations' },
      { key: 'prm', value: 'product management', text: 'Product management' },
      { key: 'pjm', value: 'project management', text: 'Project management' },
    ];

    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Welcome to Monday.com
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Field>
                <input
                  onChange={this.handleChangeFullName}
                  placeholder="Enter Your FullName"
                  type="text"
                  name="fullname"
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

              <Form.Field>
                <input
                  icon="lock"
                  onChange={this.handleChangeTeamName}
                  placeholder="Team Name"
                  type="text"
                  name="teamName"
                />
              </Form.Field>

              <Form.Field>
                <Select
                  placeholder="What will you be using Monday.com for?"
                  onChange={this.handleChangeUseOfType}
                  options={UseOfTypeOptions}
                />
              </Form.Field>

              <Form.Field>
                <Select
                  placeholder="How many people do you want to collaborate?"
                  onChange={this.handleChangePeopleCollaborate}
                  options={PeopleCollaborateOptions}
                />
              </Form.Field>

              <Form.Field>
                <Select
                  placeholder="What is the main thing you want to manage?"
                  onChange={this.handleChangethingToManage}
                  options={thingToManageOptions}
                />
              </Form.Field>

              <Form.Field>
                <Select
                  placeholder="What does your team do?"
                  onChange={this.handleChangeTeamDomain}
                  options={TeamDomainOptions}
                />
              </Form.Field>

              <Form.Field>
                <Checkbox
                  onChange={this.handleChangeTermsCond}
                  label="I agree to the Terms of Uses and Privacy Policy"
                />
              </Form.Field>

              <Button primary color="teal" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}


export default connect(
  (state) => {
    const { register, accessToken } = state;
    return {
      state: { register, accessToken },
    };
  },
  (dispatch) => ({
    actions: bindActionCreators({ ...infosUser, ...userToken }, dispatch),
  }),
)(SignUp2);
