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

console.log(person)
console.log(PersonAddress)

let hobbies = person.hobbies
console.log(hobbies)