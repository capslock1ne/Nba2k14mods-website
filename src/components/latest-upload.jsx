import {
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";


import './latest-upload-style/latest-upload.css';



 const upload = [
    
    {
      
      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "SGA NEW CYBERFACE",
      category: "Cyberfaces",
      modder: "by UN2K",
      date: "March 15, 2024",

  

    },

     {

      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "Latest Uploads",
      category: "Jerseys",
      modder: "by UN2K",
      date: "March 15, 2024",
     },

     {
      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "Latest Uploads",
      category: "Courts",
      modder: "by UN2K",
      date: "March 15, 2026",

     },

      {
      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "Latest Uploads",
      category: "Cyberfaces",
      modder: "by UN2K",
      date: "March 15, 2026",

     },

      {
      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "Latest Uploads",
      category: "Cyberfaces",
      modder: "by UN2K",
      date: "March 15, 2026",

     },

      {
      image: "/uploads/1.jpg",
      icon: <FiCalendar />,
      title: "Latest Uploads",
      category: "Cyberfaces",
      modder: "by UN2K",
      date: "March 15, 2026",

     },


]




   function LatestUpload() {


       return (
            
           <section className="latest-upload"> 
 
               <div className="latest-header">
                      
                     <p> JUST DROPPED </p>
                     <h2>LATEST UPLOADS</h2>

               
               </div>

                <div className="latest-categories-grid">
                     {upload.map((item, index) => {
                        return (
                        <div className="latest-category-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="latest-category-info">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                                <p>{item.modder}</p>
                                <p className="date">
                                {item.icon}
                                {item.date}
                                </p>
                            </div>
                        </div>
                        )
                        

                     })}
                </div>


           </section>
       )
   }


   export default LatestUpload;