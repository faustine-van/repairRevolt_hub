import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Technician from './Technician'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [technicians, setTechnicians] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const searchForm = (data) => {
    // Set loading to true when submitting
    setLoading(true);

    console.log(data)

    let url = '/api/v1/search_technicians';
    if (data.category === 'name') {
      url += `?category=${data.category}&name=${data.name}`
    } else if (data.category === 'location') {
      url += `?category=location&${data.location_type}=${data.name}`
    }
    fetch(url)
      .then(res => res.json())
      .then(dataUrl => {
        console.log(dataUrl);
        setTechnicians(dataUrl)
        // Set loading to false when submitted
        setLoading(false);
        reset()
      })
      .catch(err => {
        console.log(err)
        // Set loading to false when submitted
        setLoading(false);

      })
  }


  return (
   <>
    <div className="hero-section">
        <h2>Find your Local Technician</h2>
        <p>Search for technicians based on name, location, and more. Choose a category and location type to narrow down your search.</p>
         <div className="search-container">
         <form onSubmit={handleSubmit(searchForm)}>
          <div className="search-inputs">
            <input type="text" name="searchInput" placeholder="Enter Technician, city, country's Name...." {...register("name")} />
            <select name="categorySelect" {...register("category")}>
              <option value="name">Technician Name</option>
              <option value="location">Location</option>
            </select>
            <select name="locationTypeSelect" {...register("location_type")}>
              <option value="country">Country</option>
              <option value="city">City</option>
              <option value="district">District</option>
              <option value="sector">Sector</option>
              <option value="cell">Cell</option>
            </select>
            <button type="submit" onClick={handleSubmit(searchForm)}>Search</button>
          </div>
        </form>
      </div>

      <div className="tags-container-hero">
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
      </div>


      <div className="Search-output">
        {loading ? (
          <span className="loading-span"><FontAwesomeIcon icon={faSpinner} beatFade /></span>
        ) : (

          <div className="profiles">
            {
              technicians.map(
                (technician) => (
                  <Link style ={{ textDecoration: 'none'}} to={`/technicians/${technician.id}`} state={{ fromHome: { technician } }}>
                    <Technician
                      full_name={technician.full_name}
                      bio_txt={technician.bio_txt}
                      location1={technician.locations[0].country}
                      location2={technician.locations[0].sector}
                      location3={technician.locations[0].cell}
                      phone_number={technician.phone_number}
                    />
                  </Link>
                )
              )
            }
          </div>
        )}
      </div>

      </>
  )};

export default SearchBar
