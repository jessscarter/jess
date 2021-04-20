---
title: baNaNa in JavaScript
description: Weird baNaNa feature of Javascript.
date: 2021-04-21T11:00:00.000Z
---

### Banana🍌

Banana is a popular secret about javascript which goes like this:

```js
     > "b" + "a" + + "a" + "a"
     // output: "baNaNa"
```

**Here is sample output from playground**

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1618900348424/Xjk2plknX.png)

Is this really mysterious?

Honestly telling No, I want you to focus on the javaScripts `baNaNa`, which goes like: `b` `a` `NaN` `a`.

Yup, baNaNa is made out of a `NaN`, let me show it to you visually

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1618900549983/Dp1g42gpz.png)

```js
'b' + 'a';
// in Javascript is ba that's normal I guess.
```

Here comes the twist, the next I will be adding + "a" or ` + + "a"`

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1618900652145/QuwW2T1jA.png)

Here is how NaN kicks into the console, that's obvious if you read closely that what I did.
I added + "a" to ba which turned to `b a NaN`

```js
'b' + 'a' + +'a' + 'a';
// turned into
'b' + 'a' + +'a' + 'a';

//    (+"a") is treated as numeric due to an addition symbol,  where a is not a number, (+ "a") === NaN.
```

That's awesome Right? only happens in the Javascript world.
