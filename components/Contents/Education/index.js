import TopicLayout from 'components/Layout/TopicLayout';
import Timeline from 'components/Timeline';

import KMUTNBImage from 'assets/img/education/kmutnb.png';
import POSNImage from 'assets/img/education/posn.svg';

const Education = () => {
  return (
    <TopicLayout id="education" title='Education'>
      <div className='flex flex-col m-auto'>
        <Timeline list={[
          {
            key: "education-1",
            time: "Jun 2013 - Jun 2017",
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
            key: "education-2",
            time: "Oct 2012 - Apr 2013",
            position: "Computer Olympic Camp (POSN)",
            location: "Naresuan University",
            image: POSNImage,
            description: <div>
              <div className='text-white font-bold pb-2'>
                <div>Camp#2 of The Promotion of Academic Olympiads and Development of Science Education Foundation (POSN)</div>
              </div>

              <div>- Learning fundamental of Programming (C/C++ Language) when studied at high school (Grade 10-11) </div>
            </div>,
          },
        ]} />
      </div>
    </TopicLayout>
  )
}

export default Education