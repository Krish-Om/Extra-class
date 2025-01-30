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
// let i=1
for (const hobbby of hobbies) {
    // console.log(hobbby)
    console.log(` ${hobbby}`)
    // i++
}


hobbies.push("gym")

let sortedHobbies = hobbies.sort()
console.log(sortedHobbies)

let slicedHobbies = hobbies.slice(0,3)
console.log(slicedHobbies)