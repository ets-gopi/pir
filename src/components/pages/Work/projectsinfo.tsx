type ProjectObj = {
  title: string;
  description: string;
  tags: string[];
  links: string[];
};
const projectsdata: ProjectObj[] = [
  {
    title: "Blockchain Transaction System &ndash; Goudla",
    description:
      "Developed a blockchain-based transaction system focusing on cryptocurrency transfers using a new blockchain called Goudla. Implemented secure and efficient transactions for Bitcoin, Ethereum, and other coins within a testnet environment.",
    tags: [
      "VS Code",
      "#Blockchain",
      "#Cryptocurrency",
      "#Testnet",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    links: ["https://github.com/GD-0606/blockchain"],
  },
  {
    title: "Hatimi Hotel Management System",
    description:
      "Developed a full-stack hotel booking system supporting multiple properties across different locations. Built the backend with Node.js, Express.js, and MongoDB, implementing replication and transactions to enhance booking security. Integrated Razorpay for seamless payments and managed the frontend for a complete user experience.",
    tags: [
      "VS Code",
      "#BookingSystem",
      "#HotelManagement",
      "#PaymentIntegration",
      "#MERNStack",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    links: ["https://github.com/GD-0606/bookingServer"],
  },
];

export { projectsdata };
