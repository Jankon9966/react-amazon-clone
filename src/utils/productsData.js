import img_1 from "../assets/headset_1.jpg";
import img_2 from "../assets/beauty_picks.jpg";
import img_3 from "../assets/electronics.jpg";
import img_4 from "../assets/home_kitchen.jpg";
import img_5 from "../assets/health_personal_care.jpg";
import img_6 from "../assets/top_deal.jpg";
import img_7 from "../assets/refresh_space.jpg";
import img_8 from "../assets/toys.jpg";
import db_img_1 from "../assets/games_chairs.jpg"
import db_img_2 from "../assets/games_keyboards.jpg";
import db_img_3 from "../assets/games_pc_mice.jpg";


export const DUMMY_PRODUCTS = [
  {
    id: "e1",
    title: "Gaming accessories",
    image: img_1,
    description: "Gaming headsets, keyboards etc.",
  },
  {
    id: "e2",
    title: "Beauty Picks",
    image: img_2,
    description: "Beauty picks",
  },
  {
    id: "e3",
    title: "Electronics",
    image: img_3,
    description: "Electronics",
  },
  {
    id: "e4",
    title: "Home & Kitchen Under $30",
    image: img_4,
    description: "Home & Kitchen",
  },
  {
    id: "e5",
    title: "Health & Personal Care",
    image: img_5,
    description: "Health & Personal Care",
  },
  {
    id: "e6",
    title: "Top deals",
    image: img_6,
    description: "Find your ideal TV",
  },
  {
    id: "e7",
    title: "Refresh your space",
    image: img_7,
    description: "Dining, Home, Kitchen, Health and Beauty",
  },
  {
    id: "e8",
    title: "Toys Under $30",
    image: img_8,
    description: "Find all toys there",
  },
];


export const DB = [
  {
    id: "b1",
    title:
      "Logitech G PRO X Gaming Headset (2nd Generation) with Blue Voice, DTS Headphone 7.1 and 50 mm PRO-G Drivers, for PC, Xbox One, Xbox Series X|S,PS5,PS4, Nintendo Switch - Black",
    image: img_1,
    price: "98",
  },
  {
    id: "b2",
    title: "MageGee Portable 60% Mechanical Gaming Keyboard, MK-Box LED Backlit Compact 68 Keys Mini Wired Office Keyboard with Red Switch for Windows Laptop PC Mac - Black/Grey",
    image: db_img_1,
    price: "29",
  },
  {
    id: "b3",
    title: "ZHISHANG Gaming Chair, Gamer Chair for Adults Ergonomic Computer Chair for Teens, Racing Style PC Office Chair with Lumbar Support, 300lbs(Black)",    
    image: db_img_2,
    price: "109",
  },
  {
    id: "b4",
    title: "Redragon M908 Impact RGB LED MMO Gaming Mouse with 12 Side Buttons, Optical Wired Ergonomic Gamer Mouse with Max 12,400DPI, High Precision, 20 Programmable Macro Shortcuts, Comfort Grip",    
    image: db_img_3,
    price: "32",
  },
];
