import React from "react";
import ReactDOM from "react-dom";
import 'whatwg-fetch';
//====================================
class Tableau1 extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
					valueSearch:""
					,valueFrom:""
					,valueTo:""
					,valueDay:false
					,styleDay:"time"
					,valueMonth:false
					,styleMonth:"time"
					,valueWeek:false
					,styleWeek:"time"
					,valueOthers:false
					,styleOthers:"time"
		}
		this.handleChangeFrom=this.handleChangeFrom.bind(this);
		this.handleChangeTo=this.handleChangeTo.bind(this);
		this.handleEdit=this.handleEdit.bind(this);
		this.handleVoucher=this.handleVoucher.bind(this);
		this.handleInvoice=this.handleInvoice.bind(this);
		this.handleChangeSearch=this.handleChangeSearch.bind(this);
		this.handleTimeToday=this.handleTimeToday.bind(this);
		this.handleTimeWeek=this.handleTimeWeek.bind(this);
		this.handleTimeMonth=this.handleTimeMonth.bind(this);	
		this.handleTimeOthers=this.handleTimeOthers.bind(this);
    this.handlePdf=this.handlePdf.bind(this);	
	}
	handleChangeSearch(event)
	{
		  
		 this.setState({valueSearch: event.target.value});
		
	}
	handleChangeFrom(event)
	{
		 this.setState({valueFrom: event.target.value,valueDay:false,valueWeek:false,valueMonth:false,valueOthers:false,
			styleWeek:"time",styleMonth:"time",styleDay:"time",styleOthers:"time"});
	}
	handleChangeTo(event)
	{
		 this.setState({valueTo: event.target.value,valueDay:false,valueWeek:false,valueMonth:false,valueOthers:false,
			styleWeek:"time",styleMonth:"time",styleDay:"time",styleOthers:"time"});
	}
	handleTimeToday()
	{
		this.setState({valueDay:true,valueWeek:false,valueMonth:false,valueOthers:false,valueTo:null,valueFrom:null,
			styleWeek:"time",styleMonth:"time",styleDay:"time act",styleOthers:"time"});
	}
	handleTimeWeek()
	{
		this.setState({valueWeek:true,valueMonth:false,valueDay:false,valueOthers:false,valueTo:null,valueFrom:null,
			styleDay:"time",styleMonth:"time",styleWeek:"time act",styleOthers:"time"});
	}
	handleTimeMonth()
	{
		this.setState({valueMonth:true,valueWeek:false,valueDay:false,valueOthers:false,valueTo:null,valueFrom:null,
			styleWeek:"time",styleDay:"time",styleMonth:"time act",styleOthers:"time"});
	}
	handleTimeOthers()
	{
		this.setState({valueOthers:true,valueMonth:false,valueWeek:false,valueDay:false,valueTo:null,valueFrom:null,
			styleWeek:"time",styleDay:"time",styleMonth:"time",styleOthers:"time act"});
	}

	handleEdit(event)
	{
		 console.log("handlepdf is working");
	}
	handleVoucher(event)
	{
		 console.log("handlepdf is working");
	}
	handleInvoice()
	{
		//probably will become a link !!!
	}
	
  handlePdf()
  {
    // console.log("handlepdf is working");
    // var specialElementHandlers = {
    //   '#editor': function(element, renderer){
    //     return true;
    //   }
    // };

    // //browserHistory.push("PdfStyle/"+this.state);
    // let todayDate = new Date();
    // let doc = new jsPDF();
    
    // doc.fromHTML('hello', 15, 15, {
    //     'width': 170, 
    //     'elementHandlers': specialElementHandlers
    //   });
    

    //     doc.output('dataurl');
      }
	render()
	{
    console.log(this.props.options);
    let buttons=[];
    let key = Math.floor((Math.random()*100)+1);
    if (this.props.options=="all") {
      buttons.push(<button key={key} className="bouton" onClick={this.handelEdit}>Edit</button>);
      buttons.push(<button key={key+1} className="bouton" onClick={this.handelVoucher}>Voucher</button>);
      buttons.push(<button key={key+2} className="bouton" onClick={this.handelInvoice}>Invoice</button>);
    }
    else{
      buttons.push(<button key={key} className="bouton" onClick={this.handelPdf}>PDF</button>);
    }


		let filtered=this.props.bookings.filter(
           (person)=>{return (person.valueName.toLowerCase().indexOf(this.state.valueSearch.toLowerCase())!==-1);} 
          );
		let listBookings=[];
        
        //filtrage PAR JOUR,SEMAIN ET MOIS !!!!!!!!!!!!!!

        let today=new Date();
        let firstDay=new Date();
        let f=new Date(this.state.valueFrom);
        let t=new Date(this.state.valueTo);
        for (var i = 0; i <filtered.length; i++) {
        	console.log("******");
        	let d=new Date(filtered[i].valueIn);
        	console.log(today.getDay());
        	if ((!this.state.valueDay)&&(!this.state.valueWeek)&&(!this.state.valueMonth)&&(!this.state.valueFrom)&&(!this.state.valueTo)) {
        		listBookings.push(<tr>
  				<td>{filtered[i].id}</td>
  				<td>{filtered[i].valueName}</td>
  				<td>{filtered[i].valueHotel}</td>
  				<td>{filtered[i].valueNights}</td>
  				<td>{filtered[i].valuePax}</td>
  				<td>{filtered[i].valueAgent}</td>
  				<td>{filtered[i].valueIn}</td>
  				<td>{buttons}</td>
  				</tr>);
        	}
        	
        	else if ((this.state.valueDay)&&(d.getUTCDate()+1===today.getUTCDate())&&(d.getMonth()===today.getMonth())&&(d.getFullYear()===today.getFullYear())) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
  					
        		}
        ///////////////////////////////////////////////////////////////////////////////////////////////	
        	
        	else if ((this.state.valueWeek)&&
        		((d<=today)&&(d.getTime()>=firstDay.setTime(today.getTime() - today.getDay()* 24 * 3600 * 1000)))) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}																				////////CHECK IF THE DATE SHOULD START FROM TODAY AND DOWN !!!!!!
        		

        	else if ((this.state.valueMonth)&&
        		(d.getMonth()===today.getMonth())&&(d.getFullYear()===today.getFullYear())) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}
        	///////////////////////////////////////////////////////////////////////////////////////////	
        	else if ((this.state.valueOthers)&&
        		((!this.state.valueDay)&&(!this.state.valueWeek)&&(!this.state.valueMonth))) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}
        	else if ((this.state.valueFrom)&&(!this.state.valueTo)&&
        		(d>=f)) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}
        	else if ((this.state.valueTo)&&(!this.state.valueFrom)&&
        		(d<=t)) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}
        	else if ((this.state.valueTo)&&(this.state.valueFrom)&&
        		(d>=f)&&(d<=t)) {
        			listBookings.push(<tr>
  					<td>{filtered[i].id}</td>
  					<td>{filtered[i].valueName}</td>
  					<td>{filtered[i].valueHotel}</td>
  					<td>{filtered[i].valueNights}</td>
  					<td>{filtered[i].valuePax}</td>
  					<td>{filtered[i].valueAgent}</td>
  					<td>{filtered[i].valueIn}</td>
  					<td>{buttons}</td>
  					</tr>);
        		}	
       	
       
        	}		






        let listNames=[];
        listNames=this.props.bookings.map((booking)=>booking.valueName);
        let queryNames=[];
        let id;
        for (let i = 0; i < listNames.length; i++) {
        id = Math.floor((Math.random()*100)+1);
           queryNames.push(<option key={id} className="sugg" value={listNames[i]} onClick={()=>this.setState({valueSearch:name})}/>)
        }

		return(
			
      <div className={this.props.display}>
        <div className="head">
        <div className="titre"> {this.props.name}  </div>
        <div className="seek">
        <div className="searchIcon">
        	<img src="./search.png" width="30px" height="30px"></img>
        </div>
        <input list="names" className="searchBox" placeholder="Search for anything" type="search" value={this.state.valueSearch} onChange={this.handleChangeSearch} />
         <datalist id="names"> 
        	{queryNames}
        </datalist>
      	</div>
        <div className="space"></div>
        <div className="print" onClick={this.props.onClick}>New</div>
      </div>
      
      <div className="lign">
      <div className="tet">
      	<div className={this.state.styleDay} onClick={this.handleTimeToday}>Today</div>
      	<div className={this.state.styleWeek} onClick={this.handleTimeWeek}>This week</div>
      	<div className={this.state.styleMonth} onClick={this.handleTimeMonth}>This month</div>
      	<div className={this.state.styleOthers} onClick={this.handleTimeOthers}>Other dates</div>
      	<div className="space"></div>
      	<div className="right">
      	<div className="bornes">
      	<div className="nom">From:</div>
      	<input className="nomm" type="date" value={this.state.valueFrom} 
      	onChange={this.handleChangeFrom} placeholder="mm/jj/yy" />
    	</div>
    	<div className="bornes">
    	<div className="nom">To:</div>
    	<input className="nomm" type="date" value={this.state.valueTo} 
      	onChange={this.handleChangeTo} placeholder="mm/jj/yy" />	
    	</div>
		</div>      
      </div>
      </div>
      <div className="lign">
      	<div className="tet">
  		<table rules="all">	
  			<thead>
  			<tr>
  				<th>No°</th>
  				<th>Client</th>
  				<th>Hotel</th>
  				<th>Nights</th>
  				<th>Pax</th>
  				<th>Agent</th>
  				<th>Booking Date</th>
  				<th /*colspan="2"*/>Actions</th>
  			</tr>
  			</thead>
  			<tbody>
  			{listBookings}
  			</tbody>	
		</table>
      	</div>
      </div>
      </div>

		);
	}
}
export default Tableau1;