import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGFudGVmYWxjb25hcmkiLCJhIjoiY2p1c2ZkOGVjMDk3eTQ0bzV0MHFvN2d6diJ9.NI3p--6_VsBxZir-xKNIdw"

class AlienMap extends Component {

    state = {
        viewport: {
            width: 800,
            height: 400,
            latitude: 39.381266,
            longitude: -97.922211,
            zoom: 3
        }
    };

    render() {

        const { viewport } = this.state;

        return (
            <ReactMapGL
                width={viewport.width}
                height={viewport.height}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}

                mapStyle="mapbox://styles/mapbox/light-v9"

                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            />
        );
    }
}

export default AlienMap