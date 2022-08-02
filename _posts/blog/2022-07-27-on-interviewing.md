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
- [Disclaimer](#disclaimer)
- [Was I A Good Interviewer?](#was-i-a-good-interviewer)
- [What's The Point?](#whats-the-point)
- [Assessing Behavior And Competencies](#assessing-behavior-and-competencies)
  - [The Noise And The Bias](#the-noise-and-the-bias)
  - [The Research](#the-research)
- [Assessing Skills](#assessing-skills)
  - [Technical Assessments](#technical-assessments)
- [Selling Your Company](#selling-your-company)
  - [The Grass Is Greener](#the-grass-is-greener)
- [My approach](#my-approach)
- [Wrapping it Up](#wrapping-it-up)
- [References](#references)
- [Footnotes](#footnotes)

## Introduction
"In technology", as Marissa Mayer, former CEO of Yahoo, says, "it’s about the people -- getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate”. We've all been on teams with the wrong people; you know the sort. Those who you dread messaging when you see their name pop up as the last committer to the file with a bug, those who sap enthusiasm, who seem to hate their jobs out loud. Or, you've managed a team that just doesn't seem to perform, that spends hours tripping over minor hurtles when resolving a production incident to restore a database, or recoils at any mention of accountability or pride of ownership in the work they do.

Getting the right people is important. It will make or break a team, a department, eventually a company, like a tree rotting from the inside. And it's damn hard to do. The feedback loop is miles long. We don't treat _interviewing_ as a separate skill, to be cultivated like anything else. Good employees don't make _de facto_ good interviewers. To interview well, we need to think about the interview process, decompose it into smaller blocks and then interrogate what makes those blocks work before recomposing the process. We need to think about the questions we ask, how we ask them, the predictive power of our criteria, the implicit biases of our judgments.

Interviewing isn't just a conversation. You'll miss valuable candidates, hire the wrong ones, undersell your company, or generally burn folks out on interviewing. Interviewing is a diagnostic device used to make a predictive judgement about a candidate's qualifications and competencies and then to compare that to what you want and need in a candidate to make a decision of whether to extend an offer. Some folks certainly have a seemingly magical intuition into good or bad candidates, and when you ask them how they if a candidate is good, they'll respond Larry Flynt-like that they know when they see it. For the rest of us less capable of augury, we need a more rigorous approach.

In this post, I'll talk through some things I've learned about interviewing. Like anything that is worth doing right and doing well, I am in a perpetual cycle of researching, experimenting, reflecting, and adapting. I wanted to outline some things that have worked in the past for me and my companies. Your mileage may vary.

## Disclaimer
I currently work as a system architect, meaning I am not currently a hiring manager on these decisions. My role is one of indirect influence, of persuasion. The insights below have been garnered as a result of hundreds of interviews that I've taken part in.

## Was I A Good Interviewer?
One more disclaimer. Evaluating validity of initial assessments is a non-trivial problem. Most studies have used measures like performance reviews 6 months to 2 years down the line, or tenure with the company to assess the "success" of judgments in hiring candidates. While this is well and good, there is so much that happens after you hire a candidate that the idea that we could evaluate our assessments of candidates in any objective fashion might be an intractable problem. If you hire Suzie, and she is a rockstar in interviews but then deals with health issues, or a re-org aligns her to a boss that stubs out her ambition and thus her performance suffers, is that really a failure of your assessment in interviews? That said, the problem domain of an interview is within that interview itself; we can't control what happens afterwards. So we need to rely on research and past experience to ensure that we are offering a consistent experience to candidates and assessing them in as unbiased a way as possible.

## What's The Point?
Why do we interview? Why do we take the time to sit down and ask all sorts of questions of prospective employees instead of just reading the resume and hiring based on that? Generally, we are trying to do three things, at a high-level.

1. **Assess Behavior/Competencies** - Will this employee mesh with others, contribute to your company's culture, innovate, communicate effectively, etc?
2. **Assess Skills**[^fn1] - Does this employee have the skills they say they do, and are their skills suitable to the role with a reasonable amount of training and investment?
3. **Sell Your Company** - Does this employee even want to work at your company, and what can you do to make your company attractive to them?

I've found it has been helpful to have separate interviews for skill-based and behavioral assessments. You can still indirectly diagnose behavioral trends from measuring skills (walking through a piece of code is a great way to see not only how a candidate views a problem space but communicates around that problem space), but approaches are different and at best you can only indirectly observe behavior while assessing skills or vice versa. It takes a really skilled interviewer to do both in a way that doesn't systemically bias the assessment. Let's start by looking at behavioral assessments, and some of the ways in which we can be systematically or randomly wrong in our judgments of character.

## Assessing Behavior And Competencies
### The Noise And The Bias
Why is choosing the right candidate so damn hard? It's difficult in part because most of the hard-wiring within our brain is built for snap judgments, the type of instinctual jump to conclusions that allowed our ancestors to instantly react to anything resembling a threat. Biologically, it is better to over-react to threats than to under-react, to, for example, take the mental shortcut that you are going to avoid all things that look like saber-tooth tigers, be they the carnivorous predator or menacingly-toothed topiary.

Daniel Kahneman, in _Thinking, Fast and Slow_, calls this mental system of involuntary shortcuts and heuristics _System 1_ (automatic) thinking. They were a biological advantage when the cost of misjudging a threat meant death. Contrast that with _System 2_ (effortful) thinking, which is much slower, logical: our executive faculties. _System 1_ is constantly peppering _System 2_ with thoughts, impressions, and ideas like an excited puppy which often are adopted unchallenged by _System 2_ thinking, and unless we really "pay" attention to those thoughts, we are prone to biases.

Here are some biases you might typically fall into during an interview:
- **First Impressions Error** - making decisions too quickly
- **Halo Effect** - letting one positive trait affect overall impression
- **Horn Effect** - letting one negative trait affect overall impression
- **Similarity Effect** - being drawn to someone similar to you or people you know
- **Lack of standard** - comparing candidates to each other rather than to the standard

Bias is just one side of the errors in judgement coin. The other side is noise, or random scatter. Add this to the interview mix, and you have a recipe for the decisions we make in the candidates we hire having exceptionally low predictive power; essentially only slightly better than a coin flip. We could all save a bit of time and just flip the coin. Let's take a look at what the research says about how to increase the predictive power of our judgments.

### The Research
Despite the potential presence of bias and noise, not all interview types are created the same. Most research classifies interview approaches into three broad categories, coinciding with a spectrum of less to more structure structure and informal to behavioral questions.

The most informal type of interview and the structure most frequently used is a **convential unstructured interview**, where the interviewer and interviewee engage in a type of informal dialogue, where questions follow the course of conversation and the interviewer typically doesn't bring a script of questions to ask.

Following on from that, there is the **structured convential interview**, where an interviewer follows a list of guidelines and the aim is to extract information about credentials, technical skills, or experience.

Finally, there is the **structured behavioral interview**, where the interviewer asks a series of questions to assess behaviors, both past and potential. The idea is to standardize this list of questions and ask them of all candidates, and abstain from informal conversations or things that might unfairly bias you towards one candidate or another.

In increasing the structure of the interview corresponds to increasing reliability in determinations of success. The research is pretty clear that a **structured behavioral interview** is the most reliable indicator of a candidate's fit for purpose success potential of a role. In blah study, they found that reliability, a measure of predictiveness of success, corresponded to .50, .60, .70 for each respective interview type. Many other studies have replicated these results.

## Assessing Skills
### Technical Assessments
Generally, I think technical assessments are easier and less predictive for a potential candidate's success in a role than a behavioral interview, but if you approach things wrong, you will make for a disastrous result. Below, I've put four approaches I've seen to assessing technical skills. You can mix and match items; for example, you might have a hybrid of #1 and #2, like a prompt ahead of time that "we will be building an API" but then you'll have to work through the specific problem in real-time.

| task                                         | description                                                                                                                                                    | pre-work                                                                                                     |
|----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Take home assignment                         | Give a candidate a coding task that they complete on their own time                                                                                            | Create a simple prompt that is complete-able in a specific amount of time and is supplied to every candidate |
| Live whiteboarding                           | Write code during an interview                                                                                                                                 | Create simple prompts; if remote, ensure candidate is ready to share screen and has a text editor            |
| Implementation of general domain solution    | Pose a problem that you might have experienced in your domain and ask for a solution using whatever tools at hand                                              | Enumerate possibilities so everyone interviewing is pulling from some list                                   |
| General knowledge questions about technology | Ask general questions about whatever the technology required for the job is, e.g., what is a sealed class in C#, how does Java handle garbage collection, etc. | Create a list of questions to ask about relevant tech                                                        |

#4 on this list should generally be avoided. There are too many reasons for a candidate not to know certain questions when posed in an interview other than that they do not have skills. There are also plenty of paid services to administer these sorts of assessments ahead of time and you could use them as screening devices. I have found, however, that a chance to review code or technical implementations with candidates has provided extremely valuable feedback to how they compose thoughts, how they work a problem. A technical assessment can be a valuable signal to behavioral competencies. A candidate might be a technical wunderkind but is an absolute jerk when explaining solutions, and that would be drawn in sharp relief while reviewing technical solutions.

Now that we've walked through behavioral and skills assessments, there's a third thread to a successful interview that is often overlooked: convincing candidates that they should come work for your company.

## Selling Your Company
### The Grass Is Greener
Most of us don't work at prestigious FAANG companies, with prestige that sells itself. The interview is the part of the process you can control to convince someone that your company is a place worth working at. How can you impart that your company is a place someone would want to come to, especially in a hyper-competitive labor market? I typically spend a few minutes at the end of an interview making a pitch, trying to answer the question of what it'd be like to work at my company. At a high-level, what does the company do, and why is that important? What problems would you run into, what opportunities are there? I am aiming for an honest assessment.

Beyond just a pitch, who you choose to be on your interview panel is really important as well. They are your salespeople for the company. I think back to why I chose specific jobs over others, and all else being equal, if I really liked someone I was interviewing with (especially if it was the hiring manager), that was enough to compel me. Remember that candidates are equally subject to the same biases that we are as interviewers: their first impressions will be strong. If you run a poor interview, one where interviewers aren't prepared, or are stepping all over each other, a candidate is likely to extrapolate that to the work environment in general. If you can't run an interview, they are thinking, you must not be able to run much else.

Ultimately, there are so many additional factors influencing a candidate's decision to choose a particular job over others that you do not control, but you do control how you sell your company during an interview, and you should seek to maximize that, especially because the effort to do so is light.

## My approach
Now that we've gone through what we are assessing for, I'd like to share an approach I've been using recently for how I structure my preparation for an interview. I'll start with some high level competencies, a framework within which to ground my questions. Often this will be supplied by the hiring manager, but when it's not, I find that these sorts of things can be a clarifying exercise. I like to also add a few clarifying thoughts to each competency.

Once I have these high-level competencies, I start to craft questions. Asking behavioral questions becomes somewhat formulaic; they tend to follow the format of:
- tell me about a time when ...
- have you ever ...
- give me an example of ...
- describe a task ...

This generalizes into something like the following. I won't get to all my questions, but consistency is key here, so I make sure I ask all candidates the same questions in relatively the same order.

1. **Open Communication** _effective at explaining problems, resolving disagreements_
  - Without reference to technology, can you explain the business problem your last project was solving?
  - Can you tell me about the last time you were working on a project and there were problems caused by poor communication? What happened, and how might you avoid those same problems in the future?
2. **Drive** _self-directed, engages in learning, and loves engineering_
  - Tell me about a time where you had to learn a new technology. If possible, one that wasn't required for school. What was it? How did you go about learning it?
  - Give me an example of when you improved the code base or application you were working on where you identified the opportunity for improvement and then executed on that improvement?
3. **Cultural Fit** - _excited by complex environments, isn't intimidated by jumping into difficult spaces with unclear documentation, and is an open communicator_
  - Can you describe the most complicated technical environment you've worked in? What made it complicated? How do you deal with these sorts of environments?
  - What are some concerns you'd have with maintaining and improving many legacy code applications?
4. **Technical Skill** _comfortable with data pipelines, terminal commands, deployment of infrastructure as code_
  - Use the technical assessment

## Wrapping it Up
There are still dozens of other considerations, such as how to structure feedback[^fn2], who to have on your interview panel, but if I have one piece of advice, it would be to really think through your interview process and interrogate whether it is working for you, whether you are hiring the best candidates, missing out on others, biased in invisible ways. Because the unexamined interview process is not worth having.

---
## References
- Alonso, Pamela & Moscoso, Silvia. (2017). Structured behavioral and conventional interviews: Differences and biases in interviewer ratings. Journal of Work and   Organizational Psychology. 33. 183-191. 10.1016/j.rpto.2017.07.003.
- Kahneman, D. (2012, June 15). Of 2 minds: How fast and slow thinking shape perception and choice [Excerpt]. Scientific American. https://www.scientificamerican.com/article/kahneman-excerpt-thinking-fast-and-slow/
- Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.
- Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). Noise: a flaw in human judgment. First edition. New York: Little, Brown Spark.
- Salgado, J. F., & Moscoso, S. (2002). Comprehensive meta-analysis of the construct validity of the employment interview. European Journal of Work and Organizational Psychology, 11(3), 299–324. https://doi.org/10.1080/13594320244000184

## Footnotes
[^fn1]: I've called the second item a more generic "Skill-Based" rather than saying "technical". Every role has some measure of skill involved. It just so happens in my domain, we do technical assessments, but in others, you might ask a future ice scream scooper how they are with cold fingers, or a tax accountant to show their certifications. Tech is a weird beast because we largely ignore certifications while simultaneously bemoaning the difficulty we have in assessing technical viability.
[^fn2]: At my current company, we use a Microsoft Forms template with four numerical assessments (1-5) on relevant competencies, a pros section, a con section, additional notes, and importantly last, the actual hire/no hire recommendation. Most important on feedback is to ensure it is not shared with a larger group, as feedback is highly subject to bandwagon effects.
