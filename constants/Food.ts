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
  { id: 1, name_en: 'Chinese Food',    name_zh: '中式料理', emoji: '🥢' },
  { id: 2, name_en: 'American Food',   name_zh: '美式料理', emoji: '🍔' },
  { id: 3, name_en: 'Italian Food',    name_zh: '義式料理', emoji: '🍝' },
  { id: 4, name_en: 'Desserts',        name_zh: '甜點',     emoji: '🍰' },
  { id: 5, name_en: 'Vietnamese Food', name_zh: '越式料理', emoji: '🍜' },
  { id: 6, name_en: 'Japanese Food',   name_zh: '日式料理', emoji: '🍣' },
];

export const restaurants: Restaurant[] = [
  // Chinese Food
  {
    id: 1, category_id: 1,
    name_en: 'Dragon Palace', name_zh: '龍宮',
    address: '100 Zhongxiao E Rd, Taipei',
    latitude: 25.0419, longitude: 121.5655,
    image_link: require('../assets/images/foods/1.jpeg'),
  },
  {
    id: 2, category_id: 1,
    name_en: 'Golden Phoenix', name_zh: '金鳳凰',
    address: '50 Nanjing W Rd, Taipei',
    latitude: 25.0529, longitude: 121.5195,
    image_link: require('../assets/images/foods/2.jpeg'),
  },
  // American Food
  {
    id: 3, category_id: 2,
    name_en: 'The Burger Joint', name_zh: '漢堡工坊',
    address: '22 Xinyi Rd, Taipei',
    latitude: 25.0330, longitude: 121.5654,
    image_link: require('../assets/images/foods/3.jpeg'),
  },
  {
    id: 4, category_id: 2,
    name_en: 'Texas BBQ House', name_zh: '德州燒烤',
    address: '88 Dunhua S Rd, Taipei',
    latitude: 25.0418, longitude: 121.5508,
    image_link: require('../assets/images/foods/4.jpeg'),
  },
  // Italian Food
  {
    id: 5, category_id: 3,
    name_en: 'La Bella Roma', name_zh: '美麗羅馬',
    address: "15 Anhe Rd, Da'an District, Taipei",
    latitude: 25.0280, longitude: 121.5500,
    image_link: require('../assets/images/foods/5.jpeg'),
  },
  {
    id: 6, category_id: 3,
    name_en: 'Pasta Paradise', name_zh: '義麵天堂',
    address: '30 Fuxing S Rd, Taipei',
    latitude: 25.0385, longitude: 121.5430,
    image_link: require('../assets/images/foods/6.jpeg'),
  },
  // Desserts
  {
    id: 7, category_id: 4,
    name_en: 'Sweet Dreams Patisserie', name_zh: '甜夢點心坊',
    address: "5 Yongkang St, Da'an District, Taipei",
    latitude: 25.0320, longitude: 121.5300,
    image_link: require('../assets/images/foods/7.jpeg'),
  },
  {
    id: 8, category_id: 4,
    name_en: 'Milk & Honey', name_zh: '牛奶與蜂蜜',
    address: '12 Shida Rd, Taipei',
    latitude: 25.0260, longitude: 121.5290,
    image_link: require('../assets/images/foods/8.jpeg'),
  },
  // Vietnamese Food
  {
    id: 9, category_id: 5,
    name_en: 'Pho Saigon', name_zh: '西貢河粉',
    address: '66 Linsen N Rd, Zhongshan District, Taipei',
    latitude: 25.0530, longitude: 121.5250,
    image_link: require('../assets/images/foods/1.jpeg'),
  },
  {
    id: 10, category_id: 5,
    name_en: 'Hanoi Kitchen', name_zh: '河內廚房',
    address: '40 Minsheng E Rd, Taipei',
    latitude: 25.0580, longitude: 121.5480,
    image_link: require('../assets/images/foods/2.jpeg'),
  },
  // Japanese Food
  {
    id: 11, category_id: 6,
    name_en: 'Sakura Sushi', name_zh: '櫻花壽司',
    address: '8 Zhongshan N Rd, Taipei',
    latitude: 25.0560, longitude: 121.5210,
    image_link: require('../assets/images/foods/3.jpeg'),
  },
  {
    id: 12, category_id: 6,
    name_en: 'Mount Fuji Ramen', name_zh: '富士山拉麵',
    address: '25 Jilin Rd, Zhongshan District, Taipei',
    latitude: 25.0540, longitude: 121.5240,
    image_link: require('../assets/images/foods/4.jpeg'),
  },
];

