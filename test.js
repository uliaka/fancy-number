function checkNumber(num) {
  // 3 occurs || 4 digits
  const str = num + '';
  const arr = str.split('')

  if (arr.length > 10) {
    return false
  }
  let count = 1;
  const total = {}
  for (let i = 0; i <= arr.length - 1; i++) {

    const curr = arr[i]

    if (!total[curr]) {
      total[curr] = 1
    } else {
      total[curr] = total[curr] + 1
    }

    if (arr[i] === arr[i + 1]) {
      count = count + 1
    }
    if (count >= 3 || Object.values(total).find(item => item >= 4)) {
      return true
    }
  }
  return false
}

// true
console.log(checkNumber(1113546789))
console.log(checkNumber(1233543389))
// false
console.log(checkNumber(1234567890))



