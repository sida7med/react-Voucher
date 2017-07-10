import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import {Router, Route, browserHistory} from "react-router";
import 'whatwg-fetch';

//=================================================
function Menu (props){
	
		return(
			<div className="menu">
				<div className="hed1">
					<div className="logo">
						<img src="./connect.png" width="50px" height="50px"></img>
					</div>	
					<div className="user">
					Invoicer
					</div>
				</div>
				<div className="hed2">
					<div className="logo2">
						
					</div>	
					<div className="txt">
					Travel Agency Name
					</div>
					<div className="txxt">
					User Name . User Role
					</div>
				</div>
				<div className="hed3">
					
					<ul>
					  <li className="lien"><Link to={"/dashboard"}  className="x" activeClassName="xx">Dashboard </Link></li>
					  <li className="lien"><Link to={"/bookings"} className="x" activeClassName="xx">Bookings</Link></li>
					  <li className="lien"><Link to={"/vouchers"}  className="x" activeClassName="xx">Vouchers </Link></li>
					  <li className="lien"><Link to={"/invoices"}  className="x" activeClassName="xx">Invoices </Link></li>
					  <li className="lien"><Link to={"/customers"}  className="x" activeClassName="xx">Customers </Link></li>
					  <li className="lien"><Link to={"/users"}  className="x" activeClassName="xx">Users </Link></li>
					  <li className="lien"><Link to={"/team"}  className="x" activeClassName="xx">Team </Link></li>
					  <li className="lien"><Link to={"/jobs"}  className="x" activeClassName="xx">Jobs </Link></li>
					</ul>

				</div>
				<footer className="hed4" onClick={()=>browserHistory.push("/settings")}>
					<div className="logo">
						<img src="./connect.png" width="50px" height="50px"></img>
					</div>	
					<div className="user">
					Settings
					</div>
				</footer>	
			</div>		
		);
	
}

//=========================================
export default Menu;