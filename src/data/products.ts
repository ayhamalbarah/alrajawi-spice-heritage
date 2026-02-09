import mixedSpicesImg from "@/assets/products/mixed-spices.jpg";
import kabsaSpicesImg from "@/assets/products/kabsa-spices.jpg";
import hawaijImg from "@/assets/products/hawaij.jpg";
import zurbianSpicesImg from "@/assets/products/zurbian-spices.jpg";
import sananiMixImg from "@/assets/products/sanani-mix.jpg";
import mandiSpicesImg from "@/assets/products/mandi-spices.jpg";
import cuminImg from "@/assets/products/cumin.jpg";
import blackPepperImg from "@/assets/products/black-pepper.jpg";
import turmericImg from "@/assets/products/turmeric.jpg";
import cinnamonImg from "@/assets/products/cinnamon.jpg";
import cardamomImg from "@/assets/products/cardamom.jpg";
import corianderImg from "@/assets/products/coriander.jpg";
import clovesImg from "@/assets/products/cloves.jpg";
import redChiliImg from "@/assets/products/red-chili.jpg";
import coffeeHusksImg from "@/assets/products/coffee-husks.jpg";
import gingerImg from "@/assets/products/ginger.jpg";
import saffronImg from "@/assets/products/saffron.jpg";
import fenugreekImg from "@/assets/products/fenugreek.jpg";
import legumesImg from "@/assets/products/legumes.jpg";
import gardenCressImg from "@/assets/products/garden-cress.jpg";

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
  { id: "1", name: "بهارات مشكلة", nameEn: "Mixed Spices", price: 2500, image: mixedSpicesImg, category: "خلطات خاصة" },
  { id: "2", name: "بهارات كبسة", nameEn: "Kabsa Spices", price: 2800, image: kabsaSpicesImg, category: "خلطات خاصة" },
  { id: "3", name: "حوائج يمني", nameEn: "Yemeni Hawaij", price: 3000, image: hawaijImg, category: "خلطات خاصة" },
  { id: "4", name: "بهارات زربيان", nameEn: "Zurbian Spices", price: 3200, image: zurbianSpicesImg, category: "خلطات خاصة" },
  { id: "5", name: "خلطة صنعانية", nameEn: "San'ani Mix", price: 2700, image: sananiMixImg, category: "خلطات خاصة" },
  { id: "6", name: "بهارات مندي", nameEn: "Mandi Spices", price: 2900, image: mandiSpicesImg, category: "خلطات خاصة" },
  { id: "7", name: "كمون بلدي", nameEn: "Local Cumin", price: 1800, image: cuminImg, category: "بهارات مفردة" },
  { id: "8", name: "فلفل أسود", nameEn: "Black Pepper", price: 3200, image: blackPepperImg, category: "بهارات مفردة" },
  { id: "9", name: "كركم هندي", nameEn: "Indian Turmeric", price: 2200, image: turmericImg, category: "بهارات مفردة" },
  { id: "10", name: "قرفة سيلانية", nameEn: "Ceylon Cinnamon", price: 4500, image: cinnamonImg, category: "بهارات مفردة" },
  { id: "11", name: "هيل أخضر", nameEn: "Green Cardamom", price: 8500, image: cardamomImg, category: "بهارات مفردة" },
  { id: "12", name: "كزبرة جافة", nameEn: "Dried Coriander", price: 1500, image: corianderImg, category: "بهارات مفردة" },
  { id: "13", name: "قرنفل عود", nameEn: "Cloves", price: 5500, image: clovesImg, category: "بهارات مفردة" },
  { id: "14", name: "فلفل أحمر حار", nameEn: "Red Chili", price: 2000, image: redChiliImg, category: "بهارات مفردة" },
  { id: "15", name: "قشر البن اليمني", nameEn: "Yemeni Coffee Husks", price: 4000, image: coffeeHusksImg, category: "قهوة وحبوب" },
  { id: "16", name: "زنجبيل مطحون", nameEn: "Ground Ginger", price: 2500, image: gingerImg, category: "قهوة وحبوب" },
  { id: "17", name: "زعفران أصلي", nameEn: "Pure Saffron", price: 15000, image: saffronImg, category: "قهوة وحبوب" },
  { id: "18", name: "حلبة يمنية", nameEn: "Yemeni Fenugreek", price: 1800, image: fenugreekImg, category: "قهوة وحبوب" },
  { id: "19", name: "بقوليات مختارة", nameEn: "Selected Legumes", price: 1500, image: legumesImg, category: "قهوة وحبوب" },
  { id: "20", name: "حب الرشاد", nameEn: "Garden Cress Seeds", price: 2200, image: gardenCressImg, category: "قهوة وحبوب" },
];

export const branches = [
  { id: "1", name: "الفرع الرئيسي - شارع شيراتون", address: "شارع شيراتون، صنعاء", hours: "يومياً حتى 11:00 مساءً", phone: "+967 1 255 358", isMain: true },
  { id: "2", name: "فرع سوق الملح", address: "سوق الملح، صنعاء القديمة", hours: "يومياً حتى 9:00 مساءً", phone: "+967 1 255 359", isMain: false },
  { id: "3", name: "فرع حدة", address: "شارع حدة، صنعاء", hours: "يومياً حتى 10:00 مساءً", phone: "+967 1 255 360", isMain: false },
  { id: "4", name: "فرع الزبيري", address: "شارع الزبيري، صنعاء", hours: "يومياً حتى 10:00 مساءً", phone: "+967 1 255 361", isMain: false },
  { id: "5", name: "فرع تعز", address: "شارع جمال، تعز", hours: "يومياً حتى 9:00 مساءً", phone: "+967 4 255 362", isMain: false },
];
