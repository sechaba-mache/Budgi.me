import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import './App.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import Card from './components/card/card'
import Drawer from './components/drawer/drawer';
import { useEffect, useRef } from 'react';

function App() {
  const pageRef = useRef(null);

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

        <Drawer></Drawer>
    </>
  )
}

export default App
