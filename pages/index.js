import Image from 'next/image'

import MainLayout from 'components/Layout/MainLayout'
import PageTitle from 'components/Layout/PageTitle'
import Splashscreen from 'components/Splashscreen/Splashscreen'
import CurrentVersion from 'components/Utils/CurrentVersion'

import ProfileImage from 'assets/img/with-hair.png'

const imageSize = "160"
const Home = () => {
  return (
    <MainLayout>
      <Splashscreen active={false} />
      <PageTitle title={"Home"} subtitle={"หน้าแรก"} />

      <div className="p-2 mx-6">

        <div id="about-me">


          <div className='flex gap-4'>
            <div className="flex-none w-full max-w-xs bg-bold-blue rounded-lg border border-dark-blue px-4">
              <div className="flex flex-col items-center py-5 text-center">
                <div className="flex mb-3 bg-light-blue/60 shadow-lg rounded-full">
                  <Image className='rounded-full' src={ProfileImage} width={imageSize} height={imageSize} />
                </div>
                <div className="mb-1 text-sm sm:text-xl font-normal text-white">Chinnawat Chimdee (Wat)</div>
                <div className="text-xs sm:text-sm text-white/60">Full-stack Developer</div>
              </div>
            </div>
            <div className='flex-1 relative rounded-lg'>
              {/* // TODO: Right side table information */}
              {/* <table className="w-full h-full text-sm text-left text-white/70">
                <thead className="text-xl font-bold text-white uppercase bg-bold-blue">
                  <tr>
                    <th colSpan={4} className="px-6 py-3 rounded-t-lg">
                      <div className="py-1">About Me - ตัวฉัน</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    [
                      ["Name:", "Chinnawat Chimdee", 3, 4],
                      [1, 2, 3, 4],
                      [1, 2, 3, 4],
                    ].map(row => {
                      return <tr className="border-t border-light-blue/60 bg-light-blue/60">
                        {row.map(col => {
                          return <td className="px-6 py-4 border-none">
                            {col}
                          </td>
                        })}
                      </tr>
                    })
                  }
                  <tr className="bg-light-blue/60">
                    <td colSpan={4} className="rounded-b-lg">
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>


        <div className="text-md font-normal text-white/80 my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus blanditiis aliquid porro dolorem quia non eveniet saepe qui sit quaerat. Excepturi, porro omnis exercitationem et sed voluptatibus est eius officia!
        </div>
        <div className="text-md font-normal text-white/80 my-4">
          - Full-stack Developer, Bank for Agriculture and Agricultural Cooperatives (BAAC)
          - Full-stack Developer, Openlandscape Co., Ltd.
          - Software Engineer, Internet Thailand Public Company Limited
          - Computer Engineering, KMUTNB

          This is my personal Github Account: https://github.com/buildingwatsize
          This is my personal Gitlab Account: https://gitlab.com/watsize
        </div>

        <div className="text-xl font-bold text-white mb-4">What I do - ฉันทำอะไรบ้าง</div>
        <div className="text-xl font-bold text-white mb-4">Work Experience - ประสบการณ์การทำงาน</div>
        <div className="text-xl font-bold text-white mb-4">Coding Skills - ความถนัด</div>
        <div className="text-xl font-bold text-white mb-4">Education - การศึกษา</div>
        <div className="text-xl font-bold text-white mb-4">What we are the same? - ความชอบที่เราอาจจะเหมือนกัน</div>

      </div>
      <CurrentVersion hidden />
    </MainLayout>
  )
}

export default Home