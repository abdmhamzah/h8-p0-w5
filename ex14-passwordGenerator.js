// Nama: Hamzah Abdullah Mubarak

function changeVocals (str) {
    var kata = ''
    for (let i = 0; i < str.length; i++) {
        switch (str[i]){
            case 'a': kata += 'b'; break;
            case 'i': kata += 'j'; break;
            case 'u': kata += 'v'; break;
            case 'e': kata += 'f'; break;
            case 'o': kata += 'p'; break;
            case 'A': kata += 'B'; break;
            case 'I': kata += 'J'; break;
            case 'U': kata += 'V'; break;
            case 'E': kata += 'F'; break;
            case 'O': kata += 'P'; break;
            default: kata += str[i]
        }
    }
    return kata
}
// console.log(changeVocals('HAHAHAHAhahahha'));

function reverseWord (str) {
    var kata = ''
    for (let i = str.length - 1; i >= 0; i--) {
        kata += str[i]
    }
    return kata
}
// console.log(reverseWord('HAHAHAHAhahahha'));

function setLowerUpperCase (str) {
    var kata = ''
    var alk = 'abcdefghijklmnopqrstuvwxyz'
    var alb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < str.length; i++) {
        var cek = false
        for (let j = 0; j < alk.length; j++) {
            if (str[i] == alk[j]) {
                kata += alb[j]
                cek = true
            }
            else if (str[i] == alb[j]){
                kata += alk[j]
                cek = true
            }
        }
        if (cek == false){
            kata += str[i]
        }
    }
    return kata
}
// console.log(setLowerUpperCase('HAHAHAHAhaha13976hha'));

function removeSpaces (str) {
    var kata = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' '){
            kata += str[i]
        }
    }
    return kata
}
// console.log(removeSpaces('HAHAHAH Ahah a13976hha'));

function passwordGenerator (name) {
    if (name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return removeSpaces (setLowerUpperCase (reverseWord (changeVocals (name))))

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'