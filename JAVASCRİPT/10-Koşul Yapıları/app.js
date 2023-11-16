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

    // 2-Example

    let age=Number(prompt("Lütfen yaşınızı giriniz..."));

    let puan=Number(prompt("Lütfen puanınızı giriniz.."));


    if (age>18 && puan>=50) {
        console.log("Hoşgeldiniz");
        
    } else {
      
          console.log("Bilgilerinizi Kontrol Ediniz..")  
        }
        
    






