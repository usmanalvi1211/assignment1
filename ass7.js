var str = "Hello Babar";
str = str.slice(0,4)+str.slice(5);
console.log(str)


const string = "hello";
let newStr = [...string]

newStr = newStr.filter((x, index)=>{
    return index !== 2;
})

console.log(newStr)