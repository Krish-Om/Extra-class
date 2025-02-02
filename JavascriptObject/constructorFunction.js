// function video(title, description, views) {
//
//   this.title = title;
//   this.description = description;
//   this.views = views;
//
//   console.log(this);
// }
//
// video('Sample Video title', "Video description", 10)
//
//
// const user = {
//   name: 'Alex'
// }
//
// function sayHello() {
//   console.log(`hello ${this.name}`)
// }

// sayHello.call(user)



const samriddhiCollege = {
  name: 'Samriddhi College',

  showDetails: function (location, phone) {
    console.log(`College Name:${this.name}, Location:${location}, Phone: ${phone}`)
  }
}

const partnerCollege = {
  name: "Shikshyalaya College",
}

samriddhiCollege.showDetails.call(partnerCollege, 'Ktm', 987654321
)
samriddhiCollege.showDetails.apply(partnerCollege, ['Bkt', 34344321])

