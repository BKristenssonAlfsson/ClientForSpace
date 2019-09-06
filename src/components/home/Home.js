import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAllImages } from '../../redux/actions/Actions';

export default function Home() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllImages());
    }, [dispatch]);

    return (
        <div>
            Home
        </div>
    )
}
