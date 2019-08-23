/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/SideMenu';
import './sideMenu.css';
import TextIcon from '../extension/TextIcon';
import ModalExampleMultiple from './ModalExampleMultiple';

// eslint-disable-next-line react/prefer-stateless-function
class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // eslint-disable-next-line consistent-return
  render() {
    const { activeItem } = this.state;

    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    console.log('state', this.props.state);
    if (this.props.state) {
      return (
        <Menu.Menu>
          {this.props.state.boardItems.map((val) => (
            <Menu.Item
              name={val}
              active={activeItem === { val }}
              onClick={this.handleItemClick}
              className="item"
            >
              {val}
            </Menu.Item>
          ))}
        </Menu.Menu>
      );
    }

    return false;
  }
}

const BoardListConnect = connect((state) => ({ state: state.boardItem }))(
  BoardList,
);

class SideMenu extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    activeItem: 'dashboard',
    activeBoard: false,
    activeBoardItems: false,
    // eslint-disable-next-line react/no-unused-state
    open: false,
  };

  // eslint-disable-next-line react/sort-comp
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // eslint-disable-next-line react/no-unused-state
  changeSize = () => this.setState({ smallSidebar: !this.props.smallMenu });

  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      activeBoard: !prevState.activeBoard,
    }));
    // console.log(this.state.activeBoard)
  };

  handleListBoard = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      activeBoardItems: !prevState.activeBoardItems,
    }));
  };

  // eslint-disable-next-line react/no-unused-state
  show = (dimmer) => () => this.setState({ dimmer, open: true });

  // eslint-disable-next-line react/no-unused-state
  close = () => this.setState({ open: false });

  handleClickFetch = () => {
    console.log(this);
    fetch(
      'http://localhost:3000/api/Users/1?access_token=MeQDHyQABUogPSctZSdGUirS5gI50hz6TPTH2lu4uXWkMBqZrEmWpaQYxOZmUmM6',
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ fecthtest: res.username });
        console.log(res);
      })
      // eslint-disable-next-line react/no-unused-state
      .catch(() => this.setState({ hasErrors: true }));
  };

  getMenu() {
    const { activeItem } = this.state;
    return (
      <Menu
        fixed="left"
        borderless
        className={`${this.props.smallMenu ? 'small-side' : ''} side`}
        vertical
      >
        <Menu.Item
          as={Link}
          to="/"
          name="inbox"
          active={activeItem === 'inbox'}
          onClick={this.handleItemClick}
        >
          <TextIcon hideText={this.props.smallMenu} color="teal" name="home">
            Inbox
          </TextIcon>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/appointments"
          name="My Week"
          active={activeItem === 'My Week'}
          onClick={this.handleItemClick}
        >
          <TextIcon hideText={this.props.smallMenu} name="calendar">
            My Week
          </TextIcon>
        </Menu.Item>

        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === 'boards'}
          name="boards"
        >
          <TextIcon hideText={this.props.smallMenu} name="users">
            <span onClick={this.handleClick}>Boards</span>
          </TextIcon>

          {this.state.activeBoard ? (
            <>
              <ModalExampleMultiple
                index={this.setWrapperRef}
                text={this.props.smallMenu}
              />
              <BoardListConnect />
            </>
          ) : null}

          {/* <Menu vertical  ref={this.setWrapperRef} style={{ position: 'absolute', fontSize: 18, right: -200, top: -13, width: 200 }}> */}
          {/* <ItemMenu item="Blank Board" /> */}
          {/* <ItemMenu item="Team Tasks" /><ItemMenu item="Social Media Schedule" /><ItemMenu item="Lead Management" /> */}
          {/* </Menu> */}
          {/* {this.state.activeBoardItems ? <BoardItemMenu index={`${this.setWrapperRef}`} /> : null} */}
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/card"
          name="dashboard"
          active={activeItem === 'dashboard'}
          onClick={this.handleClickFetch}
        >
          {this.state.fecthtest}
          <TextIcon hideText={this.props.smallMenu} name="time">
            Dashboard
          </TextIcon>
        </Menu.Item>

        {/* <Menu.Item as={Link} to={'/layout'} name='layout' active={activeItem === 'layout'}
                           onClick={this.handleItemClick}>
                    <TextIcon hideText={this.props.smallMenu} name='calendar'>
                        Layout
                    </TextIcon>

                </Menu.Item> */}
      </Menu>
    );
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
    return this.wrapperRef;
  };

  // handleClickOutside = event => {
  //     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //       alert('You clicked outside of me!');
  //     }
  //   }

  handleClickOutside = (event) => {
    if (this.wrapperRef) {
      // eslint-disable-next-line react/no-find-dom-node
      const domNode = ReactDOM.findDOMNode(this.wrapperRef);
      if (!domNode.contains(event.target)) {
        this.setState((prevState) => ({
          activeBoardItems: !prevState.activeBoardItems,
        }));
      }
    }
    console.log(this.props.smallMenu);
  };

  render() {
    return (
      <div className="parent">
        <div className={`${this.props.smallMenu ? 'small-side ' : ''}side`}>
          {this.getMenu()}
        </div>
        <div
          className={`${this.props.smallMenu ? 'small-content ' : ''}content`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

// const ModalExampleMultiple = props => (
//     <Modal
//       trigger={
//         <Button
//           icon={props.icon}
//           style={{
//             position: "relative",
//             right: -65,
//             top: -16,
//             width: 35,
//             height: 35
//           }}
//         />
//       }
//       style={{ width: 300, position: "absolute", left: 150, top: 100 }}
//     >
//       <Modal.Header>Modal #1</Modal.Header>
//       <Modal.Content>
//         <NestedModal name="Blank Board" primary="" />
//         <NestedModal name="Team Tasks" primary="" />
//         <NestedModal name="Social Media Schedule" primary="" />
//         <NestedModal name="Lead Management Schedule" primary="" />
//       </Modal.Content>
//       <Modal.Actions>
//         <NestedModal name="New Folder" setPrimary="true" />
//       </Modal.Actions>
//     </Modal>
//   )

export default connect(
  (state) => state.sideMenu,
  (dispatch) => bindActionCreators(actionCreators, dispatch),
)(SideMenu);
