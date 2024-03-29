import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import $ from 'jquery'
import Navigation from './modules/navigation.js'
import Home from './views/home.js'
import About from './views/about.js'
import Services from './views/services.js'
import Information from './views/information.js'
import Contact from './views/contact.js'

const app = function() {
  //SMOOTH SCROLLING EFFECT
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});



class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    return (
      <div>
        <Navigation/>
        <Home/>
        <About/>
        <Services/>
        <Information/>
        <Contact/>
      </div>
      )
  }
}

	ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
    ),document.querySelector('.app'))
}




app()