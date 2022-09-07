import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './Brand.css'


function Brand() {
  return (
    <>
    <FontAwesomeIcon icon={faHouse} className="color" style={{ marginRight: '30px' , marginLeft: '-60px'}} />
    </>
  )
}

export default Brand