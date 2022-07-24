
const allGraphs = document.getElementsByClassName("graph")
console.log(allGraphs)

function markChosenGraph(div) {
    for (let i = 0; i < allGraphs.length; i++) {
        allGraphs.item(i).classList.remove("active")
    }
    div.classList.add("active")

}
