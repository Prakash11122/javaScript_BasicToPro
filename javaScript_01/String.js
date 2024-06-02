const name="prakash"
const repoCount = 36

//console.log(name + repoCount + "value")  (this is not recomended beacause of old code nd unprofesnal)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String(`prakash-rp`)

//console.log(gameName[1])
//console.log(gameName.__proto__);
console.log(gameName.charCodeAt(0))
console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('p'))


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);





//const sentence = 'The quick brown fox jumps over the lazy dog.';

//const index = 4;

//console.log(`The character at index ${index} is ${sentence.charAt(index)}`)
