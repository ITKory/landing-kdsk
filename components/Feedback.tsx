'use client';
import ScrollCarousel from 'scroll-carousel-react';
import ModalVideo from './modal-video';
import thumb from '../public/images/hero-image-01.jpg'
const   Feedback = () =>{
  return (

    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Новости   </h2>
          </div>
           <ScrollCarousel
      autoplay
      autoplaySpeed={6}
      speed={7}
 
      onReady={() => console.log('I am ready')}
    >
      {[1, 2 , 4 ].map((item) => (
          <ModalVideo
          thumb={ thumb}
          thumbWidth={1024}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080} 
          key={item}
          content={item.toString()}
          />
      ))}
    </ScrollCarousel> 
           
        </div>
      </div>
    </section>


  )
}
export default Feedback;