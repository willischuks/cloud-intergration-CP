import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the component for the map container
const MapContainer = () => {

  // Define a sample data item with a name and location
    const item = {
        name: "Location 1",
        location: {
        lat : 6.4428, 
        lng : 3.44797,
        },
    };

    // Define the map styles
    const mapStyles = {
        height: "500px",
        width: "100%",
    };

    // Define the default center of the map
    const defaultCenter = {
        lat : 6.465422,
        lng : 3.406448
    };

    return (
        <div className="map-container">
        {/* Load the Google Maps API script */}
        <LoadScript googleMapsApiKey="AIzaSyBmtlOwkbUJtFjQknRLAIrBGn0juFAk4IQ">
            {/* Render the Google Map component with the map container styles, zoom level, and default center */}
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            {/* Add a marker to the map using the sample data item location */}
            <Marker key={item.name} position={item.location} />
            </GoogleMap>
        </LoadScript>
        </div>
    )
};

// Export the MapContainer component
export default MapContainer;