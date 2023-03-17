const get = (req, res) => {
    res.send([
        {
            "id": 13,
            "title": "5G",
            "img": "https://etimg.etb2bimg.com/photo/92005566.cms",
            "category": "Technology",
            "description": "In telecommunications, 5G is the fifth-generation technology standard for broadband cellular networks, which cellular phone companies began deploying worldwide in 2019, and is the planned successor to the 4G networks which provide connectivity to most current cellphones. Wikipedia"
        },
        {
            "id": 14,
            "title": "Artificial intelligence ",
            "img": "https://www.sharda.ac.in/blog/wp-content/uploads/2022/09/Artificial-Intelligence.jpg",
            "category": "Technology",
            "description": "Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by non-human animals and humans. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.AI applications include advanced web search engines(e.g., Google Search), recommendation systems (used by YouTube, Amazon and Netflix), understanding human speech(such as Siri and Alexa), self - driving cars(e.g., Waymo), automated decision - making and competing at the highest level in strategic game systems(such as chess and Go).[1] As machines become increasingly capable, tasks considered to require intelligence are often removed from the definition of AI, a phenomenon known as the AI effect.[2] For instance, optical character recognition is frequently excluded from things considered to be AI, [3] having become a routine technology"
        },
        {
        "id": 15,
        "title": "Cyber security",
        "img": "https://static.toiimg.com/photo/msid-95873489/95873489.jpg",
        "category": "Technology",
        "description": "Computer security, cybersecurity (cyber security), or information technology security (IT security) is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized information disclosure, theft of, or damage to hardware, software, or data, as well as from the disruption or misdirection of the services they provide.[1][2]The field has become of significance due to the expanded reliance on computer systems, the Internet, [3] and wireless network standards such as Bluetooth and Wi-Fi, and due to the growth of smart devices, including smartphones, televisions, and the various devices that constitute the Internet of things(IoT).Cybersecurity is one of the most significant challenges of the contemporary world, due to both the complexity of information systems and the societies they support.Security is of especially high importance for systems that govern large - scale systems with far - reaching physical effects, such as power distribution, elections, and finance."
        },
        {
    "id": 16,
    "title": "Blockchain",
    "img": "https://nairametrics.com/wp-content/uploads/2021/09/Blockchain.jpg",
    "category": "Technology",
    "description": "Although most people think of blockchain technology in relation to cryptocurrencies such as Bitcoin, blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you’re making a chain of data. Not being able to change the previous blocks is what makes it so secure. In addition, blockchains are consensus-driven, so no one entity can take control of the data. With blockchain, you don’t need a trusted third-party to oversee or validate transactions.Several industries are involving and implementing blockchain, and as the use of blockchain technology increases, so too does the demand for skilled professionals.From a birds eye view, a blockchain developer specializes in developing and implementing architecture and solutions using blockchain technology.The average yearly salary of a blockchain developer is ?469K."
    },
    {
    "id": 17,
    "title": "Computing Power  ",
    "img": "https://news.mit.edu/sites/default/files/images/202206/MIT_3Q-Computing-Power-01.jpg",
    "category": "Technology",
    "description": "Computing power has already established its place in the digital era, with almost every device and appliance being computerized. And it’s here for even more as data science experts have predicted that the computing infrastructure we are building right now will only evolve for the better in the coming years. At the same time, we have 5G already; gear up for an era of 6G with more power in our hands and devices surrounding us. Even better, computing power is generating more tech jobs in the industry but would require specialized qualifications for candidates to acquire. From data science to robotics and IT management, this field will power the largest percentage of employment in every country. The more computing our devices will need, the more technicians, IT teams, relationship managers, and the customer care economy will flourish."
    },
     {
    "id": 18,
    "title": "Smarter Devices ",
    "img": "https://blog.smartify.in/wp-content/uploads/2020/12/Smart-home-devices.jpg",
    "category": "Technology",
    "description": "Artificial intelligence has played an essential role in making our world smarter and smoother. It is not just simulating humans but going the extra mile to make our life hassle-free and simpler. These smarter devices are here to stay in 2023 and even further, as data scientists are working on AI home robots, appliances, work devices, wearables, and so much more! Almost every job needs smart software applications to make our work life more manageable. Smarter devices are another addition to the IT industry that is of high requirement and demand as more companies transform into digital spaces. Almost every higher-level job requires a good proficiency in IT and automation these days to thrive. This is why Simplilearn’s RPA course can help you master these skills to achieve par excellence in your career, whether in IT, marketing, or management. Here are the best jobs you can venture:"
    }
    ]);
}
module.exports.apiController = get;