import {FaStar} from 'react-icons/fa' 
import { useState } from 'react';
import './styles.css';



export default function StarRating({noOfStars = 5 }){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    /* Recive the current index of the star you are clicking*/
    function handleClick(getCurrentIndex)
    {
        setRating(getCurrentIndex);

    }

    function handleMouseEnter(getCurrentIndex)
    {
         setHover(getCurrentIndex);
    }

    function handleMouseLeave()
    {
        /* When the mouse leaves the star rating component, we want to set the hover state to the current rating that we have already selected. */
         setHover(rating);
    }

    return <div className="starRating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1

                return <FaStar
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave()}
                size={40}
                />
            })
        }


    </div>
}