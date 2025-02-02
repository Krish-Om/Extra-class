function video(title, description, views) {

  this.title = title;
  this.description = description;
  this.views = views;

  console.log(this);
}

video('Sample Video title', "Video description", 10)


const user = {
  name: 'Alex'
}

function sayHello() {
  console.log(`hello ${this.name}`)
}

sayHello.call(user)

