![roger](./logo.png)

## @pabrick/roger

# Version: 1.1.2

### BREAKING CHANGES

- None

### NON BREAKING CHANGES

- Update README.md

# Version: 1.1.1

### BREAKING CHANGES

#### Roger.Toon

- Idle has been removed: Idle has no use now the animation remains on last frame once they finish.

#### Roger.Animation

- Options **callBack** has been changed by **callback**.

### NON BREAKING CHANGES

#### Roger.AnimationOptions

- This class has been added to help users with typing.

# Version: 1.1.0

### BREAKING CHANGES

#### Roger.Toon

- **addAnimation** has been changed by **add**.
- **playAnimation** has been changed by **play**.
- **stopAnimation** has been changed by **stop**, and now it hasn't parameters.
- **currentAnimationName** has been added.

#### Roger.Animation

- Options by default are: **NO DELAY**, **INFINITE LOOP** and play **FORWARD**.

#### Roger.Clock

- **addToonToUpdate** has been changed by **addToList**.
- **clearToonToUpdate** has been changed by **clearList**.
- **stopAnimation** has been changed by **stop**, and now it hasn't parameters.
- **currentAnimationName** has been added.

### NON BREAKING CHANGES

- Readme updated.

#### Roger.Toon

- **paintSprite** has been changed by **drawSprite** and improved its performance.

# Version: 1.0.16

### BREAKING CHANGES

- None

### NON BREAKING CHANGES

- Fix bug on clock

# Version: 1.0.15

### BREAKING CHANGES

- None

### NON BREAKING CHANGES

- Fix bug on clock

# Version: 1.0.14

### BREAKING CHANGES

- Non stable version

### NON BREAKING CHANGES

- RogerClock has methods to initialize manually the clock

# Version: 1.0.13

### BREAKING CHANGES

- None

### NON BREAKING CHANGES

- RogerClock has pause() and play() methods

# Version: 1.0.12

### BREAKING CHANGES

- Roger.Object has been renamed to Roger.Toon
- addObjectToUpdate method in Roger.Clock has been renamed to addToList
- clearObjectToUpdate method in Roger.Clock has been renamed to clearList

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
