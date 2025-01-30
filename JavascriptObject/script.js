const PersonAddress = {
  country: "Nepal",
  city: "Bhaktapur",
  address: {
    home_address: "Byasi", pincode: 4480
  }
}
const person = {
  name: "Krishom Basukala",
  age: 25,
  batch: 2025,
  isClassRepresentation: false,
  hobbies: ["poetry", "drawing", "singing"],
  College_name: "Samriddhi",
  Location: "Lokanthali,Bhaktapur",
  age: 12,
  address: PersonAddress
}

// console.log(person)
// console.log(PersonAddress)

let hobbies = person.hobbies
// console.log(hobbies)
let i=1
for (const hobbby of hobbies) {
  // console.log(hobbby)
  console.log(` ${hobbby}`)
  // i++
}


hobbies.push("gym")

let sortedHobbies = hobbies.sort()
console.log(sortedHobbies)

let slicedHobbies = hobbies.slice(0, -2)
console.log(slicedHobbies)


const person2 = {
  firstName : "John",
  lastName : "Doe",
  age: 50,
  eyeColor: "blue"
};


// let {firstName, lastName} = person2


// console.log(firstName)
// console.log(lastName)

let{firstName,lastName,...personDetails} = person2
console.log(firstName)
console.log(lastName)
console.log(personDetails);


const numbers= [1,23,4,5,6,5]
let [n1,n2,n3] = numbers
console.log(n1,n2,n3)
