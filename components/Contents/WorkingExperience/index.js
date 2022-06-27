import dayjs from 'dayjs';

import Timeline from 'components/Contents/WorkingExperience/Timeline';
import TopicLayout from 'components/Layout/TopicLayout';

import BAACImage from 'assets/img/work-experiences/baac.png';
import INETImage from 'assets/img/work-experiences/inet.png';
import OpenLandscapeImage from 'assets/img/work-experiences/ols.png';

const findDiffYearAndMonth = (targetDate, baseDate = dayjs()) => {
  if (targetDate) {
    const targetAsDayjs = dayjs(targetDate)
    const diffYear = baseDate.diff(targetAsDayjs, "year")
    const diffMonth = baseDate.diff(targetAsDayjs.add(diffYear, "year"), "month")
    return [diffYear, diffMonth]
  }
  return [0, 0]
}

const START_WORKING_DATE = "2017-08-01"

const WorkingExperience = () => {
  const [allWorkYear, allWorkMonth] = findDiffYearAndMonth(START_WORKING_DATE)
  return (
    <TopicLayout id='working-experience' title='Work Experiences - ประสบการณ์การทำงาน'>
      <div className='flex flex-col m-auto'>
        <div className='text-right mb-4 text-md'>
          <span>All Work Experiences: </span><strong>{`${allWorkYear} Years ${allWorkMonth} Month`}</strong>
        </div>
        <Timeline list={[
          {
            key: "1",
            time: "May 2019 - Present",
            position: "Software Developer",
            location: "BAAC",
            image: BAACImage,
            description: <div>
              <div className='text-white font-bold pb-2'>
                <div>Software Developer (Full-Stack Developer & DevOps)</div>
                <div>BAAC - Bank for Agriculture and Agricultural Cooperatives</div>
              </div>

              <div className='mt-4 font-bold'>Responsibility:</div>
              <div>- Get a chance to be an Entry-level Product Owner</div>
              <div>- Requirements gathering, Verify & Validate requirements</div>
              <div>- Design UI mockup, API Flow, test cases, and making Minimum Viable Product</div>
              <div>- Developing applications and making CI/CD Pipeline</div>
              <div>- Integrating LINE Notify, LINE Messaging API, SMS and Email Notification System</div>

              <div className='mt-4 font-bold'>Tech:</div>
              <div>- Backend: Golang (GoFiber)</div>
              <div>- Frontend: JavaScript (ReactJS + Ant.Design)</div>
              <div>- Tools: Docker, Kubernetes, Jenkins, SonarQube, Elastic Stack, k6, Cypress, etc.</div>
            </div>,
          },
          {
            key: "2",
            time: "Aug 2018 - May 2019",
            position: "Software Engineer",
            location: "OpenLandscape Co., Ltd.",
            image: OpenLandscapeImage,
            description: <div>
              <div className='text-white font-bold pb-2'>
                <div>Junior-level Software Engineer (Full-Stack Developer)</div>
                <div>OpenLandscape Co., Ltd.</div>
              </div>

              <div className='mt-4 font-bold'>Responsibility:</div>
              <div>- Website Development for customers and internal use</div>

              <div className='mt-4 font-bold'>Tech:</div>
              <div>- Backend: Python</div>
              <div>- Frontend: JavaScript (VueJS + Vuetify / ReactJS + Material UI)</div>
              <div>- Tools: Docker, Docker-compose, Jenkins, etc.</div>
            </div>,
          },
          {
            key: "3",
            time: "Aug 2017 - Aug 2018",
            position: "Software Engineer",
            location: "Internet Thailand Public Co., Ltd.",
            image: INETImage,
            description: <div>
              <div className='text-white font-bold pb-2'>
                <div>Junior-level Software Engineer (Full-Stack Developer)</div>
                <div>Internet Thailand Public Co., Ltd.</div>
              </div>

              <div className='mt-4 font-bold'>Responsibility:</div>
              <div>- Website Development for internal use</div>

              <div className='mt-4 font-bold'>Tech:</div>
              <div>- Backend: Python</div>
              <div>- Frontend: JavaScript (VueJS + Vuetify)</div>
              <div>- Tools: Docker, Docker-compose, etc.</div>
            </div>,
          },
        ]} />
      </div>
    </TopicLayout>
  )
}

export default WorkingExperience