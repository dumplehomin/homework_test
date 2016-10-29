"use strict";
module.exports = function( _url, _fn ){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if( request.readyState === 4 && request.status === 200 ){
			if( _fn ){
				var _json = JSON.parse(this.responseText);
				_fn( _json );
			}
		}
	}

	request.open("GET", _url, true);
	request.send();
}