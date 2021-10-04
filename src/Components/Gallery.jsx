import React from 'react';
import {GiGrapes} from 'react-icons/gi'
import {HeaderGallery, MainGallery} from './styles/Gallery.styled.js'

const Gallery = () => {
    return (
        <>
            <HeaderGallery>
                <span>
                    <GiGrapes />
                </span>
                <p>
                    Nisi fugiat ea reprehenderit qui incididunt tempor 
                </p>
                <h3>
                    Our <span>Gallery</span>
                </h3>
            </HeaderGallery>
            <MainGallery>
                <div>
                    <img src='https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' 
                    alt='wine' />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80'
                     alt='wine' />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80' 
                    alt='wine' />
                </div>
                <div>
                    <img src='https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80'
                     alt='wine' />
                </div>
            </MainGallery>

        </>
    );
};

export default Gallery;