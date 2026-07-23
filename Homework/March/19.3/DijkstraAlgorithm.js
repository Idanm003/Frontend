const matrix = [
    [1, 9, 1],
    [1, 1, 1],
    [9, 9, 1]
];

// Creates a table filled with a given value
function createTable(rows, cols, value) {
    console.log(`Creating a ${rows}x${cols} table filled with: ${value}`);
    const table = [];
    for (let i = 0; i < rows; i++) {
        table.push([]);
        for (let j = 0; j < cols; j++) {
            table[i].push(value);
        }
    }
    console.log(`Table created:`, table);
    return table;
};

// Returns all valid neighbors of a cell
function getNeighbors(row, col, matrix, visited) {
    console.log(`Getting neighbors for cell [${row}][${col}]`);
    const directions = [
        [-1, 0],  // up
        [1, 0],   // down
        [0, -1],  // left
        [0, 1]    // right
    ];

    const neighbors = [];

    for (let i = 0; i < directions.length; i++) {
        const newRow = row + directions[i][0];
        const newCol = col + directions[i][1];

        if (newRow < 0 || newRow >= matrix.length ||
            newCol < 0 || newCol >= matrix[0].length) {
            console.log(`Cell [${newRow}][${newCol}] is outside the matrix, skipping`);
            continue;
        }

        if (visited[newRow][newCol]) {
            console.log(`Cell [${newRow}][${newCol}] was already visited, skipping`);
            continue;
        }

        console.log(`Cell [${newRow}][${newCol}] is a valid neighbor`);
        neighbors.push([newRow, newCol]);
    }

    console.log(`Valid neighbors for [${row}][${col}]:`, neighbors);
    return neighbors;
};

// Updates distances and queue for each neighbor
function processNeighbors(neighbors, cost, matrix, distances, queue) {
    console.log(`Processing ${neighbors.length} neighbors with current cost: ${cost}`);
    for (let i = 0; i < neighbors.length; i++) {
        const newRow = neighbors[i][0];
        const newCol = neighbors[i][1];
        const newCost = cost + matrix[newRow][newCol];

        console.log(`Checking cell [${newRow}][${newCol}] - new cost would be: ${newCost}, current best: ${distances[newRow][newCol]}`);

        if (newCost < distances[newRow][newCol]) {
            console.log(`Found cheaper path to [${newRow}][${newCol}], updating from ${distances[newRow][newCol]} to ${newCost}`);
            distances[newRow][newCol] = newCost;
            queue.push([newRow, newCol, newCost]);
        } else {
            console.log(`Current path to [${newRow}][${newCol}] is not cheaper, skipping`);
        }
    }
};

// Returns the cheapest cell from the queue
function getCheapest(queue) {
    queue.sort((a, b) => a[2] - b[2]);
    const cheapest = queue.shift();
    console.log(`Picked cheapest cell from queue: [${cheapest[0]}][${cheapest[1]}] with cost ${cheapest[2]}`);
    return cheapest;
};

// Main function that finds the cheapest path
function findCheapestPath(matrix) {
    console.log(`Starting pathfinding on a ${matrix.length}x${matrix[0].length} matrix`);
    const rows = matrix.length;
    const cols = matrix[0].length;

    const distances = createTable(rows, cols, Infinity);
    const visited = createTable(rows, cols, false);
    const queue = [[0, 0, matrix[0][0]]];

    distances[0][0] = matrix[0][0];
    console.log(`Starting at cell [0][0] with cost ${matrix[0][0]}`);

    while (queue.length > 0) {
        console.log(`Queue has ${queue.length} cells remaining`);
        const current = getCheapest(queue);
        const row = current[0];
        const col = current[1];
        const cost = current[2];

        if (visited[row][col]) {
            console.log(`Cell [${row}][${col}] was already visited, skipping`);
            continue;
        }

        console.log(`Visiting cell [${row}][${col}] with cost ${cost}`);
        visited[row][col] = true;

        const neighbors = getNeighbors(row, col, matrix, visited);
        processNeighbors(neighbors, cost, matrix, distances, queue);
    }

    const result = distances[rows - 1][cols - 1];
    console.log(`Pathfinding complete - cheapest path from [0][0] to [${rows - 1}][${cols - 1}] costs: ${result}`);
    return result;
};

console.log("Cheapest path cost:", findCheapestPath(matrix));