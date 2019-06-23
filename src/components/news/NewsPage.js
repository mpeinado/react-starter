import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import NewsCategorySelect from './NewsCategorySelect';
/**
 * AJAX in React https://reactjs.org/docs/faq-ajax.html
 */
class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [{
                "source": {
                    "id": null,
                    "name": "Bbc.com"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Hong Kong protests: How tensions have spread to US - BBC News",
                "description": "The conflict between mainland China and Hong Kong is playing out at college campuses across the US.",
                "url": "https://www.bbc.com/news/world-us-canada-48721969",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/70B1/production/_107494882_5.jpg",
                "publishedAt": "2019-06-23T02:24:23Z",
                "content": "Image copyrightHon-Tung TsangImage caption\r\n Frances Hui speaks at a New York rally in support of Hong Kong protesters\r\nThe protests in Hong Kong have heightened tensions between the territory and China, and generated headlines the world over. They have also … [+8223 chars]"
            }, {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Michael C. Bender",
                "title": "Trump Bucked National-Security Aides on Proposed Iran Attack - The Wall Street Journal",
                "description": "President Trump bucked most of his top national-security advisers by abandoning retaliatory strikes in Iran. In private conversations, the president reveled in his judgment, certain about his decision to call off the attacks while speaking of his administrati…",
                "url": "https://www.wsj.com/articles/trump-bucked-national-security-aides-on-proposed-iran-attack-11561248602",
                "urlToImage": "https://images.wsj.net/im-84306/social",
                "publishedAt": "2019-06-23T01:54:00Z",
                "content": "WASHINGTONPresident Trump bucked most of his top national-security advisers by abandoning retaliatory strikes in Iran on Thursday. In private conversations Friday, Mr. Trump reveled in his judgment, certain about his decision to call off the attacks while spe… [+8369 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Wsbtv.com"
                },
                "author": "Katie Walls",
                "title": "LIVE UPDATES: Severe thunderstorm warnings issued for metro Atlanta - WSB Atlanta",
                "description": "We&#39;re looking into reports of power outages and downed trees as storms wind down, for the Channel 2 Action News Nightbeat at 11 p.m.",
                "url": "https://www.wsbtv.com/news/local/stay-weather-aware-another-round-of-strong-to-severe-storms-possible-saturday/960493373",
                "urlToImage": "https://media-beta.wsbtv.com/photo/2019/06/22/sandy%20springs_1561254659628.jpg_15661398_ver1.0_640_360.jpg",
                "publishedAt": "2019-06-23T01:05:47Z",
                "content": "ATLANTA - Round after round of severe thunderstorms continue to hammer metro Atlanta and north Georgia Saturday night. \r\nStorms have already left downed trees and power lines across metro Atlanta and thousands of people are without power. \r\nThese storms are s… [+8429 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Aol.com"
                },
                "author": "Joe Peters",
                "title": "The Curiosity rover found a massive spike in methane that could point to life on Mars - AOL",
                "description": "NASA's Curiosity rover discovered high amounts of methane in the air on Mars, a gas which is typically just produced by living things.",
                "url": "https://www.aol.com/article/news/2019/06/22/curiosity-rover-found-a-big-hint-pointing-to-life-on-mars/23754723/",
                "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/2786x1827+211+0/resize/1028x675!/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2018-11%2F6b499a50-ec98-11e8-b7bf-fa1109195419",
                "publishedAt": "2019-06-23T00:47:28Z",
                "content": "The NASA Curiosity rover made a remarkable discovery this week that may hint at signs of life on Mars.\r\nThe surprising development, reported on by The New York Times, brings legitimacy to the long-held notion that aliens may actually be occupying the red plan… [+3463 chars]"
            }, {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "New York Post",
                "title": "Red Sox hero David Ortiz out of intensive care after being shot in Dominican Republic - Fox News",
                "description": "David Ortiz has been moved out of the intensive care unit, two weeks after he was shot in a botched hit job in his native Dominican Republic.",
                "url": "https://www.foxnews.com/sports/red-sox-hero-david-ortiz-out-of-intensive-care-after-being-shot-in-dominican-republic",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/06/MLB-David-Ortiz5.jpg",
                "publishedAt": "2019-06-23T00:39:30Z",
                "content": "Red Sox fans have plenty to cheer about Saturday night.\r\nBeantown hero David Ortiz has been moved out of the intensive care unit, two weeks after he was shot in a botched hit job in his native Dominican Republic.\r\nSHOOTING OF DAVID ORTIZ IS RESULT OF MISTAKEN… [+665 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Theathletic.com"
                },
                "author": "Eric Duhatschek",
                "title": "Duhatschek: Devils and Hurricanes run a masterclass in how available cap space can be used as an advantage - The Athletic",
                "description": "Determining when to hoard salary-cap space and when to dole it out may be the single most important tactic for today's NHL GM.",
                "url": "https://theathletic.com/1042200/2019/06/22/duhatschek-devils-and-hurricanes-run-a-masterclass-in-how-available-cap-space-can-be-used-as-an-advantage/",
                "urlToImage": "https://cdn.theathletic.com/app/uploads/2019/06/22202004/GettyImages-1134552724-1024x683.jpg",
                "publishedAt": "2019-06-23T00:32:02Z",
                "content": "VANCOUVER With the silly season underway in the NHL, I’d like to make a modest proposal intended to make all trade boards and trade trackers more pertinent in the future.Instead of listing only the players themselves as possible targets, we need to start incl… [+665 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Aol.com"
                },
                "author": "Torrey AndersonSchoepe",
                "title": "North Korea: Kim receives 'excellent' letter from President Trump - AOL",
                "description": "President Donald Trump sent North Korean leader Kim Jong Un a letter, a government-controlled news agency reported Sunday.",
                "url": "https://www.aol.com/article/news/2019/06/22/north-korea-kim-receives-excellent-letter-from-trump/23754718/",
                "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2019-06%2F76bd99d0-9545-11e9-8f6d-96b1b9e43ad7",
                "publishedAt": "2019-06-23T00:20:02Z",
                "content": "PYONGYANG, North Korea (AP) President Donald Trump sent North Korean leader Kim Jong Un a letter, a government-controlled news agency reported Sunday.\r\nKim \"said with satisfaction that the letter is of excellent content,\" the Korean Central News Agency report… [+4997 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Pitchfork.com"
                },
                "author": "Madison Bloom",
                "title": "Neil Young Pens Tribute to Late Manager Elliot Roberts - Pitchfork",
                "description": "“Elliot never thought of himself, always someone else. He was my best friend in the world for so many years”",
                "url": "https://pitchfork.com/news/neil-young-pens-tribute-to-late-manager-elliot-roberts/",
                "urlToImage": "https://media.pitchfork.com/photos/5d0ebe05303a8180e45120b1/2:1/w_790/Neil%20Young-Elliott%20Roberts-Crazy%20Horse-GettyImages-85850085.jpg",
                "publishedAt": "2019-06-23T00:06:00Z",
                "content": "Elliot Roberts, the iconic artist manager who guided the careers of Tom Petty, Joni Mitchell, Devo, and many others, has died. Now, Roberts close friend and long-time client Neil Young has penned a heartfelt tribute to Roberts on his online archives website.\r… [+3254 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Latimes.com"
                },
                "author": "Matt Hamilton, Maya Lau",
                "title": "Anger and confusion after Trump orders — then delays — immigration crackdown - Los Angeles Times",
                "description": "President Trump’s shifting plans for mass deportation drew condemnation from immigration advocates, who called it a dangerous and inhumane policy.",
                "url": "https://www.latimes.com/local/lanow/la-me-ln-trump-immigration-sweeps-delay-anger-reaction-20190622-story.html",
                "urlToImage": "https://www.latimes.com/resizer/XDmMJ1lQqzutZX_-4jJpE2L59zc=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OPA5KG2GWJDMTM72V5IQH4WZTA.jpg",
                "publishedAt": "2019-06-23T00:05:00Z",
                "content": "If not, Deportations start! Trump said in a tweet.\r\nThe shifting plans for mass removals drew swift condemnation from immigration advocates in Southern California, who called the sweeps an inhumane strategy for enforcement and a dangerous scare tactic that wa… [+3491 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Salon.com"
                },
                "author": "Matthew Rozsa",
                "title": "The beautiful bleakness of the \"Toy Story\" movies - Salon",
                "description": "From Woody's first crisis to the existential darkness of Forky, \"Toy Story\" puts our greatest fears on the table",
                "url": "https://www.salon.com/2019/06/22/the-beautiful-bleakness-of-the-toy-story-movies/",
                "urlToImage": "https://media.salon.com/2019/06/toy-story-movies.jpg",
                "publishedAt": "2019-06-22T23:30:00Z",
                "content": "It is hard to think of a children's franchise as depressingly existential as the \"Toy Story\" series — and the latest installment, \"Toy Story 4,\" is perhaps the bleakest (and most beautiful) of them all.\r\nThis isn't to say that I wouldn't recommend \"Toy Story … [+6897 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Npr.org"
                },
                "author": "",
                "title": "Trump Accuser E. Jean Carroll Fights Trump's Claim Of A Profit Motive - NPR",
                "description": "Advice columnist E. Jean Carroll repeats her claim that President Trump assaulted her in the 1990s, even as he tells reporters her story is \"a total false accusation.\"",
                "url": "https://www.npr.org/2019/06/22/735080909/it-hurt-and-it-was-against-my-will-trump-accuser-stands-by-her-story",
                "urlToImage": "https://media.npr.org/assets/img/2019/06/22/ap_19172709056229_wide-2009e2cb6c971890d5bee66383ac2a41783728cf.jpg?s=1400",
                "publishedAt": "2019-06-22T23:00:00Z",
                "content": "Customers line up to enter the Bergdorf Goodman store in New York City in this 2010 file photo. Advice columnist E. Jean Carroll claims President Trump sexually assaulted her in a dressing room at the Manhattan department store in the '90s.\r\nStephen Chernin/A… [+4202 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Espn.com"
                },
                "author": null,
                "title": "Reds' Dietrich hit with record 6th pitch in 1 series - ESPN",
                "description": "Brewers pitchers have hit Derek Dietrich with a pitch six times in just three games, already an MLB record for one series.",
                "url": "https://www.espn.com/mlb/story/_/id/27033155/reds-dietrich-hit-record-6th-pitch-1-series",
                "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0623%2Fr560501_1296x729_16%2D9.jpg",
                "publishedAt": "2019-06-22T22:45:11Z",
                "content": "Cincinnati Reds slugger Derek Dietrich was hit by a major league-record sixth pitch in one series when he was struck by a 71 mph changeup from Brewers reliever Alex Claudio in the top of the fifth inning of Cincinnati's 6-5 loss Saturday in Milwaukee.\r\nIt mar… [+1194 chars]"
            }, {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": null,
                "title": "Cory Booker says Trump's out to make 2020 about hate - Fox News",
                "description": "In an empassioned speech on Saturday, Sen. Cory Booker, D-N.J., admonished fighting President Trump with \"his tactics\" and encouraged Democrats to make the 2020 presidential election about \"love.\"",
                "url": "https://www.foxnews.com/politics/cory-booker-says-trumps-out-to-make-2020-about-hate",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/03/AP19082614093892.jpg",
                "publishedAt": "2019-06-22T22:42:00Z",
                "content": "In an impassioned speech on Saturday, Sen. Cory Booker, D-N.J., admonished the notion of adopting President Trump's \"tactics,\" and encouraged Democrats to make the presidential election about \"love,\" not hate.\r\n\"We will not beat Donald Trump by fighting him u… [+1562 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Houstonchronicle.com"
                },
                "author": null,
                "title": "Confederacy’s former capital gets a street named after Arthur Ashe — and some hope for a more inclusive look - Houston Chronicle ",
                "description": "<p>RICHMOND, Va. - Thousands of people spilled into the newly re-christened Arthur Ashe Boulevard here Saturday for a celebration that also marked the unveiling of an exhibit at the Virginia Museum of History &amp; Culture on the struggle for black equality a…",
                "url": "https://www.houstonchronicle.com/news/article/Former-capital-of-Confederacy-gets-street-named-14030913.php",
                "urlToImage": "https://s.hdnux.com/photos/01/03/51/54/17734436/3/rawImage.jpg",
                "publishedAt": "2019-06-22T22:25:41Z",
                "content": "RICHMOND, Va. - Thousands of people spilled into the newly re-christened Arthur Ashe Boulevard here Saturday for a celebration that also marked the unveiling of an exhibit at the Virginia Museum of History &amp; Culture on the struggle for black equality and … [+7273 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Vox.com"
                },
                "author": "Tara Golshan",
                "title": "Pete Buttigieg tries to translate South Bend police shooting into a 2020 message - Vox.com",
                "description": "Buttigieg was met with protesters back home. He spoke to the shooting at the South Carolina Democratic convention",
                "url": "https://www.vox.com/2019/6/22/18713536/pete-buttigieg-south-bend-police-shooting-2020-south-carolina",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/-rHjcZIN1W5FTCfjSrcblyr21EM=/0x394:7307x4220/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16498025/1151431663.jpg.jpg",
                "publishedAt": "2019-06-22T22:20:00Z",
                "content": "South Bend, Indiana Mayor Pete Buttigieg took the stage at the South Carolina Democratic Partys convention Saturday and addressed difficulties hes faced in the aftermath of a police shooting that has both exposed racial tensions in his home town and left him … [+5446 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Qz.com"
                },
                "author": "Michael J. Coren",
                "title": "Scientists discover sea of fresh water under the ocean - Quartz",
                "description": "An undersea aquifer off the US Atlantic coast has vast stores of low-salinity groundwater.",
                "url": "https://qz.com/1650613/scientists-discover-sea-of-fresh-water-under-the-ocean/?utm_source=google-news",
                "urlToImage": "https://cms.qz.com/wp-content/uploads/2019/06/ocean_freshwater_undersea-e1561237445809.jpg?quality=75&strip=all&w=1400",
                "publishedAt": "2019-06-22T21:33:00Z",
                "content": "Thousands of years ago, glaciers covered much of the planet. Oceans receded as water froze in massive sheets of ice blanketing the North American continent. As the ice age ended, glaciers melted. Massive river deltas flowed out across the continental shelf. T… [+2011 chars]"
            }, {
                "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "author": "Jon Fingas",
                "title": "'Harry Potter: Wizards Unite' rolls out to 25 more countries - Engadget",
                "description": "Niantic's take on 'Harry Potter' is available in 25 more countries, including Canada, Ireland and Germany.",
                "url": "https://www.engadget.com/2019/06/22/harry-potter-wizards-unite-25-more-countries/",
                "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1063%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1063%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-06%252F2b746050-9520-11e9-bb76-19517b70214b%26client%3Da1acac3e1b3290917d92%26signature%3D6aaa24fd8b83d409e8c8031a1d46d3f2282b3a9f&client=amp-blogside-v2&signature=d4b45bf374ffe3d13b5c1bae61c070558d5b201f",
                "publishedAt": "2019-06-22T20:56:04Z",
                "content": "If you were disappointed at being left out of the initial Harry Potter: Wizards Unite launch, don't worry -- there's a good chance you can play now. Niantic's augmented reality sorcery is now available on Android and iOS in 25 more countries. This includes Ca… [+262 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Eonline.com"
                },
                "author": "Corinne Heller",
                "title": "Meghan King Edmonds Jokes About Being Pregnant Amid Jim's Scandal - E! Online",
                "description": "About a week ago, Jim admitted to exchanging explicit texts with another woman, adding that there was no \"type of relationship or physical contact.\"",
                "url": "https://www.eonline.com/news/1051459/meghan-king-edmonds-jokes-about-being-pregnant-amid-husband-jim-s-cheating-scandal",
                "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2019514/rs_600x600-190614131009-600-meghan-jim-edmonds.cl.061419.jpg?fit=around|600:467&crop=600:467;center,top&output-quality=90",
                "publishedAt": "2019-06-22T19:34:00Z",
                "content": "About a week ago, Jim admitted to exchanging explicit texts with another woman, adding that there was no \"type of relationship or physical contact.\" Meghan blogged that she feels sad, abandoned, and lonely and no longer trusts her husband.\r\n\"Do I believe him?… [+436 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Cnet.com"
                },
                "author": "Patrick Holland",
                "title": "Our AT&T 5G speed test yields the craziest speeds yet - CNET",
                "description": "At the AT&T Shape conference in LA we get a taste of blazing 5G speeds. The confab also promises a glimpse of how you'd actually use the technology.",
                "url": "https://www.cnet.com/news/our-att-5g-speed-test-yields-the-fastest-speeds-yet/",
                "urlToImage": "https://cnet3.cbsistatic.com/img/aMJlQ7N2AzC3Sm3i8VeYttg5eIQ=/2019/06/22/ee003f17-9c35-4232-bf25-5d87d6059242/p1033706-1.jpg",
                "publishedAt": "2019-06-22T18:41:00Z",
                "content": "On Saturday, AT&amp;T let us test the speed of its 5G network on a Galaxy S10 5G phone.\r\nJuan Garzon/CNET\r\nIt's fitting that I tested AT&amp;T's 5G network at the Warner Bros. studio in Los Angeles. Both Hollywood and 5G aim to take our wildest ideas and make… [+2721 chars]"
            }, {
                "source": {
                    "id": null,
                    "name": "Hollywoodlife.com"
                },
                "author": "Elana Rubin",
                "title": "Khloe Kardashian Throws Shade At Jordyn Woods With New Pic Of Her & BFF Malika - Hollywood Life",
                "description": "Khloe Kardashian showed off some snark while answering an Instagram comment about her friendship with Malika Haqq, shading Jordyn Woods in the process.",
                "url": "https://hollywoodlife.com/2019/06/22/khloe-kardashian-jordyn-woods-comment-malika-haqq-pic/",
                "urlToImage": "https://pmchollywoodlife.files.wordpress.com/2019/06/khloe-kardashian-throws-shade-at-jordyn-woods-with-new-pic-of-her-bff-malika-ftr.jpg",
                "publishedAt": "2019-06-22T18:14:00Z",
                "content": "Khloe Kardashian showed off some snark while answering an Instagram comment about her friendship with Malika Haqq, shading Jordyn Woods in the process.\r\nLooks like Khloé Kardashian, 34, is still processing the whole Tristan Thompson, 28, and Jordyn Woods, 21,… [+1492 chars]"
            }],
            categories: [
                'business',
                'entertainment',
                'general',
                'health',
                'science',
                'sports',
                'technology'
            ]
        }
    }


    componentDidMount = () => {
        // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=56fede56ff3b4523bc23cda7e7225f8b")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             debugger;
        //             this.setState({
        //                 articles: result.articles
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             // this.setState({
        //             //     isLoaded: true,
        //             //     error
        //             // });
        //         }
        //     )
    }

    render() {
        return (
            <div className="container" style={{marginTop: 25}} >
                <div className="row">
                    <div className="col">
                        <h1>News Page</h1>
                    </div>    
                </div>

                <NewsCategorySelect />
                

                <NewsFeed news={this.state.articles}/>
            </div>
        )
    }
}

export default NewsPage;