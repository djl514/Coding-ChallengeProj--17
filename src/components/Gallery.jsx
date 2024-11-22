import React, { useState, useEffect } from "react";

function Gallery(){
    // sets a useState for an empty array for the API
    const [gallery, setGallery] = useState([]);
    const [information, setInformation] = useState(false);


    // useEffect is used to fetch the API and JSON to allow use of the data 
    useEffect(() => {
        fetch('https://api.allorigins.win/get?url=https://course-api.com/react-tours-project')
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
          })
        }, []);

        //Used in the Not Interested button to remove a tour from the list
        function handleInterest(id){
            setGallery(gallery.filter(tour => tour.id !== id));
        };

    // return statement for listing data, buttons for more / less interested, and a remove button
    return (
        <table>
            <h1>Tour Management Gallery</h1>
            <hr></hr>
            <dl>
                {gallery.map(gall => (
                    <dt key={gall.id}>
                        <h2>{gall.name}</h2>
                        <dd>Price: ${gall.price}</dd>
                        <dd> 
                            {information ? gall.info : `${gall.info.substring(0,250)}...`}
                            <button onClick={() => setInformation(!information)}>
                                {information ? "Show Less" : "Read More"}
                            </button>
                        </dd>
                        <dd><img src={gall.image} alt= "tour" /></dd>
                        <br></br>
                        <button onClick={() => handleInterest(gall.id)}>Not Interested</button>
                        <br></br>
                    </dt>
                ))}
            </dl>

        </table>
    );
}

export default Gallery;

