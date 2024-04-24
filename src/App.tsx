import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import './App.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import Card from './components/card/card'
import Drawer from './components/drawer/drawer';
import Tile from './components/tile/tile';

function App() {

  function header() {
    return (
    <div className='flex flex-col gap-5 mb-8'>
      <span className='font-semibold text-2xl'>Category</span>
      <div className='flex justify-between'>
        <div className='flex gap-1'>
          <img src="./src/assets/icons/arrow-down-short-wide-solid 2.svg"></img>
          <span className='font-semibold text-xs'>Sort</span>
        </div>

        <div className='flex gap-2'>
          <img src="./src/assets/icons/circle-plus-solid.svg" />
          <span className='font-semibold text-xs'>Add Category</span>
        </div>
      </div>
    </div>
    )
  }

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

        <Drawer
          header={header()}
          content={<Tile></Tile>}>
        </Drawer>
    </>
  )
}

export default App
