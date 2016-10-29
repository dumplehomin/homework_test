"use strict";

var _$submit_btn = _$.query("#submit");
var _$id = _$.query("#userId");
var _$pw = _$.query("#userPw");
var _$pwchk = _$.query("#userPwCheck");
var _$email1 = _$.query("#userEmail1");
var _$email2 = _$.query("#userEmail2");
var _$name = _$.query("#userName");
var _$phone1 = _$.query("#userPhone1");
var _$phone2 = _$.query("#userPhone2");
var _$phone3 = _$.query("#userPhone3");
var _$gender_m = _$.query("#M");
var _$gender_f = _$.query("#F");
var _$sAgree1 = _$.query("#sAgree1");
var _$sAgree2 = _$.query("#sAgree2");

function validator( event ){
	var ch;
	var email1_check = /^[A-Za-z0-9_\.\-]+/;
	var email2_check = /^[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	var name_check = /^[가-힝]{2,}$/;
	var phone_check = /^\d{4}$/;

	if( _$id.value === "" ){
		alert("아이디를 입력하지 않았습니다.");
		_$id.focus();
		return;
	}

	for( var i = 0; i < _$id.value.length; i++ ){
		ch = _$id.value.charAt(i);
		if ( !(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z') ){
			alert ("아이디는 소문자, 숫자만 입력가능합니다.");
			_$id.focus();
			_$id.select();
			return;
		}
	}

	if( _$id.value.indexOf(" ") >= 0 ){
		alert("아이디에 공백을 사용할 수 없습니다.");
		_$id.focus();
		_$id.select();
		return;
	}
	
	if( _$id.value.length < 6 || _$id.value.length > 12 ){
		alert ("아이디를 6~12자까지 입력해주세요.");
		_$id.focus();
		_$id.select();
		return;
	}

	if( _$email1.value === "" ){
		alert("이메일을 입력하세요");
		_$email1.focus();
		return;
	}

	if( _$email2.value === "" ){
		alert("이메일을 입력하세요");
		_$email2.focus();
		return;
	}

	if( email1_check.test(_$email1.value) === false ){
		alert("이메일 형식이 올바르지 않습니다.");
		_$email1.focus();
		return;
	}

	if( email2_check.test(_$email2.value) === false ){
		alert("이메일 형식이 올바르지 않습니다.");
		_$email2.focus();
		return;
	}

	if( _$pw.value === "" ){
		alert("비밀번호를 입력하지 않았습니다.");
		_$pw.focus();
		return;
	}

	if( _$pw.value.length < 4 || _$pw.value.length > 8 ){
		alert ("비밀번호를 4~8자까지 입력해주세요.");
		_$pw.focus();
		_$pw.select();
		return;
	}

	if( _$pw.value !== _$pwchk.value ){
		alert("비밀번호가 일치하지 않습니다");
		_$pw.value = "";
		_$pwchk.value="";
		_$pw.focus();
		return;
	}

	if( _$name.value === "" ){
		alert("이름을 입력하지 않았습니다.");
		_$name.focus();
		return;
	}

	if( name_check.test(_$name.value) === false ){
		alert("이름이 올바르지 않습니다.");
		_$name.focus();
		return;
	}

	if( _$phone1.value === "0" ){
		alert("전화번호를 입력하세요");
		_$phone1.focus();
		return;
	}

	if( _$phone2.value === "" ){
		alert("전화번호를 입력하세요");
		_$phone2.focus();
		return;
	}

	if( phone_check.test(_$phone2.value) === false ){
		alert("전화번호가 올바르지 않습니다.");
		_$phone2.focus();
		return;
	}

	if( _$phone3.value === "" ){
		alert("전화번호를 입력하세요");
		_$phone3.focus();
		return;
	}

	if( phone_check.test(_$phone3.value) === false ){
		alert("전화번호가 올바르지 않습니다.");
		_$phone3.focus();
		return;
	}

	if ( _$gender_m.checked === false && _$gender_f.checked === false){
		alert("성별을 체크해 주세요");
		return;
	}

	if ( _$sAgree1.checked === false && _$sAgree2.checked === false){
		alert("약관에 동의해주세요");
		return;
	}
	
	alert("가입완료되었습니다.");
}

_$.eventsOn( _$submit_btn, "click", validator);