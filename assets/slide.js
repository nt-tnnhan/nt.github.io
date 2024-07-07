  var kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
  var Img= ChuyenSlide.getElementsByTagName("img");
  var Max = (kichthuoc) * Img.length;
    Max -= kichthuoc;
  var chuyen = 0;
  function Next(){
     if(chuyen < Max ) chuyen += kichthuoc;
      else  chuyen = 0;
      chuyen += kichthuoc;
    ChuyenSlide.style.marginLeft ='-'+ chuyen + 'px';
 }
 function back()
 {
   if(chuyen == 0 ) chuyen = Max;
   else chuyen -= kichthuoc;
   ChuyenSlide.style.marginLeft = '-'+ chuyen + 'px';

 }
 setInterval(function(){
   Next();
}, 7000);