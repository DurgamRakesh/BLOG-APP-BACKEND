const get  = (req , res) => {
    res.send([
        {
            "id": 1,
            "title": "Baahubali 2: The Conclusion",
            "img": "https://static.sacnilk.com/articles/entertainment/box_office/1017.jpg",
            "category": "Bollywood",
            "description": "Kattappa narrates the story of Amarendra Baahubali to Shivudu, who learns his lineage as the prince of Mahishmati and the son of Amarendra Baahubali. Shivudu, now Mahendra Baahubali, decides to dethrone and punish Bhallaladeva for all wrongdoings of his past with the help of Kattappa."
        },
        {
            "id": 2,
            "title": "Pushpa: The Rise - Part 1",
            "img": "https://cdn.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg",
            "category": "Bollywood",
            "description": "Pushpa a labor works for small sum but dreams of living a life of king. But he is always let down by his step brothers for being an illegitimate child of their father. He gets chance to work in dense forest of red sanders where red sanders are smuggled to other countries. The labors are always under the scanner of DSP Govindappa but Pushpa dares to go against everyone creating hurdles for DSP. Pushpa manages to save a smuggling consignment worth crores under the eye of DSP and becomes known to Reddy Brothers. (Konda Reddy, Jakka Reddy and Jolly Reddy) known to do smuggling of red sanders. Pushpa manages to smuggle red sanders often with his tricks by bluffing DSP and his team and becomes close side of Konda Reddy. Pushpa changes his lifestyle and decides to marry Srivelli but his step brothers disclose his mother's relationship with their father thus calling of the marriage. Pushpa who now decides not to stop in reaching heights and finds that Mangalam Sinu, a syndicate member is giving Reddy's gang much lesser share than they deserve and asks Konda Reddy to hike profit. Konda Reddy asks Pushpa to take thing sin his hands as his involvement will lead to war between the two gangs.A fearless Pushpa decides to take control of things leading to disagreements between two gangs"
        },
        {
            "id": 3,
            "title": "K.G.F: Chapter 2",
            "img": "https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-1024x768.jpg",
            "category": "Bollywood",
            "description": "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy."
        },

        {
            "id": 4,
            "title": "Pathaan",
            "img": "https://vijaysolution.com/wp-content/uploads/2022/12/Pathan-Movie-Download-4K-HD-1080p-480p-720p-Review.jpg",
            "category": "Bollywood",
            "description": "2019 article 370 is withdrawn by Indian government in Jammu Kashmir.Pakistani General Qadir along with a terrorist Jim decides to plan a big attack on India.In present times Pathaan a Raw agent is traced in Africa who was missing since years his senior officer Nandini comes across suspicious activity and decides to trace Pathaan Back to the past Pathaan had started the JOCR (oint Operation and Covert Research) which recruited soldiers with disability and trauma and was headed by Nandini.Their first mission is to stop Jim from kidnapping the Indian president in Dubai but Jim has other plans and kidnaps a scientist Dr Sahani.Pathaan learns that Jim was a former Raw agent who was disowned by the country and now wants to revenge his humiliation after loosing his family.Pathaan traces Dr Rubina Mohsin in Spain who can lead him to Jim she turns out to be his mole but Rubina saves Pathaan and revels her true identify of being an ISI agent.Rubina discloses to Pathaan that Jim is behind Rakhtbheej which can cause destruction and is in Russia and to stop Jim they have to team up.Pathaan and Rubina get hold of Rakhtbheej but Rubina ditches Pathaan and leaves him to die at the mercy of Russian government"
        },
        {
            "id": 5,
            "title": "Uri: The Surgical Strike",
            "img": "https://i.ytimg.com/vi/6SSbCbudN3o/maxresdefault.jpg",
            "category": "Bollywood",
            "description": "Divided over five chapters, the film chronicles the events of the surgical strike conducted by the Indian military against suspected militants in Pakistan occupied Kashmir. It tells the story of the 11 tumultuous events over which the operation was carried out. Indian army special forces carry out a covert operation to avenge the killing of fellow army men at their base by a terrorist group."
        },
        {
            "id": 6,
            "title": "War",
            "img": "https://wallpaperaccess.com/full/2330946.jpg",
            "category": "Bollywood",
            "description": "War is a high-intensity Bollywood action drama which stars Hrithik Roshan, Tiger Shroff, Vaani Kapoor, among other stars. Directed by Siddharth Anand, War movie is about a special agent Kabir (Hrithik Roshan) who has gone rogue and his student, Khalid (Tiger Shroff) is entrusted to take him down. Vaani Kapoor plays a pivotal role in this epic battle of teacher vs student. Will Khalid be able to stop Kabir? What made Kabir go rogue? Find out in War, the latest action movie hitting theatres in October 2019. Book your tickets now to witness this thriller, `War`. Releasing in Hindi, Tamil, and Telugu in theatres near you!"
        }
    ])
}
module.exports.apiController = get;