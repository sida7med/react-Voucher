import React from "react";
import ReactDOM from "react-dom";
import 'whatwg-fetch';

//========================================
function Ligne (props){
	
		let close=[];
		let open=[];
		if (props.cle==props.valeur.valueAdds-1) {
		
    	open.push(<div key={props.cle} className="nightbutton" onClick={props.onClick}>+</div>);
    	
    	}
		if ((props.cle==props.valeur.valueAdds-1)&&(props.cle>0)) {
			close.push(<div key={props.cle} className="close" onClick={props.handleDelete}>-</div>);
		}
		return(
			
				
    	<div className="ligne">
    	<div className="box">
    	<label>
    	Room Type
    	</label>
    	<select value={props.valeur.valueRoom[props.cle].valueRoomtype} onChange={props.handleChangeRoom}>
		  <option defaultvalue="single">Single</option>
		  <option value="double">Double</option>
		  <option value="suite">Suite</option>
		</select>
    	</div>
    	<div className="box">
    	<label>
    	Bases
    	</label>
    	<select value={props.valeur.valueRoom[props.cle].valueBase} onChange={props.handleChangeBase}>
		  <option defaultvalue="lpd">Lpd</option>
		  <option value="double">Double</option>
		  <option value="suite">Suite</option>
		</select>
    	</div>
    	<div className="box">
    	<label>
    	Unit price
    	</label>  
    	<input type="tel" value={props.valeur.valueRoom[props.cle].valueUnit} onChange={props.handleChangeUnit} />        
    	</div>
    	<div className="box">
    	<label>
    	Rooms (Units)
    	</label>  
    	<input type="number" value={props.valeur.valueRoom[props.cle].valueRoomUnits} onChange={props.handleChangeRoomUnits} />        
    	</div>
    	<div className="box">
    	<label>
    	Nights
    	</label>
    	<div className="nights">{props.nights}</div>
    	</div>
    	<div className="box">
    	{open}
    	</div>
    	{close}
    	<div>
    		<div className="barre" />
    	</div>
    	</div>
    	

		

		);
	
}
//====================================
export default Ligne;