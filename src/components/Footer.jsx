import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
    return(
        <footer className="w-full bg-[#535357] text-[#f1f1f2] flex flex-col p-4 h-auto">
            <div className="bg-inherit flex flex-row justify-evenly mb-4">
                <div className="flex flex-col">
                    <div className="flex flex-col mb-4">
                    <h2 className="mb-4 uppercase">need help?</h2>
                    <a href="#">Chat with us</a>
                    <a href="#">Help center</a>
                    <a href="#">Contact us</a>
                    </div>
                    <div className="flex flex-col font-light not-last:mb-4">
              
                    <h2 className="mb-4 uppercase">useful links</h2>
                    <a href="#">Track your order</a>
                    <a href="#">Shipping and Delivery</a>
                    <a href="#">Pick-up stations</a>
                    <a href="#">Return policy</a>
                    <a href="#">How to order?</a>
                    <a href="#">Dispute resolution policy</a>
                    <a href="#">Corporate and bulk purchase</a>
                    <a href="#">Advertise with jumia</a>
                    <a href="#">Report a product</a>
                    <a href="#">Humia payment information guidlines</a>
                    <a href="#">Black friday</a>
                   
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="mb-4 uppercase">About jumia</h2>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                </div>
                <div className="flex flex-col">
                    <h2 className="mb-4 uppercase">Make money with jumia</h2>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                    <a href="#">about us</a>
                   
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-4 uppercase">Jumia international</h1>
                    <div className="flex flex-row">
                        <div className="flex flex-col text-gray-100">
                            <a href="#">Algeria</a>
                            <a href="#">Ivory Coast</a>
                            <a href="#">Eqypt</a>
                            <a href="#">Ghana</a>

                        </div>
                        <div className="flex flex-col">
                        <a href="#">Morocco</a>
                        <a href="#">Nigeria</a>
                        <a href="#">Senegal</a>
                        <a href="#">Uganda</a>
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex flex-row justify-start gap-7">
                <div className="flex flex-col">
                    <h2 className="">JOIN US ON</h2>
                    <div className="flex flex-row gap-4">
                    <FaFacebook />
                    <BiLogoInstagramAlt />

                        </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;