function randomizeColor() {
  let rNumber = Math.floor(Math.random() * 255)
  let gNumber = Math.floor(Math.random() * 255)
  let bNumber = Math.floor(Math.random() * 255)

  //   const randomColor = "rgb(" + rNumber + ", " + gNumber + ", " + bNumber + ")"
  const randomColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`
  document.body.style.backgroundColor = randomColor
}

setInterval(randomizeColor, 5000)
