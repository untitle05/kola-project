import React, { Component } from 'react';
import SideMenu from './layout/SideMenu';
import TopMenu from './layout/TopMenu';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // me: props.me
    };
  }

  render() {
    // const { children } = this.props;
    // console.log('App render', this.state.me);


    return (
      <>
        <div className="grid">
          <div className="menu">
            <TopMenu />
          </div>
          <div className="main-content">
            <SideMenu>
              {/* {children} */}
            </SideMenu>
          </div>
        </div>
      </>
    );
  }
}

export default App;


// import { Route } from 'react-router'
// import Layout from '.././layout/Layout'
// import Home from '.././pages/Home'
// import UserManagement from '.././pages/UserManagement'
// import CardForm from '.././pages/Card'

// export default () => (
//   <Layout>
//     <Route exact path='/' component={Home} />
//     <Route path='/userManagement' component={UserManagement} />
//     <Route path='/card' component={CardForm} />
//   </Layout>
// );