export const menuItems: MenuItem[] = [
  // Dragon Palace (restaurant_id: 1)
  {
    id: 1, restaurant_id: 1,
    name_en: 'Gluten-Free Dim Sum', name_zh: '無麩質點心',
    description_en: 'Steamed dumplings made with rice flour wrappers',
    description_zh: '採用米粉製作的蒸餃，口感柔嫩',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 2, restaurant_id: 1,
    name_en: 'Mapo Tofu', name_zh: '麻婆豆腐',
    description_en: 'Soft tofu in a spicy bean sauce',
    description_zh: '嫩豆腐浸入香辣豆瓣醬中',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 3, restaurant_id: 1,
    name_en: 'Stir-Fried Seasonal Vegetables', name_zh: '清炒時蔬',
    description_en: 'Fresh seasonal veggies wok-tossed with garlic',
    description_zh: '當季時蔬以蒜末大火快炒',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 4, restaurant_id: 1,
    name_en: 'Congee with Toppings', name_zh: '配料粥',
    description_en: 'Smooth rice porridge with a choice of toppings',
    description_zh: '滑順米粥，可選多種配料',
    dietary_tags: ['gluten-free'],
  },

  // Golden Phoenix (restaurant_id: 2)
  {
    id: 5, restaurant_id: 2,
    name_en: 'Peking Duck', name_zh: '北京烤鴨',
    description_en: 'Crispy roasted duck served with gluten-free pancakes',
    description_zh: '香脆烤鴨搭配無麩質薄餅',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 6, restaurant_id: 2,
    name_en: 'Egg Fried Rice', name_zh: '蛋炒飯',
    description_en: 'Wok-tossed jasmine rice with egg and scallions',
    description_zh: '茉莉花米與雞蛋、蔥花大火快炒',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 7, restaurant_id: 2,
    name_en: 'Hot and Sour Soup', name_zh: '酸辣湯',
    description_en: 'Classic tangy broth with tofu and wood ear mushrooms',
    description_zh: '豆腐與木耳的酸辣湯',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 8, restaurant_id: 2,
    name_en: 'Steamed Fish with Ginger', name_zh: '薑蔥蒸魚',
    description_en: 'Whole fish steamed with ginger and scallions',
    description_zh: '整條魚以薑蔥清蒸',
    dietary_tags: ['gluten-free'],
  },

  // The Burger Joint (restaurant_id: 3)
  {
    id: 9, restaurant_id: 3,
    name_en: 'Classic Beef Burger', name_zh: '經典牛肉漢堡',
    description_en: 'Grass-fed beef patty on a gluten-free brioche bun',
    description_zh: '草飼牛肉餅搭配無麩質布里歐麵包',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 10, restaurant_id: 3,
    name_en: 'Veggie Burger', name_zh: '蔬食漢堡',
    description_en: 'House-made plant-based patty with avocado and tomato',
    description_zh: '自製植物性肉餅佐酪梨與番茄',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 11, restaurant_id: 3,
    name_en: 'Sweet Potato Fries', name_zh: '地瓜薯條',
    description_en: 'Crispy oven-baked sweet potato fries with aioli',
    description_zh: '香烤地瓜條佐蒜味蛋黃醬',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 12, restaurant_id: 3,
    name_en: 'Caesar Salad (GF)', name_zh: '凱薩沙拉（無麩質）',
    description_en: 'Romaine lettuce with gluten-free croutons and dressing',
    description_zh: '羅馬生菜佐無麩質麵包丁與醬汁',
    dietary_tags: ['gluten-free'],
  },

  // Texas BBQ House (restaurant_id: 4)
  {
    id: 13, restaurant_id: 4,
    name_en: 'Smoked Beef Brisket', name_zh: '煙燻牛胸肉',
    description_en: 'Slow-smoked 12-hour brisket, naturally gluten-free',
    description_zh: '12小時慢燉煙燻牛胸肉，天然無麩質',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 14, restaurant_id: 4,
    name_en: 'Pork Spare Ribs', name_zh: '豬肋排',
    description_en: 'Fall-off-the-bone ribs with house BBQ sauce',
    description_zh: '入口即化的豬肋排佐自製燒烤醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 15, restaurant_id: 4,
    name_en: 'Coleslaw', name_zh: '涼拌高麗菜',
    description_en: 'Creamy homemade coleslaw with apple cider vinegar',
    description_zh: '自製蘋果醋風味涼拌高麗菜',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 16, restaurant_id: 4,
    name_en: 'Grilled Corn', name_zh: '烤玉米',
    description_en: 'Charred corn on the cob with herb butter',
    description_zh: '炭烤玉米佐香草奶油',
    dietary_tags: ['vegan', 'gluten-free'],
  },

  // La Bella Roma (restaurant_id: 5)
  {
    id: 17, restaurant_id: 5,
    name_en: 'Pasta Arrabiata (GF)', name_zh: '辣番茄義大利麵（無麩質）',
    description_en: 'Brown rice pasta in a spicy tomato and basil sauce',
    description_zh: '糙米義麵佐辣番茄羅勒醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 18, restaurant_id: 5,
    name_en: 'Margherita Pizza (GF)', name_zh: '瑪格麗特披薩（無麩質）',
    description_en: 'Thin-crust gluten-free base with fresh mozzarella and basil',
    description_zh: '無麩質薄餅底搭配新鮮莫扎瑞拉起司與羅勒',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 19, restaurant_id: 5,
    name_en: 'Tiramisu (GF)', name_zh: '提拉米蘇（無麩質）',
    description_en: 'Classic Italian dessert made with gluten-free ladyfingers',
    description_zh: '採用無麩質手指餅乾的傳統義式甜點',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 20, restaurant_id: 5,
    name_en: 'Caprese Salad', name_zh: '卡布里沙拉',
    description_en: 'Fresh buffalo mozzarella, tomatoes, and basil with balsamic',
    description_zh: '水牛莫扎瑞拉起司、番茄與羅勒佐巴薩米克醋',
    dietary_tags: ['gluten-free'],
  },

  // Pasta Paradise (restaurant_id: 6)
  {
    id: 21, restaurant_id: 6,
    name_en: 'Spaghetti Carbonara (GF)', name_zh: '培根蛋黃義麵（無麩質）',
    description_en: 'Gluten-free spaghetti with egg, pancetta, and pecorino',
    description_zh: '無麩質義麵佐雞蛋、培根與佩科里諾起司',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 22, restaurant_id: 6,
    name_en: 'Penne al Pesto', name_zh: '青醬筆管麵',
    description_en: 'GF penne tossed in house-made Genovese basil pesto',
    description_zh: '無麩質筆管麵佐熱那亞自製青醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 23, restaurant_id: 6,
    name_en: 'Risotto ai Funghi', name_zh: '野菇燉飯',
    description_en: 'Creamy Arborio risotto with wild mushrooms and truffle oil',
    description_zh: '義大利米燉飯佐野菇與松露油',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 24, restaurant_id: 6,
    name_en: 'Grilled Salmon', name_zh: '香煎鮭魚',
    description_en: 'Atlantic salmon fillet with lemon butter and capers',
    description_zh: '大西洋鮭魚排佐檸檬奶油與酸豆',
    dietary_tags: ['gluten-free'],
  },

  // Sweet Dreams Patisserie (restaurant_id: 7)
  {
    id: 25, restaurant_id: 7,
    name_en: 'French Macarons', name_zh: '法式馬卡龍',
    description_en: 'Almond-flour macarons in seasonal flavors',
    description_zh: '杏仁粉法式馬卡龍，多種季節口味',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 26, restaurant_id: 7,
    name_en: 'Flourless Chocolate Cake', name_zh: '無麵粉巧克力蛋糕',
    description_en: 'Dense and rich dark chocolate cake',
    description_zh: '濃郁黑巧克力無麵粉蛋糕',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 27, restaurant_id: 7,
    name_en: 'Vegan Fruit Tart', name_zh: '純素水果塔',
    description_en: 'Almond crust with coconut cream and fresh seasonal fruits',
    description_zh: '杏仁塔皮、椰子奶油佐新鮮時令水果',
    dietary_tags: ['gluten-free', 'vegan'],
  },
  {
    id: 28, restaurant_id: 7,
    name_en: 'Crème Brûlée', name_zh: '焦糖布丁',
    description_en: 'Classic vanilla custard with a caramelized sugar crust',
    description_zh: '香草卡士達焦糖布丁',
    dietary_tags: ['gluten-free'],
  },

  // Milk & Honey (restaurant_id: 8)
  {
    id: 29, restaurant_id: 8,
    name_en: 'Panna Cotta', name_zh: '義式奶酪',
    description_en: 'Silky vanilla bean panna cotta with wild berry coulis',
    description_zh: '香草籽義式奶酪佐野莓醬',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 30, restaurant_id: 8,
    name_en: 'Mochi Ice Cream', name_zh: '麻糬冰淇淋',
    description_en: 'Handmade rice flour mochi with premium ice cream filling',
    description_zh: '手工米粉麻糬包覆頂級冰淇淋',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 31, restaurant_id: 8,
    name_en: 'Açaí Bowl', name_zh: '巴西莓碗',
    description_en: 'Frozen açaí base with granola, banana, and honey',
    description_zh: '冰凍巴西莓搭配燕麥脆片、香蕉與蜂蜜',
    dietary_tags: ['vegan'],
  },
  {
    id: 32, restaurant_id: 8,
    name_en: 'Chia Pudding', name_zh: '奇亞籽布丁',
    description_en: 'Coconut milk chia pudding with mango coulis',
    description_zh: '椰奶奇亞籽布丁佐芒果醬',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Pho Saigon (restaurant_id: 9)
  {
    id: 33, restaurant_id: 9,
    name_en: 'Pho Bo (GF)', name_zh: '牛肉河粉（無麩質）',
    description_en: 'Rich beef bone broth with rice noodles and fresh herbs',
    description_zh: '濃郁牛骨高湯搭配米粉與新鮮香草',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 34, restaurant_id: 9,
    name_en: 'Fresh Spring Rolls', name_zh: '新鮮春捲',
    description_en: 'Rice paper rolls with shrimp, vermicelli, and herbs',
    description_zh: '米紙捲包蝦仁、冬粉與香草',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 35, restaurant_id: 9,
    name_en: 'Lemongrass Grilled Chicken', name_zh: '香茅烤雞',
    description_en: 'Marinated chicken thighs grilled over charcoal',
    description_zh: '香茅醃製炭烤雞腿排',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 36, restaurant_id: 9,
    name_en: 'Vegan Pho', name_zh: '素食河粉',
    description_en: 'Mushroom and vegetable broth with rice noodles and tofu',
    description_zh: '菇菌蔬菜高湯米粉配豆腐',
    dietary_tags: ['gluten-free', 'vegan'],
  },

  // Hanoi Kitchen (restaurant_id: 10)
  {
    id: 37, restaurant_id: 10,
    name_en: 'Bun Bo Hue', name_zh: '順化牛肉米線',
    description_en: 'Spicy lemongrass and shrimp paste beef noodle soup',
    description_zh: '香辣香茅蝦醬牛肉米線',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 38, restaurant_id: 10,
    name_en: 'Banh Cuon', name_zh: '越式蒸捲',
    description_en: 'Delicate steamed rice rolls filled with pork and mushroom',
    description_zh: '細膩蒸米皮包豬肉與香菇',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 39, restaurant_id: 10,
    name_en: 'Banh Xeo (Vietnamese Crepe)', name_zh: '越式煎餅',
    description_en: 'Crispy turmeric rice flour crepe with shrimp and bean sprouts',
    description_zh: '香脆薑黃米粉煎餅配蝦仁豆芽',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 40, restaurant_id: 10,
    name_en: 'Com Tam (Broken Rice)', name_zh: '碎米飯',
    description_en: 'Grilled pork over broken jasmine rice with pickled vegetables',
    description_zh: '烤豬肉搭配碎米飯與醃菜',
    dietary_tags: ['gluten-free'],
  },

  // Sakura Sushi (restaurant_id: 11)
  {
    id: 41, restaurant_id: 11,
    name_en: 'Salmon Nigiri', name_zh: '鮭魚握壽司',
    description_en: 'Fresh Atlantic salmon over hand-pressed seasoned rice',
    description_zh: '新鮮大西洋鮭魚握壽司',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 42, restaurant_id: 11,
    name_en: 'Tuna Maki (GF)', name_zh: '鮪魚卷（無麩質）',
    description_en: 'Tuna rolls served with tamari gluten-free soy sauce',
    description_zh: '鮪魚卷搭配無麩質醬油',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 43, restaurant_id: 11,
    name_en: 'Edamame', name_zh: '毛豆',
    description_en: 'Steamed salted young soybeans',
    description_zh: '清蒸鹽味毛豆',
    dietary_tags: ['vegan', 'gluten-free'],
  },
  {
    id: 44, restaurant_id: 11,
    name_en: 'Chirashi Bowl', name_zh: '散壽司碗',
    description_en: 'Assorted sashimi over seasoned sushi rice',
    description_zh: '什錦生魚片散壽司碗',
    dietary_tags: ['gluten-free'],
  },

  // Mount Fuji Ramen (restaurant_id: 12)
  {
    id: 45, restaurant_id: 12,
    name_en: 'Tonkotsu Ramen (GF)', name_zh: '豚骨拉麵（無麩質）',
    description_en: 'Rich creamy pork bone broth with gluten-free noodles',
    description_zh: '濃郁豬骨白湯無麩質拉麵',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 46, restaurant_id: 12,
    name_en: 'Shoyu Ramen (GF)', name_zh: '醬油拉麵（無麩質）',
    description_en: 'Clear soy-based broth with gluten-free noodles and chashu',
    description_zh: '清澈醬油湯底無麩質拉麵佐叉燒',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 47, restaurant_id: 12,
    name_en: 'Gyoza (GF)', name_zh: '煎餃（無麩質）',
    description_en: 'Crispy pan-fried dumplings with rice flour wrappers',
    description_zh: '香煎米皮餃子',
    dietary_tags: ['gluten-free'],
  },
  {
    id: 48, restaurant_id: 12,
    name_en: 'Karaage Chicken', name_zh: '日式炸雞',
    description_en: 'Japanese fried chicken marinated in gluten-free soy',
    description_zh: '日式無麩質醬油醃製炸雞',
    dietary_tags: ['gluten-free'],
  },
];
