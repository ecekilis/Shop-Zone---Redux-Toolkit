import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {

    const settings = {

        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className=''>
                        <div className='text-5xl font-bold'>
                            En kaliteli Ayakkabilar Burada
                        </div>
                        <div className='text-lg my-4'>Spor Ayakkabilar</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>

                    </div>
                    <img src="ayakkabii.jpg" className='w-[300px]' alt="" />
                </div>

                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className=''>
                        <div className='text-5xl font-bold'>
                            En kaliteli Cantalar Burada
                        </div>
                        <div className='text-lg my-4'>Cantalar</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>

                    </div>
                    <img src="canta.jpg" className='w-[300px]' alt="" />

                </div>
            </Slider>
        </div>
    )
}

export default SliderComp
