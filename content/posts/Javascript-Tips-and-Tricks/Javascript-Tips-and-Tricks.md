---
title: Javascript Tips and Tricks
description: Javascript Tips and Tricks.
date: 2021-05-7T11:00:00.000Z
---

In this post, we will be looking at some popular and must use Javascript Tips and tricks to boost your productivity and write clean code.


### Optional Chaining

we usually get stuck in accessing nested properties in a javascript object, most of the time initial render for the content throws an error.

Ex:
```js
   var array;
   array = fetchLogicWhichReturnsArray( )
   
   renderMethod(){
      array.map( data => {
           dispalyData(data);
      }
```
 
Most of the time you will get an array saying `.map is not function`, this is the most common error as a beginner in Javascript world, or even when your access a nested object data eg: `data.userName` it would throw an error like `data.userName does not exist or is not defined`.

These are the most common error, where as a Beginner i would write following code:
```js
    if(data){
        if(data.userName){
              logicFunction()
        }
   }
```

There is nothing wrong with the above chunk of code, but this spoils the readability of code, in  Javascript we can now use optional Chaining to prevent such stuff of code.

The code goes like this:

```js
   const userName = data?.response?.allUsers?.user[0]?.userName
```

The above piece of code, get equivalent of nested conditional checks using if else, using optional chaining is counted in best practices in Javascript world.


### Sum of values in an Array

javascript is no doubt a beautiful language, but Javascript is really powerful and also developer-friendly.

To add an Array, the simplest logic we would use is a `for` loop, and the worst-case complexity for it would be `O(n)` for sure.

```cpp
    int Arr[ ] = {1, 2,3,4};  // any size is possible 
    int sum=0;
    for(int i=0; i<Arr.size(); i++){
        sum = sum +Arr[i];
    }
    cout<<sum;  // outputs: 10
```

in Javascript, we could do it simply 

```js
var Arr = [1, 2,3,4];
var sum = Arr.reduce((x, y) => x + y);
console.log(sum) // outputs 10;
```

The above code looks pretty for sure.

### Resizing Array

Resizing an Array can be really hard in the world of Programming, in the world `cpp` we will have to create a new array and copy elements over to the new Array but Javascript got us.

To Resize an Array we can simply shorten the length of the array, using `.length ` function proved with Array Templates

Let us see how:

```js
var Arr =[3, 6, 8, 44, 99, 77, 33];

Arr.length = 4;
console.log(Arr.length) // outputs 4
console.log(Arr) // [3 ,6 ,8 ,44[

Arr.length =0
console.log(Arr) // output [ ]

### Get Unique Values of an Array

Getting an array of unique values is probably easier than you think in Javascript, wherein in other programming languages you have to sort the array, then iterate over to copy not duplicate values.

```js
var Arr = [...new Set([1, 44, 66, 88, 44, 99])]
console.log(Arr)  // outputs: [ 1, 44, 66, 88, 99 ]
```

### Merge Objects

Merging Objects is a really tough task in most of the Programming languages, but javascript has all you need, to merge multiple objects, you can simply use the `rest operator`.

Eg:

```js
const user ={ name:  'Jessica', gender : 'Female'}
const userName = { userName : 'jesss_codes'}
const profile = { role: 'Full Stack Developer'}

const AboutUser ={ ...user, ...userName, ...profile}

// AboutUser ={
// name:  'Jessica', gender : 'Female'
// userName : 'jesss_codes'
// role: 'Full Stack Developer'
// }
```

### Using Regex

To change or remove values from a string in Javascript you can simply use an inbuilt Javascript function 

eg:
```js
var string = "Jessica"; //
  
 console.log(string.replace(/ss/, "sss"));  // outputs: Jesssica
```

********
Thanks a lot for giving it a Read.

Thumbnail from: freecodecamp.org/news/9-neat-javascript-tricks-e2742f2735c3/