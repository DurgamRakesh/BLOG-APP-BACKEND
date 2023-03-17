const get = (req, res) => {
    res.send([
        {
            "id": 19,
            "title": "Hyderabadi Biryani",
            "img": "https://vismaifood.com/storage/app/uploads/public/6a7/ddf/c53/thumb__1200_0_0_0_auto.jpg",
            "category": "Food",
            "description": "Hyderabadi Biryani is a popular variety of Biryani. The Hyderabadi Biryani is so named as it is seen mainly in the city of Hyderabad, India. The blending of mughlai and Andhra cuisines in the kitchen of the Nizam (leader of the historical Hyderabad state), resulted in a dish called the Hyderabad Biryani. It, like other biryanis, is made using Basmati rice which is only found on the Indian subcontinent. The spices and other ingredients remain the same, however the method of preparation involves more time.It is usually accompanied with Dahi ki Chutney, Raita (a yogurt dish) or Mirchi ka Salan.There are 2 styles of preparing this variety.The Katchi Biryani is prepared with the Katchi Yakhni method(with raw gravy). The raw meat is marinated in curd and cooked only by the dum, or the baking process, which is done with rice.This is a challenging process as it requires meticulously measured time and heat to avoid overcooking or undercooking the meat.In Pakki Biryani, where the meat is cooked with all the accompanying spices and then the rice is simmered with the resultant gravy redolent of mace, ittar and kewra in a sealed vessel with saffron and cardamom.It is accompanied by side dishes like Mirchi ka Salan, Dhansak and Bagara Baingan.The meat used in the preparation is usually mutton, beef - popularly called Kalyani Biryani - or, less frequently, chicken."
            },
            {
        "id": 20,
            "title": "Samosa",
                "img": "https://www.cookwithnabeela.com/wp-content/uploads/2021/08/Aloo_Samosa_Web_1.jpg",
                    "category": "Food",
                        "description": "India’s popular snack that finds a place in almost every bakery or chaat shop – our very own Samosa. Savory comfort food at its best, a crisp exterior filled with a savory potato stuffing that goes very well over a hot cup of chai especially on a rain filled, cold day. Samosa is always store bought and on rare occasions prepared at home, like today."
           },
           {
        "id": 21,
            "title": "South Indian cuisine",
                "img": "https://moneyinc.com/wp-content/uploads/2022/08/shutterstock_1304901667-750x500.jpg",
                    "category": "Food",
                        "description": "The cuisines of Andhra Pradesh and Telangana are the spiciest in all of India[citation needed]. Generous use of chili and tamarind make the dishes tangy and hot. The majority of dishes are vegetable- or lentil-based. The hot and spicy dishes are a speciality of the region. Mainly vegetarian dishes are served as part of the cuisine of the region.Rice is the staple food of the region. Sambar is a special kind of dal prepared in Andhra Pradesh. A traditional Andhra meal comprises five kinds of dishes. To cool the stomach after a spicy meal, curd is served at the end."
          },
          {
        "id": 22,
            "title": "Payasam",
                "img": "https://c.ndtvimg.com/2019-03/ak4ct9cg_payasam_625x300_13_March_19.jpg",
                    "category": "Food",
                        "description": "Kheer, also known as payasam, is a sweet dish and a type of wet pudding popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice, although rice may be substituted with one of the following: daals, bulgur wheat, millet, tapioca, vermicelli, or sweet corn. It is typically flavoured with desiccated coconut, cardamom, raisins, saffron, cashews, pistachios, almonds, or other dry fruits and nuts, and recently pseudograins are also gaining popularity. It is typically served as a dessert."
    },
    {
        "id": 23,
            "title": "Idli",
                "img": "https://t4.ftcdn.net/jpg/04/26/94/99/360_F_426949957_iFC4zrETHm1lFMiLpsVXeAhFQe6vCNAk.jpg",
                    "category": "Food",
                        "description": "Idli or idly is a type of savoury rice cake, originating from the South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body.."
    },
    {
        "id": 24,
            "title": "Manchurian",
                "img": "https://c.ndtvimg.com/2021-01/rlten3n8_manchurian_625x300_27_January_21.jpg",
                    "category": "Food",
                        "description": "Indian Chinese cuisine, also known as Indo-Chinese cuisine originated in the 19th century among the Chinese community of Calcutta, during the immigration of Hakka Chinese from Canton (present-day Guangzhou) seeking to escape the First and Second Opium Wars and political instability in the region. Upon exposure to local Indian cuisine, they incorporated many spices and cooking techniques into their own cuisine, thus creating a unique fusion of Indian and Chinese cuisine."
    }
    ]);
}
module.exports.apiController = get;