function start_end_shufle(str1){
    if (str1.length<=1){
    return str1;

}
mid1 = str1.substring(1, str1.length-1)
return (str1.charAt(str1.length-1) + mid1 + str1.charAt(0));
}
console.log(start_end_shufle('a'))
console.log(start_end_shufle('ab'))
console.log(start_end_shufle('abx'))
