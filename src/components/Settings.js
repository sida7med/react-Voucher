import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Menu from "./Menu";
import BookingForm from "./BookingForm";
var countryList = require("./countries");
//====================================
class Settings extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({agency:
    	{
    		agencyName:""
    		,rc:""
    		,taxCode:""
    		,email:""
    		,phone:""
    		,fax:""
    		,country:"Afghanistan"
    		,city:""
    		,zipCode:""
    		,adresse:""
    		,otherInfo:""
    		,logo:""
    		,imagePreviewUrl:""
    		,layout:"invoice1"
    	}
    	,style1:"layout clicked"
    	,style2:"layout"
    	,style3:"layout"
    	,style4:"layout"
    	,style5:"layout"
    });
    this.onSubmit=this.onSubmit.bind(this);
    this.handleChangeAgencyName=this.handleChangeAgencyName.bind(this);
    this.handleChangeRc=this.handleChangeRc.bind(this);
    this.handleChangeTax=this.handleChangeTax.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangePhone=this.handleChangePhone.bind(this);
    this.handleChangeFax=this.handleChangeFax.bind(this);
    this.handleChangeCountry=this.handleChangeCountry.bind(this);
    this.handleChangeCity=this.handleChangeCity.bind(this);
    this.handleChangeZipCode=this.handleChangeZipCode.bind(this);
    this.handleChangeAdresse=this.handleChangeAdresse.bind(this);
    this.handleChangeOtherInfo=this.handleChangeOtherInfo.bind(this);
    this.handleChangeLogo=this.handleChangeLogo.bind(this);
    this.handleChoiceInvoice1=this.handleChoiceInvoice1.bind(this);
    this.handleChoiceInvoice2=this.handleChoiceInvoice2.bind(this);
    this.handleChoiceInvoice3=this.handleChoiceInvoice3.bind(this);
    this.handleChoiceInvoice4=this.handleChoiceInvoice4.bind(this);
    this.handleChoiceInvoice5=this.handleChoiceInvoice5.bind(this);
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
  onSubmit(event)
  {
  	event.defaultPrevented;
    axios.post('/facture',{
      valueName:'seif'
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  handleChangeAgencyName(event) {
  	const values=this.state.agency;
  	values.agencyName=event.target.value;
    this.setState({agency:values});
  }
  handleChangeRc(event) {
	const values=this.state.agency;
  	values.rc=event.target.value;
    this.setState({agency:values});
  }
  handleChangeTax(event) {
    const values=this.state.agency;
  	values.tax=event.target.value;
    this.setState({agency:values});
  }

  handleChangeEmail(event) {
    const values=this.state.agency;
  	values.email=event.target.value;
    this.setState({agency:values});
  }
  handleChangePhone(event) {
  	const values=this.state.agency;
  	values.phone=event.target.value;
    this.setState({agency:values});
  }
  handleChangeFax(event) {
	const values=this.state.agency;
  	values.fax=event.target.value;
    this.setState({agency:values});
  }
  handleChangeCountry(event) {
    const values=this.state.agency;
  	values.country=event.target.value;
    this.setState({agency:values});
  }

  handleChangeCity(event) {
    const values=this.state.agency;
  	values.city=event.target.value;
    this.setState({agency:values});
  }
  handleChangeZipCode(event) {
  	const values=this.state.agency;
  	values.zipCode=event.target.value;
    this.setState({agency:values});
  }

  handleChangeAdresse(event) {
    const values=this.state.agency;
  	values.adresse=event.target.value;
    this.setState({agency:values});
  }
  handleChangeOtherInfo(event) {
  	const values=this.state.agency;
  	values.otherInfo=event.target.value;
    this.setState({agency:values});
  }
  handleChangeLogo(event)
  {
  	event.preventDefault();

    let reader = new FileReader();
    let logo = event.target.files[0];
    console.log(event.target.files[0]);
    reader.onloadend = () => {
      this.setState({
        logo: logo,
        imagePreviewUrl: reader.result
      });
  }
  reader.readAsDataURL(logo);
}	
  handleChoiceInvoice1()
  {
  	const values=this.state.agency;
    values.layout ="invoice1";
  	this.setState({agency:values,style1:"layout clicked",style2:"layout",style3:"layout",style4:"layout",style5:"layout"});
  }
  handleChoiceInvoice2()
  {
	const values=this.state.agency;
    values.layout ="invoice2";
  	this.setState({agency:values,style2:"layout clicked",style1:"layout",style3:"layout",style4:"layout",style5:"layout"});
  }
  handleChoiceInvoice3()
  {
  	const values=this.state.agency;
    values.layout ="invoice3";
  	this.setState({agency:values,style3:"layout clicked",style2:"layout",style1:"layout",style4:"layout",style5:"layout"});
  }
  handleChoiceInvoice4()
  {
  	const values=this.state.agency;
    values.layout ="invoice4";
  	this.setState({agency:values,style4:"layout clicked",style2:"layout",style3:"layout",style1:"layout",style5:"layout"});
  }
  handleChoiceInvoice5()
  {
  	const values=this.state.agency;
    values.layout ="invoice5";
  	this.setState({agency:values,style5:"layout clicked",style2:"layout",style3:"layout",style4:"layout",style1:"layout"});
  }
  render()
  {
  	/////////////////////coutries and cities

  	let countries=  countryList.countries ;
    let country_list=[];
    let city_list=[];
    country_list=countries.map((country)=><option key={country.country} value={country.country}>{country.country}</option>);
    for (let i = 0; i< countries.length; i++) {
    	if (this.state.agency.country===countries[i].country) {
    		console.log(countries[i].states);
    		city_list=countries[i].states.map((state)=><option key={state} value={state}>{state}</option>);
    	}
    }
  	////////////////////////////////////////

  	  	let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} width="100px" height="100px" />);
    } else {
      $imagePreview = (<img src="placeholder.png" width="100px" height="100px"/>);
    }
    console.log(this.state);

    return(
      <div>
        <Menu/>
        <div className="bookingForm">
        	<form onSubmit={this.handleSubmit}>
        		<div className="booking">
	        	<div className="head">
		        <div className="titre"> Settings  </div>
		       
		        <div className="space"></div>
		        <div className="print" onClick={this.onSubmit}>Save</div>
	      		</div>

	      		<div className="form">
			    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Agency Name
			    	</label>
			    	<input className="client" type="text" value={this.state.agency.agencyName} onChange={this.handleChangeAgencyName} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	RC
			    	</label>
			    	<input type="text" value={this.state.agency.rc} onChange={this.handleChangeRc} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	Tax Code
			    	</label>  
			    	<input type="number" value={this.state.agency.tax} onChange={this.handleChangeTax} />        
	 		    	</div>
			    	</div>
			    	<br/>
			    	<br/>
			    	<div className="separator"/>
			    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Email
			    	</label>
			    	<input className="client" type="email" value={this.state.agency.email} onChange={this.handleChangeEmail} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	Phone
			    	</label>
			    	<input type="number" value={this.state.agency.phone} onChange={this.handleChangePhone} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	Fax
			    	</label>  
			    	<input type="text" value={this.state.agency.fax} onChange={this.handleChangeFax} />        
	 		    	</div>
			    	</div>
			    	<br/>
			    	<br/>
			    	<div className="separator"/>
			    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Country
			    	</label>
			    	<select className="client" value={this.state.agency.country} onChange={this.handleChangeCountry} >
			    		{country_list}
			    	</select>
			    	</div>
			    	<div className="box">
			    	<label>
			    	City
			    	</label>
			    	<select value={this.state.agency.city} onChange={this.handleChangeCity} >
			    		{city_list}
			    	</select>
			    	</div>
			    	<div className="box">
			    	<label>
			    	ZipCode
			    	</label>  
			    	<input type="number" value={this.state.agency.zipCode} onChange={this.handleChangeZipCode} />        
	 		    	</div>
	 		    	</div>
	 		    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Adresse
			    	</label>
			    	<textarea className="otherInfo" type="adresse" value={this.state.agency.adresse} onChange={this.handleChangeAdresse} />
			    	</div>
			    	</div>
			    	<br/>
			    	<br/>
			    	<div className="separator"/>
			    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Other info
			    	</label>
			    	<textarea className="otherInfo" value={this.state.agency.otherInfo} onChange={this.handleChangeOtherInfo} />
			    	</div>
			    	</div>
			    	<br/>
			    	<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Logo
			    	</label>
			    	</div>
			    	<div className="box">
			    	<div className="agencyLogo">
			    		{$imagePreview}
			    	</div>
			    	<input type="file" name="pic" id="pic" accept="image/*" value={this.state.agency.logo} onChange={(event)=>this.handleChangeLogo(event)}/>
			    	<div className="Upload" >Upload Logo</div>
			    	</div>
			    	</div>
			    </div>	
			    	<div className="invoice">
				<div className="tete">
			    	<div className="titre">Invoices layouts  </div>
    				</div>
    				<div className="core">	
    				<div className="ligne">
    					<div className={this.state.style1} onClick={this.handleChoiceInvoice1}>
			    		<div className="agencyLayout">
			    			<img src="invoices/doc3.png" width="140" height="200"/>
			    		</div>
			    		<label className="colorL">
			    		Blue
			    		</label>
			    		</div>
			    		<div className={this.state.style2} onClick={this.handleChoiceInvoice2}>
			    		<div className="agencyLayout">
			    			<img src="invoices/doc1.png" width="140" height="200"/>
			    		</div>
			    		<label className="colorL">
			    		Red
			    		</label>
			    		</div>
			    		<div className={this.state.style3} onClick={this.handleChoiceInvoice3}>
			    		<div className="agencyLayout">
			    			<img src="invoices/doc5.png" width="140" height="200"/>
			    		</div>
			    		<label className="colorL">
			    		Yallow
			    		</label>
			    		</div>
			    		<div className={this.state.style4} onClick={this.handleChoiceInvoice4}>
			    		<div className="agencyLayout">
			    			<img src="invoices/doc2.png" width="140" height="200"/>
			    		</div>
			    		<label className="colorL">
			    		Green
			    		</label>
			    		</div>
			    		<div className={this.state.style5} onClick={this.handleChoiceInvoice5}>
			    		<div className="agencyLayout">
			    			<img src="invoices/doc4.png" width="140" height="200"/>
			    		</div>
			    		<label className="colorL">
			    		Black
			    		</label>
			    		</div>
			    	</div>
			    </div>
			    </div>
	      		</div>
      		</form>
        </div>
      </div>
    );
  }
}
//====================================

export default Settings; 