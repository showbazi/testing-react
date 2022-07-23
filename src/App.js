// import React, { useState } from "react";
// import {useSelector, useDispatch} from 'react-redux'
// import "./App.css";
// import CustomerCard from "./components/CustomerCard";
// import ReservationCard from "./components/ReservationCard";
// import { addReservations } from "./redux-toolkit/features/reservationSlice";

// function App() {

//   const reservations = useSelector((state) => state.reservations.value);
//   const customers = useSelector((state) => state.customers.value);

//   const dispatch = useDispatch();

//   const [reservationNameInput, setReservationNameInput] = useState("");

//   const handleAddReservation = () => {
//       if(!reservationNameInput) return;
//       dispatch(addReservations(reservationNameInput));
//       setReservationNameInput("");
//   }

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="reservation-container">
//           <div>
//             <h5 className="reservation-header">Reservations</h5>
//             <div className="reservation-cards-container">
//               {reservations.map((name, index) => {
//                 return <ReservationCard key={index} name={name} id={index}/>
//               })}
//             </div>
//           </div>
//           <div className="reservation-input-container">
//             <input 
//               value={reservationNameInput}
//               onChange={(e) => setReservationNameInput(e.target.value)}
//             />
//             <button onClick={handleAddReservation}>Add</button>
//           </div>
//         </div>
//         <div className="customer-food-container">
//           {customers.map((item) => {
//             return <CustomerCard key={item.id} name={item.name} food={item.food} id={item.id}/>
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatsCard from './CatsCard';
import { getCatsFetch } from './catState';
import "./App.css";
import Counter from './counter/Counter';

const App = () => {

  // const dispatch = useDispatch();
  // const cats = useSelector((state) => state.cats.allCats);

  // useEffect(() => {
  //   dispatch(getCatsFetch());
  // }, [dispatch]);

  // console.log("catsState", cats);

  return (
    <div className='App'>
      {/* {cats.map((item) => {
        return <CatsCard key={item.id} image={item.image} name={item.name} description={item.description}/>
      })} */}

      <Counter initialCount={0}/>
    </div>
  )
}

export default App