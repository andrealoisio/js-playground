arr = [1,3,5,7,9,2,2,4,6,6,8,0,-1,21,19]
sorted = [];

function addSorted(arr, value) {
    size = arr.length
    if (size == 0 || value <= arr[0]) {
        arr.unshift(value)
        return
    }
    if (value >= arr[size-1]) {
        arr.push(value)
        return
    }
    for (i=0; i<size-1; i++) {
        if (value == arr[i]) {
            arr.splice(i,0,value)
            return
        }
        if (value > arr[i] && value < arr[i+1]) {
            arr.splice(i+1,0,value)
            return
        }
    }
}

arr.forEach(item => {
    addSorted(sorted, item)
})

console.log("sorted", sorted)

