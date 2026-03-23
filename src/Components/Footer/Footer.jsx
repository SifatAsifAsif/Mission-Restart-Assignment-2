import React from 'react';
import fb from '../../assets/f.png'
import ln from '../../assets/l.png'
import gm from '../../assets/g.png'
import tw from '../../assets/t.png'


const Footer = () => {
    return (
        <div className="flex flex-col bg-black text-white">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 border-b border-gray-600 p-6">

                <div className="lg:col-span-2">
                    <h1 className="text-xl font-bold mb-2">CS — Ticket System</h1>
                    <p>CS — Ticket System related paragraph details</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-1">Company</h1>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Sales</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-1">Services</h1>
                    <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-1">Information</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-1">Social Links</h1>

                    <div className="flex items-center gap-2">
                        <img src={ln} alt="" className="w-4 h-4" />
                        <p>@CS — Ticket System</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={fb} alt="" className="w-4 h-4" />
                        <p>@CS — Ticket System</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={tw} alt="" className="w-4 h-4" />
                        <p>@CS — Ticket System</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={gm} alt="" className="w-4 h-4" />
                        <p>support@cst.com</p>
                    </div>

                </div>

            </div>

            <div className="flex justify-center items-center p-3 text-gray-400">
                <h1 className="text-xl font-bold">© 2025 CS — Ticket System. All rights reserved.</h1>
            </div>

        </div>
    );
};

export default Footer;