import axios from "axios";
import { useEffect, useState } from "react";
import { COMMON_MAKES} from '../../../backend/models/commonMakes';
import { STATES } from "../../../backend/models/states";
import { Button } from "@chakra-ui/react";
import './Searchbar.css';
import heropic from '../photos/heropic.jpeg';


/**
 * Searchbar componet holds carmake, model, state, and liscense plate useStates
 * Searchbar will be use to find stolen veichles
 * @returns Searchbar componet
 */
const Searchbar = () => {
  const [carMake, setCarMake] = useState("");
  const [models, setModels] = useState([]);
  const [carYear, setCarYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [state, setState] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

  /**
   * Every time a car make other than the default is selected, fetch the models for that make
   */
  useEffect(() => {
    const fetchModels = async () => {
      if (!carMake || carMake === "default") return;
      try {
        const { data } = await axios.get(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${carMake}?format=json`
        );
        setModels(data.Results);
      } catch (error) {
        console.error("Error fetching car models:", error);
      }
    };
    fetchModels();
  }, [carMake]);


  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <h2>Find Stolen Veichles</h2>
        <select name="car-make" id="car-make" onChange={(e) => setCarMake(e.target.value)}>
          <option value="default">Make</option>
          <optgroup label="Car Makes">
            {COMMON_MAKES.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </optgroup>
        </select>
        <select name="car-model" id="car-model" onChange={(e) => setSelectedModel(e.target.value)}>
          <option value="default">Model</option>
          <optgroup label="Car Models">
            {models.map((model, index) => (
              <option key={index} value={model.Model_Name}>
                {model.Model_Name}
              </option>
            ))}
          </optgroup>
        </select>
        <select name="car-year" id="car-year" onChange={(e) => setCarYear(e.target.value)}>
          <option value="default">Year</option>
          <optgroup label="Car Years">
            {Array.from({ length: 80 }, (_, i) => 2023 - i).map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </optgroup>
        </select>
        <select name="state" id="state" onChange={(e) => setState(e.target.value)}>
          <option value="default">State</option>
          <optgroup label="States">
            {STATES.map((state, index) => (
              <option key={index} value={state.abbr}>
                {state.abbr}
              </option>
            ))}
          </optgroup>
        </select>
        <div className="search-buttons">
          <Button colorScheme="red">Search</Button>
          <p>or</p>
          <input type="text" placeholder="LICENSE PLATE #" onChange={(e) => setLicensePlate(e.target.value)} />
          <Button colorScheme="red">Search</Button>
        </div>
      </div>
      <div className="image-container">
        <img src={heropic} alt="car theft image" id='hero-pic'/>
      </div>
    </div>
  );
};

export default Searchbar;
