import { blockchain, hatimi1 } from "../../../assets";

type ProjectObj = {
  title: string;
  description: string;
  tags: string[];
  links: string[];
};
const projectsdata: ProjectObj[] = [
  {
    title: "Blockchain Transaction System - Goudla",
    description:
      "Developed a <span>blockchain-based transaction</span> system focusing on cryptocurrency transfers using a new blockchain called <span>Goudla</span>. Implemented secure and efficient transactions for <span>Bitcoin</span>, <span>Ethereum</span>, and other coins within a testnet environment.",
    tags: ["#Blockchain", "#Cryptocurrency", "#Testnet", "NodeJs", "MongoDB"],
    links: [blockchain, "https://github.com/GD-0606/blockchain"],
  },
  {
    title: "Hatimi Hotel Management System",
    description:
      "Developed a <span>full-stack hotel booking </span> system supporting multiple properties across different locations. Built the backend with <span>Node.js</span>, <span>Express.js</span>, and <span>MongoDB</span>, implementing replication and transactions to enhance booking security. Integrated <span>Razorpay</span> for seamless payments and managed the frontend for a complete user experience.",
    tags: ["#BookingSystem", "#HotelManagement", "#MERNStack", "NodeJs"],
    links: [hatimi1, "https://github.com/GD-0606/bookingServer"],
  },
];

export { projectsdata };
