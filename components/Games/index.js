import BuddhistOrdination from "./BuddhistOrdination"
import DrawingParticles from "./DrawingParticles"

// Tags
const LIMITED_TAG = "Limited Event"

// Games list
const GAMES_LIST = [
  {
    id: 1,
    tooltip: {
      name: "การอุปสมบท",
      title: <a
        href="https://www.thairath.co.th/content/286548"
        className='underline'>
        ทำไมคนไทยต้องบวช?
      </a>,
      description: "เราบวชเพื่อเรียนรู้และศึกษาเกี่ยวกับศาสนา บางคนก็บวชเพื่อตอบแทนคุณ ให้พ่อกับแม่ของเขา",
    },
    title: "Virtual งานบวช",
    description: "จำลองพิธีการปลงผมนาคในรูปแบบเกม (อย่าลืม \"สาธุ\" ด้วยนะ)",
    event: LIMITED_TAG,
    component: <BuddhistOrdination />,
  },
  {
    id: 2,
    tooltip: {
      name: "วาดภาพลายเส้น",
      title: "ทดสอบสิ๊ ว่าคุณสนุกกับมันไหม",
      description: "คุณสามารถทำการวาดภาพผ่านการลากนิ้วบนหน้าจอ แล้วลองสังเกตผลลัพธ์ดูนะ ว่าจะเจอกับอะไร~",
    },
    title: "Drawing Particle",
    description: "วาดลายเส้นในแบบฉบับของคุณ",
    event: "",
    component: <DrawingParticles />,
  },
]

export default GAMES_LIST