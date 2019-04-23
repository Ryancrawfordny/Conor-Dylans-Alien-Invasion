import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import LibraryPin from './LibraryPin';
import LibraryLocation from './LibraryLocation';



const MAPBOX_TOKEN = "pk.eyJ1IjoiZGFudGVmYWxjb25hcmkiLCJhIjoiY2p1c2ZkOGVjMDk3eTQ0bzV0MHFvN2d6diJ9.NI3p--6_VsBxZir-xKNIdw"

class LibraryMap extends Component {
    constructor() {
        super()

        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: 40.730610,
                longitude: -73.935242,
                zoom: 11
            },
            popupInfo: null
        }
        this._renderMarker = this._renderMarker.bind(this)
        this._renderPopup = this._renderPopup.bind(this)
    };

    _renderMarker(libraries, i) {
        const lat = Number(libraries.the_geom.coordinates[0])
        const long = Number(libraries.the_geom.coordinates[1])
        console.log(long)
        
        return (
            <Marker key={`libraries-${i}`} longitude={long} latitude={lat}>
                <LibraryPin
                    size={20}
                    onclick={() => this.setState({ popInfo: libraries })} />
            </Marker>
        );
    }
    _renderPopup() {
        const popupInfo = this.state;

        return (
            <Popup tipSize={5}
                anchor="top"
                longitude= "long"
                latitude= "lat"
                onClose={() => this.setState({ popupInfo: null })}>
                <LibraryLocation info={popupInfo} />
            </Popup>

        )
    }


    render() {
        const libraries = this.props.libraries;
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
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                {libraries.map(this._renderMarker)}

                {this.state.popupInfo && this._renderPopup}
            </ReactMapGL>

        );
    }
}

export default LibraryMap