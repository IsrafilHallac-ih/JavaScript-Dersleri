// 1-dizel:37.56
//2-benzin:34.54
//3-lpg:18.71

let dizel=37.56,benzin=35.54,lpg=18.71;
const yeniSatir="\r\n";

const yakitMetni="1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-Lpg"+yeniSatir
+"Yakit Tipini Seçiniz";

let yakıtTipi=prompt(yakitMetni);
let yakitLitresi=Number(prompt("Yakıt Litresi Giriniz.."));
let bakiye=Number(prompt("Bakiyenizi Giriniz.."));

if (yakıtTipi=="1") {
    //DİZEL
    let ödenecekTutar=dizel*yakitLitresi;
    if (ödenecekTutar<bakiye) {
        //Bakiye Yeterli
        bakiye=bakiye-ödenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı"+yeniSatir
        +"KALAN BAKİYE:"+bakiye);
    } else {
        //Bakiye Yeterli Değil
        alert("Bakiyeniz Yeterli Değildir"+yeniSatir
        +"Ödenecek Tutar:" + ödenecekTutar+yeniSatir
        +"Bakiye :"+bakiye+yeniSatir
        +"Eksik Tutar : "+(ödenecekTutar-bakiye));
    }
    
} else if(yakıtTipi=="2"){
    //BENZİN
    let ödenecekTutar=benzin*yakitLitresi;
    if (ödenecekTutar<bakiye) {
        //BAKİYE YETERLİ-BENZİN
        bakiye=bakiye-ödenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı" +yeniSatir
        +"Kalan Bakiye:"+bakiye);
    } else {
        //BAKİYE YETERLİ DEĞİL-BENZİN
        alert("Bakiyeniz Yeterli Değildir"+yeniSatir
        +"Ödenecek Tutar:" + ödenecekTutar+yeniSatir
        +"Bakiye :"+bakiye+yeniSatir
        +"Eksik Tutar : "+(ödenecekTutar-bakiye));
    }

    }
else if(yakıtTipi="3"){
    //Lpg
    let ödenecekTutar=lpg*yakitLitresi;
    if (ödenecekTutar<bakiye) {
        //BAKİYE YETERLİ-LPG
        bakiye=bakiye-ödenecekTutar;
        alert("Yakıt Alma İşlemi Başarılı" +yeniSatir
        +"Kalan Bakiye:"+bakiye);
    } else {
        //BAKİYE YETERLİ DEĞİL-LPG
        alert("Bakiyeniz Yeterli Değildir"+yeniSatir
        +"Ödenecek Tutar:" + ödenecekTutar+yeniSatir
        +"Bakiye :"+bakiye+yeniSatir
        +"Eksik Tutar : "+(ödenecekTutar-bakiye));
    }
}else{
    alert("Lütfen Geçerli bir değer giriniz")
}
 

        
    






