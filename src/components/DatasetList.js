/**
 * Reatct component that give a list of datasets and indicate which dataset is being viewed
 * @param  {list}  datasets - list of datasets
 * @param  {object} activeDatasetIndex 
 * @param  {object} setActiveDataset 
 */
import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

const DatasetList = ({ datasets, activeDatasetIndex, setActiveDataset }) => (
  <Accordion activeKey={'' + activeDatasetIndex}>
    {datasets.map(({ name, description }, index) => (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant='link'
            eventKey={'' + index}
            className='stretched-link'
            onClick={setActiveDataset}
          >
            {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={'' + index}>
          <Card.Body>{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
)

export default DatasetList
