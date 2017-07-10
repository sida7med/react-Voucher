import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import BookingForm from "./components/BookingForm";
import {Router, Route, browserHistory} from "react-router"  ;
import {Link} from "react-router"  ;
import axios from "axios";

//====================================
class Invoices extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  render()
  {
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/27/2017"}
                  ,{id:103,valueName:"Manaa Mohamed",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"06/04/2017"}]
    return(
      <div>
        <Menu/>
        <BookingForm persons={persons} bookings={bookings} options="pdf" name="Invoices"/>
      </div>
    );
  }
}
//====================================


//====================================
class Vouchers extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
  componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  render()
  {
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/27/2017"}
                  ,{id:103,valueName:"Manaa Mohamed",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"06/04/2017"}]
    return(
      <div>
        <Menu/>
        <BookingForm persons={persons} bookings={bookings} name="Vouchers"/>
      </div>
    );
  }
}
//====================================

//====================================
class Facture extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({users:[]});
  }
	componentDidMount()
  {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(response=>{
      this.setState({users:response.data.drinks});
    })
    .catch(function(error){
      console.log(error);
    })
  }
	render()
	{
    console.log(this.state.users);
    let persons=[];
    let latter;
   // this.state.users>5?latter=5:latter=this.state.users;
    for (var i = 0; i <= 1; i++) {
      persons=this.state.users.map((person)=>person.strDrink);
    }
    console.log(persons);
    let bookings=[{id:100,valueName:"Manaa Ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"06/29/2017"}
                  ,{id:101,valueName:"Chbil ahmed",valueHotel:"marina hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"05/21/2017"}
                  ,{id:102,valueName:"Seif Matallah",valueHotel:"Movenpique hotel",valueNights:4,valuePax:3,valueAgent:"Mazen",valueIn:"07/27/2017"}
                  ,{id:103,valueName:"Bouaouina ahmed",valueHotel:"Movenpique hotel",valueNights:2,valuePax:5,valueAgent:"Mazen",valueIn:"07/05/2017"}
                  ,{id:104,valueName:"Shimchikh ahmed",valueHotel:"Movenpique hotel",valueNights:6,valuePax:3,valueAgent:"Omar",valueIn:"07/06/2017"}
                  ,{id:105,valueName:"Manaa Aladin",valueHotel:"marina hotel",valueNights:10,valuePax:5,valueAgent:"Ali",valueIn:"07/07/2017"}
                  ,{id:106,valueName:"Manaa Aymen",valueHotel:"marina hotel",valueNights:2,valuePax:3,valueAgent:"Mazen",valueIn:"07/08/2017"}
                  ,{id:107,valueName:"Rostom Nouisser",valueHotel:"marina hotel",valueNights:2,valuePax:1,valueAgent:"Mazen",valueIn:"08/04/2017"}]
  	return(
			<div>
				<Menu/>
				<BookingForm persons={persons} bookings={bookings} options="all" name="Bookings"/>
			</div>
		);
	}
}
//====================================

class PrintPdf extends React.Component
{
    
    render() {

        return (
            <div>
                
            </div>
        );
    }
}


//====================================
class App extends React.Component
{
	
	render()
	{
		return(
			<Router history={browserHistory}>
				<Route path={"/bookings"} component={Facture}/>
        <Route path={"/vouchers"} component={Vouchers}/>
        <Route path={"/invoices"} component={Invoices}/>
        <Route path={"/dashboard"} component={Facture}/>	
        <Route path={"PdfStyle/:id"} component={PrintPdf}/>
        <Route path={"/settings"} component={Settings}/>
			</Router>
		);
	}
}

// ========================================

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
//=========================================
