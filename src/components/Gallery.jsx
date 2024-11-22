import React, { useState, useEffect } from "react";

function Gallery(){
    // sets a useState for an empty array for the API
    const [gallery, setGallery] = useState([]);

    // useEffect is used to fetch the API and JSON to allow use of the data 
    useEffect(() => {
        fetch('https://course-api.com/react-tours-project')
          .then(response => response.json())
          .then(data => {
            setGallery(JSON.parse(data.contents));
          });
        }, []);
    // return statement for listing data, buttons for more / less interested, and a remove button
    return (
        <div>
            <h2>Daily Sales</h2>
            <ul>
                {gallery.map(gall => (
                    <li key={gall.id}>
                        {gall.name}: {gall.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery;

