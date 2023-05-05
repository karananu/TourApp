import React,{useState} from 'react'

const Card = ({id,image,info,price,name,notInterested}) => {

    const [show,SetRead]=useState(false);

    const description=show ? info:`${info.substring(0,200)}....`
    
    function readmoreHandler(){
        SetRead(!show);
    }
   
  return (
    <div className='card'>
        <img src={image} alt="" className='image'/>
        <div className='tour-detail'>
            <h4 className="tour-price">Rs{price}</h4>
            <h4 className="tour-name">{name}</h4>

        </div>
        <div className="description">
            {description} 
            <span className='read-more' onClick={readmoreHandler}>
                {show?'show less':'read more'}
            </span>
        </div>
        <button onClick={()=>notInterested(id)}
            className="btn-red">Not Interested</button>


    </div>
  )
}

export default Card