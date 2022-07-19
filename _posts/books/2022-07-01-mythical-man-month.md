---
layout: post
title: "Book Review: The Mythical Man Month"
subtitle: Still as relevant today as it was 40 years ago.
thumbnail-img: "/assets/img/mythical-man-month.jpg"
readtime: true
show_excerpt: true
permalink: /books/mythical-man-month
tags: ["book-review", "tech-book"]
date: 2022-07-01 12:00:00 -0500
---

<div style="text-align:center">
  <a href="/assets/img/mythical-man-month.jpg">
    <img src="/assets/img/mythical-man-month.jpg" alt="mythical-cover">
  </a>
</div>
---

The _Mythical Man-Month_ (_M M-M_) is a book I've come back to a few times in my career; an initial read when I was learning computer science and was reading all the _important_ books (while understanding next to nothing; it is difficult to affix new knowledge to the tree of your mental model if that tree is just an acorn), another time when I got my first engineering job, and then finally, most recently, after having the opportunity to be a driving force for a few small to medium software projects. Each reading has felt like a peeling back of another layer, a deeper insight but also a simplification.

<div style="float:right;margin-left: 1em; width: 200px; height: 440px">
  <a href="/assets/img/always-room-for-jello.jpg">
    <img src="/assets/img/always-room-for-jello.jpg" alt="jello">
  </a>
  <figcaption class="caption">Yum!</figcaption>
</div>

_M M-M_ shines not in the particular of the software projects author Fred Brooks has worked on, but the general. It's hard not quickly dismiss certain bygone, uphill-both-way adages like the suggestion that two hours of desk time accompany every two hours of terminal time or the requirement that a complete architecture be detailed with a specification ahead of time. These quaint curios elicit the same sort of patronizing enthusiasm as when your grandmother sends you another bizarre and unprompted emoji in a text (see right)[^fn1]. Moore's law has eliminated a whole class of problems, and the market has delivered easy-to-use (relatively) and ubiquitous solutions to a whole slew of additional problems. But the wheels of software projects seldomly stall in the mud of a technology problem[^fn2], at least not in the general. Delivering software projects mostly are a people and process problem, and people haven't really changed much since 1986, let alone 1886. And the majority of the advice in this work is about people and process. And it's still mostly good.

The 25th Anniversary edition, published in 1995, supplements the original 16 essays published in 1986 with 3 additional essays where author Fred Brooks reflects on what has been learned in the interceding ten years since initial publication. Brooks's central idea, in his words, is that large software projects suffer problems that smaller ones do not. This is a book about "how to design and build a set of programs into a system, how to design and build a program into a robust, tested, documented, supported product, [and] how to maintain intellectual control over complexity in large doses". It's about how people interact, how to estimate, how to document, how to plan and share or hide info, how to test, how to hire, how to manage, how to architect, and how to distinguish inherent domain complexity from accidental complexity remaining from implementation; a large agenda for ~300 pages.

The book puts forth a few ideas that have become axiomatic in software delivery and management. Brook's unearths the 10x developer from a Sackman, Erikson, & Grant 1968 paper[^fn3] and gives it new life. Brook's warns about the _second system effect_: "This second [system] is the most dangerous system a man ever designs [...] The general tendency is to over-design the second system, using all the ideas and frills that were cautiously sidetracked on the first one". He cautions that we should "plan to throw [a system] away; you will anyhow". He describes programming as "pure thought-stuff", a phrasing I've heard in dozens of subsequent books. Computer programs are "message[s] from a man to a machine". Brooks opines on max team size (10) or that we often confuse "effort for progress" [^fn4]. Finally, Brooks, in the titular essay, outlines what anyone who has done a large re-organization to 'align value streams' or has a lagging project that upper management want to effectively resource already knows, that "adding manpower to a late software project makes it later". Onboarding and additional communication are exponential compounders that take time.

These people and process problems that sit at the heart of software delivery problems are fundamentally informational and communication problems. We often talk about how information flows through a data system, complete with sequence charts and diagrams and data flow illustrations, but not nearly enough oxygen and pixels and artwork are expended on how information flows around teams and individuals. Any software or technology book, in order to give a full reckoning, should account for how to organizationally effect change, how to align the firm's mechanisms of bureaucracy with the delivery of software and the delivery of valuable business outcomes. While it is true what is functional ultimately is the code, there are so many constraints and impediments and accelerants to how anyone could contribute to that code, or to how it gets prioritized, funded, organized, implemented. It's a bit like if we said that the performance of a car is just about elements of the car like horsepower and suspension rather than taking into consideration the condition of the road, the skill of the driver, the familiarity with the route, or any distractions. A car's inherent performance doesn't matter much if you can't remember where the keys are.

And thus, in the best case we have purely technical problems, pure functions we can deterministically answer with data: what latency or downtime is acceptable, what throughput do we need, how much do we want to spend, do we have the skills on hand? But Brooks is arguing here that problems are rarely pure technical problems. Just sit in any daily stand up or contentious architecture meeting where the merits of two competing technologies are being discussed. Any problem that can be reduced to a technical problem is tractable. And in this book, Brooks lays out a formalism to how to approach those people and process problems that let teams deliver on the technology, a formalism that is as relevant now as it was 40 years ago, and I suspect, 40 years (or 400, if we are still around then) in the future as well.

---

## Footnotes
[^fn1]: I'll give her all the credit for trying though. I don't think she sees the humor in here widely inappropriate (in several ways) emojis, which, of course, make them all the more funny.
[^fn2]: There are some legitimately hard technology problems beyond naming things and cache invalidation, problems that you could create a market for if you were to solve them. Large scale logistics, NP-Hard or NP-Complete, dealing with encoding, etc. For example, my company would pay oodles for the ability to parse PDFs to a machine-readable markup file.
[^fn3]: Exploratory Experimental Studies Comparing Online and Offline Programming Performance: <a href="https://dl.acm.org/doi/10.1145/362851.36285">https://dl.acm.org/doi/10.1145/362851.36285</a>
[^fn4]: I've heard this recently as confusing output with outcomes, i.e., just because we are moving doesn't mean we are going where we need to go
