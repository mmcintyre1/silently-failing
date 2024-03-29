---
layout: post
title: "On Interviewing"
subtitle: A look into interviewing, biases, and hiring the best candidates
thumbnail-img:
share-img:
readtime: true
permalink: /blog/on-interviewing
tags: ["blog", "interviewing", "business", "tech"]
date: 2022-08-06 12:00:00 -0500
---
## Table of Contents <!-- omit in toc -->
- [Introduction](#introduction)
- [Disclaimer](#disclaimer)
- [Was I A Good Interviewer?](#was-i-a-good-interviewer)
- [What's The Point?](#whats-the-point)
- [Assessing Behavior And Competencies](#assessing-behavior-and-competencies)
  - [The Noise And The Bias](#the-noise-and-the-bias)
  - [Types Of Interviews](#types-of-interviews)
- [Assessing Skills](#assessing-skills)
  - [Technical Assessments](#technical-assessments)
  - [Other Skills Assessments](#other-skills-assessments)
- [Selling Your Company](#selling-your-company)
  - [The Grass Is Greener](#the-grass-is-greener)
  - [Training Interviewers](#training-interviewers)
- [My approach](#my-approach)
- [Wrapping it Up](#wrapping-it-up)
- [References](#references)
- [Footnotes](#footnotes)

## Introduction
"In technology", as Marissa Mayer, former CEO of Yahoo, says, "it’s about the people -- getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate”. We've all been on teams with the wrong people; you know the sort. Those you dread messaging when you see their name pop up as the last committer to the file with a bug, those who sap enthusiasm, who seem to hate their jobs out loud. Or, you've managed a team that just doesn't seem to perform, that spends hours tripping over minor hurtles when resolving a production incident to restore a database, or recoils at any mention of accountability or pride of ownership in the work they do.

Getting the right people is important. It will make or break a team, a department, eventually a company like a tree rotting from the inside. And it's damn hard to do. The feedback loop is miles long. We don't treat _interviewing_ as a separate skill, to be cultivated like anything else. We treat interviews as conversations or worse, trivia contests.

To interview well, we need to think about the interview process itself, decompose it into smaller blocks and then interrogate what makes those blocks work before recomposing the process. We need to think about the questions we ask and how we ask them, the predictive power of our criteria, the implicit biases of our judgments, then build this all up into a framework that puts up guardrails to reduce or eliminate the variances that have no value, the statistical noise.

Interviewing isn't just a conversation. You'll miss valuable candidates, hire the wrong ones, undersell your company, or generally burn folks out on interviewing. Interviewing is a diagnostic device used to make a predictive judgement about a candidate's qualifications and competencies and then to compare that to what you want and need in a candidate to make a decision of whether to extend an offer. Some folks certainly have a seemingly magical intuition into good or bad candidates, and when you ask them how they if a candidate is good, they'll respond Larry Flynt-like that they know when they see it. Introspection of the interview process is the only way to really understand how the sausage is made, to turn that intuition into a repeatable process.

In this post, I'll talk through some things I've learned about interviewing. Like anything that is worth doing right and doing well, I am in a perpetual cycle of researching, experimenting, reflecting, and adapting. You should be too.

## Disclaimer
I currently work as a system architect, meaning I am not currently a hiring manager with final discretion on hiring decisions. My role is one of indirect influence, of persuasion. The insights below have been garnered as a result of hundreds of interviews that I've taken part in, but the ultimate decision, as it should, always rests with the hiring manager.

## Was I A Good Interviewer?
One more disclaimer. Evaluating validity of initial assessments is a non-trivial problem. Most studies have used measures like performance reviews 6 months to 2 years down the line, or tenure with the company, to assess the "success" of judgments in hiring candidates. While this is all well and good, there is so much that happens after you hire a candidate that the idea that we could evaluate our assessments of candidates in any objective fashion might be an intractable problem. If you hire Suzie who is a rockstar in interviews but then deals with health issues, or a re-org aligns her to a boss that stubs out her ambition and thus her performance suffers, is that really a failure of your assessment in interviews? That said, the problem domain of an interview is within the set of interviews themselves; we can't control for what happens afterwards. So we need to rely on research and past experience to ensure that we are offering a consistent experience to candidates and assessing them in as unbiased a way as possible.

## What's The Point?
With all the disclaimers out of the way (I promise!), we can jump into the heart of it. Why do we interview? Why do we take the time to sit down and ask all sorts of questions of prospective employees instead of just reading the resume and hiring based on that? Generally, we are trying to do three things.

1. **Assess Behavior/Competencies** - Will this employee mesh with others, contribute to your company's culture, innovate, communicate effectively?
2. **Assess Skills**[^fn1] - Does this employee have the skills they say they do, and are their skills suitable to the role with a reasonable amount of training and investment?
3. **Sell Your Company** - Does this employee even want to work at your company, in your domain, and what can you do to make your company attractive to them?

I've found it has been helpful to have separate interviews for skill-based and behavioral assessments. You can still indirectly diagnose behavioral trends from measuring skills (walking through a piece of code is a great way to see not only how a candidate views a problem space but communicates around that problem space), but approaches are different and at best you can only indirectly observe behavior while assessing skills or vice versa. It takes a really skilled interviewer to do both in a way that doesn't feel disjointed or lead to a severely bumpy road as technical and behavioral questions are intermingled.

Let's start by looking at behavioral assessments, and some of the ways in which we can be systematically or randomly wrong in our judgments of character.

## Assessing Behavior And Competencies
### The Noise And The Bias
Why is choosing the right candidate so damn hard? It's difficult in part because most of the hard-wiring within our brain is built for snap judgments, the type of instinctual jumping to conclusions that allowed our ancestors to instantly react to anything resembling a threat. Biologically, it is better to overreact to threats than to underreact. For our ancestors, the most successful strategy was to take the mental shortcut that they were going to avoid all things that look like saber-tooth tigers, be they the carnivorous predator or menacingly-toothed topiary.

Daniel Kahneman, in _Thinking, Fast and Slow_, calls this mental system of involuntary shortcuts and heuristics _System 1_ thinking, also known by the less catchy moniker, automatic thinking. This system is a biological necessity when the cost of misjudging a threat meant death. Contrast that with _System 2_, or effortful thinking, which is much slower, logical: our executive faculties. _System 1_ is constantly peppering _System 2_ with thoughts, impressions, and ideas like an excited puppy, many of which often are adopted unchallenged by _System 2_, and require effort and thought to really think through. There are several tests that show this sort of thinking, but one of my favorites is the [Harvard Implicit Bias Test](https://implicit.harvard.edu/implicit/user/agg/blindspot/indexrk.htm)[^fn2].

Here are some biases you might typically fall into during an interview:
- **First Impressions Error** - making decisions too quickly
- **Halo Effect** - letting one positive trait affect overall impression
- **Horn Effect** - letting one negative trait affect overall impression
- **Similarity Effect** - being drawn to someone similar to you or people you know
- **Lack of standard** - comparing candidates to each other rather than to the standard

**Bias**, a systematic skew in one direction or another, is just one side of the errors in judgement coin[^fn3]. The other side is **noise**, or random scatter. Add noise to a likely already biased interview, and you have a recipe for the decisions we make in the candidates we hire having exceptionally low predictive power; essentially only slightly better than a coin flip. We could all save a bit of time and just flip the coin. Let's take a look at what the research says about how to increase the predictive power of our judgments, to attempt to overcome noise and bias.

### Types Of Interviews
Despite the potential presence of bias and noise, not all interview types are created the same. Most research classifies interview approaches into three broad categories, following an increasing structure and moving from informal to behavioral questions.

The most informal type of interview and the structure most frequently used is a **convential unstructured interview**, where the interviewer and candidate engage in a type of informal dialogue, where questions follow the course of conversation and the interviewer typically doesn't bring a script of questions to ask.

Following on from that, there is the **structured convential interview**, where an interviewer follows a list of guidelines and the aim is to extract information about credentials, technical skills, or experience.

Finally, there is the **structured behavioral interview**, where the interviewer asks a series of questions to assess behaviors, both past and potential. The idea is to standardize this list of questions and ask them of all candidates, and abstain from informal conversations or things that might unfairly bias you towards one candidate or another.

In increasing the structure of the interview corresponds to increasing reliability in determinations of success. The research is pretty clear that a **structured behavioral interview** is the most reliable indicator of a candidate's fit for purpose success potential of a role. For example, in Alonso, Pamela & Moscoso, Silvia, 2017, they found that reliability, a measure of predictiveness of success, corresponded to .50, .60, and .70 for each respective interview type. Many other studies have replicated these results. Many other studies have replicated these findings.

## Assessing Skills
### Technical Assessments
Technical assessments tend to be more straight forward than behavioral assessments, but if you don't have a structure and approach in place, you will inevitably end up with folks who pepper candidates with general knowledge questions about particular elements of the software stack they are applying for. What's a sealed class, what's the difference between mock and stub, how does the JVM use heap and stack memory; you get the idea. And while this style of questioning might eliminate those who aren't fit for purpose for a particular role, it has two prominent negatives in that it'll also eliminate people who do not do well with rapid-fire trivia, and it'll make for a generally poor interview experience. I think back to my worst interviews, and they all involved this sort of technical assessment.

It is far more powerful to use real-life examples of actual problems and actual code in the technical assessment to gauge a candidates ability to scope a problem, to come up with a solution, and to communicate that solution. There are a handful of approaches to _how_ you assess technical skill, but we can sketch some broad stroke approaches here.

| task                         | description                                                                                                                                            | pros                                                                                                                               | cons                                                                                                           |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| live coding                  | candidates need to write some code to solve a problem                                                                                                  | - showcases algorithmic thinking<br> - good signal for ability to write code                                                       | doesn't showcase system design thinking, including class structures, integration points, access patterns, etc. |
| prompt-based implementations | candidates are given a prompt of a small system to implement (e.g., an API for a vending machine) and are asked to sketch it, including class diagrams | great for system design thinking and critical thinking around a problem domain                                                     | might not indicate someone's skill at writing code                                                             |
| code review                  | candidates review code, either from your current code bases or toy examples or code they wrote ahead of time                                           | - mimics a real situation<br> - chance to demo actual codebases - tends to be most enjoyable process for candidate and interviewer | - limited in scope<br> - reading code doesn't mean you write code well                                         |
| general knowledge questions  | questions about technical stack either listed on resume or what is expected to be worked with                                                          | easy to prepare                                                                                                                    | too much noise and bias                                                                                        |

Which approach you use is up to you. As most things, there are tradeoffs to consider. You might mix and match 1, 2, or 3, or run some A/B testing on approaches to suss out what works best. As mentioned previously, option #4 tends to be the worst barometer and should generally be avoided when possible.

An approach I've used in the past is to have a repository of options for code examples and prompts, and then for any particular opening we have all candidates go through the exact same process. This consistency is exceptionally important in reducing bias.

I have also found good success with toy examples of actual implementations rather than algorithmic puzzles. I'd rather a candidate implement a csv parser than code me up a red-black tree, but others might feel that the latter is a more reliable indicator of general cognitive ability. What sorts of problems you ask is completely up to you, but think about what exactly you want to be assessing and tailor the prompts to that.

Other concerns might be whether you circulate that prompt ahead of time, either as a suggestion (e.g., you'll be asked to implement an API during the interview) or specifically as a take-home assignment. I prefer the former, as a take-home assignment means someone can borrow an implementation and memorize it ahead of time. Live work, on the other hand, might exclude people who do not work well under pressure, but I'd rather miss out on one of those candidates rather than hire someone who just memorized one implementation. And with good interview coaching, you should be able to help out a candidate who doesn't work well under the pressure of a live session.

### Other Skills Assessments
Even if you aren't hiring for a technical role, you still might to assess skills. Outside of role-specific competencies, one of the most reliable sets of skills for any job is critical thinking and problem solving. Below are a few different methods that might be useful jumping off points.

#### Fermi problems <!-- omit in toc -->
These are problems of extreme, back-of-the-envelope estimations. While [Fermi problems](https://en.wikipedia.org/wiki/Fermi_problem) are typically used for large scientific estimations, they can also be useful for more generic questions. The steps you need to go through to break down what at first glance seems like an intractable problem are often reflections of how people generally decompose problems that are bigger than a single bite. Some examples:
  - How many dogs are there in New York?
  - How far can an average person walk in one day?
  - Assuming someone lives to 80 years old, how many times will they get their hair cut?

Some candidates might balk at these seemingly out-of-left-field questions, so be prepared to help out with some key facts or suggestions to keep things moving. Also, a thing to note is that there are some cultural differences in approaches to interviews, as some candidates might be taught that interviews are solely for talking about past achievements and future competencies, and deviating from script might require some coaching for the candidate to "play along", as it were.

#### Hypotheticals <!-- omit in toc -->
Somewhat similar to Fermi problems but more open-ended are hypothetical situations that aren't necessarily related to the current job. These are helpful to assess critical thinking but also non-normative thinking and creativity. For example,
- Imagine I was an angel investor and I've come to you with $10 million dollars[^fn4] to create a business, but it needs to be profitable in 3 years. What is the business, and how might you make it profitable?
- What's a hobby you have, and can you teach me about it?

Similar caveats to Fermi problems apply, but anecdotally, these questions tend to be the most interesting and memorable both for candidates and interviewers. I've had people come up to me months after hiring and tell me the angel investor questions was the most memorable part of an interview.

## Selling Your Company
### The Grass Is Greener
Most of us don't work at prestigious FAANG (now MAAMA) companies, with prestige that sells itself. The interview is the part of the process you can control to convince someone that your company is a place worth working at. I typically spend a few minutes at the end of an interview making a pitch, trying to answer the question of what it'd be like to work at my company. At a high-level, what does the company do, and why is that important? What problems would you run into, what opportunities are there? What do things look like on a team, what are the problems you might typically be solving. This might also be an opportunity to walk through codebases or systems or upcoming initiatives. I am aiming to paint an honest but optimistic picture.

Beyond just a pitch, who you choose to be on your interview panel is really important as well. They are your salespeople for the company. I think back to why I chose specific jobs over others, and all else being equal, if I really liked someone I was interviewing with (especially if it was the hiring manager), that was often enough to compel me. Remember that candidates are equally subject to the same biases that we are as interviewers: their first impressions will be strong. If you run a poor interview, one where interviewers aren't prepared, or your interviewers are stepping all over each other, a candidate is likely to extrapolate that to the work environment in general. If you can't run an interview, they are thinking, you must not be able to run much else.

Ultimately, there are so many additional factors influencing a candidate's decision to choose a particular job over others that you do not control, but you do control how you sell your company during an interview, and you should seek to maximize that, especially because the effort to do so is light.

### Training Interviewers
Continuing on from choosing a good interview panel, something that is often overlooked is that interviewing is a completely different skill than anyone's day job. Just because you are a good engineer or product manager doesn't make you a good interviewer. It is a separate skill, and you need to train people who are interviewing to be good at interviewing. Otherwise, you will end up with a haphazard interview where the interviewer spends most of the time talking, or stumbling through questions or giving irrelevant anecdotes or diatribes, or it's generally disorganized. Here is some simple advice for what I try and do during an interview that might be helpful.
1. **Communicate with your interview group ahead of time** -- you need to align on
  - who will play "MC", in charge of introductions or moving the conversation along
  - how you will ask questions -- round robin, or give folks a block of time
2. **Make sure you have your questions written down and ready to be asked** -- ad-libbing at best means you are defaulting to a conversational style, at worst it makes you look unprepared and disorganized
3. **Keep your questions clear and concise** -- long or meandering questions are difficult to follow and lead to confusion
4. **Don't talk too much** -- keep anecdotes and asides brief or eliminate them; an interview shouldn't be a showcase for how smart you are, and silence doesn't need to be immediately filled
5. **Help candidates along if they are stuck** -- if someone is struggling with an answer, try to breadcrumb them back on track
6. **Conversely, don't dwell too long on a question the candidate is too far off trail on** -- don't be afraid to move the interview along
7. **Most importantly, be kind and empathetic** -- interviews are difficult for everyone involved, so try and have patience and humility and follow the golden rule to not be a jerk

## My approach
Now that we've gone through the three broad things we are trying to get done in an interview, I'd like to share an approach I've been using recently for how I structure my preparation for an interview. I'll start with some high level competencies, a framework within which to ground my questions. Often this will be supplied by the hiring manager, but when it's not, I find that these sorts of things can be a clarifying exercise. I like to also add a few clarifying thoughts to each competency.

Once I have these high-level competencies, I start to craft questions. Asking behavioral questions becomes somewhat formulaic; they tend to follow the format of:
- tell me about a time when ...
- have you ever ...
- give me an example of ...
- describe a task ...

This generalizes into something like the following. I won't get to all my questions, but consistency is key here, so I make sure I ask all candidates the same questions in relatively the same order, and use targeted follow-ups to either clarify a response or get more nuance.

1. **Open Communication** _effective at explaining problems, resolves disagreements amicably_
  - Without reference to technology, can you explain the business problem your last project was solving?
  - Can you tell me about the last time you were working on a project and there were problems caused by poor communication? What happened, and how might you avoid those same problems in the future?
2. **Drive** _self-directed, relentless learner, pushes innovation_
  - Tell me about a time where you had to learn a new technology. If possible, one that wasn't required for school or work. What was it? How did you go about learning it?
  - Give me an example of when you improved the code base or application you were working on where you identified the opportunity for improvement and then executed on that improvement.
3. **Cultural Fit** - _excited by complex environments, isn't intimidated by jumping into difficult spaces with unclear documentation_
  - Can you describe the most complicated technical environment you've worked in? What made it complicated? How do you deal with these sorts of environments?
  - What are some concerns you'd have with maintaining and improving a legacy code applications?
4. **Technical Skill** _comfortable with data pipelines, terminal commands, deployment of infrastructure as code_
  - Use the technical assessment

## Wrapping it Up
There are still dozens of other considerations, such as how to structure feedback[^fn5], how many rounds of interviews you conduct, who to have on your interview panel, etc, but if I have one piece of advice, it would be to really think through your interview process and interrogate whether it is working for you, whether you are hiring the best candidates, missing out on others, biased in invisible ways. Because the unexamined interview process is not worth having, and who you hire is who you are.

---
## References
- Alonso, Pamela & Moscoso, Silvia. (2017). Structured behavioral and conventional interviews: Differences and biases in interviewer ratings. Journal of Work and   Organizational Psychology. 33. 183-191. 10.1016/j.rpto.2017.07.003.
- Kahneman, D. (2012, June 15). Of 2 minds: How fast and slow thinking shape perception and choice [Excerpt]. Scientific American. https://www.scientificamerican.com/article/kahneman-excerpt-thinking-fast-and-slow/
- Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.
- Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). Noise: a flaw in human judgment. First edition. New York: Little, Brown Spark.
- Salgado, J. F., & Moscoso, S. (2002). Comprehensive meta-analysis of the construct validity of the employment interview. European Journal of Work and Organizational Psychology, 11(3), 299–324. https://doi.org/10.1080/13594320244000184

## Footnotes
[^fn1]: I've called the second item a more generic "Skill-Based" rather than saying "technical". Every role has some measure of skill involved. It just so happens in my domain, we do technical assessments, but in others, you might ask a future ice scream scooper how they are with cold fingers, or a tax accountant to show their certifications. Tech is a weird beast because we largely ignore certifications while simultaneously bemoaning the difficulty we have in assessing technical viability.
[^fn2]: Your author considers himself fair-minded and impartial, a child of post-racial America if you will, but the results of that test were devastating to that narrative.
[^fn3]: Bias and noise all build out an equation of mean error squared of estimations. Plenty of statistics resources on this and it's interesting in its own right beyond the context of interviews.
[^fn4]: You might need to up this, pending inflation.
[^fn5]: At my current company, we use a Microsoft Forms template with four numerical assessments (1-5) on relevant competencies, a pros section, a con section, additional notes, and importantly last, the actual hire/no hire recommendation. Most important on feedback is to ensure it is not shared with a larger group, as feedback is highly subject to bandwagon effects.
