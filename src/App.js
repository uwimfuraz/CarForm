import React, { useState } from 'react';
import "./App.css";


const CarSellForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedFeatures = [...carData.features];
    if (checked) {
      updatedFeatures.push(name);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== name);
    }
    setCarData((prevData) => ({
      ...prevData,
      features: updatedFeatures,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
  };

  return (

    <div className='App'>
<h2 className='car-sell-app'>Car Sell App</h2>
    <form onSubmit={handleSubmit} style={styles.form}>
      
      <label style={styles.label}>
        Car Make:
        <input
          type="text"
          name="make"
          value={carData.make}
          onChange={handleChange}
          required
          style={styles.input}
          className='make'
        />
      </label>
      <br />

      <label style={styles.label}>
        Car Model:
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
          style={styles.input}
          className='make'
        />
      </label>
      <br />

      <label style={styles.label}>
        Year:
        <input
          type="date"
          name="year"
          value={carData.year}
          onChange={handleChange}
          required
          style={styles.input}
          className='make'
        />
      </label>
      <br />

      <label style={styles.label}>
        Mileage:
        <input
          type="number"
          name="mileage"
          value={carData.mileage}
          onChange={handleChange}
          required
          style={styles.input}
          className='make'
        />
      </label>
      <br />

      <label style={styles.label}>
        Condition:
        <br />
        <label style={styles.radioLabel}>
          Excellent
          <input
            type="radio"
            name="condition"
            value="Excellent"
            className='make'
            checked={carData.condition === 'Excellent'}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Good
          <input
            type="radio"
            name="condition"
            value="Good"
            className='make'
            checked={carData.condition === 'Good'}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Fair
          <input
            type="radio"
            name="condition"
            value="Fair"
            className='make'
            checked={carData.condition === 'Fair'}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Poor
          <input
            type="radio"
            name="condition"
            value="Poor"
            className='make'
            checked={carData.condition === 'Poor'}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <label style={styles.label}>
        Features:
        <br />
        <label style={styles.checkboxLabel}>
          Air Conditioning
          <input
           className='make'
            type="checkbox"
            name="Air Conditioning"
            checked={carData.features.includes('Air Conditioning')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Power Steering
          <input
            type="checkbox"
            name="Power Steering"
            className='make'
            checked={carData.features.includes('Power Steering')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Power Windows
          <input
            type="checkbox"
            name="Power Windows"
            className='make'
            checked={carData.features.includes('Power Windows')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          ABS
          <input
            type="checkbox"
            name="ABS"
            className='make'
            checked={carData.features.includes('ABS')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Navigation System
          <input
            type="checkbox"
            name="Navigation System"
            className='make'
            checked={carData.features.includes('Navigation System')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
      </label>
      <br />

      <label style={styles.label}>
        Transmission:
        <select
         className='make'
          name="transmission"
          value={carData.transmission}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
      <br />

      <label style={styles.label}>
        Price Range:
        <input
          type="range"
          name="priceRange"
          className='make'
          value={carData.priceRange}
          min="0"
          max="100"
          onChange={handleChange}
          style={styles.inputRange}
        />
      </label>
      <br />

      <label style={styles.label}>
        Contact Number:
        <input
         className='make'
          type="text"
          name="contactNumber"
          value={carData.contactNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <button type="submit" style={styles.button}>Submit</button>
    
    </form>
   </div>
  );
};

const styles = {
  form: {
    maxWidth: '900px',
    margin: '0 auto',
  
  },
  label: {
    marginBottom: '10px',
    display: 'block',
    fontSize: '23px',
    color:'black',
  },

 
  input: {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
    backgroundColor:"white",
    border:"solid pink",
  
  },
  radioLabel: {
    marginRight: '10px',
  },
  checkboxLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  checkbox: {
    marginRight: '5px',
  },
  select: {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
    border:"solid pink",
  },
  inputRange: {
    width: '100%',
       background: 'linear-gradient(to right, purple, purple) no-repeat', 
    backgroundSize: 'calc((100% - 20px) * (var(--value) - var(--min)) / (var(--max) - var(--min)) + 10px) 5px',

  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'blueviolet',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
};

export default CarSellForm;
