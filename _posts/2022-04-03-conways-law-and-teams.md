---
layout: post
title: "Conway's Law: What the Hell is a Team Anyway?"
subtitle: some musings on architectural and organizational intertwinings
cover-img:
thumbnail-img:
share-img:
readtime: true
tags: []
---

## Introduction
Like any blue-blooded architect worth his sequence diagram, I spend a lot of time thinking about software teams and the delivery of software. I've never taken a purist's approach to building systems, building stacks in a petri dish and then disseminating design from on high like Moses from the mountain. Software is built in the trenches, and to paraphrase Mike Tyson, everyone has a plan until the first line of code is, as it were, punched in. The delivery and maintenance of software is a complicated dance of business, product, financing, and that one guy in some vaguely Orwellian-sounding department called something like special strategic initiatives. And that's just the approval. After that, you need to actually build the damn thing.

## Conway's Law and the Mirroring Hypothesis
In steps one Melvin E. Conway, name-sake of Conway's Law (an eponymous naming popularized by Fred Brooks in _The Mythic Man Month_). It was Conway's idea, in a slim entry for _Datamation_ magazine in April, 1968, that "organizations which design systems [...] are constrained to produce designs which are copies of the communication structures of these organizations". If you have an organization that blurs team boundaries and everyone is working on the same things, then you will end up with a monolith. If your organization trends towards isolated and independent teams, you will end up with something like microservices with narrow interfaces.

Conway's thinking here was that in the design of a system, you spread out the desired functionality of said system like cards on a table, and in dividing the work, each team takes a smaller subset of those cards. The way that team develops that stack of functionality to interact with the other functions of the system will follow the already existing lines of communication. Desire paths but for system design.

Conway posited that causality flowed from design teams to the systems they designed, meaning that the structure of the system reflects the structure of the organization that designed it and not the other way around, but since 1968 additional research has generalized this to claim a general correspondence between organizational and architectural structures. Anyone who has worked on legacy systems that have survived several tumultuous reorgs knows that often the team that is currently maintaining the original system looks nothing like the original designing team both in responsibilities and knowledge.

In _The Mirroring hypothesis: theory, evidence, and exceptions_, Colfer and Baldwin refer to Conway's law as a more general mirroring process, adding "the formal structure of an organization will (or should) "mirror" the design of the underlying technical system" to a growing list of definitions. Their research, a meta-analysis of existing mirroring analysis, found that for industry and firm (acadamese for a business) analyses, 70% of studies provided strong evidence for the existence of mirroring. Their analysis of normative studies, whether or not mirroring helps a 'firm' is more nuanced: there is a "mirroring trap" where "firms [...] may fall victim to architectural innovations arising outside their boundaries". Something like a company concentrating so intently on walking that they don't see new subway stops on their route.

## An Aside on Architecture
What is architecture, anyway? If we start with construction, where the "architecture" metaphor is borrowed from, our friends at Britannica have it defined as "the art and technique of designing and building". I'd more generally say it is the way we describe what goes where in a building, the key artifact being an inert blueprint to be rendered real by the actual act of construction. This definition doesn't map cleanly onto our modern conceptions of architecture, especially as we moving increasingly away from Big Design Up Front (BDUF) towards a continuous architecture. so perhaps we can be a bit more generic. Architecture as a discipline is the description of networks, of nodes and edges. I won't pretend to be an expert on graph theory, but I've found the prime skill I use in practice as an architect is to describe systems (either theoretical or in existence) as clusters of dependencies. What depends on what. what needs to change if we change this, etc.

## What is a Team but a Nexus of Dependencies
So it isn't a shark-jumping distance to say now that the organization is an architecture and the software is an architecture and both structures are mutually informed by each other, and supposing that neither is static, mutually forming the others structure.

"a competitive market economy will reward those combinations of technical architecture and organizational structure that deliver the greatest value at the least cost".

## Team Topologies
