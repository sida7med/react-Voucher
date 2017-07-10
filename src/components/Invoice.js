import React from "react";
import ReactDOM from "react-dom";
import 'whatwg-fetch';
//====================================
class Invoice extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
					valuePhone:""
					,valueEmail:""
					,valueAddress:""
		}
		this.handleChangePhone=this.handleChangePhone.bind(this);
		this.handleChangeEmail=this.handleChangeEmail.bind(this);
		this.handleChangeAddress=this.handleChangeAddress.bind(this);	
	}
	handleChangePhone(event)
	{
		 this.setState({valuePhone: event.target.value});
	}
	handleChangeEmail(event)
	{
		 this.setState({valueEmail: event.target.value});
	}
	handleChangeAddress(event)
	{
		 this.setState({valueAddress: event.target.value});
	}

	render()
	{
		
		let tableau=[];
    	let somme=0;
		for (let ii = 0; ii < this.props.info.valueAdds; ii++) {
		      let total=(this.props.nights)*(this.props.info.valueRoom[ii].valueUnit);
          somme+=total;
		      tableau.push(<tr>
			    			<td><div className="tab">{this.props.info.valueHotel}<br></br>Room: {this.props.info.valueRoom[ii].valueRoomtype} 
			    			 -{this.props.info.valueRoom[ii].valueBase}</div>	
			    			</td>
			    			<td><div className="tab">From {this.props.info.valueIn}<br></br>To {this.props.info.valueOut}</div></td>
			    			<td><div className="tab">{this.props.nights}</div></td>
			    			<td><div className="tab">{this.props.info.valueRoom[ii].valueRoomUnits}</div></td>
			    			<td><div className="tab">{this.props.info.valueRoom[ii].valueUnit} DT</div></td>
			    			<td><div className="tab">{total} DT</div></td>
			    		</tr>);
    	}
     	let tax=somme/10;
     	let resultat=somme+tax; 
		return(
			<div className="invoice">
				<div className="tete">
			    	<div className="titre">Invoice  </div>
			    	<div className="print">Print</div>
    			</div>
    			<div className="core">
    			<div className="ligne">
    				<label className="foulen">{this.props.name}</label>
    			</div>
    			<br/>
				<div className="ligne">
			    	<div className="box">
			    	<label>
			    	Phone Number
			    	</label>
			    	<input type="tel" value={this.state.valuePhone} onChange={this.handleChangePhone} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	E-mail
			    	</label>
			    	<input type="email" value={this.state.valueEmail} onChange={this.handleChangeEmail} />
			    	</div>
			    	<div className="box">
			    	<label>
			    	Address
			    	</label>  
			    	<input type="text" value={this.state.valueAddress} onChange={this.handleChangeAddress} />        
			    	</div>
			    </div>
			    <div className="barre"></div>
			    <div className="barre"></div>
			    <br/>
			    <div className="lignetable">
			    <table className="tableau">
			    	<thead>
			    		<tr>
			    			<th className="line"><label className="table">Description</label></th>
			    			<th><label className="table">Dates</label></th>
			    			<th><label className="table">Nights</label></th>
			    			<th><label className="table">Rooms Number</label></th>
			    			<th><label className="table">Unit Price/Night</label></th>
			    			<th><label className="table">TOTAL</label></th>
			    		</tr>
			    	</thead>
			    	<tbody>
			    		{tableau}
              <tr>
              <td><div className="tab"></div> 
                </td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab a">SUBTOTAL</div></td>
                <td><div className="tab b">{somme} DT</div></td>
              </tr>
              <tr>
              <td><div className="tab"></div> 
                </td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab a">TAX(10%)</div></td>
                <td><div className="tab b">{tax} DT</div></td>
              </tr>
              <tr>
              <td><div className="tab"></div> 
                </td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab"></div></td>
                <td><div className="tab a">TOTAL</div></td>
                <td><div className="tab b">{resultat} DT</div></td>
              </tr>
			    	</tbody>
			    </table>
			    </div>
			    </div>
			    </div>	

		);
	}
}
export default Invoice;