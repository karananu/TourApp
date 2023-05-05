import React from 'react'
import Card from './Card'
const Tours = ({tours,notInterested}) => {
  return (
    <div className='container'>
    <div>
        <h2 className='title'>Plan with Love</h2>
    </div>
    <div className='cards'>
        {tours.map((tour)=>{
            return <Card key={tour.id}
            {...tour} notInterested={notInterested}></Card>
        })}
    </div>
    </div>
  )
}

export default Tours