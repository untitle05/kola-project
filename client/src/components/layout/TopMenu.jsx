/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {
  Icon,
  Image,
  Input,
  Label,
  Menu,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as sideAction } from '../../store/SideMenu';
import { actionCreators as searchAction } from '../../store/SearchStore';
import Notification from './Notification';
import Logo from '../../logo2.png';
import Avatar from '../../avatar.png';

class TopMenu extends Component {
  state = {};

  // eslint-disable-next-line react/no-unused-state
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  doSearch(event) {
    this.props.actions.search(event.target.value);
  }

  render() {
    const avatarName = this.props.state.register.fullname.split(' ')[0];
    return (
      <Menu fixed="top" className="top-menu">
        <Menu.Item className="logo-space-menu-item">
          <div className="display-inline logo-space">
            <Image src={Logo} />
          </div>
        </Menu.Item>

        <Menu.Item
          className="no-border"
          onClick={this.props.actions.toggleSideMenu}
        >
          <Icon name="bars" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item className="no-border" position="right">
            <Notification />
            <Label
              className="label-on-corner"
              color="teal"
              size="mini"
              floating
              circular
            >
              22
            </Label>
          </Menu.Item>
          <Menu.Item className="no-border" position="right">
            <div className="display-inline">
              <Image
                circular
                size="mini"
                src={Avatar}
              />
              {this.props.state.register.fullname.split(' ')[0]}
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default connect(
  (state) => {
    const { sideMenu, register } = state;
    return {
      state: { sideMenu, register },
    };
  },
  (dispatch) => ({
    actions: bindActionCreators({ ...sideAction, ...searchAction }, dispatch),
  }),
)(TopMenu);
