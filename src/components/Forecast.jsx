import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img className='w-12 my-1' src="https://www.accuweather.com/images/weathericons/2.svg" alt='weathericons' />
                <p className='font-medium'>22</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img className='w-12 my-1' src="https://www.accuweather.com/images/weathericons/1.svg" alt='weathericons' />
                <p className='font-medium'>25</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img className='w-12 my-1' src="https://www.accuweather.com/images/weathericons/3.svg" alt='weathericons' />
                <p className='font-medium'>24</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img className='w-12 my-1' src="https://www.accuweather.com/images/weathericons/4.svg" alt='weathericons' />
                <p className='font-medium'>29</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img className='w-12 my-1' src="https://www.accuweather.com/images/weathericons/5.svg" alt='weathericons' />
                <p className='font-medium'>22</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast