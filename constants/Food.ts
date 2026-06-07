export interface Category {
  id: number;
  name_en: string;
  name_zh: string;
  emoji: string;
}

export interface Restaurant {
  id: number;
  category_id: number;
  name_en: string;
  name_zh: string;
  address: string;
  latitude: number;
  longitude: number;
  image_link: any;
}

export interface MenuItem {
  id: number;
  restaurant_id: number;
  name_en: string;
  name_zh: string;
  description_en: string;
  description_zh: string;
  dietary_tags: string[];
}

export const categories: Category[] = [
  { id: 1, name_en: 'Chinese Food',       name_zh: '中式料理',   emoji: '🥢' },
  { id: 2, name_en: 'American Food',      name_zh: '美式料理',   emoji: '🍔' },
  { id: 3, name_en: 'Italian Food',       name_zh: '義式料理',   emoji: '🍝' },
  { id: 4, name_en: 'Desserts & Bakery',  name_zh: '甜點烘焙',   emoji: '🍰' },
  { id: 5, name_en: 'Japanese Food',      name_zh: '日式料理',   emoji: '🍣' },
  { id: 6, name_en: 'Health Food & Café', name_zh: '養生輕食',   emoji: '🥗' },
];

// Cycles the existing placeholder images (assets/images/foods/1–8.jpeg) across entries.
const img = (id: number) => {
  const map: Record<number, any> = {
    1: require('../assets/images/foods/1.jpeg'),
    2: require('../assets/images/foods/2.jpeg'),
    3: require('../assets/images/foods/3.jpeg'),
    4: require('../assets/images/foods/4.jpeg'),
    5: require('../assets/images/foods/5.jpeg'),
    6: require('../assets/images/foods/6.jpeg'),
    7: require('../assets/images/foods/7.jpeg'),
    8: require('../assets/images/foods/8.jpeg'),
  };
  return map[((id - 1) % 8) + 1];
};

