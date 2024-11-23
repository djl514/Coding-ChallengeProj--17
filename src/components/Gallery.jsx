import React, { useState, useEffect } from "react";
import Button from "./Button";

function Gallery(){
    // sets a useState for an empty array for the API
    const [gallery, setGallery] = useState([]);



    // useEffect is used to fetch the API and JSON to allow use of the data 
    // Catches and alets error and displays a loading message
    useEffect(() => {
        const url = 'https://api.allorigins.win/get?url=https://course-api.com/react-tours-project';
        fetch(url)
          .then(response => response.json())
          
          .then(data => {
            setGallery(JSON.parse(data.contents));
          })
          .catch(error => {
            alert (`Error: ${error}`)
            
            .finally(() => {
                <div><h2>
                    Page Loading...
                </h2></div>
            })
          });
        }, []);

        // handles the Not Interested button to remove a tour from the list
        function handleInterest(id){
            setGallery(gallery.filter(tour => tour.id !== id));
            console.log(`Tour ${id} Removed`)
        };
    return (
        <div>   
            <h1>Tour Comparison Gallery App</h1>
            
                {/* maps the galler to a table for each key ID */}
                {gallery.map(gall => (
                    <div key={gall.id}>
                        {/* Grabs image */}
                        
                        <center>
                            {/* Classes create a poloroid type look for the images */}
                            <div className = "polaroid">
                            <div className = "container">
                            <h2>{gall.name}</h2></div>
                        <img src={gall.image} 
                        alt= {`Tour ${gall.id}`} />

                        </div></center>
                        <center>
                        <h3><b>Price:</b> ${gall.price}</h3>
                        </center>
                        <Button key={gall.id} {...gall}/>

                        {/* Button to read more or less information */}
                        <br></br>
                        <button onClick={() => handleInterest(gall.id)}>Not Interested</button>
                        <hr></hr>
                    </div>
                ))}
        </div>
    );
}


export default Gallery;