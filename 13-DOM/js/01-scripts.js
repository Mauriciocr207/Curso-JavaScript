let element;

element = document.all // is deprecated
element = document.querySelectorAll('*'); //instead 'all'

element = document.head
element = document.body

element = document.domain // is deprecated
location.hostname //instead 'domain'

element = document.forms
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].classList;
element = document.forms[0].className;
element = document.forms[0].action;

element = document.images;
element = document.scripts;



console.log(element);