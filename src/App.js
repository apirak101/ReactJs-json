import React from "react";
import json from "./data.json";

function App() {

  const gender = json.gender;
  const students = json.students;
  const cars = json.cars;
  // const countries = json.countries;
  const rgbCode = json.rgbCode;

  return (
    <div>
      {students.map(student => {
        const genderLabel = gender.find(g => g.gender_id === student.gender_id);
        const car = cars.find(c => c.car_id === student.adore_car);
        const carBrands = student.car_brand.map(brandId => cars.find(c => c.car_id === brandId));
        // const country = countries.find(c => c.user_ids.some(id => id.userId === student.user_id));
        const colors = student.color.map(colorName => rgbCode.find(c => c.label === colorName));

        console.log()
        return (
          <div>
            <span>"user_id": {student.user_id}</span>
            <p>"first_name": {student.first_name}, "last_name": {student.last_name}</p>
            <span>"gender": {genderLabel.label}</span>
            <p>"adore_car" : "car_brand" {car.car_brand},"brand_from" {car.car_make}</p>
            <span>"car_brand": {carBrands.map(b => b.car_brand).join(', ')}</span>
            {/* <p>"countries": {country}</p> */}
            <p>"colors": "hex": {colors.map(c => c.hex).join(', ')} "label": {colors.map(c => c.label).join(', ')} "rgb": {colors.map(c => c.rgb).join(', ')} </p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
