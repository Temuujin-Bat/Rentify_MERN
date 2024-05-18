import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { createApartmentController } from "../../../services/apartments.api";
import { getAuthData } from "../../../store/auth/selectors";

export default function AddAds() {
  const { authDetails } = getAuthData();

  // User Information
  const [name, setName] = useState("temka");
  const [phone, setPhone] = useState(1);
  const [price, setPrice] = useState(1);

  // Apartment Information
  const [description, setDescription] = useState("temka");
  const [floor, setFloor] = useState(1);
  const [size, setSize] = useState(1);
  const [rooms, setRooms] = useState(1);

  // Address Information
  const [city, setCity] = useState("temka");
  const [street, setStreet] = useState("temka");
  const [buildingNumber, setBuildingNumber] = useState(1);
  const [zipCode, setZipCode] = useState(1);

  // Tags
  const [elevator, setElevator] = useState(false);
  const [parkingLot, setParkingLot] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [accessibleToDisabled, setAccessibleToDisabled] = useState(false);
  const [equipped, setEquipped] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [storage, setStorage] = useState(false);

  // Plan Type
  const [planType, setPlanType] = useState("Golden");

  // Handlers for updating state
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleFloorChange = (e) => setFloor(e.target.value);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleRoomsChange = (e) => setRooms(e.target.value);

  const handleCityChange = (e) => setCity(e.target.value);
  const handleStreetChange = (e) => setStreet(e.target.value);
  const handleBuildingNumberChange = (e) => setBuildingNumber(e.target.value);
  const handleZipCodeChange = (e) => setZipCode(e.target.value);

  const handleElevatorChange = (e) => setElevator(e.target.checked);
  const handleParkingLotChange = (e) => setParkingLot(e.target.checked);
  const handleAirConditioningChange = (e) =>
    setAirConditioning(e.target.checked);
  const handleBalconyChange = (e) => setBalcony(e.target.checked);
  const handleAccessibleToDisabledChange = (e) =>
    setAccessibleToDisabled(e.target.checked);
  const handleEquippedChange = (e) => setEquipped(e.target.checked);
  const handlePetFriendlyChange = (e) => setPetFriendly(e.target.checked);
  const handleStorageChange = (e) => setStorage(e.target.checked);

  const handlePlanTypeChange = (e) => setPlanType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      price,
      apartment: {
        description,
        floor,
        size,
        rooms,
      },
      address: {
        city,
        street,
        buildingNumber,
        zipCode,
      },
      tags: {
        elevator,
        parkingLot,
        airConditioning,
        balcony,
        accessibleToDisabled,
        equipped,
        petFriendly,
        storage,
      },
      planType,
    };

    try {
      const response = await createApartmentController({
        ...formData,
        owner: authDetails._id,
      });
      console.log("Apartment created successfully:", response);
    } catch (error) {
      console.error("Error creating apartment:", error);
    }
  };

  return (
    <Grid sx={{ mt: "62px" }}>
      <h1>Apartment Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          Floor:
          <input type="number" value={floor} onChange={handleFloorChange} />
        </label>
        <label>
          Size:
          <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        <label>
          Rooms:
          <input type="number" value={rooms} onChange={handleRoomsChange} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <label>
          Street:
          <input type="text" value={street} onChange={handleStreetChange} />
        </label>
        <label>
          Building Number:
          <input
            type="number"
            value={buildingNumber}
            onChange={handleBuildingNumberChange}
          />
        </label>
        <label>
          Zip Code:
          <input type="number" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <label>
          Elevator:
          <input
            type="checkbox"
            checked={elevator}
            onChange={handleElevatorChange}
          />
        </label>
        <label>
          Parking Lot:
          <input
            type="checkbox"
            checked={parkingLot}
            onChange={handleParkingLotChange}
          />
        </label>
        <label>
          Air Conditioning:
          <input
            type="checkbox"
            checked={airConditioning}
            onChange={handleAirConditioningChange}
          />
        </label>
        <label>
          Balcony:
          <input
            type="checkbox"
            checked={balcony}
            onChange={handleBalconyChange}
          />
        </label>
        <label>
          Accessible to Disabled:
          <input
            type="checkbox"
            checked={accessibleToDisabled}
            onChange={handleAccessibleToDisabledChange}
          />
        </label>
        <label>
          Equipped:
          <input
            type="checkbox"
            checked={equipped}
            onChange={handleEquippedChange}
          />
        </label>
        <label>
          Pet Friendly:
          <input
            type="checkbox"
            checked={petFriendly}
            onChange={handlePetFriendlyChange}
          />
        </label>
        <label>
          Storage:
          <input
            type="checkbox"
            checked={storage}
            onChange={handleStorageChange}
          />
        </label>
        <label>
          Plan Type:
          <select
            name="planType"
            value={planType}
            onChange={handlePlanTypeChange}
          >
            <option value="regular">Regular</option>
            <option value="silver">Silver</option>
            <option value="golden">Golden</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </Grid>
  );
}
