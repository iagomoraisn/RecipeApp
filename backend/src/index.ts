import express from "express"
import cors from "cors"
import * as RecipeAPI from './recipe-api';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
    const results = RecipeAPI.searchRecipes(searchTerm, page);
})

app.listen(5001, ()=> {
    console.log("server running on localhost:5000");
});