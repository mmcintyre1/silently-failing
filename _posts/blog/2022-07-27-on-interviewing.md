---
layout: post
title: "On Interviewing"
subtitle: Some thoughts on interviewing, biases, and hiring the right candidates
cover-img:
thumbnail-img:
share-img:
readtime: true
tags: ["blog", "business"]
permalink: /blog/on-interviewing
tags: ["blog", "interviewing", "tech"]
date: 2022-07-27 12:00:00 -0500
---
## Table of Contents <!-- omit in toc -->
- [Introduction](#introduction)
- [A disclaimer](#a-disclaimer)
- [What are we even looking for?](#what-are-we-even-looking-for)
- [Bundles of noise and bias](#bundles-of-noise-and-bias)
- [Interview approaches: the research](#interview-approaches-the-research)
- [How can we even determine interview success?](#how-can-we-even-determine-interview-success)
- [My approach](#my-approach)
- [Skill-based technical assessments](#skill-based-technical-assessments)
- [Come work with us](#come-work-with-us)
- [How to give good feedback on candidates](#how-to-give-good-feedback-on-candidates)
- [Wrapping it up](#wrapping-it-up)
- [Footnotes](#footnotes)
- [References](#references)

## Introduction
"In technology", as Marissa Mayer, former CEO of Yahoo, says, "it’s about the people -- getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate”. We've all been on teams with the wrong people; you know the sort. Those who you dread messaging when you see their name pop up as the last committer to the file with a bug, those who sap enthusiasm, who seem to hate their jobs out loud. Or, you've managed a team that just doesn't seem to perform, that spends hours tripping over minor hurtles when resolving a production incident to restore a database, or recoils at any mention of accountability or pride of ownership in the work they do.

Getting the right people is important. It will make or break a team, a department, eventually a company, like a tree rotting from the inside. We spend plenty of time _in interviews_, but a fraction of that is spent in _thinking about_ how we interview, thinking about the questions we ask and how we ask them, the predictive power of our criteria, the implicit biases of our judgments. I typically spend more time in any given week in status meetings than I do in planning or training for _being_ an interviewer. Like most interviewers, I used to rely on a canned list of questions to vaguely refer to during an interview. I preferred a good conversation. Then I'd render a judgement like "no red flags, seems nice" in a reply all to the hiring manager and the interview panel, and wash my hands of the whole affair.

But this just doesn't work. You'll miss valuable candidates, hire the wrong ones, undersell your company, or generally burn folks out on interviewing. Interviewing is not just a conversation, it's a diagnostic device used to make a predictive judgement about a candidate's qualifications and competencies and then to compare that to what you want and need in a candidate to make a decision of whether to extend an offer. The act of interviewing benefits from a serious interrogation into the component parts that might make it successfully predictive.

In this post, I'll talk through some things I've learned about interviewing. Like anything that is worth doing right and doing well, I am in a perpetual cycle of researching, experimenting, reflecting, and adapting. I will almost certainly modify and update my approach as things move forward. This post isn't meant to be dictatorial; everyone's situation is different and different tactics should apply.

## A disclaimer
I currently work as a system architect, meaning I am not currently a hiring manager on these decisions. My role is one of indirect influence, of persuasion. The insights below have been garnered as a result of hundreds of interviews that I've taken part in.

## What are we even looking for?
What's the point of an interview? Why do we take the time to sit down and ask all sorts of questions of prospective employees? We can decompose the intent of an interview into three parts:

1. **Behavioral Assessment** - Will this employee mesh with others, contribute to your company's culture, innovate, communicate effectively, etc?
2. **Skill-Based Assessment**[^fn1] - Does this employee have the skills they say they do, and are their skills suitable to the role with a reasonable amount of training and investment?
3. **Selling Your Company** - Does this employee even want to work at your company, and what can you do to make your company attractive to them?

I've found it has been helpful to have separate interviews for skill-based and behavioral assessments. You can still indirectly diagnose behavioral trends from measuring skills, but approaches are different and at best you can only indirectly observe behavior while assessing skills or vice versa. It takes a really skilled interviewer to do both in a way that doesn't systemically bias the assessment. I dedicate some real estate at the end of the article to [skill-based assessments](#skill-based) and [selling your company](#selling), but the bulk of this article is about a behavioral assessment.

## Bundles of noise and bias
Why is choosing the right candidate so damn hard? It's difficult in part because most of the hard-wiring within our brain is built for snap judgments, the type of instinctual jumping to conclusions that allowed our ancestors to instantly react to anything vaguely resembling a threat, whether it be rival tribes competing for resources, predators looking for a meal, or precarious environmental hazards.

Daniel Kahneman, in _Thinking, Fast and Slow_, calls this mental system of involuntary shortcuts and heuristics _System 1_ judgments. They were a biological advantage when the cost of misjudging a menacingly toothed piece of shrubbery for a predator was clearly outweighed by the mammoth biological cost of not seeing tiger for the trees and being summarily eaten. I'm no biologist, but it's hard to procreate if you are being eaten. The moral here is that unless we force ourselves into what Kahneman calls _System 2_ thinking, a comparatively slower, more effortful and logical approach, we will default to the easy mental shortcuts that lead to bias.

[Read up to here] Here are some biases you might typically fall into during an interview:
- **First Impressions Error** - making decisions too quickly
- **Halo Effect** - letting one positive trait affect overall impression
- **Horn Effect** - letting one negative trait affect overall impression
- **Similarity Effect** - being drawn to someone similar to you or people you know
- **Lack of standard** - comparing candidates to each other rather than to the standard

Add to this the effect of noise, or random scatter, the other side of potential errors in judgments, and you have a recipe for the decisions we make in the candidates we hire having exceptionally low predictive power; essentially only slightly better than a coin flip. You can save the pleasantries and just hire by coin flip.

## Interview approaches: the research
Despite the potential presence of bias and noise, not all interview types are created the same. Most research classifies interview approaches into three broad categories, coinciding with a spectrum of less to more structure structure and informal to behavioral questions.

The most informal type of interview and the structure most frequently used is a **convential unstructured interview**, where the interviewer and interviewee engage in a type of informal dialogue, where questions follow the course of conversation and the interviewer typically doesn't bring a script of questions to ask.

Following on from that, there is the **structured convential interview**, where an interviewer follows a list of guidelines and the aim is to extract information about credentials, technical skills, or experience.

Finally, there is the **structured behavioral interview**, where the interviewer asks a series of questions to assess behaviors, both past and potential. The idea is to standardize this list of questions and ask them of all candidates, and abstain from informal conversations or things that might unfairly bias you towards one candidate or another.

In increasing the structure of the interview corresponds to increasing reliability in determinations of success. The research is pretty clear that a Structured Behavioral Interview is the most reliable indicator of a candidate's fit for purpose success potential of a role. In blah study, they found that reliability, a measure of predictiveness of success, corresponded to .50, .60, .70 for each respective interview type. Countless other studies have replicated these results.

## How can we even determine interview success?
Evaluating validity of initial assessments is a non-trivial problem. Most studies have used performance reviews 6 months to 2 years down the line, or tenure with the company, to assess the "success" of judgments in hiring candidates. While this is well and good, there is so much that happens after you hire a candidate that the idea that we could evaluate our assessments of candidates in any objective fashion might be an intractable problem. If you hire Suzie, and she is a rockstar in interviews but then deals with health issues, or a re-org aligns her to a boss that stubs out her ambition and thus her performance suffers, is that really a failure of your assessment in interviews?

## My approach
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

## Skill-based technical assessments
- prompt ahead of time
- live whiteboarding - testing not just technical viability but how someone operates under pressure
- technical trivia questions

## Come work with us

## How to give good feedback on candidates

## Wrapping it up
Didn't address things like interview panels, how to structure and give feedback, etc. etc.

And this is advice that is applicable to my circumstance, so you might find something that works differently for your domain. If I have one piece of advice, it would be to really think through your interview process and interrogate whether it is working for you, whether you are hiring the best candidates, missing out on others, biased in invisible ways. Because the unexamined interview process is not worth having.


---

## Footnotes
[^fn1]: I've called the second item a more generic "Skill-Based" rather than saying "technical". Every role has some measure of skill involved. It just so happens in my domain, we do technical assessments, but in others, you might ask a future ice scream scooper how they are with cold fingers, or a tax accountant to show their certifications. Tech is a weird beast because we largely ignore certifications while simultaneously bemoaning the difficulty we have in assessing technical viability.

## References
Alonso, Pamela & Moscoso, Silvia. (2017). Structured behavioral and conventional interviews: Differences and biases in interviewer ratings. Journal of Work and   Organizational Psychology. 33. 183-191. 10.1016/j.rpto.2017.07.003.

Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.

Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). Noise: a flaw in human judgment. First edition. New York: Little, Brown Spark.

Salgado, J. F., & Moscoso, S. (2002). Comprehensive meta-analysis of the construct validity of the employment interview. European Journal of Work and Organizational Psychology, 11(3), 299–324. https://doi.org/10.1080/13594320244000184
