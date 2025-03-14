


export const common = {
    infoContact:{
        phone: {
            display: "0969.168.629",
            href: "tel:0969168629"
        },
        mail : {
            display: "20studio.contact@gmail.com",
            href: "mailto:20studio.contact@gmail.com"
        }
    },
    listBtnUrl: {
        "Home": '/home',
        "About us": '/about',
        "Project": '/work',
        "Service": '/service',
        "Contact": '/contact',
        "Sustainability":'/sustainability'
    }
}


export const about_page = {
    propsForGsap: {
        scrollerRef: "#aboutpage",
        delayForBehindComponent: 1,
    },
    content: {
  
        heroSection: {
            scrollerRef: "#aboutpage",
            classAdd: "dark_background",
            backgroundImage: {
                url: "/about/banner.webp",
                size: { width: "100%", height: "auto" }
            },
            moreStyle:{ },
            disableParaInro : false,
            paraIntro:["We are a global creative fashion studio base in","Ho Chi Minh city. We work with artist, designer and manufactures","on clients projects to produce outstanding works."],
            tit : ["Fashion","Creative","Production"],
            morePara:"Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.",
            listBtn:['Home','Project','Sustainability','Service','Contact'],
            btnMore: ['Our service','/service']
        },
        advantage: {
            disableIndex: false,
            tag: "Our procedure",
            more: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            items: [
                ["Meet & Briefing", "Meet with the client to understand their needs, goals, and vision. Gather all necessary information and share initial ideas to ensure alignment."],
                ["Consulting & Quotation", "Provide expert advice and present a detailed quotation covering design, materials, and production costs. Finalize the contract once the client agrees."],
                ["Project Execution", "Begin the design and production process, collaborating with the client for approvals and ensuring quality throughout."],
                ["Final Review and Delivery", "Present the finished product, make any final adjustments, and deliver the project. Gather feedback and close the project."]
            ]

        },

        letContact: {
            disableImg: true,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From" ,"vision","to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        }

    }
}
export const contact_page = {
    propsForGsap: {
        scrollerRef: "#contactpage"
    },
    content: {

    }
}
export const home_page = {
    propsForGsap: {
        scrollerRef: "#homepage"
    },
    content: {
       
        heroSection: {
            scrollerRef: "#homepage",
            classAdd: "dark_background",
            moreStyle:{},
            backgroundImage: {
                url: "/home/banner.png",
                size: { width: "100%", height: "auto" }
            },
            disableParaInro : false,
            paraIntro:["We are a global creative fashion studio base in","Ho Chi Minh city. We work with artist, designer and manufactures","on clients projects to produce outstanding works."],
            tit : ["Fashion","Creative","Production"],
            morePara:"Beside designing and fashion production, 20Studio work on projects of all types including brand and product development, digital experience design, social media design, production management and fashion business solutions.",
            listBtn:['About us','Sustainability','Project','Service','Contact'],
            btnMore: ['Explore our services','/service']
        },
        letContact: {
            disableImg: false,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From" ,"vision","to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        }

    }
}
export const service_page = {
    propsForGsap: {
        scrollerRef: "#servicepage"
    },
    content: {
        letContact: {
            disableImg: true,
            disableTit: false,
            disableBtn: false,
            tag: "Contact us",
            tit: ["From" ,"vision","to reality"],
            more: "Let's make dream come true.",
            btn: "Lett&apos;s touch!"
        }
    }
}
export const sustainability_page = {
    propsForGsap: {
        scrollerRef: "#sustainabilitypage"
    },
    content: {
        advantage: {
            disableIndex: false,
            tag: "Our solution for sustainability",
            more: "To be sustainable, we are committed to offering eco-friendly solutions that align with your budget and your values, in creative ways than spending money.",
            items: [
                ["Application of Tech", "Deep down, we are a tech-enable fashion company, leverge tech and creative ideas to thrive and to make a sustainable business."],
                ["Optimize Procedures", "No need to spend on fancy industrial equipments, or over-budget materials, we look into the workflow between us and our customers to cut-off unneccessery steps and make it align as possible."],
                ["Design toward Efficient", "Right at the beginning of the process, we work together with our customers to create the most efficient design and construction solutions."],
                ["Equaly Benefit for all Stakeholders", "Thinking of our customers, suppliers, and workers, we continuously seek ways to create the most value for everyone involved in the process. Our goal is to ensure that each stakeholder benefits from our commitment to excellence and collaboration."]
            ]

        },
        intro: {
            disableImg: true,
            disableTit: false,
            disableBtn: true,
            tag: "Sustainability",
            tit:["Sustainability","in","every attemps"] ,
            more: "Sustainable is hard, especially for those who not have deep pocket. At 20Studio, we understand the concern toward sustainability of our customer and strive to make it accessible without compromising on quality or style. We believe that sustainability shouldn't be a luxury, but a standard that everyone can afford.",
        
        },
        letContact: {
            disableImg: true,
            disableTit: true,
            disableBtn: false,
            tag: "20 Sustainability",
            tit: "",
            more: "We strive to be sustainable in every effort we make because we believe Even the smallest effort can make a better world.",
            btn: "Let’s build it!"
        }
    }
}
export const project1_page = {
    propsForGsap: {
        scrollerRef: "#work1page"
    },
    content: {
        
        introWorkPage: {
            mission:["Sample management"],
            scrollerRef: "#work1page",
            img: [
                "/clone/services1.webp",
                "image_cache_services1"
            ],
            name: ["Unwanted", "Project"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Bui Dong Duy",
            infoProject: "Personal Prject of Bui Dong Duy",
            desProject : "Personal Prject of Bui Dong Duy"
        },
        gridImageSlider: {
            img: [
                "/work1/1.png",
                "/work1/2.png",
                "/work1/3.png",
                "/work1/4.png",
                "/work1/5.png",
                "/work1/6.png",
                "/work1/7.png",
                "/work1/8.png",
            ],
            img2:[
                "/work1/4.png",
                "/work1/7.png",
                "/work1/5.png",
                "/work1/8.png",
                "/work1/2.png",
            ],
            imgOrigin: [
                "/work1/origin/1.png",
                "/work1/origin/2.png",
                "/work1/origin/3.png",
                "/work1/origin/4.png",
                "/work1/origin/5.png",
                "/work1/origin/6.png",
            ]
        }
    }
}
export const project2_page = {
    propsForGsap: {
        scrollerRef: "#work2page"
    },
    content: {
        introWorkPage: {
            mission:["Sample management"],
            scrollerRef: "#work2page",
            img: [
                "/clone/services2.webp",
                "image_cache_services2"
            ],
            name: ["Nét", "Collection"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Fashion Designer Huynh Anh Thu",
               infoProject: "Personal Prject of Huynh Anh Thu",
            desProject : "Personal Prject of Huynh Anh Thu"
        },
        gridImageSlider: {
            img: [
                "/work2/5.png",
                "/work2/3.png",
                "/work2/6.png",
                "/work2/4.png",
                "/work2/1.png",
                "/work2/2.png",
                
            ],
            img2:[
                "/work2/7.png",
                "/work2/8.png",
                "/work2/9.png",
                "/work2/10.png",
                "/work2/12.png",
            ],
            imgOrigin: [
                "/work2/origin/1.png",
                "/work2/origin/2.png",
                "/work2/origin/3.png",
                "/work2/origin/4.png",
                "/work2/origin/5.png",
                "/work2/origin/6.png",
            ]
        }
    }
}
export const project3_page = {
    propsForGsap: {
        scrollerRef: "#work3page"
    },
    content: {
        introWorkPage: {
            mission:["Production management"],
            scrollerRef: "#work3page",
            img: [
                "/clone/services3.webp",
                "image_cache_services3"
            ],
            name: ["Lungtung", "Collection 2"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 3 weeks",
            client: "Lungtung Studio",
              infoProject: "Lungtung Second Collection",
            desProject : "Spring Summer 2024"
        },
        gridImageSlider: {
            img: [
                "/work3/1.png",
                "/work3/2.png",
                "/work3/3.png",
                "/work3/4.png",
                "/work3/5.png",
                "/work3/6.png",
            ],
            img2:[
                "/work3/7.png",
                "/work3/8.png",
                "/work3/9.png",
                "/work3/12.png",
                "/work3/10.png",
            ],
            imgOrigin: [
                "/work3/origin/1.png",
                "/work3/origin/2.png",
                "/work3/origin/3.png",
                "/work3/origin/4.png",
                "/work3/origin/5.png",
                "/work3/origin/6.png",
            ]
        }
    }
}
export const project4_page = {
    propsForGsap: {
        scrollerRef: "#work4page"
    },
    content: {
        introWorkPage: {
            mission:["Web Development"],
            scrollerRef: "#work4page",
            img: [
                "/clone/services4.webp",
                "image_cache_services4"
            ],
            name: ["20Studio", "Website"],
            des: "The beauty of Vietnamese calligraphy is expressed in fashion through techniques like hand-embellishment, deconstructing the traditional male áo dài, reassembling with metal rings, and multi-material weaving, creating a unique story in each outfit.",
            challenge: "We believe that all good things are achieved by those who are willing to put in passion, courage and craftsmanship.",
            role: ["Fashion Develop", "Prototyping", "Sourcing", "Consulting"],
            date: "Jan 2023 - 123 weeks",
            client: "20Studio Brand"
        }
    }
}