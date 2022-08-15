// while loop
let finish = true
while (finish == true) {
  console.log("Keep going")
  finish = false
}

// addEventListener
// dom
let testingDiv = document.getElementById('testingDiv')
console.log(testingDiv.innerText)

// on click
// testingDiv.onclick = () => {
//   console.log("You clicked me")
// }

// add event listener
// have benifit of event delegation
// testingDiv.addEventListener('click', function () {
//   console.log("You clicked me")
// })

// add event listener
// 'e' represents keyboard event
document.addEventListener('keydown', function (e){
  // console.log("You pressed a key")
  if (e.key == 'a') {
    console.log("You pressed A")
  } else {
    console.log("Can you press A?")
  }
})