$(".baseBN").on('click', start)

function start() {
  var A1 = generateRun();
  var A2 = generateRun();
  var A3 = selectWin(A1,A2);
  var A4 = selectclass1(A1,A2);
  var A5 = selectclass2(A1,A2);
  var A6 = selectA(A1,A2);
  $("#first").attr('src' , 'PHOTO/'+A1+'.png');
  $("#second").attr('src' , 'PHOTO/'+A2+'.png');
  $(".baseH1").text(A3);
  $("#first").attr('class', 'white '+A4);
  $("#second").attr('class', 'white '+A5);
  var audio = new Audio('AUDIO/'+A6+'.mp3');
  audio.play();
}

function generateRun() {
  var R = Math.floor((Math.random() * 6))+1
  return R
}

function selectWin(A1,A2) {
  var Win = "";
  if (A1 > A2) {
    Win = "اللاعب الاول"
  }
  else if (A1 === A2) {
    Win = "تعادل"
  }
  else {
    Win = "اللاعب الثاني"
  }
  return Win
}

function selectclass1(A1,A2) {
  var C = '';
  if (A1 > A2) {
    C = "green"
  }
  else if (A1 === A2) {
    C = 'red'
  }
  else {
    C = 'white'
  }
  return C
}

function selectclass2(A1,A2) {
  var C2 = '';
  if (A2 > A1) {
    C2 = 'green'
  }
  else if (A2 === A1) {
    C2 = 'red'
  }
  else {
    C2 = 'white'
  }
  return C2
}

function selectA(A1,A2) {
  var A = '';
  if (A1 === A2) {
    A = 'same'
  }
  else {
    A = 'win'
  }
  return A
}
