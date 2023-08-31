import React from 'react';
import Nav from '../Nav';
import './style.css';

const Header = ({pages, currentPage, setCurrentPage }) => {
    return <header>
        <h1 className='text-center'>Fortunato Iodice</h1>
        <div className="container d-lg-flex justify-content-lg-between nav">
            <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </header>
};

export default Header;