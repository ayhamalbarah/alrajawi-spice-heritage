export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "بهارات مشكلة",
    nameEn: "Mixed Spices",
    price: 2500,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "2",
    name: "كمون بلدي",
    nameEn: "Local Cumin",
    price: 1800,
    image: "https://images.unsplash.com/photo-1599909533681-74084d7c8fd4?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "3",
    name: "فلفل أسود",
    nameEn: "Black Pepper",
    price: 3200,
    image: "https://images.unsplash.com/photo-1599909533189-a4b27a9eabb3?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "4",
    name: "كركم هندي",
    nameEn: "Indian Turmeric",
    price: 2200,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "5",
    name: "قرفة سيلانية",
    nameEn: "Ceylon Cinnamon",
    price: 4500,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005f2667?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "6",
    name: "هيل أخضر",
    nameEn: "Green Cardamom",
    price: 8500,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76921?w=400&h=400&fit=crop",
    category: "بهارات"
  },
  {
    id: "7",
    name: "بقوليات مختارة",
    nameEn: "Selected Legumes",
    price: 1500,
    image: "https://images.unsplash.com/photo-1515543904323-87f74a144114?w=400&h=400&fit=crop",
    category: "بقوليات"
  },
  {
    id: "8",
    name: "بهارات كبسة",
    nameEn: "Kabsa Spices",
    price: 2800,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=400&fit=crop",
    category: "بهارات"
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
