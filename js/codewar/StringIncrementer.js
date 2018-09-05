function incrementString(strng) {
    // return incrementedString
    if (!/(\d+)$/.test(strng))
        return strng + '1';
    else {
        let result = /(\d+)$/.exec(strng)
        let str = strng.slice(0, result.index)
          console.log(result[0], result.index);
        let num = 0 + +result[0] + 1;
        return `${str}${num}`

    }
}

console.log(incrementString("ffff123"));
console.log(incrementString("ffff099"));
console.log(incrementString("foobar01000"));
console.log(incrementString("foobar002"));