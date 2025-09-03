// initial setup, create a variable for the container and create divs
const main_container = document.getElementById("main-container");

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.classList.add('column')

    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.classList.add("cell")
        column.append(div);
    }
    
    main_container.append(column);
}

console.log("Grid creation code created.")