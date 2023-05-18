function findShortestStringRecursive(arr) {
  if(arr.length === 1){
    return arr[0]
  }
  const shortie = findShortestStringRecursive(arr.slice(1))
  return arr[0].length <= shortie.length ? arr[0] : shortie

 }

if (require.main === module) {
  
  console.log(findShortestStringRecursive(['happy','hoppy', 'phil']))

  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
