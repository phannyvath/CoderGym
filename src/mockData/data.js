import { delay } from "framer-motion";
import Image1 from "../assets/tabs/1.png";
import Image2 from "../assets/tabs/2.png";
import Image3 from "../assets/tabs/3.png";
import Image4 from "../assets/tabs/4.png";

export const NavbarMenu = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "Trainer",
    link: "#",
  },
  {
    id: 3,
    title: "Program",
    link: "#",
  },
  {
    id: 4,
    title: "blog",
    link: "#",
  },
  {
    id: 5,
    title: "Pricing",
    link: "#",
  },
];

export const productsData = [
  {
    id: 1,
    category: "Yoga",
    Image: Image1,
    info: "info",
    price: "100$",
  },
  {
    id: 2,
    category: "Fitness",
    Image: Image2,
    info: "info",
    price: "120$",
  },
  {
    id: 3,
    category: "Muscles",
    Image: Image3,
    info: "info",
    price: "80$",
  },
  {
    id: 4,
    category: "Yoga",
    Image: Image4,
    info: "info",
    price: "170$",
  },
  {
    id: 5,
    category: "Yoga",
    Image: Image1, // Corrected the reference to a valid image
    info: "info",
    price: "85$",
  },
  {
    id: 6,
    category: "Yoga",
    Image: Image1,
    info: "info",
    price: "68$",
  },
  {
    id: 7,
    category: "Fitness",
    Image: Image2,
    info: "info",
    price: "75$",
  },
  {
    id: 8,
    category: "Muscles",
    Image: Image3,
    info: "info",
    price: "77$",
  },
  {
    id: 9,
    category: "Yoga",
    Image: Image4,
    info: "info",
    price: "68$",
  },
  {
    id: 10,
    category: "Yoga",
    Image: Image1, // Corrected image reference
    info: "info",
    price: "130$",
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Absolutely love this gym! The equipment is always clean and well-maintained. Plus, the staff is super friendly and always ready to help with any questions.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Emily Smith",
    text: "The classes here are fantastic. I’ve tried several, and each one has been challenging and engaging. The instructors really know their stuff!",
    img: "https://picsum.photos/102/102",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "Great gym with a positive atmosphere. The only downside is the parking situation, which can get a bit crowded during peak hours.",
    img: "https://picsum.photos/103/103",
    delay: 0.6,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "I appreciate how this gym provides a variety of workout options. From free weights to cardio machines, they have everything I need to meet my fitness goals.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "David Lee",
    text: "The personal training services here are top-notch. My trainer is knowledgeable and supportive, helping me make real progress in my fitness journey.",
    img: "https://picsum.photos/105/105",
    delay: 1.0,
  },
];
