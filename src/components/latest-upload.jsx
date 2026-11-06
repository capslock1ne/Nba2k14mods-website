
import {
    FiCalendar,
} from "react-icons/fi";

import './latest-upload-style/latest-upload.css';

const upload = [
    {
        id: 1,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "SGA NEW CYBERFACE",
        category: "Cyberfaces",
        modder: "by UN2K",
        date: "March 15, 2024",
    },
    {
        id: 2,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "Latest Uploads",
        category: "Jerseys",
        modder: "by UN2K",
        date: "March 15, 2024",
    },
    {
        id: 3,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "Latest Uploads",
        category: "Courts",
        modder: "by UN2K",
        date: "March 15, 2026",
    },
    {
        id: 4,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "Latest Uploads",
        category: "Cyberfaces",
        modder: "by UN2K",
        date: "March 15, 2026",
    },
    {
        id: 5,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "Latest Uploads",
        category: "Cyberfaces",
        modder: "by UN2K",
        date: "March 15, 2026",
    },
    {
        id: 6,
        image: "/uploads/1.jpg",
        icon: <FiCalendar />,
        title: "Latest Uploads",
        category: "Cyberfaces",
        modder: "by UN2K",
        date: "March 15, 2026",
    },
];

function LatestUpload() {

    return (

        <section className="latest-upload">

            <div className="latest-upload-container">

                {/* SECTION HEADER */}

                <div className="latest-header">

                    <p>JUST DROPPED</p>

                    <h2>LATEST UPLOADS</h2>

                </div>

                {/* UPLOAD GRID */}

                <div className="latest-categories-grid">

                    {upload.map((item) => (

                        <div
                            className="latest-category-card"
                            key={item.id}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                            />

                            <div className="latest-category-info">

                                <h3>{item.title}</h3>

                                <p className="upload-category">
                                    {item.category}
                                </p>

                                <p className="upload-modder">
                                    {item.modder}
                                </p>

                                <p className="date">
                                    {item.icon}
                                    <time>{item.date}</time>
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default LatestUpload;
