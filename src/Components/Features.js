import React from 'react'
import { Divider } from '@material-ui/core';


const tileData = [
    {
        img: 'https://files.codingninjas.in/0000000000001185.png',
        title: 'Exceptional Faculty',
        author: 'An online platform using proprietary technologies, social elements and well-crafted content curriculum delivering the finest learning experience.',
        cols: 2,
    },
    {
        img: 'https://files.codingninjas.in/0000000000001183.png',
        title: 'CodeZen',
        author: 'An online platform using proprietary technologies, social elements and well-crafted content curriculum delivering the finest learning experience.',
        cols: 2,
    },
    {
        img: 'https://files.codingninjas.in/0000000000001186.png',
        title: 'Placements',
        author: 'An online platform using proprietary technologies, social elements and well-crafted content curriculum delivering the finest learning experience.',
        cols: 3,
    },
    {
        img: 'https://files.codingninjas.in/0000000000001184.png',
        title: 'Mentor Support',
        author: 'An online platform using proprietary technologies, social elements and well-crafted content curriculum delivering the finest learning experience.',
        cols: 2,
    },
    {
        img: 'https://files.codingninjas.in/0000000000001182.png',
        title: 'Get Secured with Certificate',
        author: 'An online platform using proprietary technologies, social elements and well-crafted content curriculum delivering the finest learning experience.',
        cols: 1,
    },
]

export default function ImageGridList() {
  
    return (
      <div style={{backgroundColor:'white',display:'flex',justifyContent:'space-around',padding:'0px 40px'}} >
          <div class='grid' >
              <div class='features' >Features</div>
          {tileData.map((tile) => (
                  <div class='card' >
                        <img src={tile.img} alt={tile.title} width='400px' height='300px' />
                        <div class='cardTitle' >
                            {tile.title}
                        </div>
                        <Divider/>
                        <div class='cardSubTitle' >{tile.author}</div>
                    </div>
          ))}
          </div>
      </div>
    );
  }