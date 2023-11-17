// --------Koşul Yapıları------
// Sık sık kullanılan karar mekanizmalarıdır.

/**
     if(koşul){
      // kodlar ---bu koşul çalışırsa else çalışmaz bu koşul false olduğunda elseye geçer.
      }
    else(koşul){
        //kodlar 
    }
   



 */
    
    // 1-Example

    // let lessonNot=75;

    // if (lessonNot>65) {
    //     console.log("Tebrikler Geçtiniz, Notunuz : "+lessonNot);
        
    // } else {
    //     console.log("Kaldınız..")
    // }

    // 2-Ders Ortalaması Bulma
    let vize1=Number(prompt("Vize1 Notunuzu Giriniz.."));
    let vize2=Number(prompt("Vize2 Notunuzu Giriniz.."));
    let final=Number(prompt("Final Notunuzu Giriniz.."));

    let Ortalama=(vize1*0.3)+(vize2*0.3)+(final*0.3);
    if (Ortalama>=60) {
      alert("TEBRİKLER GEÇTİNİZ..");
    }else{
      alert("Malesef Kaldınız..");
    }


        
    






