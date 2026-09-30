import React from "react";
import { useState, useEffect } from "react";


import modalData from './modal';





            const SlideImage = ({slides}) => {

                const [currentSlide, setCurrentSlide] = useState(0);

                  useEffect(() => {

                    const interval = setInterval(() => {
                      
                         setCurrentSlide((prev) => {

                           if( prev === slides.length -1) {
                              return 0;
                           }else {

                             return prev + 1;
                           }


                         }, 5000)

                         return () => clearInterval(interval);
                    })



                  }, [slides])
                 
                   return (

                       <img
                         src={slides[currentSlide]}
                         alt="Tutorial"
                         />
                   )
                     



            }




export default SlideImage;