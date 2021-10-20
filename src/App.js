import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ListBlogs from './components/ListBlogs';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return(
      
      <React.Fragment>
        <Navbar></Navbar>
        
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/productlist" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={ListBlogs}></Route>
          <Route component={Default}></Route>
        </Switch>
       
        <Footer></Footer>
        <Modal></Modal>
        
      </React.Fragment>
    );
  }
}

export default App;
