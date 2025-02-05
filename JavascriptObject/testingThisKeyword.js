function testThis() {
  // console.log(this)
  const video = {
    title: 'Video title',
    description: 'Video description',
    views: 100,

    play() {
      console.log(this);
    }
  }
  video.play()

  video.pause = function () {
      console.log(this);
  }
  video.pause()

  
}

thisBtn = document.getElementById("this-button")

// testThis()
