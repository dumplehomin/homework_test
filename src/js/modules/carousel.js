"use strict";

var _$ajax = require("./ajax/ajax");
var url = "./data/persons.json";
var data_num = 8;
var carousel_num = 0;

var _$carousel_thumb = _$.queryAll("li", ".carousel_thumb");
var _$carousel_img = _$.query(".carousel_img").childNodes[0];
var _$carousel_btn_left = _$.query(".btn_left");
var _$carousel_btn_right = _$.query(".btn_right");
var _$active_li;

var person_data = [];

_$ajax( url, function( data ){
	for( var t = 0; t < data_num; t++ ){
		person_data.push( data.results[t] );
	}

	setThumbnail("right");
	thumbEvent();
	carouselEvent();
	carouselBtnToggle();
});

function setThumbnail( btn_type ){
	_$.each( _$carousel_thumb, function( _$li, index ){
		var _$img = _$li.childNodes[0].childNodes[0];

		if( person_data[carousel_num] ){
			if( btn_type === "right" ){
				if( index === 0 ){
					_$li.classList.add("active");
					_$active_li = _$li;
					imgChange( _$carousel_img, person_data[carousel_num].picture.large, person_data[carousel_num].name.last );
				}
			}else {
				if( index === _$carousel_thumb.length - 1 ){
					_$li.classList.add("active");
					_$active_li = _$li;
					imgChange( _$carousel_img, person_data[carousel_num].picture.large, person_data[carousel_num].name.last );
				}
			}

			imgChange( _$img, person_data[carousel_num].picture.thumbnail, person_data[carousel_num].name.last );

			_$li.childNodes[0].num = carousel_num;

			if( _$img.parentElement.parentElement.classList.contains("none") ){
				_$img.parentElement.parentElement.classList.remove("none");
			}
		}else {
			_$img.parentElement.parentElement.classList.add("none");
		}

		carousel_num++;
	});
}

function thumbEvent(){
	_$.each( _$carousel_thumb, function( _$li, index ){
		_$.eventsOn( _$li.childNodes[0], "click", function( event ){
			var cu_li = event.currentTarget.parentElement;
			var cu_num = event.currentTarget.num;
			imgChange( _$carousel_img, person_data[cu_num].picture.large, person_data[cu_num].name.last );

			_$active_li.classList.remove("active");
			cu_li.classList.add("active");
			_$active_li = cu_li;

			carouselBtnToggle();
			event.preventDefault();
		});
	});
}

function carouselEvent(){

	_$.eventsOn( _$carousel_btn_right, "click", function( event ){
		var next_li;
		var li_num;

		_$active_li.classList.remove("active");

		if( _$active_li.nextElementSibling ){
			next_li = _$active_li.nextElementSibling;
			next_li.classList.add("active");
			_$active_li = next_li;
			li_num = _$active_li.childNodes[0].num;
			imgChange( _$carousel_img, person_data[li_num].picture.large, person_data[li_num].name.last );
		}else {
			setThumbnail("right");
		}

		carouselBtnToggle();
	});

	_$.eventsOn( _$carousel_btn_left, "click", function( event ){
		var prev_li;
		var li_num;

		_$active_li.classList.remove("active");

		if( _$active_li.previousElementSibling ){
			prev_li = _$active_li.previousElementSibling;
			prev_li.classList.add("active");
			_$active_li = prev_li;
			li_num = _$active_li.childNodes[0].num;
			imgChange( _$carousel_img, person_data[li_num].picture.large, person_data[li_num].name.last );
		}else {
			carousel_num = Math.abs( (_$carousel_thumb.length * 2) - carousel_num );
			setThumbnail("left");
		}

		carouselBtnToggle();
	});
}

function carouselBtnToggle(){
	if( _$active_li.childNodes[0].num === 0 ){
		_$carousel_btn_left.classList.add("none");
	}else if( _$active_li.childNodes[0].num === 7 ){
		_$carousel_btn_right.classList.add("none");
	}else {
		if( _$carousel_btn_left.classList.contains("none") ){
			_$carousel_btn_left.classList.remove("none");
		}
		if( _$carousel_btn_right.classList.contains("none") ){
			_$carousel_btn_right.classList.remove("none");
		}
	}
}

function imgChange( _target, _img, _alt ){
	_target.setAttribute( "src", _img );
	_target.setAttribute( "alt", _alt );
}