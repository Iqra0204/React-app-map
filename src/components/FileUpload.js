import React from 'react';
import * as toGeoJSON from '@mapbox/togeojson';

function FileUpload({ onFileParsed }) {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const parser = new DOMParser();  // Correct DOMParser method
                const kml = parser.parseFromString(e.target.result, 'application/xml');

                try {
                    const geoJsonData = toGeoJSON.kml(kml);  // Correct usage here
                    console.log('Parsed GeoJSON:', geoJsonData);

                    onFileParsed(geoJsonData);  // Pass data back to parent
                } catch (error) {
                    console.error('Error parsing KML file:', error);
                }
            };

            reader.readAsText(file);  // Read the file as text
        }
    };

    return (
        <div>
            <input type="file" accept=".kml" onChange={handleFileUpload} />
        </div>
    );
}

export default FileUpload;
