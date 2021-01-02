---
title: What is COVID’s impact on Santa Clara County’s Police Reports?
published: true
datePublished: 1607212800000
author: John Milinovich
tags:
  - Dan Abramov
authorPhoto: /img/jm-headshot.jpeg
bannerPhoto: /img/covid-santa-clara.png
thumbnailPhoto: /img/covid-santa-clara.png
desc: Exploratory analysis of the Santa Clara police records
---
After reading about the Bay Area’s [recently renewed stay at home ordinance](https://www.sfchronicle.com/bayarea/article/Six-Bay-Area-jurisdictions-to-enact-strict-15776839.php), I wondered how the stay-at-home mandates have affected the criminal activity in my home county of Santa Clara. I came across the [Santa Clara County Police Reports Open Data Set](https://data.sccgov.org/Public-Safety/Crime-Reports/n9u6-aijz), and decided to take a look. You can follow along with my analysis in this [Colab Notebook](https://colab.research.google.com/drive/1LGOA51eIjKfnTJuSGAj3By8kQ7RHNjfU?usp=sharing).

Going into this exploratory analysis, I had a few hypotheses that I wanted to prove or disprove. I had two primary assumptions going into this analysis:

1. Total crime reports would have gone down since shelter in place [started on March 20, 2020](https://calmatters.org/newsletters/whatmatters/2020/03/california-coronavirus-homeless/).
2. The major drivers of these changes would be decreases in motor vehicle infractions, theft and home alarms going off.

I also wanted to answer two other questions:

1. Have reports of domestic disturbances changed since shelter in place? (I hope not!)
2. What category has the biggest change in reports since COVID?

# How have total crimes changed since Shelter in Place?
To answer this question, I first looked at the count of weekly police reports. Shelter in place started in Week 12 (the gold dotted line in the plot), and you can see that there was immediately 33% drop in police reports from Week 10 to Week 12.

![](/img/covid-01.png)

**Overall this does align with my hypothesis that crime dropped with Shelter in Place, and never returned to its pre-COVID levels.** Weekly police reports steadily increased since this drop, reaching its new peak in Week 34 before making a dramatic drop to 100, or 66% from its pre-COVID numbers. This leads to two follow-up questions: what can we attribute the Week 12 drop to, and what happened in Week 34?

![](/img/covid-02.png)

Next I looked at a breakout of weekly police reports by top-level category to see if anything stood out. At first glance it seems like there was a general compression across the board in Week 12, whereas Community Policing can be attributed to the major drop in Week 34. “Outside the data,” there could also be a change in police incident reporting that caused this drop.

# What changed the most after Shelter in Place was enacted?
To better understand this question, first I wanted to understand the cumulative number of reports by category for the entire year. This would give me a sense of what categories might be the most likely to drive major changes.

![](/img/covid-03.png)

The top 6 categories (Other, Community Policing, Disorder, Alarm, Traffic and Theft) make-up 80%+ of the total crimes committed, so focusing in on them seems like it’d give us some more insight.

![](/img/covid-04.png)

It looks like the Week 12 drop was most largely driven by Other, Traffic and Alarm incidents, whereas the Week 34 drop was caused by Community Policing and Other drops. Interestingly enough, we can start to see a big drop in Alarm and Theft incidents two weeks before shelter in place started, whereas it took until the week of shelter in place to see Traffic violations decrease. **This confirms my hypothesis that Traffic and Alarm violations would be the biggest drivers of change during Shelter in Place.** Now, let’s take a closer look at the Other category and Community Policing to see what we can learn.

# Unpacking the Other category
At first I was concerned to see Other as the most common parent category of police incident, as I assumed it would lead to messy data at the individual category level. Fortunately, that wasn’t actually the case! The most common categories in Other incidents (in order) are Phone Ur Office, OR:, Suspicious Vehicle, Suspicious Person, Trespassing, Suspicious Circumstances and Traffic Hazard. Unfortunately it’s still unclear to me what, “Phone Ur Office, OR:” is even after some Googling.

![](/img/covid-05.png)

For the Week 12 dip, the biggest drivers of change were big drops in Suspicious Vehicle, Traffic Hazard, Suspicious Person and Phone Ur Office, Or:. This aligns with what we saw with the general bucket of Traffic violations, and it intuitively makes sense that there would be less Suspicious Person reports if everyone was staying at home.

For the Week 34 dip, it looks like Suspicious Vehicle and Traffic Hazard had another drop with a commensurate increase in Suspicious Person reports. However, we’ve already identified that Community Police was the major driver of the change in Week 35 so let’s look a bit closer there.

# What changed in Community Policing?
[Community Policing](https://www.discoverpolicing.org/explore-the-field/what-is-community-policing/), “encourages interactive partnerships between law enforcement agencies, their officers, and the people they serve. By developing connections within the community, police are better informed and empowered to solve public safety problems.” In effect, it’s the part of policing that tries to make proactive changes before there are actual issues that are reported.

![](/img/covid-06.png)

We can see that there was a massive spike in Service or Aid Requests right as Shelter in Place was sinking in, along with Abandoned Vehicle reports. It’s also interesting to see that **a new category called County Ordinance was introduced as shelter in place started, presumably County mandated to enforce business closures.**

In Week 34, there was a dramatic drop-off in the number of Service or Aid Requests as well as Meet the Citizen cases. It’s unclear why these would happen so acutely within a 1-week span, and doing some Google searches don’t show that anything material changed during this time either. Perhaps there were some policy changes that re-allocated police offers away from this sort of civic engagement work around that time?

One last question from my initial questions to answer: what’s happened to domestic disturbances?

# Unpacking Disturbances incidents pre- and post-Shelter in Place
The Disturbances category seems to be a catch-all for a lot of public nuisances like noise complaints, firecrackers, drunk in public and parties.

While there seemed to be a few weeks of spikes in Family Disturbances, fortunately **there doesn’t seem to be a significant change overall compared to pre COVID levels.** However, one thing that does stand out which is interesting: **There has been a 500% increase in the number of Party Disturbances reported!** This gives me some faith in humanity that people are doing what they can to prevent group gatherings.

![](/img/covid-07.png)

# Conclusion and Next Steps
At the onset of this analysis I wanted to verify a few of my own assumptions about how police reports would change due to shelter in place:

1. Total crime reports would have gone down since shelter in place started on March 20, 2020. → **Confirmed**
2. The major drivers of these changes would be decreases in motor vehicle infractions, theft and home alarms going off. → **Confirmed**

I also wanted to answer two other questions:

1. Have reports of domestic disturbances changed since shelter in place? (I hope not!) → **They have not** 🙌
2. What category has the biggest change in reports since COVID? **Traffic and Suspicious Vehicle dropped materially, Party Disturbances increased materially**

As a next step, I’d love to see how the Santa Clara data compares to California and the United States at large. I’d also like to see more historical data so I could compare the 2020 data to prior years’ baselines.

Thanks for reading!