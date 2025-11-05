        function getGridSize() {
                const setGrid = document.querySelector("#start"); 
                setGrid.addEventListener("click", function() {  
                let gridSize = prompt("What size grid would you like to draw on? Enter a number between 1 and 100.");
                let size = Number(gridSize);
                if (isNaN(size) || size > 100 || size <=0) {
                alert("Grid size has to be between 1 and 100. Press grid size button again and enter valide number"); 
                return; 
                }
                const container = document.querySelector("#container");
                container.innerHTML = "";
                grid(size);    
                });  
        }

        function eraseDrawing() {
                const erase = document.querySelector("#erase"); 
                erase.addEventListener("click", function() {
                const cells = document.querySelectorAll(".cell");
                cells.forEach(function(cell) {
                cell.style.backgroundColor = "lightgray"; 
                cell.style.border = "1px solid gray"
                        });
                });
        }

        function grid(size) {
                const container = document.querySelector("#container");
                const containerSize = 560;
                const cellSize = containerSize / size;
                for (let i = 0; i < size * size; i++) {
                        const cell = document.createElement("div");
                        cell.classList.add("cell");
                        cell.style.width = `${cellSize}px`;
                        cell.style.height = `${cellSize}px`;
                        cell.style.flexShrink = '0'; 
                        cell.addEventListener("mouseenter", function() {                
                                cell.style.backgroundColor = "black";
                        });
                        container.appendChild(cell); 
                        }     
        }

        getGridSize(); 
        eraseDrawing(); 
        grid(50);  