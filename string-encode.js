
input =  "aaaabbbccabbzzzyyz"
buffer = "";
result = "";

for (const [index, letter] of input.split("").entries()) {
    let bufferSize = buffer.length
    if (!bufferSize) {
        buffer = letter
        continue
    }
    bufferLastLetter = buffer[bufferSize-1]
    if (bufferLastLetter != letter) {
        result = `${result}${bufferLastLetter}${bufferSize}`
        buffer = letter;
    } else {
        buffer = buffer + letter
    }
    if (index == input.length - 1) {
        result = `${result}${letter}${buffer.length}`
    }
}

console.log(result)