import React from "react";
import { 
    FaFacebook ,
     FaTwitter, 
     FaLinkedin,
      FaInstagram, 
      FaYoutube, 
      FaTiktok, 
      FaCcPaypal,
      FaCcMastercard,
      FaCcVisa ,
      FaCcApplePay,
      FaCcAmazonPay
    } from "react-icons/fa";
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
                    <h2 className="mb-4 uppercase">About Humia</h2>
                    <a href="#">about us</a>
                    <a href="#">Store credit Terns and Conditions</a>
                    <a href="#">Returns and Refunds Policy</a>
                    <a href="#">Humia careers</a>
                    <a href="#">Humia express</a>
                    <a href="#">Terms and Conditions </a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Cookie Notice</a>
                    <a href="#">Flash sales </a>
                    <a href="#">Humia global</a>
                </div>
                <div className="flex flex-col">
                    <h2 className="mb-4 uppercase">Make money with Humia</h2>
                    <a href="#">sell on humia</a>
                    <a href="#">Vendor hub</a>
                    <a href="#">Become sales consultant</a>
                    <a href="#">Humia city partner program</a>
                   
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-4 uppercase">Humia international</h1>
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
            <div className="flex flex-row justify-center p-4 gap-7">
                <div className="flex flex-col mb-4">
                    <h2 className="">JOIN US ON</h2>
                    <div className="flex flex-row  gap-2">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaYoutube />
                    <FaTiktok />
                </div>

                </div>
                <div className="flex flex-col mb-4">
                    <h2 className="">PAYMENT METHODS</h2>
                    <div className="flex flex-row gap-2">
                    <FaCcMastercard />
                    <FaCcVisa />
                    <FaCcPaypal />
                    
                </div>

                </div>

            </div>
            <div className="flex flex-row bg-inherit justify-evenly">
                <div className="flex flex-col">
                    <a href="#">Samsung</a>
                    <a href="#">Iphone</a>
                    <a href="#">Google Pixel</a>
                    <a href="#">LG</a>
                    <a href="#">One Plus</a>
                    <a href="#">Huawei</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Adidas</a>
                    <a href="#">Nike</a>
                    <a href="#">Xiaomi</a>
                    <a href="#">Techno</a>
                    <a href="#">Itel</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>
                <div className="flex flex-col">
                <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>
                <div className="flex flex-col">
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                    <a href="#">Items</a>
                </div>

            </div>
            <hr className="w-full bg-white mt-6 mb-6" />
            <div className="text-center">
                <h2>HumiaPay</h2>
            </div>
        </footer>
    )
}

export default Footer;