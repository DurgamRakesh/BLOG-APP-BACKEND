const get = (req, res) => {
    res.send([
        {
            "id": 25,
                "title": "Running",
                    "img": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528",
                        "category": "Fitness",
                            "description": "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).[1] This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion.[2] A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity.[3] The term running can refer to any of a variety of speeds ranging from jogging to sprinting.Running in humans is associated with improved health and life expectancy.[4]"
        },
        {
            "id": 26,
                "title": "Skateboarding",
                    "img": "https://api.time.com/wp-content/uploads/2021/08/us-skateboarding.jpg?quality=85&w=1024",
                        "category": "Fitness",
                            "description": "Skateboarding is an action sport originating in the United States that involves riding and performing tricks using a skateboard, as well as a recreational activity, an art form, an entertainment industry job, and a method of transportation.[1][2] Skateboarding has been shaped and influenced by many skateboarders throughout the years. A 2009 report found that the skateboarding market is worth an estimated $4.8 billion in annual revenue, with 11.08 million active skateboarders in the world.[3] In 2016, it was announced that skateboarding would be represented at the 2020 Summer Olympics in Tokyo, for both male and female teams.[4]"
        },
        {
            "id": 27,
                "title": " Swimming ",
                    "img": "https://www.shape.com/thmb/b2tvkA2ZOWLG2HRG-xGLy9yMPmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-96709750-1-9e5f0456cc684fc5b0dfafdc8accc9c5.jpg",
                        "category": "Fitness",
                            "description": "Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body to achieve hydrodynamic thrust which results in directional motion. Humans can hold their breath underwater and undertake rudimentary locomotive swimming within weeks of birth, as a survival response.Swimming is consistently among the top public recreational activities,[2][3][4][5] and in some countries, swimming lessons are a compulsory part of the educational curriculum.[6] As a formalized sport, swimming is featured in a range of local, national, and international competitions, including every modern Summer Olympics.Swimming involves repeated motions known as strokes in order to propel the body forward. While the front crawl, also known as freestyle, is widely regarded as the fastest out of four primary strokes, other strokes are practiced for special purposes, such as for training."
        },
        {
            "id": 28,
                "title": "football",
                    "img": "https://i.insider.com/5b7439f21982d822008b5136?width=1136&format=jpeg",
                        "category": "Fitness",
                            "description": "football or soccer,[a] is a team sport played between two teams of 11 players who primarily use their feet to propel the ball around a rectangular field called a pitch. The objective of the game is to score more goals than the opposition by moving the ball beyond the goal line into the opposing side's rectangular framed goal. Traditionally, the game has been played over two 45 minute halves, for a total match time of 90 minutes. With an estimated 250 million players active in over 200 countries, it is considered the world's most popular sport."
        },
        {
            "id": 29,
                "title": "deadlift",
                    "img": "https://www.hussle.com/blog/wp-content/uploads/2020/05/Deadlift-body-change.png",
                        "category": "Fitness",
                            "description": "The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground. It is one of the three powerlifting exercises, along with the squat and bench press.Depending on which style one chooses to use, different muscles will be targeted. For example, with a conventional stance, the back, hamstrings, and glutes will be targeted primarily. With a sumo stance, the quads and glutes will be primarily targeted"
        },
        {
            "id": 30,
                "title": "squat",
                    "img": "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Squat-1280x720.jpg",
                        "category": "Fitness",
                            "description": "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up."
        }
    ]);
}
module.exports.apiController = get;