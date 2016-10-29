"use strict";

var _$layout_change_btn = _$.query(".change_btn");
var _$main_section = _$.query(".main_section");

_$.eventsOn( _$layout_change_btn, "click", function( event ){
	_$main_section.classList.toggle("align_reverse");
	event.preventDefault();
});