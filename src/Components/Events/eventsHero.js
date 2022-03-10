/* eslint-disable */
import Net from 'vanta/dist/vanta.net.min'
import React from 'react'

class EventsHero extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = Net({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf4d03f,
        backgroundColor: 0x0,
        maxDistance: 18.00
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
      return <div ref={this.vantaRef} className="events_hero_container">
        <p className="events_hero_text">
        Events
        </p>
      </div>
    }
  }
export default EventsHero;