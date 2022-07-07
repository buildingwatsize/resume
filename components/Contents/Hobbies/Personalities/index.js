import Icon from "components/Contents/Hobbies/Personalities/Icon"
import Title from "components/Contents/Hobbies/Personalities/Title"

// TODO: Carousel for history of tests and also clickable
const personalitiesTestList = [
  {
    key: 1,
    title: "Turbulent Protagonist",
    abbr: "ENFJ-T",
    timestamp: "Jul 6, 2022",
  },
]

const Personalities = () => {
  return (
    <div>
      {personalitiesTestList.map(p => {
        return (
          <div key={p.key} className="flex justify-center items-center flex-col">
            <Icon width="12rem" height="15rem" />
            <Title title={p.title} abbr={p.abbr} timestamp={p.timestamp} />
          </div>
        )
      })}
    </div>
  )
}

export default Personalities

// Thanks: https://www.16personalities.com/profiles/059480edf479b