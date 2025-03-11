import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SummaryDetails from './components/SummaryDetails';
import MapComponent from './components/MapComponent';
import './style.css';  // New CSS for improved design

function App() {
    const [geoJsonData, setGeoJsonData] = useState(null);

    return (
        <div>
            <h1>KML File Viewer</h1>
            <FileUpload onFileParsed={setGeoJsonData} />
            {geoJsonData && (
                <>
                    <SummaryDetails geoJsonData={geoJsonData} />
                    <MapComponent geoJsonData={geoJsonData} />
                </>
            )}
        </div>
    );
}

export default App;

