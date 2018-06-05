![Roger.JS](https://raw.githubusercontent.com/Pabrick/roger.js/master/logo.png)

# ROGER.JS
# The easiest animation library for frame by frame animations

Roger.js is a personal project made it entirely in ECMAScript 6 by Pablo J. Beneyto.
Focus on having an easy animation library for my pixel art and my browser games,
I decide to create it instead of using another game engines or libraries such as Phaser.JS.
PLUS I could try all the new things ECMAScript6 comes within and I cann't use in my workday.

So, welcome!

## Version: 1.0.3
I have evolved this project into a TypeScript project, so I stop right here, until I discover how to bundle all the classes properly.
In the meantime, I will continue developing in ![Roger.ts](https://github.com/Pabrick/roger.ts.git)

## Version: 1.0.1
I have inlcude a new RogerSheet: the RogerRegularSheet.
Sometimes (or mostly) we use sprite sheets wich sprites have the same sizes. For those cases we use **RogerRegularSheet**
Instead pasing as parameter an array with all the sizes and positions, we only give it an object with width and height.
So it will be easier!



## Let's begin!

First add the library to your project:
```
<script src="js/roger.bundle.js"></script>
```

### 1. The Clock (RogerClock)

Like all the videogames an state machines we need some clock signal attached to the delta.
We are going to use **delta** as the elapsed time between one frame and another, so be careful about that!
Our **delta** is going to be **0.1**.
We use our **RogerClock** for that purpose:
```
var rClock = new RogerClock(0.1);
rClock.init();
```

### 2. The Sprite Sheet (RogerSheet)

Now we need an animation sheet, sprite sheet or atlas.
The sprite sheet should be power 2 size. I recommend 1024, but I will use 512x512 px.

![Sprite Sheet](https://raw.githubusercontent.com/Pabrick/roger.js/master/dist/img/damn_pablos_heads.png)

Roger.JS use the object **RogerSheet**, we give it params:
- URL of the sprite sheet.
- Object with the sizes of the sprite sheet
```
{
    w: widthInPixels, 
    h: heightInPixels
}
```
- **An array with all the sprites inside the sprite sheet** 
Every object inside of the array have to be like this:
```
{
    w: width of the sprite,
    h: height fo the sprite,
    x: horizontal position of the sprite,
    y: vertical position of the sprite
}
```
Unless all the sprites have the same size. In that case we can make it shorter,
using the object **RogerRegularSheet** and instead give the array with all the frame's positions,
we just give and object with the size of the sprite (and how all the sprites are the same size, Roger.JS makes all the calcullations. Pretty cool, eh?):
```
{
    w: width of the sprite,
    h: height fo the sprite
}
```

So, how our sprite sheet has all the sprites of the same size, we can use the shorter way:
```
var ss_damnPablosHeads = new RogerSheet("img/damn_pablos_heads.png", 512, 512, [{w:54,h:90}]);
```
Here's a tip of how this sprite sheet is made:

![Sprite Sheet](https://raw.githubusercontent.com/Pabrick/roger.js/master/dist/img/damn_pablos_heads_template.png)

### 3. The Animations (RogerAnimation)

We are going to create our first animation using our element **RogerAnimation** and giving it params as:
- Name
- A sprite sheet (rogerSheet instance in fact)
- An array with indexes of the frames that make the animation
- An object with all the options of the animation, such as: forward or backwards, random frames, infinite loops, delays, callBack function, etc.
```
var anim_damnPablos_blink1 = new RogerAnimation("blink1",
                                                ss_damnPablosHeads,
                                                [0,1,2,1],
                                                { delay: 60, callBack: ()=>console.log('oli') });
```

In case you don't remember the options or you forget them, the animation comes with default options. These options will be overwritten by the options that you gave it.
The default options are:
```
defaultOptions = {
    delay: 0,
    loops: 0,
    direction: "forward",
    callBack: null
}
```

But you can custom your options like this:
- Delay: time in **deltas** before your animation starts moving
- Loops: number of times your animations will repeat. **0 (Zero) plays once, and -1 plays infinite times**
- Direction: direction of the animation, by the time I only have: "forward", "backward" and "random" **IMPORTANT: "random" also makes your animation plays infinite times**
- Call Back: just in case you need it, you can add one function and it will execute at the end of the loop.

### 4. The DisplayObject (RogerObject)

As a Adobe Flash user and lover I have design the library in the same way. You have an visual object and you attach it animations. But only one animation will be playing at the same time.
We give it the params:
- ID of the DIV in the HTML
- Instance of the clock (RogerClock in our case).

**HTML (index.html)**
```
<html>
    <head>
        <title>Roger.js</title>
        <link rel="stylesheet" href="css/roger.css">
    </head>
    <body>
        <div id="pablo"></div>
        <script src="js/roger.bundle.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
```

**JS (main.js)**
```
var pablo = new RogerObject("pablo", rClock);
```

At last we add our animations to our RogerObject:
```
pablo.addAnimation(anim_damnPablos_blink1);
```

## Let's play

Now we can play any animation added to our RogerObject like this:

```
pablo.playAnimation("blink1");
```
