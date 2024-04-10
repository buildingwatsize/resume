import { useState } from "react";

import Button from "components/Button/Button";
import DonutProgress from "components/Contents/Hobbies/Personalities/DonutProgress";
import Icon from "components/Contents/Hobbies/Personalities/Icon";
import Title from "components/Contents/Hobbies/Personalities/Title";
import Dialog from "components/Dialog/Dialog";
import ClickAndGo from "components/Utils/ClickAndGo";

import IconDocument from "assets/icons/document";
import IconExternalLink from "assets/icons/external_link";
import IconX from "assets/icons/x";
import ImageENFJ from "assets/img/personalities/enfj-protagonist-male.svg";
import ImageINFJ from "assets/img/personalities/infj-advocate-male.svg";
import ImageINTJ from "assets/img/personalities/intj-architect-male.svg";
import { ClassCombiner } from "utils/index";

const MY_PERSONALITY_REPORT_LINK =
  "https://www.16personalities.com/profiles/059480edf479b";
const personalitiesTestList = [
  {
    key: "2024-04-09",
    title: "Turbulent Advocate",
    abbr: "INFJ-T",
    type: "diplomats",
    description:
      "Quiet and mystical, yet very inspiring and tireless idealists.",
    link: "https://www.16personalities.com/infj-personality",
    src: ImageINFJ,
    timestamp: "Apr 9, 2024",
    result: [
      {
        title: "Energy",
        description: "Introverted",
        color: "#4298b4",
        percentage: 84,
      },
      {
        title: "Mind",
        description: "Intuitive",
        color: "#e4ae3a",
        percentage: 84,
      },
      {
        title: "Nature",
        description: "Feeling",
        color: "#33a474",
        percentage: 65,
      },
      {
        title: "Tactics",
        description: "Judging",
        color: "#88619a",
        percentage: 56,
      },
      {
        title: "Identity",
        description: "Turbulent",
        color: "#f25e62",
        percentage: 56,
      },
    ],
  },
  {
    key: "2022-07-06",
    title: "Turbulent Protagonist",
    abbr: "ENFJ-T",
    type: "diplomats",
    description:
      "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    link: "https://www.16personalities.com/enfj-personality",
    src: ImageENFJ,
    timestamp: "Jul 6, 2022",
    result: [
      {
        title: "Energy",
        description: "Extraverted",
        color: "#4298b4",
        percentage: 57,
      },
      {
        title: "Mind",
        description: "Intuitive",
        color: "#e4ae3a",
        percentage: 63,
      },
      {
        title: "Nature",
        description: "Feeling",
        color: "#33a474",
        percentage: 61,
      },
      {
        title: "Tactics",
        description: "Judging",
        color: "#88619a",
        percentage: 89,
      },
      {
        title: "Identity",
        description: "Turbulent",
        color: "#f25e62",
        percentage: 60,
      },
    ],
  },
  {
    key: "2019-10-15",
    title: "Turbulent Architect",
    abbr: "INTJ-T",
    type: "analysts",
    description:
      "Imaginative and strategic thinkers, with a plan for everything.",
    link: "https://www.16personalities.com/intj-personality",
    src: ImageINTJ,
    timestamp: "Oct 15, 2019",
    result: [
      {
        title: "Energy",
        description: "Introverted",
        color: "#4298b4",
        percentage: 54,
      },
      {
        title: "Mind",
        description: "Intuitive",
        color: "#e4ae3a",
        percentage: 63,
      },
      {
        title: "Nature",
        description: "Thinking",
        color: "#33a474",
        percentage: 53,
      },
      {
        title: "Tactics",
        description: "Judging",
        color: "#88619a",
        percentage: 79,
      },
      {
        title: "Identity",
        description: "Turbulent",
        color: "#f25e62",
        percentage: 69,
      },
    ],
  },
];
// const personalityTypeColorCSS = {
//   analysts: "#88619a",
//   diplomats: "#33a474",
//   sentinels: "#4298b4",
//   explorers: "#e4ae3a",
// };
const getBg = (type) => {
  switch (type) {
    case "analysts":
      return `bg-[#88619a]/20`;
    case "diplomats":
      return `bg-[#33a474]/20`;
    case "sentinels":
      return `bg-[#4298b4]/20`;
    case "explorers":
      return `bg-[#e4ae3a]/20`;
    default:
      return `bg-transparent`;
  }
};
const getTextColor = (type) => {
  switch (type) {
    case "analysts":
      return `text-[#88619a]`;
    case "diplomats":
      return `text-[#33a474]`;
    case "sentinels":
      return `text-[#4298b4]`;
    case "explorers":
      return `text-[#e4ae3a]`;
    default:
      return `text-white`;
  }
};

