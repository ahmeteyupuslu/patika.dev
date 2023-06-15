var gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];
  function showTime() {
    var date = new Date(); // Geçerli tarih ve saat bilgisi
    var gun = gunler[date.getDay()]; //getday ile çekilen tarihleri yukarıdaki array ile eşleştirdik    
    var saat = date.getHours(); 
    var dakika = date.getMinutes(); 
    var saniye = date.getSeconds(); 
  
    // 1 2 3 gibi saatler için başına 0 ekleme
    saat = basina0ekle(saat);
    dakika = basina0ekle(dakika);
    saniye = basina0ekle(saniye);
  
    // HTML'de saat gösteren elementi bul
    var myClock = document.getElementById("myClock");
    myClock.innerHTML = gun + " " + saat + ":" + dakika + ":" + saniye;
    setTimeout(showTime, 1000); //güncellenme sıklığı
  }
  
  function basina0ekle(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  window.onload = showTime;  