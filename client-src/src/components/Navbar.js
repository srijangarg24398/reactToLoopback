import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
	render(){
		return(
			<div>
				
			  <nav className="blue darken-3">
				<div className="nav-wrapper">
				  <a href="/" className="brand-logo">Meetupz</a>
				  <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars fa-2x"></i></a>
				  <ul className="right hide-on-small-only">
					<li><Link to="/"><i className="fa fa-users fa-2x"></i>Meetups</Link></li>
					
				  </ul>
				  <ul className="side-nav" id="main-menu">
					<li><Link to="/"><i className="fa fa-users fa-2x"></i>Meetups</Link></li>
					<li><Link to="/meetups/add"><i className="fa fa-plus fa-2x"></i>Add Meetups</Link></li>
					<li><Link to="/about"><i className="fa fa-question-circle fa-2x"></i>About</Link></li>
				  </ul>
				</div>
			  </nav>
		  
			</div>
		)
	}
}

export default Navbar;