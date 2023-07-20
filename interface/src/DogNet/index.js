import React, { useState } from 'react';
import './template.css';
import NavBar from '../Menu.js';

function DogNet() {
    const [hovered, setHovered] = useState(false);
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleImageUpload = event => {
        setImage(URL.createObjectURL(event.target.files[0]));

        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        fetch('http://localhost:5000/predict/dogNet', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                setPrediction(data.prediction);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);  // Hides the toast after 3 seconds
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <NavBar />
            <h1
                className={`welcome-text ${hovered ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                it is a dog?
            </h1>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="fileInput"
                onChange={handleImageUpload}
            />
            <label htmlFor="fileInput" className="futuristic-button">Submit to DogNet</label>
            {showToast && (
                <div className="toast">
                    {prediction}
                </div>
            )}
            <div className="upload-section">
                {image && <img src={image} alt="upload-preview" className="preview-image" />}
            </div>
        </div>
    );
}

export default DogNet;
