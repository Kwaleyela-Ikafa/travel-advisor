// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import useStyles from './styles.js';

// const Map = ({setCoordinates, setBounds, coordinates }) => {
//   const isMobile = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();

//   return (
//     <div className={classes.mapContainer}>
//       {/* <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyC1RKqZhS9UCD26X2LpbNoOhxPKqxdjFzU' }}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={''}
//         onChange={(e) => {
//             console.log(e);

//             setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//             setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={''}
//       >
//       </GoogleMapReact> */}
//     </div>
//   );
// };

// export default Map;
import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({setCoordinates, setBounds, coordinates }) => {

  const classes = useStyles();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC1RKqZhS9UCD26X2LpbNoOhxPKqxdjFzU" }}
        // defaultCenter={defaultProps.center}
        // defaultZoom={defaultProps.zoom}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
            console.log(e);

            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
