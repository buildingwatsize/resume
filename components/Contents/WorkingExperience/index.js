import dayjs from 'dayjs';

import Timeline from 'components/Contents/WorkingExperience/Timeline';
import TopicLayout from 'components/Layout/TopicLayout';

import BAACImage from 'assets/img/work-experiences/baac.png';
import INETImage from 'assets/img/work-experiences/inet.png';
import KMUTNBImage from 'assets/img/work-experiences/kmutnb.png';
import OpenLandscapeImage from 'assets/img/work-experiences/ols.png';
import POSNImage from 'assets/img/work-experiences/posn.svg';

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
      <div className='flex flex-col'>
        <div className='text-left mb-4 text-md'>
          <span>All Work Experiences: </span><strong>{`${allWorkYear} Years ${allWorkMonth} Month`}</strong>
        </div>
        <Timeline list={[
          {
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
          {
            time: "Dec 2013 - Feb 2017",
            position: "Computer Engineering",
            location: "KMUTNB",
            image: KMUTNBImage,
            description: <div>
              <div className='text-white font-bold pb-2'>
                <div>Bachelor's Degree of Engineering (Computer Engineering)</div>
                <div>King Mongkut's University of Technology North Bangkok (KMUTNB)</div>
              </div>

              <div>- Learning fundamental of Programming (C, Python, HTML, JavaScript)</div>
              <div>- Learning fundamental of Embedded Hardware (Arduino, Raspberry Pi and FPGA)</div>

              <div className='mt-4 text-white font-bold'>Internship System Engineer - NEC Corporation (Thailand) Ltd.</div>

              <div className='mt-4 font-bold'>Responsibility:</div>
              <div>- Design Leaflet & Brochure Infographics for PR</div>
              <div>- Setup OS and Fix Hardware Problems</div>
              <div>- Maintainer System</div>
              <div>- Create a Face Detection Solution</div>
              <div>- Presentation of Products</div>
              <div>- Installation Large-display Solution (On-Site)</div>
            </div>,
          },
          {
            time: "Oct 2012 - Apr 2014",
            position: "Computer Olympic Camp (POSN)",
            location: "Naresuan University",
            image: POSNImage,
            description: <div>
              {/* https://www.sci.nu.ac.th/posn_nu/ */}
              <div className='text-white font-bold pb-2'>
                <div>Camp#2 of The Promotion of Academic Olympiads and Development of Science Education Foundation (POSN)</div>
              </div>

              <div>- Learning fundamental of Programming (C/C++ Language)</div>
            </div>,
          },
        ]} />
      </div>
    </TopicLayout>
  )
}

export default WorkingExperience