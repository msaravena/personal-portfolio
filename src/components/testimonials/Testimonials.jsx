import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam neque, possimus error architecto, ea corporis nesciunt aliquam saepe, obcaecati laboriosam sunt ad. Nam ex deserunt eos dolore tenetur libero?'
  },
  {
    avatar: AVTR2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam neque, possimus error architecto, ea corporis nesciunt aliquam saepe, obcaecati laboriosam sunt ad. Nam ex deserunt eos dolore tenetur libero?'
  },
  {
    avatar: AVTR3,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam neque, possimus error architecto, ea corporis nesciunt aliquam saepe, obcaecati laboriosam sunt ad. Nam ex deserunt eos dolore tenetur libero?'
  },
  {
    avatar: AVTR4,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam neque, possimus error architecto, ea corporis nesciunt aliquam saepe, obcaecati laboriosam sunt ad. Nam ex deserunt eos dolore tenetur libero?'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />            
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide> 
            )
          })
        }       
      </Swiper>
    </section>
  )
}

export default Testimonials