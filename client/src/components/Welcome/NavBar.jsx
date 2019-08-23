import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import {
  Menu, Container, Dropdown, Image,
} from 'semantic-ui-react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
// import LoginPage from '../auth/LoginPage';
// import RegisterPage from '../auth/RegisterPage';
import { relative } from 'path';
import Logo from '../../logo2.png';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'Product',

    };
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;


    return (
      <Container style={{ position: 'absolute', right: -450 }}>
        <Menu pointing secondary style={{ width: 0 }}>
          <Menu.Menu position="right">
            <Menu.Item name="Product" active={activeItem === 'Product'} onClick={this.handleItemClick} />
            {/* <Menu.Item

                    name='Use Cases'
                    active={activeItem === 'Use Cases'}
                    onClick={handleItemClick}
                  /> */}
            <Menu.Item
              name="Use Cases"
              active={activeItem === 'Use Cases'}
              onClick={this.handleItemClick}
            />
            <Dropdown
              item
              text="Why monday.com"
              name="Why monday.com"
              // active={activeItem === 'Why monday.com'}
              onClick={this.handleItemClick}
            >
              <Dropdown.Menu>
                <Dropdown.Item>Project Management</Dropdown.Item>
                <Dropdown.Item>Creative Agencies</Dropdown.Item>
                <Dropdown.Item>Marketing & PR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item
              name="Pricing"
              active={activeItem === 'Pricing'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Contact Sales"
              active={activeItem === 'Contact Sales'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="signing"
              name="signing"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Image
          src={Logo}
          style={{
            width: 200, position: relative, right: 650, top: -50,
          }}
        />

        {/* <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} /> */}
      </Container>
    );
  }
}
