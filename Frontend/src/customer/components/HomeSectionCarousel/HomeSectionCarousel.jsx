import React, {useState} from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import {Button} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data, sectionName}) => {

  const [activeIndex, setActiveIndex] = useState(0)

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slideNext=()=>{setActiveIndex(activeIndex+1);};
  const slidePrev=()=>{setActiveIndex(activeIndex-1);};
  
  const syncActiveIndex=({item})=>{setActiveIndex(item);};
  
  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item}/>)
  return (
    <div className='border'>
      <h2 className='text-2xl font-extrabold text-gray-900 pl-5 pt-5'>{sectionName}</h2>
      <div className='relative px-4'>
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableDotsControls
          responsive={responsive}
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", right:"0rem", 
        transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" onClick={slideNext}>
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
        </Button>}

        {activeIndex !== 0 && <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", left:"0rem", 
        transform:"translateX(-50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" onClick={slidePrev}>
            <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)", color:"black"}}/>
        </Button>}

      </div>
    </div>

  )
}

export default HomeSectionCarousel