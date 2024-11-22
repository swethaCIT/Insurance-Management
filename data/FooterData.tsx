// footerData.ts

export interface Link {
    name: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: Link[];
  }
  
  export const footerData: FooterSection[] = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Customers", href: "#" },
        { name: "Policies", href: "#" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Licensing", href: "#" },
        { name: "Terms & Conditions", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Phone : 9490129384", href: "#" },
        { name: "Email : abc@gmail.com", href: "#" },
        { name: "Location : Chennai", href: "#" },
        
      ],
    },
  ];
  