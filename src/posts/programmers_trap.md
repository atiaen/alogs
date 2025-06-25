---
title: "Falling for the Programmer's Trap AGAIN"
date: 2025-05-19T08:00
thumb: "RaspberryPi5Edited.jpeg"
tags:
  - learning
  - web development
  - raspberry pi
  - programming
  - self hosted
---

## The Classic Developer Delusion

When I say "programmers," I could be referring to anything from getting caught up in technical details and tools rather than focusing on desired outcomes, to writing elegant and perfectly optimized code, all the way to falling victim to the Dunning-Kruger effect. These are just some examples, and honestly, there are a lot more.

But the trap I'm referring to specifically is this one: _"Oh, X software is charging people £50 a month for doing Y service"_ followed immediately by _"I'm a developer, I can do that as well and make it free!"_

← This was me about two weeks ago... Don't be me.

## My "Brilliant" Idea: RAG + Self-Hosted Storage + Raspberry Pi
Recently, I became fascinated with the idea of RAGs that plug into open-source, self-hosted cloud storage solutions, all running on a Raspberry Pi. I know that sounds like technical mumbo jumbo, so let me break it down:

### What is RAG?

**RAG** stands for Retrieval-Augmented Generation, and it's simply a technique that allows you to give pre-trained AI/LLM models more information that they might not necessarily have been trained on.

For example, imagine a company rolls their own version of Google's Gemma, but it doesn't know anything about your organization's internal file policies, how inter-team communication works, or about sales numbers from 2006. By this point, you can probably see the possibilities of this technique your LLMs theoretically won't have to make up information about certain questions you ask.

### Self-Hosted Cloud Storage Solutions

Yes, I know that's a mouthful, but stay with me. I imagine a world where all the cloud storage you use (think OneDrive, Google Drive, or iCloud) is hosted and stored locally with you. That's what this is: running your own version of third-party cloud software within your own home or organization without needing to depend on Google, Microsoft, or others.

Now, for a lot of people, this doesn't make any sense like, why would you want to maintain that kind of headache? Well, you'd be surprised that quite a few people simply don't trust or like those big corporations having access to their data.

