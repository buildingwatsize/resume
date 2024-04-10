import PackageCard from "components/Contents/PublicPackage/PackageCard";
import Col from "components/Flex/Col";
import Row from "components/Flex/Row";
import TopicLayout from "components/Layout/TopicLayout";

import IconGitHub from "assets/icons/github";
import IconNPM from "assets/icons/npm";

const packageList = [
  // Public libraries
  {
    icon: IconNPM,
    title: "thaidatepicker-react",
    description:
      "Thaidatepicker-react is a component for ReactJS that likes other DatePicker, but all we need is Buddhist Year (25XX – aka Thai Year) come with the right render day (example: Sat, 29 Feb 2020 must be equal to Sat, 29 Feb 2563) so I wish this component will be a useful thing to you :D. Happy Coding.",
    link: "https://www.npmjs.com/package/thaidatepicker-react",
  },
  {
    icon: IconNPM,
    title: "thai-address-autocomplete-react",
    description:
      "Thai-address-autocomplete-react is an input component for ReactJS, which can auto-complete thailand address with a magic by just type something. You can discover more props please see react-autocomplete, so I hope this component will be a useful thing to you :D. Happy Coding.",
    link: "https://www.npmjs.com/package/thai-address-autocomplete-react",
  },
  {
    icon: IconNPM,
    title: "react-loading-randomizable",
    description:
      "A component for ReactJS which render overlay transparent screen, loading element and text label together as one.",
    link: "https://www.npmjs.com/package/react-loading-randomizable",
  },
  {
    icon: IconGitHub,
    title: "sensitive",
    description:
      "Sensitive is a middleware for GoFiber to blind sensitive value like mobile no, citizen id, etc. by defined configuration. Useful for security policies.",
    link: "https://github.com/buildingwatsize/sensitive",
  },
  // NextJS Template
  {
    icon: IconNPM,
    title: "next-tailwind-ts",
    description:
      "The NextJS template with TypeScript, and tailwindcss for scaffolding your project.",
    link: "https://www.npmjs.com/package/next-tailwind-ts",
  },
  {
    icon: IconNPM,
    title: "next-antd-tailwind",
    description:
      "A boilerplate for Next.js integrated with Ant Design, tailwindcss and a lot of useful tools/library.",
    link: "https://www.npmjs.com/package/next-antd-tailwind",
  },
  // Vite Template
  {
    icon: IconGitHub,
    title: "vite-react-tailwind-antd",
    description:
      "The Vite template with react plugin and tools for scaffolding your project.",
    link: "https://github.com/buildingwatsize/vite-react-tailwind-antd",
  },
  {
    icon: IconGitHub,
    title: "vite-react-tailwind-recoil",
    description:
      "The Vite template with react plugin and tools for scaffolding your project.",
    link: "https://github.com/buildingwatsize/vite-react-tailwind-recoil",
  },
];

const PublicPackage = () => {
  return (
    <TopicLayout id="public-package" title="That's mine!">
      <div className="m-auto w-full max-w-3xl xl:w-[64rem] xl:max-w-5xl">
        <Row>
          {packageList.map((p) => {
            return (
              <Col key={p.title} span={12} sm={6} className="flex-grow">
                <PackageCard
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  link={p.link}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </TopicLayout>
  );
};

export default PublicPackage;
