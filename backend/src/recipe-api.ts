require('dotenv').config();
const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
    if(!apiKey) {
        throw new Error("API Key not found");
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: "10",
        offset: (page * 10).toString()
    }
        url.search = new URLSearchParams(queryParams).toString()

        try {
            const searchResponse = await fetch(url);
            if (searchResponse.headers.get('content-type')?.includes('application/json')) {
                const resultsJson = await searchResponse.json();
                return resultsJson;
            } else {
                console.error('API response was not JSON:', await searchResponse.text());
            }
        } catch (error) {
            console.log(error);
        }
    } 
