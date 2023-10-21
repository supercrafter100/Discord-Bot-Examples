# Introduction to NodeJS

## Running your first javascript file with NodeJS

Create a new javascript file, for example `choochoo.js` and put the following code in it:

```js
console.log('choo choo!');
```

Now you can run the javascript file by using `node choochoo.js` in your terminal!

## Creating a node project

1. Create a new folder and use `cd` to enter it with your terminal.
2. Now use `npm init` to create your node project inside this folder. Just answer the questions (in the video the default is used for everything)
3. Create a `index.js` file inside the folder and put the same code as earlier in it.
4. Run it using `node index.js`, you should be getting the same output as before!

## Working with (external) packages & ES modules

There are both built-in and external, public, packages.

### Internal packages

In the video, the File System (fs) package is demonstrated.

1. Add `"type": "module"` as an entry in your package.json file to make it support ES modules
2. Import the fs package at the top of your file using the folowing line of code:

```js
import * as fs from 'fs';
```

The code above imports **everything** that the fs package _exports_ and stores it in the variable "fs"

3. Next we're going to write some content to a file using the `writeFile` method. Copy the code below to your `index.js` file and make sure it's _below_ the fs import statement.

```js
const words = ['unicorn', 'cupcake', 'rainbow', 'kitten'];
const output = words.join('\n');
fs.writeFile('words.txt', output, fileWritten);

function fileWritten() {
    console.log('file written!');
}
```

### External packages

As an example package we are going to use the [cowsay](https://www.npmjs.com/package/cowsay) package from npm.

1. Install the cowsay package using `npm install cowsay` in your terminal
2. Import the cowsay package using the following code:

```js
import * as cowsay from 'cowsay';
```

3. Now we can call the method `say` with it's options and store the result in a variable. Then log out that variable.

```js
const output = cowsay.say({ text: 'mooooo' });
console.log(output);
```

4. Running our index.js now using `node index.js` will show a cow saying mooooo
5. If we want to only import the say method from the cowsay package and use that, use the code below

```js
import { say } from 'cowsay';

const output = say({ text: 'mooooo' });
console.log(output);
```
