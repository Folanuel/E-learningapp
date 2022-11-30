import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsDribbble, BsGithub} from 'react-icons/bs'
import { Footer } from 'flowbite-react'

export const PageFooter = () => {
    return (
        <div>
            <Footer bgDark={false}>
                <div className="w-full rounded-t-none">
                    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col={true}>
                        <Footer.Link>
                            About Us
                        </Footer.Link>
                        <Footer.Link>
                            Careers
                        </Footer.Link>
                        <Footer.Link>
                            Brand Center
                        </Footer.Link>
                        <Footer.Link>
                            Blog
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col={true}>
                        <Footer.Link>
                            Discord Server
                        </Footer.Link>
                        <Footer.Link>
                            Twitter
                        </Footer.Link>
                        <Footer.Link>
                            Facebook
                        </Footer.Link>
                        <Footer.Link>
                            Contact Us
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col={true}>
                        <Footer.Link>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link>
                            Licensing
                        </Footer.Link>
                        <Footer.Link>
                            Terms & Conditions
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col={true}>
                        <Footer.Link>
                            iOS
                        </Footer.Link>
                        <Footer.Link>
                            Android
                        </Footer.Link>
                        <Footer.Link>
                            Windows
                        </Footer.Link>
                        <Footer.Link>
                            MacOS
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    </div>
                    <div className="w-full bg-white py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        
                        by="E-learning™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                        
                        icon={BsFacebook}
                        />
                        <Footer.Icon
                        
                        icon={BsInstagram}
                        />
                        <Footer.Icon
                        
                        icon={BsTwitter}
                        />
                        <Footer.Icon
                        
                        icon={BsGithub}
                        />
                        <Footer.Icon
                        
                        icon={BsDribbble}
                        />
                    </div>
                    </div>
                </div>
                </Footer>
        </div>
    )
}

