'use client';



import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'antd';
import ModalNews from './modal-video';





const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {

    axios({ method: 'get', headers: { 'Content-Type': 'application/json' }, url: 'https://kdsk-mari.amvera.io/news' }).then((resp) => {
      const allNews = resp.data;
      setNews(allNews);
    });

  }, [setNews]);


  return (

    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Новости   </h2>
          </div>

          <Carousel autoplay>
            {news.map((item) => (
              <ModalNews
                key={item['id']}
                content={item['content']}
                title={item['title']}
              />
            ))}
          </Carousel>

        </div>
      </div>
    </section>


  )
}
export default News;