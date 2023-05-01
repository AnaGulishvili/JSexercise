//დავალება 1 რიცხვები 5-100

for(let i=5; i<=100; i++) {
    console.log(i);

}

//დავალება 2 რიცხვები რომლებიც მეტია 0-ზე და ნაკლებია 10-ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1) {
    if (item>0 && item<10) {
    console.log(item);
    }
}

//დავალება 3 რიცხვი 5 არის
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let item2 of array2) {
    if (item2 = 5) {
        console.log("არის");
    }
}

//დავალება 4 ჯამი

let array3= [1, 2, 3, 4, 5];
let sum= 0;
for (let item3=0; item3 < array3.length; item3++) {
    sum += array3[item3];

}
console.log(sum);

//დავალება 5 საშუალო არითმეტიკული

let array4 = [1, 2, 3, 7, 6, 9];
let sum2=0;
let mean=null;
for (let item4=0; item4< array4.length; item4++) {
    sum2 += array4[item4];
    
}
mean= sum2/array4.length;
console.log(mean);

//დავალება 6 ყველა რიცხვი 7-ის გარდა
let array5 = [1, 2, 3, 7, 6, 9];

for(let item6 of array5) {
   if(item6 == 7) {
   continue;
    }
}

//დავალება 7 სტუდენტის სტატუსი
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
console.log(user["studentstatus"]);

//დავალება 8 

let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

let log =
    user2 ["age"] < 18 && ["studentstatus"] == "active"
    ? "hello"
    :user2 ["name"] =="levani"
    ? "hello Levani"
    :user2 ["studentstatus"] == "active" || ["age"] < 25
    ? "hello world"
    : "error";

    console.log(log);

    //დავალება 9 მხოლოდ დადებითი რიცხვები:

    let array6 = [
        [2, -3, 5, 10],
        [25, -24, -11, 100],
        [-6, -7, 10],
      ];
    
    for(let singles2 of array6) {
        for (item7 of singles2) {
            if (item7 > 0) {
                console.log(item7);
            }
        }
    }



//დავალება 10 მხოლოდ კენტი რიცხვები, მხოლოდ ლუწი რიცხვები

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

//ლუწები
for (odds of array) {
    if (odds % 2 ==1 && odds != 0) {
        console.log(odds);
    } 
}
//კენტები
for (evens of array) {
    if (evens % 2 ==0 && evens != 0) {
        console.log(evens);
    } 
}