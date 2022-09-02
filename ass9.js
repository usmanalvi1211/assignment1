 function first_last(str1){
    let first1 = str1.substring(0,1);
    return (first1+str1+first1)
 }
 console.log(first_last("a"))
 console.log(first_last("ab"))
 console.log(first_last("abc"))