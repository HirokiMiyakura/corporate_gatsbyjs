import React from "react"
import Particles from 'react-particles-js'

export default () => (
  

  <Particles 
    params={{ 
      particles: { 
        number: { 
          value: 100, 
          density: { 
            enable: true, 
            value_area: 1000, 
          } 
        }, 
      }, 
    }} 
  /> 
)