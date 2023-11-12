("This is Benedict site");

const person = {
    firstName : "Benedict",
    lastName : "Chidera",
    hobbies: ["playing" , "Coding" , "watching movies"], 
    // Object inside object
    address : {
        street : "No3 iwollo street",
        phone : 09013760679,
        city : "Enugu"
    }
}
// To add to tghe object person
person.email= "chiderabendict04@gmail.com"
// To remove variables from Object
const {firstName, lastName , hobbies} = person;
console.log(lastName,hobbies.indexOf('man'));
// To add extra value to the object
person.hobbies.push("man")
console.log(person.hobbies)
console.log(person.firstName, person.lastName, person.hobbies[2]);

//console.log(Array.isArray('coding'))


//USE OF OPERATORS
const x = 3;
// Here multiplication is done ist Using th BODMAS rule in mathematics
const y = 1 + 3 * 3;
const z = x + y;
console.log("Obi stayed in prison for" + z + " days in prison");
console.error('This is an error');
console.warn('This is a warning');

const e ='Hello My people';
// To change to upper case
console.log(e.toUpperCase());
// To change Hello to lower case
console.log(e.toLowerCase());

//To check the length of the word / number of letters
console.log(e.length);
//To split letters
console.log(e.split(','));




