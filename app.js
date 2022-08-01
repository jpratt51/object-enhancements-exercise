//same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// write an es2015 version

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

//computed property names

var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}
  
instructor[favoriteNumber] = "That is my favorite!"

//write an es2015 version

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

//write an es2015 version

let instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }

//   Write a function which generates an animal object. The function should accepts 3 arguments:

//   species: the species of animal (‘cat’, ‘dog’)
//   verb: a string used to name a function (‘bark’, ‘bleet’)
//   noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}