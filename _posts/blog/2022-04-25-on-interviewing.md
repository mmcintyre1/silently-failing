---
layout: post
title: "On Interviewing"
subtitle: How to choose the right candidates
cover-img:
thumbnail-img:
share-img:
readtime: true
tags: ["blog", "business"]
---

 "In technology", as Marissa Mayer, former CEO of Yahoo, says, "it’s about the people -- getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate”. We've all been on teams with the wrong people; you know the sort. Those who you dread messaging when you see their name pop up as the last committer to the file with a bug, those who sap enthusiasm, who seem to hate their jobs out loud. Or, you've managed a team that just doesn't seem to perform, that spends hours tripping over minor hurtles when resolving a production incident to restore a database, or recoils at any mention of accountability or pride of ownership in the work they do.

 Getting the right people is important. It will make or break a team, a department, eventually a company, like a tree rotting from the inside. We spend plenty of time _in interviews_, but a fraction of that is spent in _thinking about_ how we interview, thinking about the questions we ask and how we ask them, the predictive power of our criteria, the implicit biases of our judgments. I typically spend more time in any given week in status meetings than I do in planning or training for interviews. Like most interviewers, I used to rely on a canned list of questions to vaguely refer during an interview that I preferred to turn into a conversation, then I'd render a judgement like "no red flags, seems nice" in a reply all to the hiring manager like an overbooked small claims court judge.

 In this post, I'll talk through some things I've learned about interviewing. Like anything that is worth doing right and doing well, I am in a perpetual cycle of researching, experimenting, reflecting, and adapting, and I'm sure my approach will change over time.

## A Disclaimer
At the time of writing, I am a system architect. I don't have any direct reports, and the ultimate decision to hire or not isn't in my control -- I only make recommendations. I view an architect's role as one mostly of indirect influence, of persuasion, but if I were to be the ultimate decider, I'd use the same criteria below but would need to factor in multiple other opinions, some of which would be less structured or behaviorally-driven. As a manager, I'd give guidance to those interviewing to steer their interviews towards more of a structured behavioral style.

## Bundles of Noise and Bias
But why is choosing the right candidate so damn hard? It's difficult in part because most of the hard-wiring within our brain is built for snap judgments, the type of instinctual jumping to conclusions that allowed our ancestors to distinguish a saber tooth tiger from some menacingly-toothed shrubbery, or a rival wielding the business end of a spear from a friend and a basket of blueberries to share (cavemen loved blueberries, I'm sure).

Daniel Kahneman, in _Thinking, Fast and Slow_, calls this mental system of involuntary mental shortcuts System 1 judgments. They were a biological advantage when the cost of being wrong was clearly outweighed by the mammoth biological cost of not seeing tiger for the trees and being summarily eaten. I'm no biologist, but I imagine it's tough to procreate if you get eaten because you took the time to intellectualize every potential threat. Unless we force ourselves into thinking about how we make judgments, we defer to heuristics that lead to bias.

Here are some biases you might typically fall into during an interview:
- **First Impressions Error** - making decisions too quickly
- **Halo Effect** - letting one positive trait affect overall impression
- **Horn Effect** - letting one negative trait affect overall impression
- **Similarity Effect** - being drawn to someone similar to you or people you know
- **Lack of standard** - comparing candidates to each other rather than to the standard

Add to this the effect of noise, or random scatter, the other side of potential errors in judgments, and you have a recipe for the decisions we make in the candidates we hire having exceptionally low predictive power; essentially only slightly better than a coin flip. You can save the pleasantries and just hire by coin flip.

## Interview Approaches - The Research
Despite the potential presence of bias and noise, not all interview types are created the same. Most research classifies interview approaches into three broad categories, coinciding with a spectrum of less to more structure structure and informal to behavioral questions.

The most informal type of interview and the structure most frequently used is a **convential unstructured interview**, where the interviewer and interviewee engage in a type of informal dialogue, where questions follow the course of conversation and the interviewer typically doesn't bring a script of questions to ask.

Following on from that, there is the **structured convential interview**, where an interviewer follows a list of guidelines and the aim is to extract information about credentials, technical skills, or experience.

Finally, there is the **structured behavioral interview**, where the interviewer asks a series of questions to assess behaviors, both past and potential. The idea is to standardize this list of questions and ask them of all candidates, and abstain from informal conversations or things that might unfairly bias you towards one candidate or another.

In increasing the structure of the interview corresponds to increasing reliability in determinations of success. The research is pretty clear that a Structured Behavioral Interview is the most reliable indicator of a candidate's fit for purpose success potential of a role. In blah study, they found that reliability, a measure of predictiveness of success, corresponded to .50, .60, .70 for each respective interview type. Countless other studies have replicated these results.

## A Quick Detour to Talk about Interview Success
Evaluating validity of initial assessments is a non-trivial problem. Most studies have used performance reviews 6 months to 2 years down the line, or tenure with the company, to assess the "success" of judgments in hiring candidates. While this is well and good, there is so much that happens after you hire a candidate that the idea that we could evaluate our assessments of candidates in any objective fashion might be an intractable problem. If you hire Suzie, and she is a rockstar in interviews but then deals with health issues, or a re-org aligns her to a boss that stubs out her ambition and thus her performance suffers, is that really a failure of your assessment in interviews?

## My Approach
I'll start with some high level competencies, a framework within which to ground my questions. Often this will be supplied by the hiring manager, but when it's not, I find that these sorts of things can be a clarifying exercise. I like to also add a few clarifying thoughts to each competency.

Once I have these high-level competencies, I start to craft questions. Asking behavioral questions becomes somewhat formulaic; they tend to follow the format of
- tell me about a time when ...
- have you ever ...
- give me an example of ...
- describe a task ...

1. Alignment with Role _someone who is comfortable with data pipelines, terminal commands, deployment of infrastructure as code_
  - Have you ever had to work with data
2. Drive _someone who is self-directed, engages in learning, and loves engineering_
  - Tell me about a time where you had to learn a new technology. If possible, one that wasn't required for school. What was it? How did you go about learning it?
  - Why do you want to be a software engineer?
3. Cultural Fit - _someone who is excited by complex environments, isn't intimidated by jumping into difficult spaces with unclear documentation, and is an open communicator_
  - Can you describe the most complicated technical environment you've worked in? What made it complicated? How do you deal with these sorts of environments?



---
### References
Alonso, Pamela & Moscoso, Silvia. (2017). Structured behavioral and conventional interviews: Differences and biases in interviewer ratings. Journal of Work and   Organizational Psychology. 33. 183-191. 10.1016/j.rpto.2017.07.003.

Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.

Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). Noise: a flaw in human judgment. First edition. New York: Little, Brown Spark.

Salgado, J. F., & Moscoso, S. (2002). Comprehensive meta-analysis of the construct validity of the employment interview. European Journal of Work and Organizational Psychology, 11(3), 299–324. https://doi.org/10.1080/13594320244000184