You're now at the whims and discretion of these corporations. While for a business it might not be too big of a problem (especially if you're a big company), for an individual who's simply using it to store some private documents or pictures and values their privacy and security, what happens when you're locked out or a [global outage like this one](https://www.theregister.com/2025/06/16/google_cloud_outage_incident_report/) happens and your account just so happens to be the one permanently affected?

Sure, it sounds like you're being paranoid, but not everyone trusts companies or corporations because to them, you're not really anyone special. You're simply another customer among hundreds of thousands just another case they can ignore. I could go on about this, but just have a look at some stories below:

1. [Gmail support thread - Account issues](https://support.google.com/mail/thread/228201769?hl=en&sjid=1903824234979623173-EU)
2. [Reddit: Mails from last month just disappeared](https://www.reddit.com/r/GMail/comments/1ljy3ns/mails_from_last_month_just_dissapeared/)
3. [NextCloud blog: NYT reports Google offers no recourse for mistakenly blocked accounts](https://nextcloud.com/blog/nyt-reports-google-offers-no-recourse-for-mistakenly-blocked-accounts-even-in-egregious-cases/)
4. [My Gmail account got deleted](https://johnjonas.com/my-gmail-account-got-deleted/)
5. [Hacker News discussion on account deletions](https://news.ycombinator.com/item?id=23057365)

### Raspberry Pi: The Perfect Little Computer

**Raspberry Pi** is a series of very small form factor computers or, depending on the model, it could be a compute board that allows you to do circuit/embedded programming for really cool projects. I opted for getting something a bit more computer-like, so I got the Pi 5 mainly because of it's CPU and RAM.

## The "Genius" Moment

With all of that background information and context dumped on you, I present my absolutely, fantastical, original, and bestest idea ever:

_"Why don't I write some code that combines RAG with self-hosted solutions all running on a Raspberry Pi?"_

I swear I felt like a genius when I thought of this, but oh boy, this was not a good idea.

## Down the Rabbit Hole

I quickly told one of my closest friends about it and began spending hours on a hot Sunday afternoon researching, analyzing, overthinking, and over-planning how I'd build this thing.

I reinstalled Python on my Deck (yes, I daily drive a Steam Deck) again. I started reading different blog posts about writing your own RAG some useful with their RAGs running locally, some not so useful with theirs running through an external service like OpenAI (which defeats the entire point of this side project).

From there, I started looking into:

- "Where on earth can I buy a Raspberry Pi 5?"
- "How fast can it get here?"
- "Okay, how do I run self-hosted software on it?"

This indirectly led me to research and learn about the different open-source providers which, to my surprise, were much bigger than I expected: **NextCloud**, **OwnCloud**, **OpenCloud**, and **Seafile**. There are probably more out there, but that's not what this post is for.

## Building the Thing

I had my building blocks - or better yet, I had a base to start from - and all I needed to do was start writing code, which I did. I followed several tutorials that show how to do it because while I'm not a Python expert, I'm at least not a novice. I can work my way around the language, debug when code isn't compiling, do a couple of Google searches or LLM queries, and I'm good to go.



That's what I did: I managed to come up with a relatively simple architecture. I started with:

- **FastAPI** to handle all HTTP requests
- **ChromaDB** as the vector database
- **LangChain** for the model framework

![Diagram showing the architecture of the application](/assets/img/SageDiagram1Back.png)


Funnily enough, a lot of work has gone into making building/working with LLMs in Python as simple as possible (granted, in my humble opinion, it's a really funny dependency hellscape), but I was pleasantly surprised with how deeply ingrained into the language a lot of these things were.

The reason I say all this is because I have little experience doing anything machine learning or AI-related, but I can at least understand most of the concepts from a high level. My original plan was to initially have Python + all the rest as a backend exposed over an API and then have a separate frontend to consume from there.

## The Excitement and the Crash

I think the overall feeling I had during this whole thing was just excitement and internal hype, if I can put it that way. A lot of the time, we as developers tend to get very into what we are doing and forget about the world around us. So that was me for like three days straight writing, prompting, and going back and forth between the server, my code, and other things.

Imagine the relief and joy when I did a few test runs and found that most of what I was doing was working. That was until I more or less got fatigued/hit a wall another way to put it is I burnt myself out, and quickly too.

## The Real Problem: Moving Too Fast

While I was learning and doing stuff, I kept thinking about future plans and implementations when I wasn't even done with current implementations. One thing that I've noticed that's happening to not only me but a lot of other developers in this AI/LLM era is we're all driven/incentivized to move fast. So I was directly and indirectly thinking and planning faster than I could physically move. And that's what I think is a general symptom of this programmer's trap.

We're so obsessed with how grand and fabulous this idea or concept we have is that we don't pace ourselves. Maybe I'm wrong and it's just me who isn't very good at managing tasks or projects -keep in mind that I used Anthropic's Claude to do a lot of the planning for this project - and I just try to overburden myself unnecessarily.

## The Lesson Learned

What I'm getting at is: don't be like me and be just a smidge impulsive if you have an idea or project. While it seems glaringly obvious, actually sit down (or don't even sit), break the idea into components and sub-tasks, and see how long each one will take. At the start, I knew I was being unrealistic giving myself 3-4 days to finish, but I stubbornly pushed ahead and got really burnt out (literally right now, I don't even want to touch anything related to this project).

Not sure where this would go, but yes, I fell for the age-old classical trap of _"i'M a PrOgraMmEr, I CaN mAke WhAtEvEr I wAnT."_ It was a brutal lesson, but one I've learned from.

## The Reality Check

To cut it short: yes, I achieved what I wanted, but it's far from the fancy open-source RAG-API-SELF-HOSTED AI Bot I envisioned, and honestly, that's okay. I did some stuff and got bored, but that's what it is. A rather incomplete side quest, but a completed side quest nonetheless.


You can find the project [here](https://github.com/atiaen/sage-copilot) on GitHub if you're curious.
Thanks for reading, and I promise that part 2 of the shader tutorial is coming soon!