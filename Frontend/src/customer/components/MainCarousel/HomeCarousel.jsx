import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img
        src="https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        key="1"
        className='cursor-pointer'
        role='presentation'
    />,
    <img
        src="https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        key="2"
        className='cursor-pointer'
        role='presentation'
    />,
    <img
        src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGV8ZW58MHx8MHx8fDA%3D"
        alt=""
        key="3"
        className='cursor-pointer'
        role='presentation'
    />,
];

const MainCarousel = () => (

    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel;