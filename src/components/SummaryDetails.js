import React from 'react';

function SummaryDetails({ geoJsonData }) {
    const calculateSummary = () => {
        const elementCount = {};
        geoJsonData.features.forEach(feature => {
            const type = feature.geometry.type;
            elementCount[type] = (elementCount[type] || 0) + 1;
        });
        alert(JSON.stringify(elementCount, null, 2));
    };

    const calculateDetails = () => {
        const details = [];
        geoJsonData.features.forEach(feature => {
            if (feature.geometry.type.includes('LineString')) {
                const length = feature.geometry.coordinates.reduce((sum, coords, idx, arr) => {
                    if (idx < arr.length - 1) {
                        const [lon1, lat1] = coords;
                        const [lon2, lat2] = arr[idx + 1];
                        const dist = Math.sqrt(
                            Math.pow(lon2 - lon1, 2) + Math.pow(lat2 - lat1, 2)
                        );
                        return sum + dist;
                    }
                    return sum;
                }, 0);

                details.push({
                    type: feature.geometry.type,
                    length: length.toFixed(2)
                });
            }
        });
        alert(JSON.stringify(details, null, 2));
    };

    return (
        <div>
            <button onClick={calculateSummary}>Summary</button>
            <button onClick={calculateDetails}>Details</button>
        </div>
    );
}

export default SummaryDetails;