const Personalities = () => {
  const [visible, setVisible] = useState(false);
  const handleClickOpen = () => {
    setVisible(true);
  };
  const handleClickClose = () => {
    setVisible(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <Personality className="rounded-xl" {...personalitiesTestList?.[0]} />
      <div className="flex justify-end gap-2">
        <ClickAndGo link={MY_PERSONALITY_REPORT_LINK}>
          <Button>
            <div className="flex justify-center items-center text-xs text-white/80">
              <i className="mr-1 w-4 h-4">{IconExternalLink}</i>
              <span>Full Report</span>
            </div>
          </Button>
        </ClickAndGo>
        <Button onClick={handleClickOpen}>
          <div className="flex justify-center items-center text-xs text-white/80">
            <i className="mr-1 w-4 h-4">{IconDocument}</i>
            <span>History</span>
          </div>
        </Button>
      </div>

      <Dialog visible={visible}>
        <div className="relative top-20 mb-32 mx-auto p-5 border-0 w-[90vw] shadow-lg rounded-md bg-medium-blue">
          <div name="title" className="flex justify-between items-center pb-2">
            <div className="text-lg font-bold">History</div>
            <button
              type="button"
              onClick={handleClickClose}
              className="bg-transparent rounded-md text-sm p-1.5 ml-auto inline-flex items-center text-white/60 hover:text-white hover:bg-white/10 hover:shadow-md"
            >
              {IconX}
            </button>
          </div>
          <div name="content" className="flex flex-col gap-4">
            {personalitiesTestList.map((p, idx) => {
              return (
                <div
                  key={p.key}
                  className={ClassCombiner(
                    "relative flex justify-center m-auto rounded-md w-full overflow-x-auto drop-shadow-lg bg-dark-blue/60"
                  )}
                >
                  <div
                    className="
                    after:content-['']
                    after:absolute
                    after:top-0
                    after:left-0
                    after:border-solid
                    after:border-b-[3.5rem]
                    after:border-l-[4rem]
                  after:border-l-lighter-blue/40
                    after:border-b-transparent
                    after:drop-shadow-lg
                  "
                  />
                  <div className="absolute left-1.5 top-1.5 font-bold text-white">
                    #{idx + 1}
                  </div>
                  <Personality {...p} noShadow horizontalMode />
                </div>
              );
            })}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

const Personality = ({
  src,
  title,
  abbr,
  type,
  description,
  link,
  timestamp,
  result,
  noShadow,
  horizontalMode,
  className,
}) => {
  return (
    <div
      className={ClassCombiner(
        "grid pt-6 rounded-md w-full flex-1",
        getBg(type),
        horizontalMode && "flex justify-center flex-col pb-4",
        !noShadow && "shadow-md",
        className
      )}
    >
      <div className="pl-[5%] flex justify-center items-center px-2">
        <Icon src={src} />
        <Title
          title={title}
          description={description}
          abbr={abbr}
          link={link}
          timestamp={timestamp}
          titleClassName={getTextColor(type)}
        />
      </div>
      <div className="flex overflow-y-auto gap-4 p-4">
        {result?.map((r) => (
          <div key={r.title} className="my-2 pb-2 first:ml-auto last:mr-auto">
            <DonutProgress {...r} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personalities;

// Thanks: https://www.16personalities.com/profiles/059480edf479b
