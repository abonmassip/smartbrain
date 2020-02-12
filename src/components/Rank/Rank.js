import React from 'react';

const Rank = ({name, entries}) => {
    if (entries < 10) {
        return (
            <div>
                <div className='white f3'>
                    {name}{', your current entry count is...'}
                </div>
                <div className='white f1'>
                    {entries}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='white f3'>
                    {name}{', your current entry count is...'}
                </div>
                <div className='white f1'>
                    {entries}
                </div>
                <div className='white f2 b'>
                    {'You reached the limit of detections. Thank you for using the app!'}
                </div>
            </div>
        );
    }
    
}

export default Rank;