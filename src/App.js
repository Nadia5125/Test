import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, BrowserRouter } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
// import MovieApp from '../src/movie/MovieApp';

//this connection with the navigationbar
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Italic'}} to="/">Searchcury</Link>} scroll>
            <Navigation>
                <Link style={{fontFamily: 'Italic'}} to="/">Home</Link>                            
                <Link style={{fontFamily: 'Italic'}} to="/about">About</Link>
                <Link style={{fontFamily: 'Italic'}} to="/signup">Signup</Link>
                <Link style={{fontFamily: 'Italic'}} to="/login">Login</Link>
                <Link style={{fontFamily: 'Italic'}} to="/contact">Logout</Link>
                <Link style={{fontFamily: 'Italic'}} to="/movieApp">MovieApp</Link>
                 {/* <link exact path="/movieApp"  component={MovieApp}></link> />   */}
                
            </Navigation>
        </Header>

        
        {/* below is the for each link on the navbar drop on the left */}
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Italic'}} to="/">Searchcury</Link>}>
            <Navigation>
              <Link style={{fontFamily: 'Italic'}} to="/">Home</Link>
              <Link style={{fontFamily: 'Italic'}} to="/signup">Signup</Link>
              <Link style={{fontFamily: 'Italic'}} to="/about">About</Link>
              <Link style={{fontFamily: 'Italic'}} to="/login">Login</Link>
              <Link style={{fontFamily: 'Italic'}} to="/contact">Logout</Link>
              <Link style={{fontFamily: 'Italic'}} to="/movieApp">MovieApp</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
