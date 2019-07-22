![roger](./logo.png)

## @pabrick/roger

# Version: 1.0.12

### BREAKING CHANGES
- Roger.Object has been renamed to Roger.Toon
- addObjectToUpdate method in Roger.Clock has been renamed to addToonToUpdate
- clearObjectToUpdate method in Roger.Clock has been renamed to clearToonToUpdate
### NON BREAKING CHANGES
- Readme has been updated and typos have been corrected

# Version: 1.0.11

### BREAKING CHANGES
- None
### NON BREAKING CHANGES
- NPM package ignore file

# Version: 1.0.10
- Proper folder distribution
- Correct minify file for library distribution

# Version: 1.0.9
- Functional NPM publish

# Version: 1.0.8
- Upgrades on packages like Webpack 4 and Babel 7.
- Export classes in ES6.

# Version: 1.0.7
Minor improvements adding getters to the classes and scoping the npm package under the name: **@pabrick/roger.js**

# Version: 1.0.4
I give up a little bit on my TypeScript version ~~Roger.ts~~, because I like to focus on the new EcmaScript possibilities and because I would like to make this library the spine of a browser game made entirely with VanillaJS.
So I'd improved a little bit this project, using **Maps** instead some **Arrays**, and avoid crossed references.
The **RogerObject** don't have to me instanciated with a clock, making easier to handle, from the **RogerClock**.
I have get rid of the CSS, so everything is done dynamically (so cool).

# Version: 1.0.3
I have evolved this project into a TypeScript project, so I stop right here, until I discover how to bundle all the classes properly.
In the meantime, I will continue developing in ~~Roger.ts~~

# Version: 1.0.1
I have inlcude a new RogerSheet: the RogerRegularSheet.
Sometimes (or mostly) we use sprite sheets wich sprites have the same sizes. For those cases we use **RogerRegularSheet**
Instead pasing as parameter an array with all the sizes and positions, we only give it an object with width and height.
So it will be easier!