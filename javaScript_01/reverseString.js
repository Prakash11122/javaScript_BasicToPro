function reverseString(str) {
    return str.split('').reverse('').join('');
}

let reverse = 'hello prakash';
let reversed = reverseString(reverse);
console.log(reversed);