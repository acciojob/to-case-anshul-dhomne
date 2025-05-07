function toCase(str) {
  if (str === '') return '-';
  return str.toLowerCase() + '-' + str.toUpperCase();
}

// Example usage:
console.log(toCase('Mthatha'));     // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld'));  // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));      // Output: 'openai-OPENAI'
console.log(toCase(''));            // Output: '-'
