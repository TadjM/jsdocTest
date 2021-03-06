import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Layout from '../components/layout'



const GeocodeExperimentPage = () => (
  <Layout>
    Geocode Experiment
    <Geocode />
    <LeafletMap />
  </Layout>
)


/**
 * React component to render the longitude and lattitude of an address
 * @extends Component
 * @returns {number} lat - Lattitude
 * @returns {number} lng - Longitude
 */
class Geocode extends React.Component {
   /**
   * Constructor 
   * @param {object} props - React protoTypes
   */
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      location: [],
      address: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  
   /**
   * Geocode a given address using the googgle api
   * @param {string} address- The address given by the user
   */
  geocodeAddress (address) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
        process.env.GATSBY_GMAPS_API_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            location: result.results[0].geometry.location,
            address,
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

   /**
   * Event handler - handle the change in the user's input
   * @param {object} event - Event to be handled
   */

  handleChange (event) {
    this.setState({ address: event.target.value })
  }
  
   /**
   * Event handler - handle the form submission and send the input to the geocodeaddress function
   * @param {object} event - Event to be handled
   */
  handleSubmit (event) {
    event.preventDefault()
    this.geocodeAddress(this.state.address)
  }

  render () {
    const { location } = this.state
    return (
      <div>
        <p>Enter address:</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='address' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
        <span>
          location:{' '}
          {location ? `lat : ${location.lat} lng : ${location.lng}` : ''}
        </span>
      </div>
    )
  }
}


/**
 * React component to render a map with leaflet
 * @extends Component
 * @returns {Map} - Map of the united states
 */
class LeafletMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render () {
    if (typeof window !== 'undefined') {
      const position = [this.state.lat, this.state.lng]
      return (
        <Map
          style={{ height: '800px', width: '800px' }}
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </Map>
      )
    } else {
      return null
    }
  }
}

export default GeocodeExperimentPage
