import { useState } from 'react';
import { RecipeSummary } from '../types';

const RecipeModal = () => {

    const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>();

    return (
        <>
        <div className = "overlay"></div>
        <div className = "modal">
        <div className = "modal-content">
            <div className = "modal-header">
                <h2>{recipeSummary?.id}</h2>
                <span className= "close-btn">
                    &times;
                </span>
            </div>
            <p>RECIPE SUMMARY</p>
        </div>
        </div>
        </>
    )

}

export default RecipeModal;