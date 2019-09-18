/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// The first Principal of "this" is when your working out of the Global Object.
// code example for Window Binding
function fn(str) {
  console.log(this);
  return str;
}
fn("JavaScript is Awesome!?!?");
// Principle 2
// The second principal of "this" is calling Implicit Binding.
// code example for Implicit Binding
const obj = {
  greeting: "Hello World!",
  question: function(str) {
    console.log(`${this.greeting} did you know that ${str}`);
  }
};
obj.question("JavaScript is Awesome!?!?");
// Principle 3
// The third principal of "this" is calling New binding.
// code example for New Binding
function People(person) {
  this.greeting = "Hello ";
  this.person = person;
  this.speak = function() {
    console.log(this.greeting + this.person);
    console.log(this);
  };
}
const robert = new People("Robert");
const leeza = new People("Leeza");
robert.speak();
leeza.speak();
// Principle 4
//The fourth principal of "this" is calling Explicit binding.
// code example for Explicit Binding

function Animal(creature) {
  this.creature = creature;
  this.species = creature.species;
  this.name = creature.name;
  this.sound = function() {
    return `Crikey! There is a ${this.species} right over there, Lets call him ${this.name}!`;
  };
}
const confusedAligator = new Animal({ species: "Aligator", name: "Fluffy" });
const confusedTurtle = new Animal({ species: "Turtle", name: "Shelly" });
const platypus = new Animal({ species: "Duck, Beaver, Otter", name: "Perry" });

console.log(platypus.sound());
console.log(confusedAligator.sound.call(confusedTurtle));
console.log(confusedTurtle.sound.apply(confusedAligator));
