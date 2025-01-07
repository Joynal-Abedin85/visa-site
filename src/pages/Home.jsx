import React from 'react';
import Banner from '../component/Banner';
import { useLoaderData } from 'react-router-dom';
import Homevisa from '../component/Homevisa';
import Extra from '../component/Extra';
import BestVisaCustom from '../component/BestVisaCustom';
import Blog from '../ejpupdate/Blog';
import Promotional from '../ejpupdate/Promotional';
import Offer from '../ejpupdate/Offer';
import Newslatter from '../ejpupdate/Newslatter';

const Home = () => {
    const visas = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='pt-20 bg-gray-100 dark:bg-teal-900 dark:text-white transition duration-300'>
                <h2 className='text-[#00F9AA]  font-bold text-center text-2xl mb-4'>Latest card</h2>
                {
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto  '>
                    {
                        visas.map(visa => <Homevisa key={visa._id} visa={visa}></Homevisa>)
                    }
        
                    </div>

                }
            </div>
            <Extra></Extra>
            <BestVisaCustom></BestVisaCustom>
            <Blog></Blog>
            <Promotional></Promotional>
            <Offer></Offer>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;