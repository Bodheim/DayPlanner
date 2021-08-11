//Display todays date at the top of the page!!
var currentTimeVar = moment().format('MM-DD-YYYY');
$('#currentDay').text("Today's Date: " + currentTimeVar);

var savedtext = [];

//define variables
var text6 = $('.text6').val();
var text7 = $('.text7').val();
var text8 = $('.text8').val();
var text9 = $('.text9').val();
var text10 = $('.text10').val();
var text11 = $('.text11').val();
var text12 = $('.text12').val();
var text1 = $('.text1').val();
var text2 = $('.text2').val();
var text3 = $('.text3').val();
var text4 = $('.text4').val();
var text5 = $('.text5').val();

localStorage.setItem('save6', text6);
console.log(localStorage);

var save6 = $('.save6');
var save7 = $('.save7');
var save8 = $('.save8');
var save9 = $('.save9');
var save10 = $('.save10');
var save11 = $('.save11');
var save12 = $('.save12');
var save1 = $('.save1');
var save2 = $('.save2');
var save3 = $('.save3');
var save4 = $('.save4');
var save5 = $('.save5');

var saveStatus6 = false;
var saveStatus7 = false;
var saveStatus8 = false;
var saveStatus9 = false;
var saveStatus10 = false;
var saveStatus11 = false;
var saveStatus12 = false;
var saveStatus1 = false;
var saveStatus2 = false;
var saveStatus3 = false;
var saveStatus4 = false;
var saveStatus5 = false;

// save9.addEventListener('click', function () {
//   localStorage.setItem('', savedText);
//   userInputsArray[0].saveStatus = true;
// });

// function savefunction9() {
//   localStorage.setItem('', savedText);
//   userInputsArray[0].saveStatus = true;
// }

// $('button9').on('click', saveFunction9);
// $('button10').on('click', saveFunction10);
// $('button11').on('click', saveFunction11);
// $('button12').on('click', saveFunction12);
// $('button1').on('click', saveFunction1);
// $('button2').on('click', saveFunction2);
// $('button3').on('click', saveFunction3);
// $('button4').on('click', saveFunction4);
// $('button5').on('click', saveFunction5);
