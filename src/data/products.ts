export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  category: "الكل" | "خلطات خاصة" | "بهارات مفردة" | "قهوة وحبوب";
}

export const categories = [
  { id: "الكل", label: "الكل" },
  { id: "خلطات خاصة", label: "خلطات خاصة" },
  { id: "بهارات مفردة", label: "بهارات مفردة" },
  { id: "قهوة وحبوب", label: "قهوة وحبوب" },
] as const;

export const products: Product[] = [
  // خلطات خاصة - Special Blends
  {
    id: "1",
    name: "بهارات مشكلة",
    nameEn: "Mixed Spices",
    price: 2500,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },
  {
    id: "2",
    name: "بهارات كبسة",
    nameEn: "Kabsa Spices",
    price: 2800,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },
  {
    id: "3",
    name: "حوائج يمني",
    nameEn: "Yemeni Hawaij",
    price: 3000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },
  {
    id: "4",
    name: "بهارات زربيان",
    nameEn: "Zurbian Spices",
    price: 3200,
    image: "https://images.unsplash.com/photo-1599909533681-74084d7c8fd4?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },
  {
    id: "5",
    name: "خلطة صنعانية",
    nameEn: "San'ani Mix",
    price: 2700,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76921?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },
  {
    id: "6",
    name: "بهارات مندي",
    nameEn: "Mandi Spices",
    price: 2900,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    category: "خلطات خاصة"
  },

  // بهارات مفردة - Pure Spices
  {
    id: "7",
    name: "كمون بلدي",
    nameEn: "Local Cumin",
    price: 1800,
    image: "https://images.unsplash.com/photo-1599909533189-a4b27a9eabb3?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "8",
    name: "فلفل أسود",
    nameEn: "Black Pepper",
    price: 3200,
    image: "https://images.unsplash.com/photo-1599909533681-74084d7c8fd4?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "9",
    name: "كركم هندي",
    nameEn: "Indian Turmeric",
    price: 2200,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "10",
    name: "قرفة سيلانية",
    nameEn: "Ceylon Cinnamon",
    price: 4500,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005f2667?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "11",
    name: "هيل أخضر",
    nameEn: "Green Cardamom",
    price: 8500,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76921?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "12",
    name: "كزبرة جافة",
    nameEn: "Dried Coriander",
    price: 1500,
    image: "https://images.unsplash.com/photo-1515543904323-87f74a144114?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "13",
    name: "قرنفل عود",
    nameEn: "Cloves",
    price: 5500,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },
  {
    id: "14",
    name: "فلفل أحمر حار",
    nameEn: "Red Chili",
    price: 2000,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=400&fit=crop",
    category: "بهارات مفردة"
  },

  // قهوة وحبوب - Coffee & Grains
  {
    id: "15",
    name: "قشر البن اليمني",
    nameEn: "Yemeni Coffee Husks",
    price: 4000,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  },
  {
    id: "16",
    name: "زنجبيل مطحون",
    nameEn: "Ground Ginger",
    price: 2500,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  },
  {
    id: "17",
    name: "زعفران أصلي",
    nameEn: "Pure Saffron",
    price: 15000,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76921?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  },
  {
    id: "18",
    name: "حلبة يمنية",
    nameEn: "Yemeni Fenugreek",
    price: 1800,
    image: "https://images.unsplash.com/photo-1599909533189-a4b27a9eabb3?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  },
  {
    id: "19",
    name: "بقوليات مختارة",
    nameEn: "Selected Legumes",
    price: 1500,
    image: "https://images.unsplash.com/photo-1515543904323-87f74a144114?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  },
  {
    id: "20",
    name: "حب الرشاد",
    nameEn: "Garden Cress Seeds",
    price: 2200,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    category: "قهوة وحبوب"
  }
];

export const branches = [
  {
    id: "1",
    name: "الفرع الرئيسي - شارع شيراتون",
    address: "شارع شيراتون، صنعاء",
    hours: "يومياً حتى 11:00 مساءً",
    phone: "+967 1 255 358",
    isMain: true
  },
  {
    id: "2",
    name: "فرع سوق الملح",
    address: "سوق الملح، صنعاء القديمة",
    hours: "يومياً حتى 9:00 مساءً",
    phone: "+967 1 255 359",
    isMain: false
  },
  {
    id: "3",
    name: "فرع حدة",
    address: "شارع حدة، صنعاء",
    hours: "يومياً حتى 10:00 مساءً",
    phone: "+967 1 255 360",
    isMain: false
  },
  {
    id: "4",
    name: "فرع الزبيري",
    address: "شارع الزبيري، صنعاء",
    hours: "يومياً حتى 10:00 مساءً",
    phone: "+967 1 255 361",
    isMain: false
  },
  {
    id: "5",
    name: "فرع تعز",
    address: "شارع جمال، تعز",
    hours: "يومياً حتى 9:00 مساءً",
    phone: "+967 4 255 362",
    isMain: false
  }
];
