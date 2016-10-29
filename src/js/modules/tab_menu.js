"use strict";

var url = "./data/persons.json";
var _$ajax = require("./ajax/ajax");
var data_num = 7;
var random_num = Math.floor( Math.random() * data_num );

var _$tab_btn = _$.query(".tab_btn ul");
var _$tab_content = _$.query(".tab_content");
var _$list_01 = _$.query("img", ".list_01");
var _$list_02 = _$.query("img", ".list_02");
var _$list_03 = _$.query("img", ".list_03");
var _$list_04 = _$.query("img", ".list_04");
var _$list_05 = _$.query("img", ".list_05");
var _$list_06 = _$.query("img", ".list_06");

var _$active_btn;
var person_data = [];

_$ajax( url, function( data ){
	var _$list_li;
	for( var t = 0; t < data_num; t++ ){
		createTabMenu( data.results[t].name.last, t );
		person_data.push( data.results[t] );
	}

	dataView( random_num );
	_$list_li = _$.queryAll("li", _$tab_btn)[random_num];
	_$active_btn = _$list_li;
	_$list_li.classList.add("active");
});

function createTabMenu( name, _index ){
	var _$li = document.createElement("li");
	var _$button = document.createElement("button");
	var _name = document.createTextNode( name );

	_$li.index = _index;

	_$button.setAttribute("type", "button");
	_$button.appendChild( _name );
	_$li.appendChild( _$button );

	_$tab_btn.appendChild( _$li );

	_$.eventsOn( _$li, "click", tabMenuEvent);
}

function tabMenuEvent( event ){

	if( !event.currentTarget.classList.contains("active") ){
		if( _$active_btn ){
			_$active_btn.classList.remove("active");	
		}
		
		event.target.parentElement.classList.add("active");
		_$active_btn = event.target.parentElement;
		dataView( event.target.parentElement.index );
	}

}

function dataView( _index ){
	var _$p1 = document.createElement("p");
	var _txt1 = document.createTextNode( "first = " + person_data[_index].name.first );
	var _$p2 = document.createElement("p");
	var _txt2 = document.createTextNode( "last = " + person_data[_index].name.last );
	var _$p3 = document.createElement("p");
	var _txt3 = document.createTextNode( "title = " + person_data[_index].name.title );
	_$p1.appendChild( _txt1 );
	_$p2.appendChild( _txt2 );
	_$p3.appendChild( _txt3 );

	while ( _$tab_content.hasChildNodes() ){
		_$tab_content.removeChild( _$tab_content.firstChild );       
	}

	_$tab_content.appendChild( _$p1 );
	_$tab_content.appendChild( _$p2 );
	_$tab_content.appendChild( _$p3 );

	_$list_01.setAttribute("src", person_data[_index].picture.thumbnail);
	_$list_01.setAttribute("alt", person_data[_index].name.last );
	_$list_02.setAttribute("src", person_data[_index].picture.medium);
	_$list_02.setAttribute("alt", person_data[_index].name.last );
	_$list_03.setAttribute("src", person_data[_index].picture.large);
	_$list_03.setAttribute("alt", person_data[_index].name.last );
	_$list_04.setAttribute("src", person_data[_index].picture.thumbnail);
	_$list_04.setAttribute("alt", person_data[_index].name.last );
	_$list_05.setAttribute("src", person_data[_index].picture.medium);
	_$list_05.setAttribute("alt", person_data[_index].name.last );
	_$list_06.setAttribute("src", person_data[_index].picture.large);
	_$list_06.setAttribute("alt", person_data[_index].name.last );
}