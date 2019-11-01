import React from 'react'

function NumbersTable(props) {
return (
    <section style={{display: 'flex'}}>
      {
        [...Array(10).keys()].map((number,index) => {
          return (
            <div key={index} style={ (number%2 === 0)? {backgroundColor: 'red', width:'20px'} : {backgroundColor: 'white', width:'20px'}}>{number}</div>
          )
        })
      }
    </section>
  )
}

export default NumbersTable;