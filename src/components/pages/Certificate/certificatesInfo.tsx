type CertificateType = {
  id: number;
  title: string;
  links: string[];
};

const certificatesData: CertificateType[] = [
  {
    id: 1,
    title: "Problem Solving (Basics)",
    links: ["https://www.hackerrank.com/certificates/f336ea24532b"],
  },
  {
    id: 2,
    title: "Python (Basics)",
    links: ["https://www.hackerrank.com/certificates/3aa71ebf961a"],
  },
  {
    id: 3,
    title: "JavaScript (Basics)",
    links: ["https://www.hackerrank.com/certificates/0b1c0a5a1250"],
  },
  {
    id: 4,
    title: "SQL (Basics)",
    links: ["https://www.hackerrank.com/certificates/5cfdf93c1e7d"],
  },
  {
    id: 5,
    title: "React (Basics)",
    links: ["https://www.hackerrank.com/certificates/10d09902ef02"],
  },
];

export default certificatesData;
