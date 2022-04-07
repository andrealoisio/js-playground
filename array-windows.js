a = [1,2,3,4,5,6,7]

for (let windowSize=1; windowSize<=a.length; windowSize++) {
    for (let i=0; i<=a.length-windowSize; i++) {
        console.log(a.slice(i, i+windowSize))
    }
}