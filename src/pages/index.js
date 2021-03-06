/**
 * @param  {} 
 */
import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { Row, Col } from 'react-bootstrap'

import config from '../aws-exports'
import Layout from '../components/layout'
import Map from '../components/Map'
import SidePane from '../components/SidePane'

Amplify.configure(config)

/**
 * Home page of the application 
 * @extends Component
 */

class IndexPage extends Component {
  state = {
    activeTab: 'list',
    activeDatasetIndex: '0',
    subpageTitle: 'Dataset-1',
    datasets: [
      {
        name: 'Dataset-1',
        description: 'A short description of dataset-1',
      },
      {
        name: 'Dataset-2',
        description: 'A short description of dataset-2',
      },
      {
        name: 'Dataset-3',
        description: 'A short description of dataset-3',
      },
      {
        name: 'Dataset-4',
        description: 'A short description of dataset-4',
      },
    ],
  }
  
  /**
   * Constructor 
   * @param {object} props - React protoTypes
   */
  constructor (props) {
    super(props)
    this.setActiveTab = this.setActiveTab.bind(this)
    this.setActiveDataset = this.setActiveDataset.bind(this)
  }
  
/**
 * @method setActiveTab
 * @summary Method highlihgts the current tab
 * @param {string} tabName - The name of the tab
 */
  setActiveTab (tabName) {
    this.setState({ ...this.state, activeTab: tabName })
  }
 
  /**
 * @method setActiveDataset
 * @summary Method highlihgts the dataset in use
 * @param {object} e - event to be handled
 */
  setActiveDataset (e) {
    const datasetName = e.target.textContent
    const index = this.state.datasets.findIndex(
      ({ name }) => name === datasetName
    )
    this.setState({
      ...this.state,
      activeDatasetIndex: index,
      subpageTitle: datasetName,
    })
  }

  render () {
    return (
      <Layout title={this.state.subpageTitle}>
        <Row
          style={{
            height: '100%',
          }}
          className='no-gutters'
        >
          <Col xs={8}>
            <Map />
          </Col>
          <Col xs={4}>
            <SidePane
              activeTab={this.state.activeTab}
              setActiveTab={this.setActiveTab}
              datasets={this.state.datasets}
              activeDatasetIndex={this.state.activeDatasetIndex}
              setActiveDataset={this.setActiveDataset}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
