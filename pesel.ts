function sayHello() {
    var pesel = (document.getElementById("pesel") as HTMLInputElement).value;


    if (!isNaN(+pesel) && pesel.length == 11 && checkControl(pesel)) {
        return `Pesel jest w porządku, data urodzenia:` + getDate(pesel) +`, płeć: `+ getGender(pesel);
    } else {
        return `Pesel nie jest w porządku`;
    }
}

function checkControl(pesel: any) {
    
    var controlNumber = parseInt(pesel.charAt(0)) + parseInt(pesel.charAt(1)) * 3 + parseInt(pesel.charAt(2)) * 7 + parseInt(pesel.charAt(3)) * 9 + parseInt(pesel.charAt(4)) * 1 + parseInt(pesel.charAt(5)) * 3 +
        parseInt(pesel.charAt(6)) * 7 + parseInt(pesel.charAt(7)) * 9 + parseInt(pesel.charAt(8)) * 1 + parseInt(pesel.charAt(9)) * 3;
    var cnMod = controlNumber % 10;
    var cnMod2 = 10 - cnMod;
    var cnMod3 = cnMod2 % 10;
    console.log(cnMod3);
    if (cnMod3 == pesel.charAt(10)) {
        return true;
    }
    return false;
}

function getDate(pesel: any) {
    var year = pesel.charAt(0) + pesel.charAt(1);
    var month = pesel.charAt(2) + pesel.charAt(3);
    var day = pesel.charAt(4) + pesel.charAt(5);

    if (20 < month) {
        year = "20" + year;
    } else {
        year = "19" + year;
    }
    return day + "." + month + "." + year;
}

function getGender(pesel: any) {
    var gender = pesel.charAt(9);
    if (gender % 2 == 0) {
        return "kobieta";
    } else if (gender % 2 == 1) {
        return "mężczyzna";
    }
}