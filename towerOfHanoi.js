function loadDisks(plate, n) {
    while (n > 0) {
        plate[0].push(n--);
    }
}

function towerOfHanoi(n, src, dst, tmp) {
    if (n > 0) {
        towerOfHanoi(n - 1, src, tmp, dst);
        moveDisk(src, dst);
        towerOfHanoi(n - 1, tmp, dst, src);
    }
}

function moveDisk(src, dst) {
    count++;
    let s = plate[src]
    console.log(`${count}: disk ${s[s.length-1]} from ${src} -> ${dst}`)
    plate[dst].push(plate[src].pop());
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getDisks() {
    rl.question("How many disks? ", function (n) {
        if (Number.isNaN(parseInt(n)) || n < 1) {
            getDisks();
        } else {
            this.n = n;
            rl.close();
        }
    });
}
var count = 0;
var plate = [[], [], []];
rl.on("close", function () {
    
    loadDisks(plate, n);
    towerOfHanoi(n, 0, 2, 1); // index values
    console.log(`\nFewest total moves: ${count}`);
    process.exit(0);
});

getDisks()