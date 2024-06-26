import React from 'react'

export class ErrorBoundary extends React.Component<any, any> {
  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return {
      error: true
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}