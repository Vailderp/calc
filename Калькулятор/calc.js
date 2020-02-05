var num = [ 'C','(',')','=',
             1,  2, 3,'+',
             4,  5, 6,'-',
             7,  8, 9,'*',
             0, '','','/', ];

for (var i = 0; i < num.length; i++) {
  document.getElementById('divv').innerHTML += '<div id="block" class="block"><h id="hhh" class="hhh"></h></div>';

  var stringi = String(i);
  var divdiv = ("block"+stringi);
  var hh = ("hhh"+stringi);
  document.getElementById('block').id = divdiv;
  document.getElementById('hhh').id = hh;
  document.getElementById(hh).innerHTML = num[i];
  if (stringi == 1 || stringi == 2){
    document.getElementById(hh).style.fontSize = '35px';
     }
  }
  var hranilishe1 = '';
  document.getElementById('block0').onclick = function(){
    hranilishe1 = '';
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block1').onclick = function(){
    hranilishe1 += num[1];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block2').onclick = function(){
    hranilishe1 += num[2];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }


  document.getElementById('block4').onclick = function(){
    hranilishe1 += num[4];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block5').onclick = function(){
    hranilishe1 += num[5];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block6').onclick = function(){
    hranilishe1 += num[6];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block7').onclick = function(){
    hranilishe1 += num[7];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block8').onclick = function(){
    hranilishe1 += num[8];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block9').onclick = function(){
    hranilishe1 += num[9];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block10').onclick = function(){
    hranilishe1 += num[10];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block11').onclick = function(){
    hranilishe1 += num[11];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block12').onclick = function(){
    hranilishe1 += num[12];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block13').onclick = function(){
    hranilishe1 += num[13];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block14').onclick = function(){
    hranilishe1 += num[14];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block15').onclick = function(){
    hranilishe1 += num[15];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block16').onclick = function(){
    hranilishe1 += num[16];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

  document.getElementById('block17').onclick = function(){
    hranilishe1 += num[17];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }
  document.getElementById('block19').onclick = function(){
    hranilishe1 += num[19];
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }

document.getElementById('block3').onclick = function(){
    hranilishe1 = eval(hranilishe1);
    document.getElementById('numberblat').innerHTML = hranilishe1;
  }
