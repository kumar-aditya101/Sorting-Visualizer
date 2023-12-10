let array = [];
let speed = 50;

function generateArray() {
    const arraySize = document.getElementById("arraySize").value;
    array = [];
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = "";

    for (let i = 0; i < arraySize; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        arrayContainer.appendChild(bar);
    }
}

async function swap(i, j) {
    const arrayContainer = document.getElementById("array-container");
    const bars = arrayContainer.getElementsByClassName("bar");

    await new Promise(resolve => setTimeout(resolve, speed));

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    const tempHeight = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = tempHeight;
}

async function bubbleSort() {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swap(j, j + 1);
            }
        }
    }
}

async function insertionSort() {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            await swap(j, j + 1);
            j--;
        }

        array[j + 1] = key;
    }
}

async function selectionSort() {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            await swap(i, minIndex);
        }
    }
}

document.getElementById("speed").addEventListener("input", function() {
    speed = 100 - this.value;
});
