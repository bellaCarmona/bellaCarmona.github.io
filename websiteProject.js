/*This is an external JavaScript file*/
/*
Name: Isabella Carmona
CSCI 140, Fall 2021   
Assignment: Website Project  
Date: 12/02/2021
*/
"use script";
function dateTime()
{
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	
	today = mm + "/" + dd + "/" + yyyy;
	document.write("<h2>Welcome, today is " + today + ".</h2>");
}

function startTime() 
{
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = "The current time is " + h + ":" + m + ":" + s + ".";
  setTimeout(startTime, 1000);
}

function checkTime(i) 
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}