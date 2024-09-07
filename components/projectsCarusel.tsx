'use client';

import { Carousel } from 'antd';
import Image from 'next/image';

const ProjectsCarusel = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
            <h2 className="h2 mb-4"> Основные объекты </h2>
          </div>
          <br />
          <Carousel arrows dotPosition="right" infinite={false}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-center ">
                {/* Site branding */}
                <Image width={570} height={520} src='/images/portfolio_1.jpg' alt='' />
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-center ">
                {/* Site branding */}
                <Image width={570} height={520} src='/images/portfolio_2.jpg' alt='' />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
export default ProjectsCarusel;