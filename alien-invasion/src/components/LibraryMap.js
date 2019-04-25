import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import LibraryPin from './LibraryPin';
import LibraryLocation from './LibraryLocation';
import LibraryInfo from './LibraryInfo';


const MAPBOX_TOKEN = "pk.eyJ1IjoiZGFudGVmYWxjb25hcmkiLCJhIjoiY2p1c2ZkOGVjMDk3eTQ0bzV0MHFvN2d6diJ9.NI3p--6_VsBxZir-xKNIdw"

class LibraryMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: 40.730610,
                longitude: -74.0060,
                zoom: 10
            },
            popupInfo: null
        }
        this._renderMarker = this._renderMarker.bind(this)
        this._renderPopup = this._renderPopup.bind(this)
    };

    _renderMarker(libraries, i) {
        const lat = Number(libraries.the_geom.coordinates[1])
        const lng = Number(libraries.the_geom.coordinates[0])

        // console.log(libraries)
        
        return (
            <Marker key={`libraries-${i}`} longitude={lng} latitude={lat}>
                <LibraryPin
                    size={10}
                    onClick={() => this.setState({ popupInfo: libraries })} />
            </Marker>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        console.log(popupInfo)

        const lng = popupInfo.the_geom.coordinates[0]
        const lat = popupInfo.the_geom.coordinates[1]

        return (
          <Popup tipSize={5}
            anchor="top"
            longitude={lng}
            latitude={lat}
            onClose={() => this.setState({popupInfo: null})} >
            <LibraryInfo info={popupInfo} />
          </Popup>
        );
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

                mapStyle="mapbox://styles/mapbox/light-v8"

                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}>

                {libraries.map(this._renderMarker)}

                {this.state.popupInfo && this._renderPopup() }

            </ReactMapGL>

        );
    }
}

export default LibraryMap