// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name){
return cats.push(name)
 }
 function  destructivelyPrependCat(name){
return cats.unshift(name)
 }
 function destructivelyRemoveLastCat(){
return cats.pop()
 }
 function destructivelyRemoveFirstCat(){
return cats.shift()
 }
 function appendCat(name){

    let catsCopy=[...cats,name]
return catsCopy
 }
 function prependCat(name){
    let catsCopy=[name,...cats]
return catsCopy
 }
 function removeLastCat(){
    let catsLength=cats.length
    //console.log(cats.slice(catsLength-1))
    let catsCopy = cats.slice(0,2)
return catsCopy
 }
 function removeFirstCat(){
    let catsCopy = cats.slice(1)
return catsCopy
 }
