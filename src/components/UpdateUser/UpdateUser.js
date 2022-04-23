import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {updateId} =useParams()
    return (
        <div>
            <h2>update user:{updateId}</h2>
        </div>
    );
};

export default UpdateUser;