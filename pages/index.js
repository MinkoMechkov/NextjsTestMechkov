import { Hero } from "../sections";
import { Agency } from "../sections/Agency";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  image: {
    src: "/img/video.png",
    alt: "",
    width: 400,
    height: 600,
  },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
};

const cardContent = [
  {
    id: 1,
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered",
    iconImg: {
      src: "/edit-tools.ico",
      alt: "",
      width: 64,
      height: 64,
    },
    width: "400px",
  },
  {
    id: 2,
    title: "Search",
    description:
      "In-depth agency search covering; criteria matching, door, knocking and due-dilligence vetting.",
    iconImg: {
      src: "/meeting.ico",
      alt: "",
      width: 64,
      height: 64,
    },
    width: "440px",
  },
  {
    id: 3,
    title: "Pitch",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    iconImg: {
      src: "/business.ico",
      alt: "",
      width: 64,
      height: 64,
    },
    width: "480px",
  },
];

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Agency {...agencyProps} cardItems={cardContent} />
      </div>
    </>
  );
}
