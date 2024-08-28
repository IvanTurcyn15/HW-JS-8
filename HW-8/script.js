// Task 1
// через for

console.log("Task 1");
console.log("'For' version");

const friends = ['Mango','Poly','Kiwi','Ajax'];
let string = '';

for(let i = 0; i < friends.length;i++){
    string += friends[i];
    if(i < friends.length - 1){
        string += ',';
    }
}

console.log(string);

// через join()

console.log("'Join' version");

const friends2 = ['Mango','Poly','Kiwi','Ajax'];
console.log(friends2.join(','));

// Task 2

console.log("Task 2");

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.log(cards);

// Task 3

console.log("Task 3");

const cardToRemove = 'Карточка-3';
cards.splice(cards.indexOf(cardToRemove),1);
console.log(cards);

// Task 4

console.log("Task 4");

const cardToInsert = 'Карточка-6';
cards.push(cardToInsert);
console.log(cards);

// Task 5

console.log("Task 5");

const cardToUpdate = 'Карточка-4';
cards.splice(cards.indexOf(cardToUpdate), 1, 'Бім-Бом');
console.log(cards);