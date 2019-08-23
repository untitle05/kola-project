/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import "./ModalTriggerBoardItem.css";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Modal,
  Form,
} from 'semantic-ui-react';

class NestedModal extends Component {
  constructor(props) {
    super(props);

    // Create the ref
    this.textInput = React.createRef();

    this.state = {
      open: false,
      boardItems: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const item = [`${this.textInput.current.value}`];
    this.setState({
      boardItems: [...this.state.boardItems, ...item],
    });
    // eslint-disable-next-line no-console
    console.log([...this.state.boardItems]);
  };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  // eslint-disable-next-line react/no-unused-state
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { open } = this.state.open;
    const { name } = this.props;
    return (
      <div>
        <Modal
          open={open}
          onOpen={this.open}
          onClose={this.close}
          size="small"
          trigger={(
            <Button basic>
              {name}
              <Icon name="" />
            </Button>
)}
          closeIcon
          style={{
            width: 350, position: 'absolute', left: 350, top: 150,
          }}
        >
          <Modal.Header>Create board</Modal.Header>
          <Modal.Content>
            <Menu secondary vertical>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Last Name</label>
                  <input type="text" defaultValue={name} ref={this.textInput} />
                </Form.Field>
                <Button type="submit" onClose={this.close}>
                  Submit
                </Button>
              </Form>
            </Menu>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const ModalTriggerBoardItem = (props) => (
  <Modal
    trigger={(
      <Button
        icon={props.icon}
        style={{
          position: 'relative',
          right: -65,
          top: -16,
          width: 35,
          height: 35,
        }}
      />
)}
    style={{
      width: 300, position: 'absolute', left: 150, top: 100,
    }}
  >
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content>
      <NestedModal name="Blank Board" primary="" />
      <NestedModal name="Team Tasks" primary="" />
      <NestedModal name="Social Media Schedule" primary="" />
      <NestedModal name="Lead Management Schedule" primary="" />
    </Modal.Content>
    <Modal.Actions>
      <NestedModal name="New Folder" setPrimary="true" />
    </Modal.Actions>
  </Modal>
);

export default ModalTriggerBoardItem;


// import React, { Component } from "react";
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
//   Container,
//   Modal,
//   Form
// } from "semantic-ui-react";
// import TextIcon from "../extension/TextIcon";
// import { actionCreators } from "../../store/SideMenu";
// import "./sideMenu.css";


// class NestedModal extends Component {
//   constructor(props) {
//     super(props);

//     // Create the ref
//     this.textInput = React.createRef();

//     this.state = {
//       open: false,
//       boardItems: []
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     let item = [`${this.textInput.current.value}`];
//     this.setState({
//       boardItems: [...this.state.boardItems, ...item]
//     });
//     console.log([...this.state.boardItems]);
//   };

//   open = () => this.setState({ open: true });
//   close = () => this.setState({ open: false });

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { open } = this.state.open;
//     const { name } = this.props;
//     return (
//       <div>
//         <Modal
//           open={open}
//           onOpen={this.open}
//           onClose={this.close}
//           size="mini"
//           trigger={
//             <Button basic>
//               {name} <Icon name="" />
//             </Button>
//           }
//           closeIcon
//           style={{
//             width: 300,
//             height: 200,
//             position: "absolute",
//             left: 400,
//             top: 300
//           }}        >
//           <Modal.Header>Create board</Modal.Header>
//           <Modal.Content>
//             <Menu secondary vertical>
//               <Form onSubmit={this.handleSubmit}>
//                 <Form.Field>
//                   <input type="text" defaultValue={name} ref={this.textInput} />
//                 </Form.Field>
//                 <Button type="submit" onClose={this.close}>
//                   Submit
//                 </Button>
//               </Form>
//             </Menu>
//           </Modal.Content>
//         </Modal>
//       </div>
//     );
//   }
// }

// class ModalTriggerBoardItem extends Component {
//   state = { open: false };

//   show = dimmer => () => this.setState({ dimmer, open: true });
//   close = () => this.setState({ open: false });

//   render() {
//     const { open, dimmer } = this.state;

//     return (
//       <div>
//         {/* <Button onClick={this.show('inverted')}>Inverted</Button> */}

//         <div
//           onClick={this.show(true)}
//           style={{ position: "absolute", left: 140, top: 15 }}
//         >
//           <TextIcon hideText={this.props.smallMenu} name="plus square" />
//         </div>

//         <Modal
//           dimmer={dimmer}
//           open={open}
//           onClose={this.close}
//           style={{
//             width: 300,
//             height: 300,
//             position: "absolute",
//             left: 200,
//             top: 300
//           }}
//         >
//           <Modal.Content>
//           <NestedModal name="Blank Board" primary="" />
//           </Modal.Content>
//           <Modal.Actions>
//           </Modal.Actions>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalTriggerBoardItem;

// import React, { Component } from "react";
// import "./ModalTriggerBoardItem.css";
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
//   Container,
//   Modal,
//   Form
// } from "semantic-ui-react";

// class NestedModal extends Component {
//   constructor(props) {
//     super(props);

//     // Create the ref
//     this.textInput = React.createRef();

//     this.state = {
//       open: false,
//       boardItems: []
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     let item = [`${this.textInput.current.value}`];
//     this.setState({
//       boardItems: [...this.state.boardItems, ...item]
//     });
//     console.log([...this.state.boardItems]);
//   };

//   open = () => this.setState({ open: true });
//   close = () => this.setState({ open: false });

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { open } = this.state.open;
//     const { name } = this.props;
//     return (
//       <div>
//         <Modal
//           open={open}
//           onOpen={this.open}
//           onClose={this.close}
//           size="small"
//           trigger={
//             <Button basic>
//               {name} <Icon name="" />
//             </Button>
//           }
//           closeIcon
//           style={{ width: 350, position: "absolute", left: 350, top: 150 }}
//         >
//           <Modal.Header>Create board</Modal.Header>
//           <Modal.Content>
//             <Menu secondary vertical>
//               <Form onSubmit={this.handleSubmit}>
//                 <Form.Field>
//                   <label>Last Name</label>
//                   <input type="text" defaultValue={name} ref={this.textInput} />
//                 </Form.Field>
//                 <Button type="submit" onClose={this.close}>
//                   Submit
//                 </Button>
//               </Form>
//             </Menu>
//           </Modal.Content>
//         </Modal>
//       </div>
//     );
//   }
// }

// const ModalTriggerBoardItem = props => (
//   <Modal
//     trigger={
//         <Button
//         icon={props.icon}
//         style={{
//           position: "relative",
//           right: -65,
//           top: -16,
//           width: 35,
//           height: 10
//         }}
//       />
//     }
//     style={{ width: 300, height:400, position: "absolute", left: 200, top: 300 }}
//   >
//     <Modal.Header>Modal #1</Modal.Header>
//     <Modal.Content>
//       <NestedModal name="Blank Board" primary="" />
//       <NestedModal name="Team Tasks" primary="" />
//       <NestedModal name="Social Media Schedule" primary="" />
//       <NestedModal name="Lead Management Schedule" primary="" />
//     </Modal.Content>
//     <Modal.Actions>
//       <NestedModal name="New Folder" setPrimary="true" />
//     </Modal.Actions>
//   </Modal>
// );

// export default ModalTriggerBoardItem;
