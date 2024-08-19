const Body = (props) => {
    const name = 'Tony'
    return (
      <>
        <h4>Body Component</h4>
        <h5>Name:{props.name}</h5>
        <h5>Age:{props.age}</h5>
      </>
    )
  }
export default Body