import './App.css';
import { useState } from 'react';
import * as api from './api';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('burgers');
    const [recipes, setRecipes] = useState([])

    const handleSearchSubmit = async () => {
        try {
            const recipes = await api.searchRecipes(searchTerm, 1);
            setRecipes(recipes);
        } catch (e) {
            console.log(e);

        }
    }

    return <div>
        {recipes.map(() => (
            <div>
                recipe image location: {recipes.image}
                recipe title: {recipes.title}
            </div>
        ))}
    </div>;
};

export default App;

