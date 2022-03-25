import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CoctailsContext = createContext();

const Context = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true)
    const [coctails, setCoctails] = useState([]);
    const [category, setCategory] = useState("Cocktail");
    //const [categories, setCategories] = useState([]);
    const [ind, setInd] = useState([]);
    const [index, setIndex] = useState(1);

    const fetchCoctails = async() => {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`);
        setCoctails(data);
        setIndex(1);
    }
    const fetchCoctailsFromCat = async(cat) => {
        try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`);
        setCoctails(data);
        setIndex(1);
        }
        catch{
            console.log(error);
        }
    }
    const fetchInds = async()=>{
        try {
            const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
            setInd(data);           
        }catch{
            console.log(error);
        }
    }
    const fetchCoctailsFromIn = async(cat) => {
        try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cat}`);
        setCoctails(data);
        setIndex(1);
        }
        catch{
            console.log(error);
        }
    }
    
    // const fetchCategories = async() => {
   //     const {categories} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
   //     setCategories(categories);
   //}

    useEffect(()=>
    {
        fetchCoctails();
    }, [category])

    useEffect(()=>
    {
        fetchCoctailsFromCat();
    },[category])

    return <CoctailsContext.Provider value={{
        coctails, index, setIndex, fetchCoctails, darkTheme, setDarkTheme, fetchCoctailsFromCat, fetchInds, fetchCoctailsFromIn, ind
    }}>{children}</CoctailsContext.Provider>
}

export default Context;