export const restaurants: Restaurant[] = [
  {
    id: 1, category_id: 6,
    name_en: 'Cashew Flower Raw Food Cuisine', name_zh: '腰果花砧板原食料理餐廳',
    address: '300新竹市東區公道五路二段267號',
    latitude: 24.8113269, longitude: 120.9834913,
    image_link: img(1),
  },
  {
    id: 2, category_id: 6,
    name_en: 'NKU', name_zh: 'nku',
    address: '106台北市大安區仁愛路四段300巷26弄13號',
    latitude: 25.0366083, longitude: 121.5511194,
    image_link: img(2),
  },
  {
    id: 3, category_id: 1,
    name_en: 'VEGANISM', name_zh: '諦',
    address: '台北市文山區汀州路四段87號',
    latitude: 25.0015104, longitude: 121.535465,
    image_link: img(3),
  },
  {
    id: 4, category_id: 3,
    name_en: 'Paliopizza', name_zh: '帕里歐窯烤披薩',
    address: '406台中市北屯區東山路一段410-1號',
    latitude: 24.1700554, longitude: 120.7008383,
    image_link: img(4),
  },
  {
    id: 5, category_id: 6,
    name_en: 'Yuli Your Home', name_zh: '仁里居素食餐廳',
    address: "6號, Lane 151, Section 2, Jianguo S Rd, Da'an District, Taipei City",
    latitude: 25.02879184, longitude: 121.5383312,
    image_link: img(5),
  },
  {
    id: 6, category_id: 3,
    name_en: 'Safudou', name_zh: '撒福豆無麩質蔬食餐廳',
    address: '台北市大安區忠孝東路四段100號',
    latitude: 25.0412816, longitude: 121.5576764,
    image_link: img(6),
  },
  {
    id: 7, category_id: 1,
    name_en: 'Zero Living', name_zh: '零居',
    address: '新北市板橋區中山路一段200號',
    latitude: 25.0106121, longitude: 121.462814,
    image_link: img(7),
  },
  {
    id: 8, category_id: 2,
    name_en: 'Patio 46', name_zh: 'Patio 46',
    address: '台中市西屯區台灣大道三段300號',
    latitude: 24.1651914, longitude: 120.6450778,
    image_link: img(8),
  },
  {
    id: 9, category_id: 4,
    name_en: 'Little Tree Food', name_zh: '小素點蔬食',
    address: '台南市中西區中正路400號',
    latitude: 22.9921056, longitude: 120.2018351,
    image_link: img(9),
  },
  {
    id: 10, category_id: 5,
    name_en: 'Seven Full', name_zh: '柒飽飽早午餐',
    address: 'No. 298號, Guangxi Rd, Zhongxiao Village, Cianjhen District, Kaohsiung City',
    latitude: 22.61537952, longitude: 120.3139726,
    image_link: img(10),
  },
  {
    id: 11, category_id: 2,
    name_en: 'Gluten Free Laboratory', name_zh: '無麩實驗室',
    address: '桃園市中壢區中華路600號',
    latitude: 24.9619953, longitude: 121.2426915,
    image_link: img(11),
  },
  {
    id: 12, category_id: 3,
    name_en: 'Wishful', name_zh: '許願',
    address: '新竹市東區光復路700號',
    latitude: 24.8046817, longitude: 120.9779564,
    image_link: img(12),
  },
  {
    id: 13, category_id: 4,
    name_en: 'Wufu Chiayi', name_zh: '吾福菓子房',
    address: '嘉義市西區文化路900號',
    latitude: 23.4982847, longitude: 120.4419458,
    image_link: img(13),
  },
  {
    id: 14, category_id: 4,
    name_en: '35Tian', name_zh: '35甜',
    address: '台東市中興路1000號',
    latitude: 22.772531, longitude: 121.10519,
    image_link: img(14),
  },
  {
    id: 15, category_id: 4,
    name_en: 'GoGFGo', name_zh: '小巨人無麩質食品專賣店',
    address: '244台灣新北市林口區南勢里文明街138巷2號1樓',
    latitude: 25.072224, longitude: 121.360663,
    image_link: img(15),
  },
  {
    id: 16, category_id: 4,
    name_en: 'CathyTing Patisserie', name_zh: '丁凱西甜點工坊（無麩質烘焙）',
    address: '220台灣新北市板橋區重慶里國慶路158巷11弄15號',
    latitude: 24.995439, longitude: 121.458374,
    image_link: img(16),
  },
  {
    id: 17, category_id: 1,
    name_en: 'Mu Fan Bloom', name_zh: '木凡花無麩麵館',
    address: '300台灣新竹市東區豐功里建美路52號',
    latitude: 24.801752, longitude: 120.997791,
    image_link: img(17),
  },
  {
    id: 18, category_id: 1,
    name_en: 'Eggflower House', name_zh: '雞蛋花原型即食包｜無糖｜無奶｜無麩',
    address: '300台灣新竹市東區豐功里建美路45號',
    latitude: 24.801752, longitude: 120.997791,
    image_link: img(18),
  },
  {
    id: 19, category_id: 4,
    name_en: '100% Chicken (Qingshui)', name_zh: '雞百分無麩質雞蛋糕-台中清水店',
    address: '436台灣臺中市清水區南社里信義二街19號',
    latitude: 24.263037, longitude: 120.551377,
    image_link: img(19),
  },
  {
    id: 20, category_id: 4,
    name_en: 'PRIL', name_zh: 'PRIL植物系甜點 - 純素無麩質甜點工作坊',
    address: '402台灣臺中市南區江川里仁義街151-163號',
    latitude: 24.125655, longitude: 120.677792,
    image_link: img(20),
  },
  {
    id: 21, category_id: 4,
    name_en: 'Ricey Aroma Workshop', name_zh: '米疊香工坊',
    address: '406台灣臺中市北屯區軍功里建功巷22-5號',
    latitude: 24.184991, longitude: 120.714685,
    image_link: img(21),
  },
  {
    id: 22, category_id: 4,
    name_en: 'Wheat Allergy Baking Studio', name_zh: '小麥過敏烘焙工作室',
    address: '400台灣臺中市中區公園里市府路73-1號1樓',
    latitude: 24.138256, longitude: 120.678768,
    image_link: img(22),
  },
  {
    id: 23, category_id: 1,
    name_en: 'Little Town Bistro', name_zh: '小川好食無麩質蔬食料理',
    address: '545台灣南投縣埔里鎮蜈蚣里崇文街6號',
    latitude: 23.977596, longitude: 120.994474,
    image_link: img(23),
  },
  {
    id: 24, category_id: 4,
    name_en: 'Mikanbao', name_zh: '米康飽-迎熙有限公司',
    address: '302台灣新竹縣竹北市大眉里中華路1135號',
    latitude: 24.85022, longitude: 121.004561,
    image_link: img(24),
  },
  {
    id: 25, category_id: 4,
    name_en: 'How Sweet Rice Waffle', name_zh: '好田·米鬆餅',
    address: '70053台灣臺南市中西區宮後街16號',
    latitude: 22.996361, longitude: 120.199136,
    image_link: img(25),
  },
  {
    id: 26, category_id: 4,
    name_en: 'An-He Dessert', name_zh: '安和菓子｜無麩質甜點｜霜淇淋｜無乳醣',
    address: '704003台灣臺南市北區立人里國華街四段27巷8號',
    latitude: 23.000662, longitude: 120.200274,
    image_link: img(26),
  },
  {
    id: 27, category_id: 4,
    name_en: 'Sweet Rice Dessert', name_zh: '甜聿家米甜品',
    address: '970台灣花蓮縣花蓮市國威里三民街35-2號',
    latitude: 23.982045, longitude: 121.60749,
    image_link: img(27),
  },
  {
    id: 28, category_id: 4,
    name_en: "Sister's Kitchen", name_zh: '老妹的灶下 無麵粉無加糖飲食專賣',
    address: '730台灣臺南市新營區王公里義和街25-3號',
    latitude: 23.31381, longitude: 120.321254,
    image_link: img(28),
  },
  {
    id: 29, category_id: 4,
    name_en: 'Rice Master', name_zh: '台灣米師傅',
    address: '732台灣臺南市白河區99之1號',
    latitude: 23.351473, longitude: 120.413745,
    image_link: img(29),
  },
  {
    id: 30, category_id: 4,
    name_en: 'Zen Wu Bakery', name_zh: '禪屋米胖工坊',
    address: '台灣雲林縣虎尾鎮PC53+VJ 北溪里',
    latitude: 23.708182, longitude: 120.445339,
    image_link: img(30),
  },
  {
    id: 31, category_id: 2,
    name_en: 'Red Room Rendezvous', name_zh: 'Red Room Rendezvous',
    address: '台北市大安區基隆路二段252號',
    latitude: 25.023314, longitude: 121.55142,
    image_link: img(31),
  },
  {
    id: 32, category_id: 1,
    name_en: 'Wufu Gluten Free Food', name_zh: '無麩慢食',
    address: '新竹市中央路292號',
    latitude: 24.804864, longitude: 120.967534,
    image_link: img(32),
  },
];

