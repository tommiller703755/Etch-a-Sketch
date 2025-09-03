// initial setup, create a variable for the container and create divs
const main_container = document.getElementById("main-container");

let grid_size = 16;
let rave_mode = false;
let cell_size = 0;

function create_grid() {
    if (grid_size > 100) {
        grid_size = 100;
    }

    cell_size = 960 / grid_size;

    for (let i = 0; i < grid_size; i++) {
        let column = document.createElement("div");
        column.classList.add('column')

        for (let j = 0; j < grid_size; j++) {
            let div = document.createElement("div");
            div.classList.add("cell")
            div.style.width = cell_size.toString() + "px";
            div.style.height = cell_size.toString() + "px";
            column.append(div);
        }
        
        main_container.append(column);
    }

    // setup the event listener
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", function() {
            console.log("cell activated");
            if (rave_mode) {
                let rgb = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
                
                cell.style.backgroundColor = rgb;
            } else {
                cell.style.backgroundColor = "white";
            }
        })
    });
}
create_grid(16);

console.log("Grid creation code created.")

// Function to reset the grid
const reset_button = document.getElementById("reset-button");
reset_button.addEventListener("click", function() {
    let columns = document.querySelectorAll(".column");
    
    for (let i = 0; i < grid_size; i++) {
        columns[i].remove();
    }

    grid_size = prompt("How large should the grid be?", 16);
    create_grid()
});

const rave_button = document.getElementById("rave-button");
rave_button.addEventListener("click", function() {
    rave_mode = !rave_mode;
});