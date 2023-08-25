import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SubMessage = (main: any) => {
    const {name,id,image,message,ago} = main.main;
    return (
        <div className='p-4   '>
          <Link className='flex justify-between items-center' href={`/components/sub`}>

           <div className=''>
            <Image className='rounded-full' src={image} alt='Image' width={54} height={54}/>
         
           </div>
           <div className='text-start'>
           <h1 className=''>{name}</h1>
           <p className='text-sm'>{message}</p>
           </div>
           <div>
           <p className='text-sm'> {ago}</p>
           </div>
         
          </Link>
        </div>
    );
};

export default SubMessage;