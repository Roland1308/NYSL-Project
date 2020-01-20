
function randomArray(length) {
    let array=[];
    for (let i = 0; i<length; i++) {
        array[i]=Math.floor(Math.random()*100);
    }
    return array;
}

function splitArray(numeri){
    let oddNumbers = [];
    let contaDispari=0;
    let evenNumbers = [];
    let contaPari=0;
    let len = numeri.length;
    console.log(len);
    for (let i=0 ; i < len; i++) {
        if (numeri[i]%2==0) {
            evenNumbers[contaPari] = numeri[i];
            contaPari++;
        } else {
            oddNumbers[contaDispari] = numeri [i];
            contaDispari++;
        }
    }
    console.log (oddNumbers);
    console.log (evenNumbers);
}

let array=randomArray(100);
console.log(array);

splitArray(array);