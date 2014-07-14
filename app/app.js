/*global prompt:true */
var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var bees = [];
var people =[];

var person1 = {name:'bob', age:10, pets: []};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'gill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('Animal Shelter! Add a (d)og, (c)at, (b)ee or (q)uit: ');

while(option !== 'q'){

  switch(option) {

    case 'd':
      var name = prompt('Dog Name: ');
      var age = prompt('Dog age: ');
      var name = prompt('Dog breed: ');
      var dog = {name:name, age:age, breed:breed};
      dogs.push(dog);
    break;  

   case 'c':
     var name  =prompt('Cat Name: ');
     var eyeColor = prompt('Cat eye color: ');
     var friendly = prompt('Cat friendly? ');
     var cat = {name:name, eyeColor:eyeColor, friendly:friendly};
     cats.push(cat);
    break;

   case 'b':
    var name = prompt('Name: ? ');
    var type = prompt('Bee type: ');
    var size = prompt('Size of bee? ');
    var bee = {name:name, type:type, size:size};
    bees.push(bee);
   break;
  }

  option = prompt('Animal Shelter! Add a (d)og, (c)at, (b)ee or (q)uit: ');
}

option = prompt('Pick (b)ob, (s)am, (g)ill or (q)uit: ');

while(option !== 'q'){
  //someone typed a g for gill
  //find that person in the array of people
  //and console.log it out
    for(var i = 0; i< people.length; i++){
      if (people[i].name[0] === option) {
         var client =  people[i];
         break;
    }
}
    
    var animals;
    console.log('Client is : ', client);
    var choice = prompt('What type of Pet? (d)og, (c)at, or (b)ee: ');
    switch (choice) {
      case 'd':
        console.log('Dogs: ',dogs);
        animals = dogs;
        break;
      case 'c':
        console.log('Cats: ', cats);
        animals = cats;
        break;
      case 'b':
        console.log('Bees: ', bees);
        animals = bees;
      }
  
    var name = prompt('What is the name of the animal you want to adopt? ');
   console.log(name);
   console.log(animals);
    for(i = 0; i < animals.length; i++) {
      if(animals[i].name === name) {
        var animal = animals[i];
        var index = i;
        break;
      }
    }

  console.log('Animal: ', animal);
  animals.splice(index, 1);
  client.pets.push(animal);
  console.log('After adoptio: ', client);
  console.log('Animals array:', animals);
 
  option= prompt('(b)ob, (s)am, (g)ill or (q)uit:');

}

console.log('Your dogs: ', dogs);
console.log('Your cats: ', cats);
console.log('Your bees: ', bees);



