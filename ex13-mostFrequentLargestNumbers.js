// Nama: Hamzah Abdullah Mubarak

function sorting(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] < arrNumber[i]) {
                var temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    var banyak = 0
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] == arrNumber[0]) {
            banyak++
        }
    } 
    return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${banyak} kali`
    
}

function mostFrequentLargestNumbers(arrNumber) {
return getTotal(sorting(arrNumber))
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));