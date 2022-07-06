import React from 'react'
import footerlogo from '../assets/footer-logo.svg'
import facebook from '../assets/icon-facebook.svg';
import youtube from '../assets/icon-youtube.svg';
import twitter from '../assets/icon-twitter.svg';
import pinterest from '../assets/icon-pinterest.svg';
import insta from '../assets/icon-instagram.svg';
import Button from './Button';
import '../components/Footer.css'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md text-center">

                            <div className='row footerLogo '>
                                <img src={footerlogo} />
                            </div>
                            <div className='row'>
                                &nbsp;
                            </div>
                            <div className='row '>

                                <div className="d-flex flex-row">


                                    <div className="p-2"> <a href=''><img src={facebook} alt='facebook' className='socialmediaIcon' /> </a></div>
                                    <div className="p-2"><a href=''><img src={youtube} alt='youtube' className='socialmediaIcon' /></a></div>
                                    <div className="p-2"><a href=''><img src={twitter} alt='twitter' className='socialmediaIcon' /></a></div>
                                    <div className='p-2'><a href=''><img src={pinterest} alt='pinterset' className='socialmediaIcon' /></a></div>
                                    <div className='p-2'><a href=''><img src={insta} alt='instagram' className='socialmediaIcon' /></a></div>
                                </div>
                            </div>


                        </div>
                        <div className="col-md">
                            <div className="d-flex flex-column bd-highlight mb-3 align-items-start" style={{ fontSize: '15px' }}>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>About Us</a></div>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>Contact</a></div>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>Blog</a></div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="d-flex flex-column bd-highlight mb-3 align-items-start" style={{ fontSize: '15px' }}>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>Careers</a></div>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>Support</a></div>
                                <div className="p-2 bd-highlight"><a href='' className='footerLink'>Privacy Policy</a></div>
                            </div>
                        </div>
                        <div className="col-md">&nbsp;</div>
                        <div className="col-md">

                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <Button />
                                </div>
                                <div className="p-2 bd-highlight">&nbsp;</div>
                                <div className="p-2 bd-highlight"><p className='copyRight'>&copy; Easybank. All Rights Reserved</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
