import React from 'react'
import { Divider } from '@material-ui/core';


const tileData = [
    {
        img: 'https://files.codingninjas.in/0000000000001185.png',
        title: 'Exceptional Faculty',
        author: 'Qualified faculty with knowledge of the lastest trends if the coding world. You will be provided with easy methods and tricks to conquer the coding methods and structures.',
        cols: 2,
    },
    {
        img: 'https://files.codingninjas.in/0000000000001184.png',
        title: 'Mentor Support',
        author: 'Coding is important. But what framework you should choose or wwhich language is the best for you? These are some of the questions answered by our experienced mentors. They will guide your ship in the ocean of the IT sector.',
        cols: 2,
    },
]

export default function ImageGridList() {

    return (
        <React.Fragment>
            <div className='responsive' >
                <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', padding: '0px 40px' }} >
                    <div class='grid' >
                        <div class='features' >Features</div>
                        {tileData.map((tile) => (
                            <div class='card' >
                                <img src={tile.img} alt={tile.title} width='400px' height='300px' />
                                <div class='cardTitle' >
                                    {tile.title}
                                </div>
                                <Divider />
                                <div class='cardSubTitle' >{tile.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div style={{display:'flex',justifyContent:'space-around'}} >
                    <div class='grid' >
                        <div class='features' >Features</div>
                        {tileData.map((tile) => (
                            <div class='card' >
                                <img src={tile.img} alt={tile.title} width='200px' height='150px' />
                                <div class='cardTitle' >
                                    {tile.title}
                                </div>
                                <Divider />
                                <div class='cardSubTitle' >{tile.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}