export const menuItems: MenuItem[] = [
  // Cashew Flower Raw Food Cuisine (restaurant_id: 1)
  {
    id: 1, restaurant_id: 1,
    name_en: 'Mediterranean Raw Platter', name_zh: '地中海原食拼盤',
    description_en: 'Seasonal raw vegetables, olives, and house dips',
    description_zh: '當季生鮮蔬菜、橄欖與自製沾醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 2, restaurant_id: 1,
    name_en: 'Cashew Cream Zoodles', name_zh: '腰果奶油櫛瓜麵',
    description_en: 'Spiralized zucchini in a raw cashew cream sauce',
    description_zh: '櫛瓜麵佐生腰果奶油醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 3, restaurant_id: 1,
    name_en: 'Herb Salad Bowl', name_zh: '香草沙拉碗',
    description_en: 'Mixed greens and herbs with a lemon olive-oil dressing',
    description_zh: '綜合生菜香草佐檸檬橄欖油醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // NKU (restaurant_id: 2)
  {
    id: 4, restaurant_id: 2,
    name_en: 'Chef Tasting Course', name_zh: '主廚品味套餐',
    description_en: 'A multi-course fine-dining menu of seasonal ingredients',
    description_zh: '以時令食材打造的多道式精緻套餐',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 5, restaurant_id: 2,
    name_en: 'Seared Scallops', name_zh: '香煎干貝',
    description_en: 'Pan-seared scallops with a citrus beurre blanc',
    description_zh: '香煎干貝佐柑橘白酒奶油醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 6, restaurant_id: 2,
    name_en: 'Braised Short Rib', name_zh: '慢燉牛小排',
    description_en: 'Slow-braised short rib with root vegetable purée',
    description_zh: '慢燉牛小排佐根莖蔬菜泥',
    dietary_tags: ['gluten-free'],
  },

  // VEGANISM (restaurant_id: 3)
  {
    id: 7, restaurant_id: 3,
    name_en: 'Vegan Set Meal', name_zh: '純素簡餐',
    description_en: 'Daily plant-based set with rice, greens, and braised tofu',
    description_zh: '每日植物性套餐，附飯、青菜與滷豆腐',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 8, restaurant_id: 3,
    name_en: 'Three-Cup Mushrooms', name_zh: '三杯杏鮑菇',
    description_en: 'King oyster mushrooms braised with basil and ginger',
    description_zh: '杏鮑菇佐九層塔與薑片三杯燒',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 9, restaurant_id: 3,
    name_en: 'Brown Rice Bowl', name_zh: '糙米飯碗',
    description_en: 'Steamed brown rice topped with seasonal vegetables',
    description_zh: '糙米飯佐時令蔬菜',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Paliopizza (restaurant_id: 4)
  {
    id: 10, restaurant_id: 4,
    name_en: 'Wood-Fired Margherita (GF)', name_zh: '窯烤瑪格麗特披薩（無麩質）',
    description_en: 'Gluten-free crust with tomato, mozzarella, and basil',
    description_zh: '無麩質餅皮佐番茄、莫扎瑞拉與羅勒',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 11, restaurant_id: 4,
    name_en: 'Gluten-Free Pasta Pomodoro', name_zh: '無麩茄汁義大利麵',
    description_en: 'GF pasta in a slow-cooked tomato and basil sauce',
    description_zh: '無麩質義大利麵佐慢熬番茄羅勒醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 12, restaurant_id: 4,
    name_en: 'Quattro Formaggi (GF)', name_zh: '四種起司披薩（無麩質）',
    description_en: 'Four-cheese gluten-free pizza, wood-fired',
    description_zh: '窯烤四種起司無麩質披薩',
    dietary_tags: ['gluten-free'],
  },

  // Yuli Your Home (restaurant_id: 5)
  {
    id: 13, restaurant_id: 5,
    name_en: 'Brown Rice Latte', name_zh: '糙米拿鐵',
    description_en: 'Roasted brown rice latte, naturally caffeine-light',
    description_zh: '烘焙糙米拿鐵，溫和低咖啡因',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 14, restaurant_id: 5,
    name_en: 'Vegetarian Lunch Plate', name_zh: '素食午間套餐',
    description_en: 'Home-style vegetarian plate with seasonal sides',
    description_zh: '家常素食套餐附時令小菜',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 15, restaurant_id: 5,
    name_en: 'Mushroom Congee', name_zh: '菇菇粥',
    description_en: 'Comforting rice congee with assorted mushrooms',
    description_zh: '什錦菇暖心米粥',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Safudou (restaurant_id: 6)
  {
    id: 16, restaurant_id: 6,
    name_en: 'Gluten-Free Veggie Pizza', name_zh: '無麩質蔬食披薩',
    description_en: 'GF base loaded with roasted seasonal vegetables',
    description_zh: '無麩質餅皮鋪滿烤時蔬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 17, restaurant_id: 6,
    name_en: 'Soy Bean Salad', name_zh: '福豆沙拉',
    description_en: 'Fresh greens with edamame and a sesame dressing',
    description_zh: '生菜佐毛豆與芝麻醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 18, restaurant_id: 6,
    name_en: 'Margherita (GF)', name_zh: '瑪格麗特披薩（無麩質）',
    description_en: 'Classic gluten-free margherita with fresh basil',
    description_zh: '經典無麩質瑪格麗特佐新鮮羅勒',
    dietary_tags: ['gluten-free'],
  },

  // Zero Living (restaurant_id: 7)
  {
    id: 19, restaurant_id: 7,
    name_en: 'Gluten-Free Yi Noodles', name_zh: '無麩質意麵',
    description_en: 'Springy rice-based yi noodles in a light broth',
    description_zh: '彈牙米製意麵佐清爽湯頭',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 20, restaurant_id: 7,
    name_en: 'Dry-Tossed Noodles', name_zh: '乾拌麵',
    description_en: 'GF noodles tossed with scallion oil and soy',
    description_zh: '無麩質麵佐蔥油與醬油乾拌',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 21, restaurant_id: 7,
    name_en: 'Braised Greens', name_zh: '燙青菜',
    description_en: 'Blanched seasonal greens with garlic',
    description_zh: '時令燙青菜佐蒜香',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Patio 46 (restaurant_id: 8)
  {
    id: 22, restaurant_id: 8,
    name_en: 'Gluten-Free Beef Burger', name_zh: '無麩質牛肉漢堡',
    description_en: 'Beef patty on a gluten-free bun with house sauce',
    description_zh: '牛肉餅搭配無麩質漢堡包與自製醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 23, restaurant_id: 8,
    name_en: 'Crispy Fries', name_zh: '酥脆薯條',
    description_en: 'Oven-crisped fries, naturally gluten-free',
    description_zh: '烤至酥脆的天然無麩質薯條',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 24, restaurant_id: 8,
    name_en: 'Garden Burger', name_zh: '蔬食漢堡',
    description_en: 'Plant-based patty with avocado on a GF bun',
    description_zh: '植物肉餅佐酪梨搭配無麩質麵包',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Little Tree Food (restaurant_id: 9)
  {
    id: 25, restaurant_id: 9,
    name_en: 'Gluten-Free Cake Slice', name_zh: '無麩質蛋糕',
    description_en: 'Moist rice-flour cake in rotating flavors',
    description_zh: '濕潤米穀粉蛋糕，口味輪替',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 26, restaurant_id: 9,
    name_en: 'Vegan Cheesecake', name_zh: '純素乳酪蛋糕',
    description_en: 'Cashew-based vegan cheesecake, gluten-free',
    description_zh: '腰果基底純素乳酪蛋糕，無麩質',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 27, restaurant_id: 9,
    name_en: 'Seasonal Fruit Tart', name_zh: '時令水果塔',
    description_en: 'Almond-flour tart with fresh seasonal fruit',
    description_zh: '杏仁粉塔皮佐新鮮時令水果',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Seven Full (restaurant_id: 10)
  {
    id: 28, restaurant_id: 10,
    name_en: 'Gluten-Free Sushi Set', name_zh: '無麩質壽司組',
    description_en: 'Assorted nigiri with tamari gluten-free soy sauce',
    description_zh: '什錦握壽司佐無麩質醬油',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 29, restaurant_id: 10,
    name_en: 'Brunch Rice Bowl', name_zh: '早午餐丼飯',
    description_en: 'Sushi rice bowl with egg, salmon, and avocado',
    description_zh: '壽司飯碗佐雞蛋、鮭魚與酪梨',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 30, restaurant_id: 10,
    name_en: 'Miso Soup (GF)', name_zh: '味噌湯（無麩質）',
    description_en: 'Gluten-free miso broth with tofu and seaweed',
    description_zh: '無麩質味噌湯佐豆腐與海帶',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Gluten Free Laboratory (restaurant_id: 11)
  {
    id: 31, restaurant_id: 11,
    name_en: 'Gluten-Free Fried Chicken', name_zh: '無麩質炸雞',
    description_en: 'Crispy rice-flour battered fried chicken',
    description_zh: '米穀粉裹粉酥炸雞',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 32, restaurant_id: 11,
    name_en: 'Popcorn Chicken', name_zh: '鹹酥雞',
    description_en: 'Bite-sized GF popcorn chicken with basil',
    description_zh: '一口無麩質鹹酥雞佐九層塔',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 33, restaurant_id: 11,
    name_en: 'Sweet Potato Fries', name_zh: '地瓜薯條',
    description_en: 'Crispy sweet potato fries, gluten-free',
    description_zh: '酥脆無麩質地瓜薯條',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Wishful (restaurant_id: 12)
  {
    id: 34, restaurant_id: 12,
    name_en: 'Gluten-Free Aglio e Olio', name_zh: '無麩質蒜香橄欖油義大利麵',
    description_en: 'GF spaghetti with garlic, chili, and olive oil',
    description_zh: '無麩質義大利麵佐蒜末、辣椒與橄欖油',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 35, restaurant_id: 12,
    name_en: 'Cream Mushroom Pasta (GF)', name_zh: '奶油蘑菇義大利麵（無麩質）',
    description_en: 'Gluten-free pasta in a creamy mushroom sauce',
    description_zh: '無麩質義大利麵佐奶油蘑菇醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 36, restaurant_id: 12,
    name_en: 'Tomato Seafood Pasta (GF)', name_zh: '茄汁海鮮義大利麵（無麩質）',
    description_en: 'GF pasta with seafood in a rich tomato sauce',
    description_zh: '無麩質義大利麵佐海鮮與濃郁茄汁',
    dietary_tags: ['gluten-free'],
  },

  // Wufu Chiayi (restaurant_id: 13)
  {
    id: 37, restaurant_id: 13,
    name_en: 'Gluten-Free Toast', name_zh: '無麩質吐司',
    description_en: 'Soft rice-flour toast, sliced fresh daily',
    description_zh: '柔軟米穀粉吐司，每日新鮮切片',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 38, restaurant_id: 13,
    name_en: 'Cinnamon Loaf', name_zh: '肉桂吐司',
    description_en: 'Gluten-free loaf swirled with cinnamon sugar',
    description_zh: '無麩質吐司捲入肉桂糖',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 39, restaurant_id: 13,
    name_en: 'Milk Bread Rolls', name_zh: '牛奶餐包',
    description_en: 'Fluffy gluten-free milk bread rolls',
    description_zh: '鬆軟無麩質牛奶小餐包',
    dietary_tags: ['gluten-free'],
  },

  // 35Tian (restaurant_id: 14)
  {
    id: 40, restaurant_id: 14,
    name_en: 'Gluten-Free Dessert Plate', name_zh: '無麩質甜點盤',
    description_en: 'Daily selection of gluten-free sweets',
    description_zh: '每日精選無麩質甜點',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 41, restaurant_id: 14,
    name_en: 'Chiffon Cake', name_zh: '戚風蛋糕',
    description_en: 'Light rice-flour chiffon cake',
    description_zh: '輕盈米穀粉戚風蛋糕',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 42, restaurant_id: 14,
    name_en: 'Pudding', name_zh: '布丁',
    description_en: 'Silky caramel egg pudding, gluten-free',
    description_zh: '滑順焦糖雞蛋布丁，無麩質',
    dietary_tags: ['gluten-free'],
  },

  // GoGFGo (restaurant_id: 15)
  {
    id: 43, restaurant_id: 15,
    name_en: 'Gluten-Free Cookies', name_zh: '無麩質餅乾',
    description_en: 'Crunchy baked cookies in assorted flavors',
    description_zh: '酥脆烘焙餅乾，多種口味',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 44, restaurant_id: 15,
    name_en: 'Dried Snack Pack', name_zh: '乾燥點心包',
    description_en: 'Shelf-stable dried snacks, gluten-free',
    description_zh: '可常溫保存的無麩質乾燥點心',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 45, restaurant_id: 15,
    name_en: 'Granola Bites', name_zh: '穀物脆球',
    description_en: 'Crunchy gluten-free granola clusters',
    description_zh: '酥脆無麩質穀物脆球',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // CathyTing Patisserie (restaurant_id: 16)
  {
    id: 46, restaurant_id: 16,
    name_en: 'Gluten-Free Tart', name_zh: '無麩質塔',
    description_en: 'Almond-flour tart with seasonal fillings',
    description_zh: '杏仁粉塔皮佐季節內餡',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 47, restaurant_id: 16,
    name_en: 'Layer Cake', name_zh: '夾層蛋糕',
    description_en: 'Gluten-free sponge layered with fresh cream',
    description_zh: '無麩質海綿蛋糕夾鮮奶油',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 48, restaurant_id: 16,
    name_en: 'Baking Workshop Set', name_zh: '手作烘焙課程組',
    description_en: 'Hands-on gluten-free baking class with ingredients',
    description_zh: '附食材的無麩質手作烘焙課程',
    dietary_tags: ['gluten-free'],
  },

  // Mu Fan Bloom (restaurant_id: 17)
  {
    id: 49, restaurant_id: 17,
    name_en: 'Gluten-Free Noodle Soup', name_zh: '無麩質湯麵',
    description_en: 'Rice-based noodles in a slow-simmered broth',
    description_zh: '米製麵條佐慢熬高湯',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 50, restaurant_id: 17,
    name_en: 'Sesame Dry Noodles', name_zh: '麻醬乾麵',
    description_en: 'GF noodles tossed in a rich sesame sauce',
    description_zh: '無麩質麵佐濃郁芝麻醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 51, restaurant_id: 17,
    name_en: 'Beef Noodle Soup', name_zh: '牛肉麵',
    description_en: 'Braised beef over gluten-free noodles',
    description_zh: '紅燒牛肉佐無麩質麵',
    dietary_tags: ['gluten-free'],
  },

  // Eggflower House (restaurant_id: 18)
  {
    id: 52, restaurant_id: 18,
    name_en: 'Ready-to-Eat Meal Pack', name_zh: '原型即食料理包',
    description_en: 'Whole-food meal pack, sugar-, dairy-, and gluten-free',
    description_zh: '原型食材即食包，無糖、無奶、無麩',
    dietary_tags: ['gluten-free', 'vegan', 'dairy-free'],
  },
  {
    id: 53, restaurant_id: 18,
    name_en: 'Vegetable Stew Pack', name_zh: '蔬食燉菜包',
    description_en: 'Slow-cooked vegetable stew, dairy- and gluten-free',
    description_zh: '慢燉蔬食燉菜，無奶無麩',
    dietary_tags: ['gluten-free', 'vegan', 'dairy-free'],
  },
  {
    id: 54, restaurant_id: 18,
    name_en: 'Braised Chicken Pack', name_zh: '燉雞料理包',
    description_en: 'Tender braised chicken, sugar- and gluten-free',
    description_zh: '軟嫩燉雞，無糖無麩',
    dietary_tags: ['gluten-free', 'dairy-free'],
  },

  // 100% Chicken (Qingshui) (restaurant_id: 19)
  {
    id: 55, restaurant_id: 19,
    name_en: 'Gluten-Free Egg Cake', name_zh: '無麩質雞蛋糕',
    description_en: 'Fluffy rice-flour egg cakes, freshly griddled',
    description_zh: '現烤鬆軟米穀粉雞蛋糕',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 56, restaurant_id: 19,
    name_en: 'Chocolate Egg Cake', name_zh: '巧克力雞蛋糕',
    description_en: 'Egg cakes filled with rich chocolate, gluten-free',
    description_zh: '濃郁巧克力內餡無麩質雞蛋糕',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 57, restaurant_id: 19,
    name_en: 'Cheese Egg Cake', name_zh: '起司雞蛋糕',
    description_en: 'Griddled gluten-free egg cakes with cheese',
    description_zh: '現烤無麩質起司雞蛋糕',
    dietary_tags: ['gluten-free'],
  },

  // PRIL (restaurant_id: 20)
  {
    id: 58, restaurant_id: 20,
    name_en: 'Vegan Mousse Cake', name_zh: '純素慕斯蛋糕',
    description_en: 'Plant-based mousse cake, gluten-free',
    description_zh: '植物性慕斯蛋糕，無麩質',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 59, restaurant_id: 20,
    name_en: 'Raw Chocolate Tart', name_zh: '生巧克力塔',
    description_en: 'Vegan raw chocolate tart with nut crust',
    description_zh: '純素生巧克力塔佐堅果塔皮',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 60, restaurant_id: 20,
    name_en: 'Coconut Panna Cotta', name_zh: '椰子奶酪',
    description_en: 'Coconut-milk panna cotta, vegan and gluten-free',
    description_zh: '椰奶奶酪，純素無麩質',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Ricey Aroma Workshop (restaurant_id: 21)
  {
    id: 61, restaurant_id: 21,
    name_en: 'Rice Flour Cake', name_zh: '米穀粉蛋糕',
    description_en: 'Light dessert made entirely from rice flour',
    description_zh: '全米穀粉製作的輕盈甜點',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 62, restaurant_id: 21,
    name_en: 'Savory Rice Snack', name_zh: '鹹味米點',
    description_en: 'Light savory rice-based bite',
    description_zh: '米製鹹味輕食小點',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 63, restaurant_id: 21,
    name_en: 'Matcha Roll', name_zh: '抹茶捲',
    description_en: 'Gluten-free rice sponge roll with matcha cream',
    description_zh: '無麩質米蛋糕捲佐抹茶奶油',
    dietary_tags: ['gluten-free'],
  },

  // Wheat Allergy Baking Studio (restaurant_id: 22)
  {
    id: 64, restaurant_id: 22,
    name_en: 'Gluten-Free Bread', name_zh: '無麩質麵包',
    description_en: 'Daily-baked loaf safe for wheat allergies',
    description_zh: '每日烘焙、適合小麥過敏者的麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 65, restaurant_id: 22,
    name_en: 'Cinnamon Roll', name_zh: '肉桂捲',
    description_en: 'Soft gluten-free cinnamon roll',
    description_zh: '柔軟無麩質肉桂捲',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 66, restaurant_id: 22,
    name_en: 'Brownie', name_zh: '布朗尼',
    description_en: 'Dense fudgy gluten-free brownie',
    description_zh: '濃郁綿密無麩質布朗尼',
    dietary_tags: ['gluten-free'],
  },

  // Little Town Bistro (restaurant_id: 23)
  {
    id: 67, restaurant_id: 23,
    name_en: 'Vegetarian Chinese Set', name_zh: '中式蔬食套餐',
    description_en: 'Home-style vegetarian Chinese plate with rice',
    description_zh: '家常中式蔬食套餐附飯',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 68, restaurant_id: 23,
    name_en: 'Braised Tofu Pot', name_zh: '滷豆腐煲',
    description_en: 'Tofu and vegetables braised in a savory pot',
    description_zh: '豆腐與蔬菜慢煮香滷煲',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 69, restaurant_id: 23,
    name_en: 'Stir-Fried Seasonal Greens', name_zh: '清炒時蔬',
    description_en: 'Wok-tossed seasonal vegetables with garlic',
    description_zh: '時令蔬菜佐蒜末大火快炒',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Mikanbao (restaurant_id: 24)
  {
    id: 70, restaurant_id: 24,
    name_en: 'Gluten-Free Bread Loaf', name_zh: '無麩質麵包',
    description_en: 'Soft rice-flour loaf baked fresh',
    description_zh: '新鮮烘焙柔軟米穀粉麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 71, restaurant_id: 24,
    name_en: 'Cream Bun', name_zh: '奶油餐包',
    description_en: 'Gluten-free bun filled with vanilla cream',
    description_zh: '無麩質餐包夾香草奶油',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 72, restaurant_id: 24,
    name_en: 'Pound Cake', name_zh: '磅蛋糕',
    description_en: 'Rich gluten-free butter pound cake',
    description_zh: '濃郁無麩質奶油磅蛋糕',
    dietary_tags: ['gluten-free'],
  },

  // How Sweet Rice Waffle (restaurant_id: 25)
  {
    id: 73, restaurant_id: 25,
    name_en: 'Rice Flour Waffle', name_zh: '米鬆餅',
    description_en: 'Crisp-edged waffle made with rice flour',
    description_zh: '米穀粉製作、外酥內軟的鬆餅',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 74, restaurant_id: 25,
    name_en: 'Waffle with Fruit', name_zh: '水果鬆餅',
    description_en: 'Rice waffle topped with fresh seasonal fruit',
    description_zh: '米鬆餅佐新鮮時令水果',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 75, restaurant_id: 25,
    name_en: 'Gluten-Free Mini Pizza', name_zh: '無麩質小披薩',
    description_en: 'Rice-based mini pizza with savory toppings',
    description_zh: '米製小披薩佐鹹香配料',
    dietary_tags: ['gluten-free'],
  },

  // An-He Dessert (restaurant_id: 26)
  {
    id: 76, restaurant_id: 26,
    name_en: 'Dairy-Free Soft Serve', name_zh: '無乳醣霜淇淋',
    description_en: 'Smooth soft serve, dairy- and gluten-free',
    description_zh: '滑順霜淇淋，無乳醣無麩質',
    dietary_tags: ['gluten-free', 'dairy-free'],
  },
  {
    id: 77, restaurant_id: 26,
    name_en: 'Gluten-Free Dessert Cup', name_zh: '無麩質甜點杯',
    description_en: 'Layered dessert cup, dairy-free',
    description_zh: '分層甜點杯，無乳醣',
    dietary_tags: ['gluten-free', 'dairy-free'],
  },
  {
    id: 78, restaurant_id: 26,
    name_en: 'Fruit Sorbet', name_zh: '水果雪酪',
    description_en: 'Fruit sorbet, naturally dairy- and gluten-free',
    description_zh: '水果雪酪，天然無乳無麩',
    dietary_tags: ['gluten-free', 'vegan', 'dairy-free'],
  },

  // Sweet Rice Dessert (restaurant_id: 27)
  {
    id: 79, restaurant_id: 27,
    name_en: 'Rice Dessert Bowl', name_zh: '米甜品碗',
    description_en: 'Sweet rice-based dessert in a comforting bowl',
    description_zh: '暖心米製甜品碗',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 80, restaurant_id: 27,
    name_en: 'Glutinous Rice Balls', name_zh: '湯圓',
    description_en: 'Chewy rice balls in a sweet ginger syrup',
    description_zh: 'Q彈湯圓佐甜薑糖水',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 81, restaurant_id: 27,
    name_en: 'Rice Pudding', name_zh: '米布丁',
    description_en: 'Creamy gluten-free rice pudding',
    description_zh: '綿密無麩質米布丁',
    dietary_tags: ['gluten-free'],
  },

  // Sister's Kitchen (restaurant_id: 28)
  {
    id: 82, restaurant_id: 28,
    name_en: 'Flourless Cake', name_zh: '無麵粉蛋糕',
    description_en: 'Dense cake made without flour or added sugar',
    description_zh: '無麵粉、無加糖的濃郁蛋糕',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 83, restaurant_id: 28,
    name_en: 'Sugar-Free Cookies', name_zh: '無糖餅乾',
    description_en: 'Gluten-free cookies with no added sugar',
    description_zh: '無麩質、無額外加糖餅乾',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 84, restaurant_id: 28,
    name_en: 'Nut Energy Bar', name_zh: '堅果能量棒',
    description_en: 'Flourless nut bar, no added sugar',
    description_zh: '無麵粉堅果棒，無加糖',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Rice Master (restaurant_id: 29)
  {
    id: 85, restaurant_id: 29,
    name_en: 'Rice Flour Bread', name_zh: '米麵包',
    description_en: 'Artisan loaf made entirely from rice flour',
    description_zh: '全米穀粉手工麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 86, restaurant_id: 29,
    name_en: 'Rice Baguette', name_zh: '米法國麵包',
    description_en: 'Crusty gluten-free baguette made with rice',
    description_zh: '外皮酥脆的無麩質米法國麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 87, restaurant_id: 29,
    name_en: 'Rice Sponge Cake', name_zh: '米海綿蛋糕',
    description_en: 'Light gluten-free sponge cake made with rice flour',
    description_zh: '米穀粉製作的輕盈無麩質海綿蛋糕',
    dietary_tags: ['gluten-free'],
  },

  // Zen Wu Bakery (restaurant_id: 30)
  {
    id: 88, restaurant_id: 30,
    name_en: 'Rice Bread Loaf', name_zh: '米胖麵包',
    description_en: 'Soft gluten-free rice bread, freshly baked',
    description_zh: '新鮮烘焙柔軟無麩質米麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 89, restaurant_id: 30,
    name_en: 'Red Bean Bun', name_zh: '紅豆麵包',
    description_en: 'Gluten-free rice bun filled with red bean paste',
    description_zh: '無麩質米麵包夾紅豆餡',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 90, restaurant_id: 30,
    name_en: 'Taro Bun', name_zh: '芋頭麵包',
    description_en: 'Rice bread filled with smooth taro paste',
    description_zh: '米麵包夾綿密芋泥',
    dietary_tags: ['gluten-free'],
  },

  // Red Room Rendezvous (restaurant_id: 31)
  {
    id: 91, restaurant_id: 31,
    name_en: 'American Breakfast Plate', name_zh: '美式早餐盤',
    description_en: 'Eggs, potatoes, and sausage, gluten-free',
    description_zh: '雞蛋、馬鈴薯與香腸，無麩質',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 92, restaurant_id: 31,
    name_en: 'Grilled Chicken Plate', name_zh: '烤雞簡餐',
    description_en: 'Grilled chicken with seasonal sides',
    description_zh: '烤雞佐時令配菜',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 93, restaurant_id: 31,
    name_en: 'Garden Salad', name_zh: '田園沙拉',
    description_en: 'Fresh greens with a house vinaigrette',
    description_zh: '生菜佐自製油醋醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Wufu Gluten Free Food (restaurant_id: 32)
  {
    id: 94, restaurant_id: 32,
    name_en: 'Gluten-Free Set Meal', name_zh: '無麩質簡餐',
    description_en: 'Chinese-style set with rice, protein, and greens',
    description_zh: '中式套餐附飯、主菜與青菜',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 95, restaurant_id: 32,
    name_en: 'Braised Pork Rice', name_zh: '滷肉飯',
    description_en: 'Savory braised pork over rice, gluten-free',
    description_zh: '香滷豬肉佐飯，無麩質',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 96, restaurant_id: 32,
    name_en: 'Gluten-Free Dessert', name_zh: '無麩質甜點',
    description_en: 'House dessert of the day, gluten-free',
    description_zh: '每日自製無麩質甜點',
    dietary_tags: ['gluten-free'],
  },
];
