var i=0;
var interval;

var step = function(){
  i+=1;

  document.getElementById('second').style.transform="rotate("+(i/60*360)+"deg)";

  document.getElementById('minute').style.transform="rotate("+(i/(60*60)*360)+"deg)";

  document.getElementById('hour').style.transform="rotate("+(i/(60*60*12)*360)+"deg)";
};

interval = setInterval(step,1000);
