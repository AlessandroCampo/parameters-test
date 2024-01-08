
const titile = document.getElementById("title")
const button_blue = document.getElementById("blue")
const button_red = document.getElementById("red")
const button_yellow = document.getElementById("yellow")



button_blue.addEventListener("click", (e) => {
    changeColorSize(
        {
            size: "52px",
            color: "blue"
        }
    )

})

button_red.addEventListener("click", () => {
    changeColorSize(
        {
            color: "red",
            size: "42px"
        }
    )

})

button_yellow.addEventListener("click", () => {
    changeColorSize(
        {
            size: "32px",
            color: "yellow"
        }
    )

})

function changeColorSize({ size, color }) {
    console.log("trying")
    titile.style.fontSize = size
    titile.style.color = color

}
