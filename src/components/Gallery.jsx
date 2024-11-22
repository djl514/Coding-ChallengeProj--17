import React, { useState, useEffect } from "react";

function Gallery(){
    // sets a useState for an empty array for the API
    const [gallery, setGallery] = useState([]);
    const [information, setInformation] = useState(false);


    // useEffect is used to fetch the API and JSON to allow use of the data 
    // Catches and alets error and displays a loading message
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
            console.log(`Tour ${id} Removed`)
        };

    // return statement
    return (
        <div>
            <h1>Tour Management Gallery</h1>
                {/* maps the galler to a table for each key ID */}
                {gallery.map(gall => (
                    <table key={gall.id}>
                        {/* Grabs image */}
                        <center><tr><div className = "polaroid"><img src={gall.image} alt= {`Tour ${gall.id}`} />
                        
                        <div className = "container">
                            <h2>{gall.name}</h2>
                        </div>

                        </div></tr></center>
                        <center>
                            <tr><td>Price:</td>
                            <td>${gall.price}</td></tr>
                        </center>

                        {/* Button for toggling more/less information */}
                        <tr>
                            {information ? gall.info : `${gall.info.substring(0,250)}...`}
                            <button onClick={() => setInformation(!information)}>
                                {information ? "Show Less" : "Read More"}
                            </button>
                        </tr>
                      

                        
                        <br></br>
                        <tr><button onClick={() => handleInterest(gall.id)}>Not Interested</button></tr>
                        <hr></hr>
                    </table>
                ))}
        </div>
    );
}


export default Gallery;