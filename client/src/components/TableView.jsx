import React from 'react'

function TableView(props) {
  console.log(props)
  return (
    <div>
      {props.details.map((val, key) => {
        return <div>
          {props.details.fname}
        </div>
      })}
    </div>
  )
}

export default TableView