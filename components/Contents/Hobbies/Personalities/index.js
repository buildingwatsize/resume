import { useState } from "react";

import Button from "components/Button/Button";
import DonutProgress from "components/Contents/Hobbies/Personalities/DonutProgress";
import Icon from "components/Contents/Hobbies/Personalities/Icon";
import Title from "components/Contents/Hobbies/Personalities/Title";
import Dialog from "components/Dialog/Dialog";
import ClickAndGo from "components/Utils/ClickAndGo";

import IconDocument from 'assets/icons/document';
import IconExternalLink from 'assets/icons/external_link';
import IconX from 'assets/icons/x';
import ImageENFJ from 'assets/img/personalities/enfj-protagonist-male.svg';
import ImageINTJ from 'assets/img/personalities/intj-architect-male.svg';

const MY_PERSONALITY_REPORT_LINK = "https://www.16personalities.com/profiles/059480edf479b"
const personalitiesTestList = [
  {
    key: 1,
    title: "Turbulent Protagonist",
    abbr: "ENFJ-T",
    link: "https://www.16personalities.com/enfj-personality",
    src: ImageENFJ,
    timestamp: "Jul 6, 2022",
    result: [
      {
        title: "Mind",
        description: "Extraverted",
        color: "#4298b4",
        percentage: 57,
      },
      {
        title: "Energy",
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
    ]
  },
  {
    key: 2,
    title: "Turbulent Architect",
    abbr: "INTJ-T",
    link: "https://www.16personalities.com/intj-personality",
    src: ImageINTJ,
    timestamp: "Oct 15, 2019",
    result: [
      {
        title: "Mind",
        description: "Introverted",
        color: "#4298b4",
        percentage: 54,
      },
      {
        title: "Energy",
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
    ]
  },
]

const Personalities = () => {
  const [visible, setVisible] = useState(false)
  const handleClickOpen = () => { setVisible(true) }
  const handleClickClose = () => { setVisible(false) }

  return (
    <div>
      <Personality {...personalitiesTestList?.[0]} />
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
          <div name="content" className="flex flex-col">
            {personalitiesTestList.map(p => {
              return (
                <div key={p.key} className="relative flex justify-center m-auto rounded-md">
                  <div className="
                    after:content-['']
                    after:absolute
                    after:top-[1.5rem]
                    after:left-0
                    after:border-solid
                    after:border-b-[3rem]
                    after:border-l-[3rem]
                  after:border-l-lighter-blue/60
                    after:border-b-transparent
                  " />
                  <div className="absolute left-1 top-6 font-bold text-white">#{p.key}</div>
                  <Personality {...p} noShadow horizontalMode />
                </div>
              )
            })}
          </div>
        </div>
      </Dialog>
    </div>
  )
}

const Personality = ({
  src,
  title,
  abbr,
  link,
  timestamp,
  result,
  noShadow,
  horizontalMode,
}) => {
  let className = "grid pt-6 mb-4 bg-medium-blue/20 rounded-md"
  if (horizontalMode) {
    className += " flex justify-center pb-4"
  }
  if (!noShadow) {
    className += " shadow-md"
  }
  return <div className={className}>
    <div className="flex justify-center items-center px-2">
      <Icon src={src} />
      <Title title={title} abbr={abbr} link={link} timestamp={timestamp} />
    </div>
    <div className="flex overflow-y-auto gap-4 p-4">
      {
        result?.map(r => (
          <div key={r.title} className="my-2 pb-2 first:ml-auto last:mr-auto">
            <DonutProgress {...r} />
          </div>
        ))
      }
    </div>
  </div>
}

export default Personalities

// Thanks: https://www.16personalities.com/profiles/059480edf479b