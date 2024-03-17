import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import './App.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import Card from './components/card/card'

function App() {

  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true, type: 'bullets' }}
        >
          <SwiperSlide><Card></Card><span>February</span></SwiperSlide>
          <SwiperSlide><Card></Card><span>February</span></SwiperSlide>
          <SwiperSlide><Card></Card><span>February</span></SwiperSlide>
      </Swiper>

      <div className='drawer'>
        <div className='gripper'></div>
      </div>
    </>
  )
}

export default App
