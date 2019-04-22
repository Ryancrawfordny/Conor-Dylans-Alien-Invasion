import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import AlienPin from './components/AlienPin'
import AbductionsInfo from './components/AbductionsInfo'


const MAPBOX_TOKEN = "pk.eyJ1IjoiZGFudGVmYWxjb25hcmkiLCJhIjoiY2p1c2ZkOGVjMDk3eTQ0bzV0MHFvN2d6diJ9.NI3p--6_VsBxZir-xKNIdw"

class AlienMap extends Component {
    constructor() {
        super()

        this.state = {
            viewport: {
                width: 500,
                height: 500,
                latitude: 39.381266,
                longitude: -97.922211,
                zoom: 3
            },
            popupInfo: null
        }
        this._renderMarker = this._renderMarker.bind(this)
        this._renderPopup = this._renderPopup.bind(this)
    };

    _renderMarker(abductions, i) {
        console.log(abductions)
        //     const lat = Number(abductions.incident_location)
        //     const long = Number(abductions.incident_location)
             return (
        //         <Marker key={`abductions-${i}`} longitude={long} latitude={lat}>
        <AlienPin 
        size={20}
        onclick={() => this.setState({popInfo: abductions})} />
        //         </Marker>
              );
    }
    _renderPopup(){
        const popupInfo = this.state;

        return (
            <Popup tipSize={5}
            anchor="top"
            longitude={lng}
            latitude={lat}
            onCLose={() => this.setState({popupInfo: null})}>
            <AbductionsInfo info={popupInfo} />
            </Popup>

        )
    }
   

    render() {
        const abductions = this.props.abductions;
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
                {abductions.map(this._renderMarker)}

                { this.state.popupInfo && this._renderPopup}
            </ReactMapGL>

        );
    }
}

export default AlienMap