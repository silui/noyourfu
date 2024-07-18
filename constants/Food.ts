export interface Food {
    uid: number;
    food_name: string;
    restaurant_name: string;
    restaurant_latitude: number;
    restaurant_longitude: number;
    restaurant_address: string;
    image_link: NodeRequire;
}

export const foodList: Food[] = [
    {
        uid: 1,
        food_name: "地中海式料理",
        restaurant_name: "腰果花砧板原食料理餐廳",
        restaurant_latitude: 24.802280,
        restaurant_longitude: 120.998380,
        restaurant_address: "300新竹市東區公道五路二段267號",
        image_link: require("../assets/images/foods/1.jpeg"),
    },
    {
        uid: 2,
        food_name: "精緻料理",
        restaurant_name: "nku",
        restaurant_latitude: 25.035980,
        restaurant_longitude: 121.553780,
        restaurant_address: "106台北市大安區仁愛路四段300巷26弄13號",
        image_link: require("../assets/images/foods/2.jpeg"),
    },
    {
        uid: 3,
        food_name: "中式料理、簡餐",
        restaurant_name: "諦",
        restaurant_latitude: 25.007360,
        restaurant_longitude: 121.537380,
        restaurant_address: "台北市文山區汀州路四段87號",
        image_link: require("../assets/images/foods/3.jpeg"),
    },
    {
        uid: 4,
        food_name: "無麩義大利麵",
        restaurant_name: "Paliopizza  帕里歐窯烤披薩",
        restaurant_latitude: 24.177340,
        restaurant_longitude: 120.735220,
        restaurant_address: "406台中市北屯區東山路一段410-1號",
        image_link: require("../assets/images/foods/4.jpeg"),
    },
    {
        uid:5,
        food_name: "簡餐、甜品",
        restaurant_name: "撒福豆",
        restaurant_latitude: 25.04077198593525,
        restaurant_longitude: 121.5528679119387,
        restaurant_address: "106059台北市大安區忠孝東路四段216巷16號2號樓之3",
        image_link: require("../assets/images/foods/5.jpeg"),
    },
    {
        uid: 6,
        food_name: "便當、簡餐",
        restaurant_name: "一食二堂",
        restaurant_latitude: 24.168457038366718,
        restaurant_longitude: 120.67644028561415,
        restaurant_address: "404台中市北區青島路二段36號",
        image_link: require("../assets/images/foods/6.jpeg"),
    },
    {
        uid: 7,
        food_name: "糙米咖啡",
        restaurant_name: "仁里居素食餐廳",
        restaurant_latitude: 25.028877262082396, 
        restaurant_longitude: 121.53899420585562,
        restaurant_address: "404台中市北區青島路二段36號",
        image_link: require("../assets/images/foods/7.jpeg"),
    },
    {
        uid: 8,
        food_name: "無麩質花生醬",
        restaurant_name: "JASONS MARKET PLACE Q Square Store",
        restaurant_latitude: 25.050268569948106,
        restaurant_longitude: 121.52064542993159,
        restaurant_address: "103, Taiwan, Taipei City, Datong District, Section 1, Chengde Rd, 1號B3",
        image_link: require("../assets/images/foods/8.jpeg"),
    },

];
