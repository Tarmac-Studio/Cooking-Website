import Logo from "../assets/images/Logo.png"
import arrow from "../assets/images/Arrow.svg"
import Cursor from "../assets/images/Cursor.svg"
import background from "../assets/images/Background.svg"
import Instagram from "../assets/images/Instagram.svg"
import Linkedin from "../assets/images/Linkedln.svg"
import Tiktok from "../assets/images/Tiktok.svg"
import Twitter from "../assets/images/Twitter.svg"
import branding from "../assets/images/Branding.svg"
import development from "../assets/images/Development.svg"
import product from "../assets/images/Product.svg"
import social from "../assets/images/Social.svg"

export const assets = {
    Logo,background,arrow,Cursor
}
  export const services = [
    {
      text: "Branding",
      position: "top-12 left-65",
      delay: 500,
      bgColor: "#DD2590B2",
      borderColor: "#DD2590",
      pointerImage: branding,
      pointerPosition: "bottom",
    },
    {
      text: "Development",
      position: "top-12 right-65",
      delay: 700,
      bgColor: "#84006EB2",
      borderColor: "#84006E",
      pointerImage: development,
      pointerPosition: "bottom",
    },
    {
      text: "Product Design",
      position: "bottom-15 left-65",
      delay: 900,
      bgColor: "#000791B2",
      borderColor: "#000791",
      pointerImage: product,
      pointerPosition: "top",
    },
    {
      text: "Social Media Management",
      position: "bottom-15 right-65",
      delay: 1100,
      bgColor: "#A74F03B2",
      borderColor: "#A74F03",
      pointerImage: social,
      pointerPosition: "top",
    },
  ];
export const socials = [
  {
    icon: Twitter, 
    link: "https://x.com/thetarmacstudio",
    alt: "Twitter",
  },
  {
    icon: Instagram, // replace with your imported icon
    link: "https://www.instagram.com/tarmacdigitalstudio",
    alt: "Instagram",
  },{
    icon: Linkedin, // replace with your imported icon
    link: "https://www.linkedin.com/in/tarmac-digital-studio-62a182376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    alt: "Linkedin",
  },
  {
    icon: Tiktok, // replace with your imported icon
    link: "https://www.tiktok.com/@tarmacdigitalstudio",
    alt: "Tiktok",
  },
];