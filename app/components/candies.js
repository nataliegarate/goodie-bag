import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../store'

export class Candies extends React.Component() {
  componentDidMount() {
    this.props.getCandies()
  }

  render() {
    const {candies} = this.props
    return (
      <div>
       {candies.map(candy => (
            <div key={candy.id}>
              <img src={candy.imageUrl} />
              <p>{candy.name}</p>
            </div>
          ))}

      </div>
    )
  }

}

const mapState = (state) => {
  return {
    candies: state.candies
  }
}


const mapDispatch = (dispatch) => {
  return {
    getCandies: () => dispatch(getCandies())
  }
}


export default connect(mapState, mapDispatch)(Candies)

