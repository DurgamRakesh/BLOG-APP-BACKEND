const get = (req, res) => {
    res.send([
        {
            "id": 7,
            "title": "Money Heist",
            "img": "https://wallpaperaccess.com/full/2703652.png",
            "category": "Hollywood",
            "description": "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police."
        },
        {
            "id": 8,
            "title": "Stranger Things",
            "img": "https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg",
            "category": "Hollywood",
            "description": "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
        },
        {
            "id": 9,
            "title": "Wednesday",
            "img": "https://i0.wp.com/tunesfind.com/wp-content/uploads/2022/11/Wednesday-1200675.jpg?w=1200&ssl=1",
            "category": "Hollywood",
            "description": "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago - all while navigating her new and very tangled relationships at Nevermore. "
        },
        {
            "id": 10,
            "title": "Avengers: Endgame",
            "img": "https://rare-gallery.com/thumbnail/74072-AvengersAvengers-Endgame-4k-Ultra-HD-Wallpaper.jpg",
            "category": "Hollywood",
            "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face..."
        },
        {
            "id": 11,
            "title": "Avatar: The Way of Water",
            "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/avatar-the-way-of-water-et00037264-1670850986.jpg",
            "category": "Hollywood",
            "description": "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans. "
        },
        {
            "id": 12,
            "title": "F9: The Fast Saga",
            "img": "https://sumo.cdn.tv2.no/imageapi/v3/img/617bb5c1498ebfefad6c260c-1640261880456?location=list&width=1200&height=630",
            "category": "Hollywood",
            "description": "Dominic Toretto is forced to put his retirement on hold when Cipher, the dangerous cyberterrorist, escapes with the help of Dominic's estranged brother, an international terrorist."
        }
    ])
}
module.exports.apiController = get;