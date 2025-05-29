//1.Folosind un for loop sa se afiseze in consola toate numerele de la 10 la 20

//for(let i = 10; i <= 20; i++) {
 // console.log(i);
//}


//2.Folosind un for loop sa se afiseze in consola toate numerele multiplii de 3 de la 10 la 30

//for(let i = 10; i <= 30; i++) {
  //if(i % 3 === 0) {
   // console.log(i);
 // }
//}


//3.Folosind un for loop sa se afisze in consola toate numerele de la 1 la 10 ca mai jos:

//"1 - impar"

//"2 - par"

//"3 - impar"

//...

//"10 - par"

//Practic trebuie afisat numarul, apoi, tot in acelasi string, daca este par sau nu.

//for(let i = 1; i <= 10; i++) {
 // let tip = (i % 2 === 0) ? "par" : "impar";
 // console.log(`${i} - ${tip}`);
//}

//4.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor impare

//const arr = [1, 2, 3, 4, 5, 6, 7];
//let sumaImpare = 0;

//for(let i = 0; i < arr.length; i++) {
  //if(arr[i] % 2 !== 0) {
    //sumaImpare += arr[i];
  //}
//}

//console.log("Suma numerelor impare:", sumaImpare);


//5.Sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor pare pozitive

//const arr2 = [-2, 0, 2, 4, -6, 8, 10];
//let sumaParePozitive = 0;

//for(let i = 0; i < arr2.length; i++) {
  //if(arr2[i] > 0 && arr2[i] % 2 === 0) {
    //sumaParePozitive += arr2[i];
  //}
//}

//console.log("Suma numerelor pare pozitive:", sumaParePozitive);
