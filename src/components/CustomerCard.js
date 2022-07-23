import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer, removeCustomer } from '../redux-toolkit/features/customerSlice';

const CustomerCard = ({name, food, id}) => {

    const dispatch = useDispatch();
    const [foodNameInput, setFoodNameInput] = useState("");

    const handleAddFood = (id) => {
        if(!foodNameInput) return
        dispatch(addFoodToCustomer({id, food: foodNameInput}));
        setFoodNameInput("")
    }

    return (
        <div className="customer-food-card-container" onDoubleClick={() => dispatch(removeCustomer(id))}>
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((item) => {
                        return <p>{item}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                <input 
                    value={foodNameInput}
                    onChange={(e) => setFoodNameInput(e.target.value)}
                />
                <button onClick={() => handleAddFood(id)} >Add</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard