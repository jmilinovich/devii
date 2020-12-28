---
title: My biggest product strategy lesson learned from operating and selling URX (YC S13)
published: true
datePublished: 1609123095000
author: John Milinovich
tags:
  - Dan Abramov
authorPhoto: /img/jm-headshot.jpeg
bannerPhoto: /img/urx-lesson.png
thumbnailPhoto: /img/urx-lesson.png
---
It’s been one year since I was a startup founder/CEO. On May 2, 2016, we announced Pinterest’s acquisition of URX and began the next step in our journey. In that moment it was hard to comprehend how different this chapter would be from the one before it, and I’m grateful that I’ve gained some of this perspective over the last year.

In short- **my biggest learning about product strategy from URX is the importance of aligning your vision with your business model.** As with so many things in life, there’s a big difference between understanding things with your head, and knowing them with your heart. I think this is especially true for the “resilient founder” persona who has the fortitude to endure the endless sea of challenges that plague early stage startups.

To call the URX journey anything other than magnificent would be an understatement. I learned more than I could have ever imagined from that 3.5 year period — from raising capital to hiring executives, managing managers of managers to setting the right goals — I am simply not the same person as I was before URX. There are many great resources for founders that outline [how to not fail](http://blog.ycombinator.com/how-not-to-fail/), and what to do when it’s [time to sell](https://justinkan.com/the-founders-guide-to-selling-your-company-a1b2025c9481?gi=58f6ac561735), so instead of rehashing what’s already been said I want to share my most unintuitive lesson learned from operating URX so that you don’t have to learn it the hard way.

# The Evolution of URX’s Business Model
URX was one of the first mobile deep linking companies. For the uninitiated, deep linking helps create links into apps so that they can work in a similar way to the web. Without deep links, apps can only be opened to the “top” of the app, which means that the foundation of the internet — hyperlinks — can’t work for apps. This created countless broken experiences for users (how many times have you clicked on a link in an email that took you to the mobile web instead of an app?), and we believed that this was a big opportunity for a startup to solve. We believed that if you could be the company that helps apps succeed with deep linking you could build a comprehensive (and proprietary) understanding of the content inside apps, which would let you create a new paradigm for contextual mobile discovery. We firmly believed that mobile devices would be better if they understood your context and could help you seamlessly navigate across apps based on your intent.

To realize this vision, the first product we built was an SDK and click server that would help an app developer get started using deep links. Developers quickly started adopting this service, but it wasn’t clear this was something they’d be willing to pay for. In talking to our users, we learned that a major use case for deep linking was mobile ad retargeting. The only type of mobile advertising available at the time was “cost per install” based advertising, but with deep links you could actually start running re-engagement campaigns, and retarget your users across apps to bring them back into your app. To validate this insight we started pitching a mobile retargeting solution, and it turns out people wanted this: by YC Demo Day, we had AirBnB, LivingSocial, SideCar and HotelTonight as clients. We [raised a $3.1M seed round](https://techcrunch.com/2013/10/16/urx-ads/), and were on our way.

Over the next 6 months we continued to scale our mobile retargeting business, and [raised a $12M Series A](http://blog.ycombinator.com/urx-yc-s13-raises-12-dollars-million-sets-sights-on-links-inside-apps/) to continue expanding our team and our ads business. We capitalized on the press to launch the second version of our free deep linking product OmniLinks to help accelerate developer adoption of our platform. The team was happy, and we were motivated with this new influx of capital to continue working on our mission. However, about 2 months later we started to hit some serious scaling bottlenecks. We were running our ads through third party aggregators ([SSPs](https://digiday.com/media/wtf-supply-side-platform/) like MoPub, OpenX and Smaato), which meant that there was no quality controls (our top inventory sources were the Chive and Grindr) and we couldn’t understand a user’s context when seeing an ad. Because of this, we weren’t able to fulfill our advertisers’ budgets or hit their goals at scale. To solve this problem and begin fulfilling our mission of contextual mobile discovery, we believed we would have to become an ad network and go start selling publishers in addition to advertisers. So, that’s what we did. We spent the next 4 months building our contextual ad serving stack, signed up our first publishers up and [officially launched AppViews](https://www.recode.net/2015/4/15/11561474/urx-looks-to-make-its-deep-links-pay-off-with-new-ad-type) with a host of great mobile publishers.

In retrospect, by becoming an ad network **we misaligned our business model with our vision of contextual app discovery**. When you’re operating a media business, your success metrics are very different from a discovery/search company. Instead of being purely “user first”, we had to delicately balance the needs of end-users with those of publishers and advertisers, which were very frequently not the same. We had set very real expectations with our customers and board that we would continue to aggressively grow revenue, which forced us to make decisions that were not inline with our mission. This caused a few important moments where we had to make product decisions that felt inauthentic towards our vision, but were required to execute on our business model. By the time we had realized that we chose the wrong business model to support our mission, it was too late for us to change it. Whether we liked it or not, we had customers relying on our product, and set our revenue goals around scaling our media business.

# How to tell if your business model and mission are misaligned
The best way to make sure your business stays inline with your mission is by making sure your mission statement fully encapsulates the value you want to deliver to your customers, not just the product/technology you want to build. If you get this wrong, you might not end up building the business you want to build.

To tell if your business model and mission are misaligned, go through the exercise of asking yourself these questions regularly:

To achieve our mission:

1. What are the various products or technologies that we could build?
2. Who is the primary benefactor of this product(s)?
3. What is the most ideal way we would make money?

If we’re successful in executing our current business plan:

1. What is the specific pain point we solve for our customers?
2. What is the impact our company has on the world?
3. What is our strategic differentiator within the market?

If we’re successful in achieving our mission:

1. What is the specific pain point we solve for our customers?
2. What is the impact our company has on the world?
3. What is our strategic differentiator within the market?

The goal of asking these questions is to identify the gaps/misalignments between the near- and long-term viewpoints on your business. No company has ever been able to constantly pivot its value prop to create its strategic differentiator. The most successful tech companies of all time have been able to expand upon the same customer pain point and value prop through the duration of their business:

- Google still helps people search for answers to their questions
- AirBnB still helps people make supplemental income by renting their houses
- Pinterest still helps people discover and do things they love
- Netflix still helps people watch movies in their homes

In order to create lasting value for your business and your customers, you have to make sure that your near- and long-term goals are inline with each other. This is a difficult balance to maintain, but is arguably one of the most important things you can do to ensure your company’s success.

# What to do if you’re misaligned
In answering these questions if you identify a misalignment between your business model and your mission, it’s time for you make some decisions. Ultimately- **do you change your business model, or do you change your mission?** There’s no universally correct answer here, as this is largely stage dependent.

## Changing your business model
- If you have an established business, changing your business model creates serious customer risk and is probably not the right idea. In this case, you should evaluate changing your mission to better reflect your current business model.
- If you have a nascent business, changing your business model is something you can validate by talking to your existing/prospective customers. How is each business model perceived by your customers? Is one more preferable than the other?

## Changing your mission statement
- If you have an established business, what would the impact be to your team if you change your mission statement? If you’re a mission driven culture, do you risk attrition if you change your mission? Talk to your executive team to get their feedback on this.
- If you have a nascent business, your mission statement should be considered a “work in progress” that is likely to change as you learn more about your customers.

Maintaining state between the near- and long-term identify of your business is one of the most difficult jobs of any founder. You only have one chance at a first impression, and getting this right will help create a cohesive story for your company to employees, recruits, customers and investors. If you get this wrong, you will find yourself in a constant identify crisis, which will consistently cause confusion and may never be able to be corrected.