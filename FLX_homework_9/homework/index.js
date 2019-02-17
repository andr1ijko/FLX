const data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
];

//#1
function findTypes(...value) {
    let resault = [];
    let i = 0;
    for (; i < value.length; i++) {
        resault.push(typeof value[i]);
    }
    return resault;
}
findTypes(null, 5, 'number');

//#2
function executeforEach(array, fn){
    let i = 0;
    for(; i < array.length; i++){
        fn(array[i]);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el)
});

//#3
function mapArray(array, fn){
    let changeArr = [];
    executeforEach(array, function(el) {
        changeArr.push(fn(el));
    });
    return changeArr;
}

mapArray([2, 5, 8], function(el) { 
    return el + 3 
});

//#4
function filterArray(array, fn){
    let fArrey = [];
    executeforEach(array, function(el){
        if (fn(el)){
            fArrey.push(el);
        }
    });
    return fArrey;
}

filterArray([2, 5, 8], function(el) { 
    return el > 3 
});

//#5

function getAmountOfAdultPeople(dateValue) {
    return filterArray(dateValue, function(el) {
        return el.age > 18
    }).length;
}

getAmountOfAdultPeople(data);
