---
title: "The Shader Tutorial I Wish I Had (Part 1 of ????)"
date: 2025-05-19T08:00
thumb: "basic_shader.gif"
tags:
  - learning
  - gamedev
  - shaders
  - programming
---

# The Shader Tutorial I Wish I Had (Part 1 of ????)

## Prologue

Over the last couple of months, I've been working on finishing a game for my first-ever full Steam release. It’s based on a jam version I made for the GMTK Game Jam in August 2024. You can play the jam version [here](https://adeayo.itch.io/shape-it-up).

That version was made with Unity, so I could rely on built-in post-processing components to make the visuals look good. But this new version I'm working on isn’t built with Unity rather, it’s built with [**raylib**](https://www.raylib.com), and raylib is a bit more raw: you have to do everything yourself, from scratch.

I could probably do another post on how I’ve used raylib to build most of the game, but that’s for another time. What I want to get at is this: at a certain point, I started to feel frustrated or demotivated with what I was building. My solution to that problem was to pivot my focus to something new, but still very relevant to the overall progress of the game. That "something new" was none other than **shaders**.

This is something I’ve been putting off for a long time, and I finally decided to sit down and learn it. My main goals were: even if I couldn’t write the fanciest shaders, I wanted to at least understand the basic syntax, structure, and flow of a GLSL file and figure out how to work my way around it.

The first thing I did? Googled: 
> “is there an easy guide on learning shaders”

Of course, that didn’t give me a straight answer, but it did lead me to this [Reddit comment](https://www.reddit.com/r/gamedev/comments/nj1gh2/comment/gz4xkaz/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), and then to [The Book of Shaders](https://thebookofshaders.com/).

As much as this post is about my experience learning shaders, I **can’t recommend that site enough**. It absolutely helped reshape the way I think about shaders, GPUs, and even how computers work at a lower level. If you do check it out, make sure you read the sections about how shaders came to be, the OpenGL standard, its history all that good stuff.

## Introduction

Alright, at this point, I’m assuming you have *some* level of experience with game development, programming, or software development. You could be a beginner, a tools programmer, or even an engine programmer but you at least understand how code turns into something visual or interactive.

If you've made a game before, you’ve probably had that feeling: 
> “Something’s missing visually.”

For me, that feeling never really went away until I started learning shaders.

Another way I can describe it is this: I’ve finished drawing my art piece, but I don’t know *how*, *when*, or *where* to paint on it. That’s what shaders are to me that final layer of polish and visual communication.

So, without further ado what *exactly* are shaders?

Well, like I said above, they’re like the paint you apply to your art piece. A more technical way to describe it is this:

Think of any visual product you’ve made it doesn’t even have to be a game. If you’re like me and not a great artist (I mostly make "programmer art"), shaders offer a **programmer-friendly** way to manipulate how your visuals are presented.

How exactly does that work?

Well, look at the device you’re reading this on. What is that **4K ULTRAWIDE HD++** screen made of?

A panel? Sure. But inside that panel are **pixels** and those pixels are the building blocks of what you see.

And **that’s it**. That’s the magic bullet that blew my mind when I realized it:

> **Shaders let you manipulate pixels.**

Now stay with me we’ll get to the "how" soon, but we need just a little more context.

Every pixel on your screen has one job: to translate all that magical programming happening on your hard drive or SSD into something **you can see** whether it's color, text, or movement. That’s where the **GPU** (Graphics Processing Unit) comes in.

The GPU’s job is to take over all visual tasks from the CPU. Why? Because the CPU can’t do everything on its own.

> **CPU Brain vs GPU Brain**
> 
> The CPU thinks like a manager doing tasks one at a time. 
> The GPU thinks like an army of workers doing *the same task on millions of pixels at once*. 
> 
> When working with shaders, stop thinking in CPU terms. Start thinking in **GPU brain** *parallel, pixel-first thinking*.

---

## A Quick Peek at Shader Code

So what does a shader *actually* look like?

Let me show you the simplest possible fragment shader. This is the kind that runs on every pixel of a shape or screen and simply tells it what color to be.

Here’s a **basic empty fragment shader** in GLSL that paints everything red:

```glsl
#ifdef GL_ES
precision mediump float;
#endif

void main() {
   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // RGBA: Red, Green, Blue, Alpha
}
```

That’s it.

This code runs for every pixel and tells it:

“Make this pixel pure red, with full opacity.”

You could replace the numbers in vec4(...) to get different colors, or even make it respond to time or coordinates but we’ll get to that later.

### Terminology Box: Shader Types

Vertex Shader: This modifies the positions of the points (vertices) that make up a shape. Think of it as warping the shape of the object or 3D model itself.

Fragment Shader: This decides what each pixel should look like. Think of it like deciding the color of each tiny tile on a mosaic but this time you're using reallly fancy mathematics to do it.

## Conclusion
To recap what we’ve covered:

 - 1. Your screen is made of millions of tiny pixels, and shaders are how we tell them what to display.

 - 2. Shaders are a core part of the graphics rendering pipeline and are run by the GPU not the CPU.

There are two major kinds of shaders you'll commonly write:

1. Vertex shaders for changing the geometry (positions).

2. Fragment shaders for changing how pixels look (think colors, textures, effects).

So far, I’ve really just given an overview of what shaders are and how they fit into the picture. If this intrigued you, I highly recommend reading:

- [The Book of Shaders](https://thebookofshaders.com/)

- [A brief history of OpenGL and the graphics pipeline](http://openglbook.com/chapter-0-preface-what-is-opengl.html)

While reading, think back to some of the concepts from this post it’ll help you tie things together.

In the next blog post, I’ll dive deeper into writing your first real shader from scratch, and where you can actually run it.

In the meantime, feel free to leave a comment if anything was unclear or if you want help digging deeper.

And if you're feeling adventurous, your homework:
Try playing with a basic fragment shader in an editor like this one from [shadertoy](https://www.shadertoy.com/new) but [Book of Shaders has one here as well](http://editor.thebookofshaders.com). Try to change the color values, and see what happens.

Thanks for reading see you in Part 2!
