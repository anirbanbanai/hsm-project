import Image from 'next/image';
import React from 'react';

const SubGroup = ({main} : any) => {
    const {group_name, image} = main;
    // console.log(main);
    return (
        <div className='p-4 flex justify-between border'>
           <Image src={image} alt='Image' width={55} height={55}></Image>
           <h1 className='text-2xl font-semibold'>{group_name}</h1>
        </div>
    );
};

export default SubGroup;