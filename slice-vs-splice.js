a = [1,2,3,4,5,6,7]

// slice: immutable
console.log(a.slice(0,2))
console.log(a)

// splice: mutable
a.splice(1,0,99)
console.log(a)
a.splice(1,6,2)
console.log(a)