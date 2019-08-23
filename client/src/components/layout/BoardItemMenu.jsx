/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import ItemMenu from './ItemMenu';


class BoardItemMenu extends Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

    handleClick = (e) => {
      e.preventDefault();
      this.setState((prevState) => ({
        activeBoard: !prevState.activeBoard,
      }));
      // console.log(this.state.activeBoard)
    }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside, false)
    // }

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
      // eslint-disable-next-line react/destructuring-assignment
      // eslint-disable-next-line no-console
      console.log(this.state.activeBoardItems);
    }

    render() {
      return (
        <div>
          {this.state.activeBoardItems ? (
            <Menu
              vertical
              ref={this.setWrapperRef}
              style={{
                position: 'absolute', fontSize: 18, right: -200, top: -13, width: 200,
              }}
            >
              <ItemMenu item="Blank Board" />
              {/* <ItemMenu item="Team Tasks" />
                    <ItemMenu item="Social Media Schedule" />
                    <ItemMenu item="Lead Management" /> */}
            </Menu>
          ) : null}
        </div>
      );
    }
}

export default BoardItemMenu;
