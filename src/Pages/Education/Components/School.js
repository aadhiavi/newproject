import React, { useState, useEffect } from 'react';
import Ssc from '../../../Assets/school.jpeg';
import Inter from '../../../Assets/inter.jpeg';
import Bsc from '../../../Assets/bsc.jpeg';

const School = () => {

  const study = [
    {
      course: Ssc,
      duration: 'SSC: March-2012,',
      institution: 'Z.P High Scool,',
      grade: 'Grade/Per. : 8.2 CGPA,',
      place: "Satyalapadu, Krishna, Andhrapradesh,",
      overview: "I completed my high school study in Z.P high school in Satyalapadu."
    },
    {
      course: Inter,
      duration: 'Intermediate : June-2012 - March-2014,',
      institution: 'Vishista Junior College,',
      grade: 'Grade/Per. : 83.10%,',
      place: "Thotamula, Krishna, Andhrapradesh,",
      overview: "I completed my Inter education in the stream of Bi.P.C in Vishista junior college."
    },
    {
      course: Bsc,
      duration: 'Graduation: June-2014 - March-2017,',
      institution: 'Batchelor of Science in Krishna University,',
      grade: 'Grade/Per. : 66.97%,',
      place: "iruvuru, Krishna, Andhrapradesh,",
      overview: "I completed my Batchelor Degree in the stream of Bt.B.C in Prathibha degree college."
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + study.length) % study.length;
    setCurrentIndex(prevIndex);
  };
  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % study.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);
  return (
    <>
      <div className="black"></div>
      <div className="slideshow-container">
        <div className="drager">
          {study.map((item, index) => (
            <div key={index} className={index === currentIndex ? 'slide-active' : 'slide'}>
              <img src={item.course} alt="" />
              <div className="ssc">
                <h1>{item.duration}</h1>
                <h2>{item.institution}</h2>
                <span><h3>{item.grade}</h3></span>
                <p>{item.place}</p>
                <p>{item.overview}</p>
              </div>
              <div className="btns">
                <button className='btn' onClick={goToPreviousSlide}>Previous</button>
                <button className='btn' onClick={goToNextSlide}>Next</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default School;