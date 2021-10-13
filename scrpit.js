// //Task-day-8
// //Class - Movie Task

//Q-1
// //a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.


// //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
  constructor(title , studio , rating ="PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }   
   getPG(movieArrays){
    return movieArrays.filter(movie => movie.rating == "PG");
   }  
  }
  let movie1 = new movie("Iron man" , "marvel studios" ,"PG");
  let movie2 = new movie("joker" , "DC studios" ,"R");
  const movieArray = [movie1 , movie2];
  let movie3 = new movie(movieArray); //instance
  
let film = new movie("casino royale" , "Eon Productions" ,"PG13");

console.log(film);
console.log(movie3.getPG(movieArray))




//Q-3
//Write a “person” class to hold all the details.
class Person {
  constructor(firstName , lastName , Age , emailId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.emailId = emailId;
  }   
}

let person1 = new Person("John" ,"Doe", "25" ,"johndoe@123");
let person2 = new Person("Johney" ,"Dae", "35" ,"johneydae@123");
let person3 = new Person("jim" ,"parson", "25" ,"jimparson@123");
console.log(person1);
console.log(person2);
console.log(person3);


//Q-4 write a class to calculate uber price.

class uber {
  constructor(distance, price ){
    this.distance = distance;
    this.price = price;
  }
  get cost(){
    return this.price*this.distance
  }
 }

let loaction1 = new uber(5 , 100)

console.log(`Price is :${loaction1.cost}`)

class circle {
  constructor (radius , color){
    this.radius = radius;
    this.color = color;
  }
  getRadius(){
    
  }
}