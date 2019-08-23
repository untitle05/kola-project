/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Button, Header, Icon, Modal, Menu,
} from 'semantic-ui-react';


class ItemMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  show = (dimmer) => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { item } = this.props;


    return (
      <div style={{ position: 'absolute', right: -140, top: 0 }}>

        <Button onClick={this.show(true)} basic fluid>{item}</Button>


        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          style={{
            width: 300,
            height: 300,
            position: 'absolute',
            left: 200,
            top: 300,
          }}
        >
          <Modal.Content>
            <p> hello!!!</p>
          </Modal.Content>

          <Modal.Actions>
          </Modal.Actions>

        </Modal>

      </div>
    );
  }


  // <Modal trigger={<Menu.Item >{props.item} </Menu.Item>} basic size='small'>
  //   <Header icon='archive' content='Archive Old Messages' />
  //   <Modal.Content>
  //     <p>
  // eslint-disable-next-line max-len
  //       Your inbox is getting full, would you like us to enable automatic archiving of old messages?
  //     </p>
  //   </Modal.Content>
  //   <Modal.Actions>
  //     <Button basic color='red' inverted>
  //       <Icon name='remove' /> No
  //     </Button>
  //     <Button color='green' inverted>
  //       <Icon name='checkmark' /> Yes
  //     </Button>
  //   </Modal.Actions>
  // </Modal>

  // function ItemMenu(props) {
  //     return (
  //         <Menu.Item >{props.item} </Menu.Item>
  //     )
  // }
}
export default ItemMenu;
