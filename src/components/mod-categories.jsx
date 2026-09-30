  import {
    FiUsers,
    FiEye,
    FiGlobe,
    FiShield,
    FiAward,
    FiZap,
    FiBookOpen,
    FiArrowRight,
    FiGrid,
  } from "react-icons/fi";


  import { Link } from "react-router-dom";

  import './categories-style/categories.css';

  const categories = [
    {
      icon: <FiUsers />, 
      arrow: <FiArrowRight />,
      title: "Rosters",
      mods: "1,240 mods",
      link: "/Roster",
    },
      {
      icon: <FiEye />,
      title: "Cyberfaces",
      arrow: <FiArrowRight />,
      mods: "8,750 mods",
      link: "/CyberFace",
    },

    {
      icon: <FiGlobe />,
      title: "Courts",
      arrow: <FiArrowRight />,
      mods: "430 mods",
      link: "/Court",
    },
    {
      icon: <FiShield />,
      title: "Jerseys",
      arrow: <FiArrowRight />,
      mods: "920 mods",
      link: "/Jersey"
    },
    {
      icon: <FiAward />,
      title: "Scoreboards",
      arrow: <FiArrowRight />,
      mods: "180 mods",
      link: "/ScoreBoard"
    },
    {
      icon: <FiZap />,
      title: "Shoes",
      arrow: <FiArrowRight />,
      mods: "95 mods",
      link: "/Shoes"
    },
    {
      icon: <FiBookOpen />,
      title: "Tutorials",
      arrow: <FiArrowRight />,
      mods: "215 mods",
    },
    {
      icon: <FiGrid />,
      title: "Other",
      arrow: <FiArrowRight />,
      mods: "340 mods",
    },
  ];

  const Categories = () => {


    return (
      <section className="categories">

    <div className="categories-content">

      <p className="section-subtitle">BROWSE BY TYPE</p>
        <h2 className="section-title">MOD CATEGORIES</h2>

        <div className="categories-grid">

                {categories.map((item, index) => (

                  <Link
                    to={item.link}
                    className="category-card"
                    key={index}
                  >

                    <div className="category-icon">
                      {item.icon}
                    </div>

                    <h3>{item.title}</h3>

                    <div className="category-icon-arrow">
                      {item.arrow}
                    </div>

                    <span>{item.mods}</span>

                  </Link>

                ))}

            </div>

          </div>
        
      </section>
    );
  };

  export default Categories;