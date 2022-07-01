---
layout: post
title: "Book Review: The Mythical Man Month"
subtitle: My kingdom for a technology problem!
thumbnail-img: "/assets/img/mythical-man-month.jpg"
readtime: true
show_excerpt: true
permalink: /book-review/mythical-man-month
tags: ["book-review", "tech-book"]
date: 2022-07-01 12:00:00 -0500
---

<div style="text-align:center">
  <a href="/assets/img/mythical-man-month.jpg">
    <img src="/assets/img/mythical-man-month.jpg" alt="mythical-cover">
  </a>
</div>
---

The Mythical Man-Month (_M M-M_) is a book I've come back to a few times in my career; an initial read when I was learning computer science and was told this was a _seminal_ book, another time when I got my first engineering job, and then finally, most recently, after having the opportunity to be a driving force for a few small to medium software projects. Each reading has been deeper, the insights more relevant and true.

<div style="float:right;margin-left: 1em; width: 200px; height: 440px">
  <a href="/assets/img/always-room-for-jello.jpg">
    <img src="/assets/img/always-room-for-jello.jpg" alt="jello">
  </a>
  <figcaption class="caption">Yum!</figcaption>
</div>

M M-M shines not in the particular but the general. It's hard not react to certain bygone, uphill-both-way adages you find in this book, like the suggestion for two hours of desk time for every two hours of terminal time or the requirement that a complete architecture be detailed with a specification ahead of time, with the same sort of quaint and patronizing enthusiasm as when your grandmother sends you another bizarre and unprompted emoji in a text message (see right). But the wheels of software projects seldom grind in the mud of a technology problem[^fn1], at least not in the general. Delivering software projects are a people and process problem, and people haven't really changed much since 1986, let alone 1886. And the majority of the advice in this work is about people and process.

The 25th Anniversary edition, published in 1995, supplements the original 16 essays published in 1986 with 3 additional essays where author Fred Brooks reflects on what has been learned in the ten years since. Brooks's central idea here is that large software projects suffer problems that smaller ones do not, a qualm that the service-oriented architectures (SOA) and microservice architectures of recent years have attempted to address. These newer architectures, in sharp contrast to a monolith, are about how much information you can hide, what you need know about to work on a project, what the flow of change covers; Brooks initially claims that developers should have , a view he fittingly reverses in one of the three essays that have been added to this newer publication. That said, it's not really about the difference between large and small software projects as much as it's about how people interact, how to estimate, how to document, how to plan and share or hide info, how to hire, and how to distinguish complexity between what is inherent in the domain (essence) and what should be mercilessly rooted out and eliminated (accidental).

Interspersed throughout this book are a few ideas that have become axiomatic in software delivery and management. Brook's unearths the 10x developer from a Sackman, Erikson, & Grant 1968 paper[^fn2] and gives it new life. Or Brook's warning about the _second system effect_: "This second [system] is the most dangerous system a man ever designs [...] The general tendency is to over-design the second system, using all the ideas and frills that were cautiously sidetracked on the first one". Or planning to throw a system away. Or programming as "pure thought-stuff". Or computer programs as "message[s] from a man to a machine". Or the oft-proven adage that "adding manpower to a late software project makes it later".

We often talk about how information flows through a data system, complete with sequence charts and diagrams and data flow illustrations, but not nearly enough oxygen and pixels and artwork are expended on how information flows around teams and individuals. While it is true what is functional ultimately is the code, there are so many constraints and impediments and accelerants to how anyone could contribute to that code. It's a bit like if we said that the performance of a car is just about elements of the car like horsepower and suspension rather than taking into consideration the condition of the road, the skill of the driver, the familiarity with the route, or any distractions. A car's inherent performance doesn't matter much if you can't remember where the keys are.

And thus, in the best case we have purely technical problems, pure functions we can deterministically answer with data: what latency or downtime is acceptable, what throughput do we need, how much do we want to spend, do we have the skills on hand? But rarely are problems in software delivery just technical. Just sit in any daily stand up or contentious architecture meeting where the merits of two competing technologies are being discussed. Any problem that can be reduced to a technical problem is tractable. And in this book, Brooks lays out a formalism to how to approach those people and process problems that let teams deliver on the technology, a formalism that is as relevant now as it was 40 years ago, and I suspect, 40 years in the future as well.

---
[^fn1]: <sub>There are some legitimately hard technology problems beyond naming things and cache invalidation, problems that you could create a market for if you were to solve them. For example, my company would pay oodles for the ability to parse PDFs to a machine-readable markup file.</sub>
[^fn2]: <sub>Exploratory Experimental Studies Comparing Online and Offline Programming Performance: <a href="https://dl.acm.org/doi/10.1145/362851.36285">https://dl.acm.org/doi/10.1145/362851.36285</a></sub>
