import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faUser,
  faFilter,
  faSpinner,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faHouse,
  faUserGroup,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import Technician from "./Technician";

const TechniciansPage = () => {
  const [loading, setLoading] = useState(false);
  const [technicians, setTechnicians] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  //const history = useNavigate();
  const searchForm = (data) => {
    // Set loading to true when submitting
    setLoading(true);

    console.log(data);

    let url = "/api/v1/search_technicians";
    if (data.category === "name") {
      url += `?category=${data.category}&name=${data.name}`;
    } else if (data.category === "location") {
      url += `?category=location&${data.location_type}=${data.name}`;
    }

    //history(`/search${url}`)

    fetch(url)
      .then((res) => res.json())
      .then((dataUrl) => {
        console.log(dataUrl);
        setTechnicians(dataUrl);
        // Set loading to false when submitted
        setLoading(false);
        reset();
      })
      .catch((err) => {
        console.log(err);
        // Set loading to false when submitted
        setLoading(false);
      });
  };
  return (
    <div className="technicianpage">
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>

            <li className="item">
              <Link to="/" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <span className="navlink">Home</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>

            <li className="item">
              <Link to="/about" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faUserGroup} />
                </span>
                <span className="navlink">About us</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>

            <li className="item">
              <div href="#" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faCar} />
                </span>
                <span className="navlink">Services</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>
            </li>
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>

            <li className="item">
              <Link to="/profile" className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="navlink">Create profile</span>
              </Link>
            </li>
            <li className="item">
              <Link href="#" className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                <span className="navlink">Edit profile</span>
              </Link>
            </li>
            <li className="item">
              <Link href="#" className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faFilter} />
                </span>
                <span className="navlink">Filter</span>
              </Link>
            </li>
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <Link href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-flag"></i>
                </span>
                <span className="navlink">Notice board</span>
              </Link>
            </li>
            <li className="item">
              <Link href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-medal"></i>
                </span>
                <span className="navlink">Award</span>
              </Link>
            </li>
          </ul>

          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span> Help </span>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="search-section">

          <div className="search-parts">
            <div className="search-container">
              <form onSubmit={handleSubmit(searchForm)}>
                <div className="search-inputs">
                  <input
                    type="text"
                    name="searchInput"
                    placeholder="Enter Technician, city, country's Name...."
                    {...register("name")}
                  />
                  <select name="categorySelect" {...register("category")}>
                    <option value="name">Technician Name</option>
                    <option value="location">Location</option>
                  </select>
                  <select
                    name="locationTypeSelect"
                    {...register("location_type")}
                  >
                    <option value="country">Country</option>
                    <option value="city">City</option>
                    <option value="district">District</option>
                    <option value="sector">Sector</option>
                    <option value="cell">Cell</option>
                  </select>
                  <button type="submit" onClick={handleSubmit(searchForm)}>
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="search-filter">
              <div className="options">Search by services <FontAwesomeIcon icon={faCaretDown} />
                <ul>
                  <li>Auto repair</li>
                  <li>Tire repair</li>
                  <li>Collision repair</li>
                  <li>Local repair center</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tags-container">
            <div className="wrapper">
              <button className="tag small">Taylor</button>
              <button className="tag small">peter</button>
              <button className="tag small">a11y</button>
              <button className="tag small">kigali</button>
              <button className="tag small">karuruma</button>
              <button className="tag small">Dent repair</button>
              <button className="tag small">#collision</button>
              <button className="tag small">#painter</button>
            </div>
          </div>

          <div className="Search-output">
            {loading ? (
              <span className="loading-span">
                <FontAwesomeIcon icon={faSpinner} beatFade />
              </span>
            ) : (
              <div className="profiles">
                {technicians.map((technician) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/technicians/${technician.id}`}
                    state={{ fromHome: { technician } }}
                  >
                    <Technician
                      full_name={technician.full_name}
                      bio_txt={technician.bio_txt}
                      location1={technician.locations[0].country}
                      location2={technician.locations[0].sector}
                      location3={technician.locations[0].cell}
                      phone_number={technician.phone_number}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechniciansPage;
