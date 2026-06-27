export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "极简风格台灯",
    price: 299,
    originalPrice: 399,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20desk%20lamp%20warm%20light%20wooden%20base%20modern%20design%20product%20photo&image_size=square",
    category: "家居",
    description: "北欧极简风格设计，三档调光，护眼LED光源，木质底座更显质感。",
    rating: 4.8,
    reviews: 256,
    stock: 50,
  },
  {
    id: 2,
    name: "陶瓷马克杯套装",
    price: 128,
    originalPrice: 168,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20coffee%20mug%20set%20minimal%20design%20warm%20colors%20product%20photography&image_size=square",
    category: "家居",
    description: "手工陶瓷工艺，温润质感，一套四个，送礼自用两相宜。",
    rating: 4.9,
    reviews: 428,
    stock: 120,
  },
  {
    id: 3,
    name: "无线蓝牙耳机",
    price: 599,
    originalPrice: 799,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20bluetooth%20earbuds%20sleek%20modern%20design%20white%20product%20shot&image_size=square",
    category: "数码",
    description: "主动降噪，30小时续航，IPX5防水，音质纯净通透。",
    rating: 4.7,
    reviews: 1024,
    stock: 80,
  },
  {
    id: 4,
    name: "真皮钱包",
    price: 368,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=genuine%20leather%20wallet%20brown%20minimal%20design%20product%20photography%20luxury&image_size=square",
    category: "配饰",
    description: "头层牛皮，手工缝制，多卡位设计，简约而不简单。",
    rating: 4.6,
    reviews: 312,
    stock: 45,
  },
  {
    id: 5,
    name: "香薰蜡烛礼盒",
    price: 198,
    originalPrice: 258,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scented%20candle%20gift%20set%20elegant%20packaging%20warm%20cozy%20aesthetic&image_size=square",
    category: "家居",
    description: "天然大豆蜡，三种香型可选，燃烧时间长达40小时。",
    rating: 4.9,
    reviews: 567,
    stock: 200,
  },
  {
    id: 6,
    name: "智能手表",
    price: 1299,
    originalPrice: 1599,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20watch%20minimalist%20design%20black%20modern%20fitness%20tracker%20product&image_size=square",
    category: "数码",
    description: "全天候健康监测，多种运动模式，14天超长续航。",
    rating: 4.5,
    reviews: 890,
    stock: 35,
  },
  {
    id: 7,
    name: "帆布双肩包",
    price: 259,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=canvas%20backpack%20minimal%20style%20beige%20color%20casual%20product%20photo&image_size=square",
    category: "配饰",
    description: "优质帆布面料，大容量设计，通勤出游必备。",
    rating: 4.7,
    reviews: 445,
    stock: 90,
  },
  {
    id: 8,
    name: "机械键盘",
    price: 499,
    originalPrice: 699,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%20minimal%20white%20design%20warm%20lighting%20product%20shot&image_size=square",
    category: "数码",
    description: "红轴手感，RGB背光，全键无冲，码字游戏两相宜。",
    rating: 4.8,
    reviews: 678,
    stock: 60,
  },
];

export const categories = ["全部", "家居", "数码", "配饰"];
