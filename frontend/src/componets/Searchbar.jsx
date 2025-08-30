import axios from "axios";
import { useEffect, useState } from "react";
import { COMMON_MAKES} from '../../../backend/models/commonMakes';
import { STATES } from "../../../backend/models/states";
import { Button } from "@chakra-ui/react";
import './Searchbar.css';
import heropic from '../photos/heropic.jpeg';
import { useNavigate } from "react-router-dom";
import SelectInput from "./SelectInput";


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

  // instantiate navigate function
  const navigate = useNavigate();

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

        <SelectInput
          label="Car Makes"
          options={COMMON_MAKES}
          value={carMake}
          onChange={setCarMake}
          defaultText="Make"
        />

        <SelectInput
          label="Car Models"
          options={models.map((m) => ({ label: m.Model_Name, value: m.Model_Name }))}
          value={selectedModel}
          onChange={setSelectedModel}
          defaultText="Model"
        />

        <SelectInput
          label="Car Years"
          options={Array.from({ length: 50 }, (_, i) => {
            const year = 2025 - i;
            return { label: year, value: year };
          })}
          value={carYear}
          onChange={setCarYear}
          defaultText="Year"
        />

        <SelectInput
          label="States"
          options={STATES.map((s) => ({ label: s.abbr, value: s.abbr }))}
          value={state}
          onChange={setState}
          defaultText="State"
        />

        <div className="search-buttons">
          <Button colorScheme="red">Search</Button>
          <p>or</p>
            <input type="text" placeholder="LICENSE PLATE #" onChange={(e) => setLicensePlate(e.target.value)} />
            <Button colorScheme="red">Search</Button>
            <p>Report a Stolen Veichle</p>
            <Button colorScheme="red" onClick={() => navigate('/reportStolenCar')}>Report</Button>
        </div>

      </div>
      <div className="image-container">
        <img src={heropic} alt="car theft image" id='hero-pic'/>
      </div>
    </div>
  );
};

export default Searchbar;
