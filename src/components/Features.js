import React from 'react'
import online from '../assets/icon-online.svg';
import budgeting from '../assets/icon-budgeting.svg'
import onboarding from '../assets/icon-onboarding.svg'
import openapi from '../assets/icon-api.svg'
import FeaturesCard from './FeaturesCard';
import '../components/Features.css';


function Features(props) {
    return (
        <>
            <div className='bankingContainer'>
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <h2 className='headerHeading my-5 text-start'>Why choose Easybank?</h2>
                            <p className='headerContent my-2 text-start'>We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                        </div>
                        <div className="col d-none d-lg-block">
                            &nbsp;
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-md">
                            <FeaturesCard src={online} featureTitle="Online Banking" featureDescription="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." />
                        </div>
                        <div className="col-md">
                            <FeaturesCard src={budgeting} featureTitle="Simple Budgeting" featureDescription="See exactly where your money goes each month. Recieve notifications when you're close to hittimg your limits." />
                        </div>
                        <div className="col-md">
                            <FeaturesCard src={onboarding} featureTitle="Fast Onboarding" featureDescription="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
                        </div>
                        <div className="col-md">
                            <FeaturesCard src={openapi} featureTitle="Open API" featureDescription="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features