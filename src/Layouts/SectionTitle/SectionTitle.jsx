import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
            <h2 className='text-xl lg:text-2xl font-bold text-center text-[#DAFF0D] uppercase'>{heading}</h2>
            <p className='text-2xl lg:text-4xl font-bold text-white text-center uppercase mt-2'>{subHeading}</p>
            <div className="divider"></div> 
        </div>
    );
};

export default SectionTitle;