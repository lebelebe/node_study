import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id='nav' className='w-100 border-bottom border-dark border-2'>
                <div className="container">
                    <div className="row">
                    <h2><img src="" alt="" /></h2>
                    <ul className='d-flex'>
                        <li className='col-3'><a href="">인트로</a></li>
                        <li className='col-3'><a href="">포트폴리오</a></li>
                        <li className='col-3'><a href="">인터뷰</a></li>
                        <li className='col-3'><a href="">면접제안</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;