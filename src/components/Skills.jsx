import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Jquery from '../assets/jquery.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Mongo from '../assets/mongo.png';
import Flutter from '../assets/flutter.png';
import QGIS from '../assets/qgis.png';
import ArcGIS from '../assets/arcgis.png';

function skills(picture, skill) {

    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-800 duration-500'>
            <img className='w-20 mx-auto' src={picture} alt="HTML icon" />
            <p className='my-4'>{skill}</p>
        </div>)
}

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skills(HTML, 'HTML')}
                    {skills(CSS, 'CSS')}
                    {skills(JavaScript, 'JavaScript')}
                    {skills(ReactImg, 'React')}
                    {skills(Jquery, 'JQuery')}
                    {skills(Bootstrap, 'Bootstrap')}
                    {skills(Tailwind, 'Tailwind')}
                    {skills(Node, 'NodeJS')}
                    {skills(Mongo, 'MongoDB')}
                    {skills(Flutter, 'Flutter')}
                    {skills(QGIS, 'QGIS')}
                    {skills(ArcGIS, 'ArcGIS')}


                </div>
            </div>
        </div>

    );
};

export default Skills;
