/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import './ModalExampleMultiple.css';
import { bindActionCreators } from 'redux';
import {
  Button,
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
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';
import TextIcon from '../extension/TextIcon';
import { add } from '../../actions/index';
// import { reducer, Items } from "../../reducers/Add";
// import { createStore } from "redux";

import { actionCreators as addAction } from '../../store/Add';


class NestedModal extends Component {
  // constructor(props) {
  //   super(props);

  //   // console.log(this.props)
  // }

  // Create the ref
  textInput = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      boardItems: [],
    };
  }


  handleSubmit = (e) => {
    const { boardItems } = this.state;
    e.preventDefault();
    const item = [`${this.textInput.current.value}`];
    this.setState((prevState) => ({
      boardItems: [...prevState.boardItems, ...item],
    }));
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-console
    console.log([...boardItems]);
  };

  open = () => this.setState({ open: true });

  close = (e) => {
    e.preventDefault();
    const item = [`${this.textInput.current.value}`];
    this.setState((prevState) => ({
      open: false,
      boardItems: [...prevState.boardItems, ...item],
    }));
    // console.log(this.textInput.current.value);
  };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { open, value } = this.state;
    const {
      name, other, tex, actions,
    } = this.props;

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size="small"
        trigger={
          other ? (
            <div
              style={{
                position: 'relative',
                left: 10,
                top: 10,
                height: 0,
              }}
            >
              <TextIcon hideText={tex} name="folder">
                <span fontSize="20">
                  {name}
                </span>
              </TextIcon>
            </div>
          ) : (
            <Button className="effects" floated="left" basic fluid>
              {name}
            </Button>
          )
        }
        style={{
          height: 300,
          width: 500,
          position: 'relative',
          left: 190,
          top: 300,
        }}
      >
        <Modal.Header>Create board</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={() => {
              actions.add2(this.textInput.current.value);
              // store.dispatch(add(this.textInput.current.value));
              // store.subscribe(() => console.log(store.getState()));
            }}
          >
            <Form.Field>
              <input
                type="text"
                defaultValue={name}
                ref={this.textInput}
                style={{
                  width: 450,
                  position: 'relative',
                  top: 15,
                }}
              />
            </Form.Field>

            <Form.Field
              style={{
                position: 'relative',
                top: 15,
              }}
            >
              <Radio
                label="Main"
                name="radioGroup"
                value="1"
                checked={value === '1'}
                onChange={this.handleChange}
              />

              <Radio
                label="Private"
                name="radioGroup"
                value="2"
                checked={value === '2'}
                onChange={this.handleChange}
                style={{ position: 'relative', left: 15 }}
              />

              <Radio
                label="Shareable"
                name="radioGroup"
                value="3"
                checked={value === '3'}
                onChange={this.handleChange}
                style={{ position: 'relative', left: 20 }}
              />
            </Form.Field>
            <Button icon="check" type="submit" primary content="Create" />
          </Form>
        </Modal.Content>
        <Modal.Actions
          style={{
            position: 'relative',
            left: 0,
            top: 180,
          }}
        />
      </Modal>
    );
  }
}

const other = 'yes';

const ModalExampleMultiple = ({ text }) => (
  <Modal
    trigger={(
      <div
        style={{
          position: 'relative',
          right: -120,
          top: -16,
          width: 35,
          height: 0,
        }}
      >
        <TextIcon hideText={text} name="plus square" />
      </div>
)}
    style={{
      width: 360,
      height: 300,
      position: 'relative',
      left: 190,
      top: 300,
    }}
  >
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content>
      <NestedModalConnect name="Blank Board" other={!other} />
      <NestedModalConnect name="Team Tasks" other={!other} />
      <NestedModalConnect name="Social Media Schedule" other={!other} />
      <NestedModal name="Lead Management propsSchedule" other={!other} />
    </Modal.Content>
    <Modal.Actions
      style={{
        position: 'relative',
        left: 0,
        top: 180,
      }}
    >
      <div
        style={{
          position: 'relative',
          left: -240,
          top: -10,
        }}
      >
        <NestedModalConnect other={other} name="New Folder" tex={text} />
      </div>
    </Modal.Actions>
  </Modal>
);

// export default connect(
//   state => state.sideMenu,
//    dispatch => {
//       return {
//           actions: bindActionCreators(Object.assign({}, sideAction, searchAction), dispatch)
//       }}
// )(TopMenu);

const NestedModalConnect = connect(
  (state) => state.boardItem,
  (dispatch) => ({
    actions: bindActionCreators(addAction, dispatch),
  }),
)(NestedModal);

export default ModalExampleMultiple;
