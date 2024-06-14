function hesapla() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || c === 0) {
        alert('Lütfen geçerli sayılar giriniz ve c sıfır olmasın.');
        return;
    }

    var result = (a * b) / c;
    document.getElementById('sonuc').innerText = 'Sonuç: ' + result;
}

function stopPriceHesapla() {
    var girisFiyati = parseFloat(document.getElementById('girisFiyati').value);
    var stopLossYuzde = parseFloat(document.getElementById('stopLossYuzde').value);
    
    if (isNaN(girisFiyati) || isNaN(stopLossYuzde)) {
        alert('Lütfen geçerli sayılar giriniz.');
        return;
    }

    var stopPrice = girisFiyati * (1 - stopLossYuzde / 100);
    document.getElementById('stopPriceSonuc').innerText = 'Stop Price: ' + stopPrice.toFixed(2);
}
