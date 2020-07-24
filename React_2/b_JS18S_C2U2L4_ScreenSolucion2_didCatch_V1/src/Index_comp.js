import React, { Component } from 'react'
import App from './App.js'
import ErrorBoundary from './ErrorBoundary'

class Index_comp extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary><App /></ErrorBoundary>
        
      </div>
    )
  }
}

export default Index_comp;
