import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        <div className='h-full flex-shrink-0 w-[500px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Hiii</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a Youtube Video
            </h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex labore error pariatur, quo corporis.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[500px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Hiii</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a Youtube Video
            </h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex labore error pariatur, quo corporis.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[500px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Hiii</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a Youtube Video
            </h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex labore error pariatur, quo corporis.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[500px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Hiii</h3>
                <h4 className='text-sm'>20-feb-2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>
                Make a Youtube Video
            </h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex labore error pariatur, quo corporis.</p>
        </div>
    </div>
  )
}

export default TaskList