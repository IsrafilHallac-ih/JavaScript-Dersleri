// var:function scope olur
//let ve const:block scope özelliğine sahip.
//const:değer değişmez sabittir.


function selamVer(params) {
    var selam="SELAMUN ALEYKÜM";
    if (true) {
        let number=10;
         console.log(number);
    }
  
   console.log(selam);
}
selamVer();