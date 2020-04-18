![roger](./logo.png)

# @pabrick/roger [![npm version](https://badge.fury.io/js/%40pabrick%2Froger.svg)](https://badge.fury.io/js/%40pabrick%2Froger)
# The easiest animation library for frame by frame animations

**Roger** is a personal project made entirely in EcmaScript by **Pablo (Pabrick) Jiménez Beneyto**.
It focuses on providing an easy animation library for pixelart and browser games, using CSS properties manipulation in spritesheets used as backgrounds.
I decided to create it from scratch instead of using other game engines or libraries such as [PhaserJS](https://https://phaser.io/).

*I also use this chance to try out all new features that EcmaScript6 brings as I can't use them in my day-to-day work*.

# How it works

## Let's begin with basics:

## Sprite

An image used in a videogame (old school at least) is called a **sprite**.
The **sprites** are grouped in a bigger image known as a **spritesheet**.

![Sprite](./assets/sprite.png)

## Spritesheet

The **spritesheets** are stored in the memory as square blocks, if the image isn't square, the computer will make it square anyway, that's why it's better to create square **spritesheets** to better use the space.
The **sprites** within the **spritesheet** can all have the same size or different sizes.

![Spritesheet](./assets/spritesheet.png)

#### **NOTE: CURRENTLY I only have developed *spritesheets* that have same sized *sprites*.**

## Animation

When we play several images one after another in a certain time, it looks like the images are moving, and that's called **animation**.

![Animation](./assets/animation.gif)

I like to take advantage of that, so instead of changing one image by another I just set the whole **spritesheet** as a background, crop just one **sprite** size and move the background very fast like a pattern in a window.

![Animation](./assets/animation_trick.gif)

Doing that the computer uses the GPU *(CSS)* instead the CPU *(JS)* to create the **animation**.

Because an **animation** is a group of images or **sprites**, different combinations can make different **animations**. So a **spritesheet** can have many **animations** within itself. We only have to set which **sprites** compose the **animation**.

![Animation](./assets/animation_guide.png)

## Toon

A **toon** is an object that groups different **animations**. As a true fan of *ActionScript* I wanted to bring back the idea of the *DisplayObject* but as *object* is a reserved word I decide to name them after the cartoon characters in "Who Framed Roger Rabbit". A *hero* for example can have different **animations** like: walk, run, attack, duck, etc.

## Clock

If we have different **toons** and different **animations** we may want (and should) synchronize them all. Every **animation** has to *follow the beat* like if it were following a *metronome*. That will help us to control the **animations** and that's why we need a **clock**.
Our **clock** (or **clocks**) have to know wich **animations** beat every time it ticks. So we have to add the **toons** with the **animations** to the **clock** like if it were *windup key* of these **toons**.


# Install

With [npm](https://www.npmjs.com/):
```
npm i @pabrick/roger
```

# Usage
````js
import Roger from "@pabrick/roger";
````

We create and *idle* [sprite](#sprite) passing the **spritesheet** *url*, the **sprite** *size* and the **sprite** *position*.
````js
let pabloIdleSprite = new Roger.Sprite("img/damn_pablos_heads.png", {w:54, h:90}, {x:0, y:0});
````

We define the [spritesheet](#spritesheet) for our **animations** passing the **spritesheet** *url*, the **spritesheet** *size* and the **sprite** *sizes*.
````js
let ssPablosHeads = new Roger.RegularSheet("img/damn_pablos_heads.png", {w:512, h:512}, {w:54, h:90});
````
#### **NOTE:** We are using **RegularSheet** because all our **sprites** have the same size, otherwise we should use **Sheet** and pass an array of **sprite** sizes. **Unfortunately** **Sheet** class development is not finished yet.

If our *idle* **sprite** uses the same **spritesheet** as our **animations**, we can use that instance when we create the **sprite**:
````js
let pabloIdleSprite = new Roger.Sprite(ssPablosHeads.url, {w:54, h:90}, {x:0, y:0});
````

Now we can create our [animation](#animation) with the proper parameters:
````js
let animPablos_blink1 = new Roger.Animation("blink1",
                                             ssPablosHeads,
                                             [0, 1, 2, 1, 0],
                                             { delay: 10, loops: -1, callBack: ()=> { console.log("blink complete!"); }}
                                            );
````
- Name of the **animation**
- Instance of the **spritesheet**
- Array with the *positions* of the **sprites** that compose the **animation**
- Options or configuration of the **animation**:
  - **delay**: time before animation starts
  - **loops**: number of times an **animation** repeats (*-1* for inifite loops)
  - **direction**: how the **animation** plays (*forward*, *backward* or *random*)
  - **callBack**: *function* that executes as the **animation** ends.

#### **NOTE:** *Random* animations play in infinite loops because the **animation** does not know which is its last **sprite**.

We can now create our [toon](#toon) and add an **animation**.
````js
let pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
pabloToon.add(animPablos_blink1);
````

Optionally we can add an *idle* **sprite** when we create our **toon**.

Finally we only need to create our [clock](#clock) with the *delta* we want to use as a parameter (0.1 seconds in our case). Add our **toon** to the **clock**'s update queue and make it start working!
````js
let rClock = new Roger.Clock(0.1);
rClock.addToList(pabloObject);
rClock.start();
````

# API

## Roger.Sprite
### Constructor:
````
Roger.Sprite (url, size, position)
````
- **url**: *{string}* path of the **spritesheet**.
- **size**: *{object}* width and height of the **sprite**.
- **position**: *{object}* top position (row) and left position .(column) on the **spritesheet** from 0.0.

### Getters:
- **url**: *{string}* path of the **spritesheet**
- **w**: *{number}* width of the **sprite**
- **h**: *{number}* height of the **sprite**
- **x**: *{number}* top position (row) on the **spritesheet** from 0.0
- **y**: *{number}* left position (column) on the **spritesheet** from 0.0

## Roger.Sheet & Roger.RegularSheet
### Constructor:
````
Roger.Sheet (url, size, sprites)
Roger.RegularSheet (url, size, sprites)
````
- **url**: *{string}* path of the **spritesheet**.
- **size**: *{object}* width and height of the **spritesheet**.
- **sprites**: *{array}* sizes of each **sprite**.

### Getters:
- **url**: *{string}* path of the **spritesheet**.

### Methods:
- **getSprite**: *{number}* returns the **sprite** in that position.

## Roger.Animation
### Constructor:
````
Roger.Animation (name, spriteSheet, frameList, options)
````
- **name**: *{string}* name of the **animation**.
- **spriteSheet**: *{Roger.Sheet || Roger.RegularSheet}* instance of the **spriteSheet**.
- **frameList**: *{array}* the number of the **sprites** that compose the **animation**.
- **options**: *{object}* (optional) how **animation** is configured.

> **NOTE**: if no options are provided, default options are **NO DELAY**, **INFINITE LOOP** and play **FORWARD**.

### Getters:.
- **url**: *{string}* path of the **spritesheet**.
- **name**: *{string}* name of the **animation**.
- **hasCallBack**: *{boolean}* get if the **animation** has a function when it ends.
- **hasFinished**: *{boolean}* get if **animation** has finished.

### Methods:
- **setOption**: *{object}* set new *options* for the **animation**.
- **getSprite**: *{number}* returns the **sprite** in that position.
- **executeCallBack**: execute the function linked to the **animation** ends.

## Roger.Toon
### Constructor:
````
Roger.Toon (id, idle)
````
- **name**: *{string}* name of the **animation**.
- **idle**: *{Roger.Sprite}* (optional) **sprite** by default when **toon** has no **animation** loaded.

### Methods:
- **update**:
- **add**: *{Roger.Animation}* make an **animation** as part of this **toon**.
- **play**: *{string}* plays the **animation** with the name provided.
- **stop**: stops the current animation, showing the idle sprite.

## Roger.Clock
````
Roger.Clock (delta)
````
- **delta**: *{number}* time in seconds for each tick or step.
### Methods:
- **init**: initilize the **clock** without starting.
- **initWith**: *{number}* initilize the **clock** with a number without starting.
- **start**: initilize AND starts the **clock**.
- **startWith**: *{number}* initilize with a number AND starts the **clock**.
- **pause**: pause the **clock**.
- **stop**: stops the **clock**.
- **update**: makes the **clock** ticks.
- **updateWith**: *{number}* update the clock manually. No need of init or start. Pause doesn't work with this option.
- **addToList**: *{Roger.Toon}* add and **toon** to the update queue.
- **clearList**: empty the update queue.
- **setDebugMode**: *{boolean}* log by console the *delta*.


# License
## MIT

# **THANKS!**