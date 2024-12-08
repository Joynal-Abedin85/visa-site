import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Latestvisa from '../component/Latestvisa';

const Allvisa = () => {
    const visas = useLoaderData()
    return (
        <>
        <div className="bg-gray-100 dark:bg-teal-900 dark:text-white transition duration-300 py-5">
            <h1 className="text-3xl text-center text-teal-500 font-bold py-4">our visa is {visas.length}</h1>

            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto  '>
            {
                visas.map(visa => <Latestvisa key={visa._id} visa={visa}></Latestvisa>)
            }

            </div>

            </div>
        </>
    );
};

export default Allvisa;