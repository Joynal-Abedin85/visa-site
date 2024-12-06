import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Latestvisa from '../component/Latestvisa';

const Allvisa = () => {
    const visas = useLoaderData()
    return (
        <>
            <h1 className="text-3xl text-center text-teal-500 font-bold my-4">our visa is {visas.length}</h1>

            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto  '>
            {
                visas.map(visa => <Latestvisa key={visa._id} visa={visa}></Latestvisa>)
            }

            </div>

            
        </>
    );
};

export default Allvisa;