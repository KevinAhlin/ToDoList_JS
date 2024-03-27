// HTML elements
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addBtn = document.getElementById("addBtn")

// Functions
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!")
  } else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = "" /* Resets the value of the input box */
  saveData()
}

// Use LocalStorage to saveData for future use
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

// Add EventListeners
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault()
    // Trigger the button element with a click
    addBtn.click()
  }
})

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked")
      saveData()
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove()
      saveData()
    }
  },
  false
)

// Run showTask function every time the app is run to show the stored data
showTask()
