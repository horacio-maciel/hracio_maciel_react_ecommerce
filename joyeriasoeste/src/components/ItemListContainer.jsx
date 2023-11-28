import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


import { ItemList } from "./ItemList";
import  Products from "./data/Products.json";
import React from "react";


export const ItemListContainer = () => {
const [Items, setItems] = useState ([]);
const [loading, setLoading] = useState (true);

const {id} = useParams();

console.log(id);

useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products);
        }, 2000);
         });
        
         promise
         .then((response) => {
            if(id){
                const filteres = response.filter((item) => item.category === id);
                setItems(filteres);
            }else{
                setItems(response);
            }
            
         })
         .finally(() => setLoading(false));
   
} , [id])

    return (
        <Container className="mt-4">
            <h1>Lista</h1>
            <ItemList items={Items}/>
        </Container>
    );
};