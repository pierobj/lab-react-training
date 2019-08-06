import React from 'react'

function NumbersTable(props) {
return (
    <section>
      {
        [...Array(10).keys()].map((number,index) => {
          return (
            <div key={index} style={ (number%2 === 0)? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>{number}</div>
          )
        })
      }
    </section>
  )
}

export default NumbersTable;