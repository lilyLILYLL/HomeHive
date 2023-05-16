import lawn from "../assets/lawn_maintenance/lawn_maintenance.jpeg";
import AC from "../assets/ACHS/AC.jpeg";
import Fence from "../assets/fence_installation/Fence.jpeg";
import handyman from "../assets/handyman/handyman.jpeg";
import pest_control from "../assets/pest_control/pest.jpeg";
import wallpainter from "../assets/painting/wallpainter.jpeg";
import garden_care from "../assets/lawn_maintenance/garden_care.png";
import lawn_mowing from "../assets/lawn_maintenance/lawn_mowing.png";
import hedging from "../assets/lawn_maintenance/lawn_hedging.png";
import aircon_repair from "../assets/ACHS/AC_repair.png";
import aircon_installation from "../assets/ACHS/Air-Servicing.png";
import airecon_servicing from "../assets/ACHS/AC_three.png";
import house_paiting from "../assets/painting/painting_one.png";
import roof_paiting from "../assets/painting/roof_painting.png";
import fencing_gate from "../assets/fence_installation/Fencing-installation.png";
import fencing_repairs from "../assets/fence_installation/Fencing-Repair.png";
import Carpentry from "../assets/handyman/Carpentry.png";
import Electrical from "../assets/handyman/Electrical.png";
import Plumbing from "../assets/handyman/Residential-Plumbing-Service.png";

export const services = [
    {
        serviceField: "Lawn Maintenance",
        link: "lawn-maintenance",
        image: lawn,
        availableServices: [],
        description: `The HomeHive team is made up of professional gardeners with decades of experience in mowing and all-round lawn care. We know the perfect height to cut your grass in order to reduce bald spots, weed growth and stress on your lawn and our trusted lawn care techniques can help to promote and grow a healthier, more lush and greener lawn that will be the envy of the street.`,
    },
    {
        serviceField: "Fence Installation",
        link: "fence-installation",
        image: Fence,
        availableServices: [],
        description: `If you are looking for a quality fencing installation that will not only provide your property with the protection you need but will also enhance the look of your home or business, then you need to call HomeHive. We provide a wide range of fencing solutions to perfectly match your home, business or rural area. We not only offer a range of timber fencing options that can be customised to suit your needs, but we also provide Colorbond fencing that can be done up in a variety of colours and designs to accommodate your home. We strive to provide only the highest quality and selection to the entire Wollongong area, so you can be sure that you are getting only a top of the line fence that will stand the test of time.`,
    },
    {
        serviceField: "Painting",
        link: "painting",
        image: wallpainter,
        availableServices: [],
        description: `Worried about cracks and peeling wallpaper around your home? Are damp patches and stains damaging the value of your property? Give our local home painters and decorators a call today. We offer tailored solutions to help you restore and renovate your home. Our customers love our skilled and friendly team of local painters. Paying meticulous attention to detail, our painters can restore or repaint any tricky space, corner or individual item. `,
    },
    {
        serviceField: "AC and Heater Servicing",
        link: "ACHS",
        image: AC,
        availableServices: [],
        description: `Air conditioning systems are an investment, and as a home or business owner, the last thing you want to be doing is worrying about the air conditioner or experiencing a complete breakdown.Our air conditioning service and maintenance program is for regular servicing of both residential and commercial air conditioning units.`,
    },
    {
        serviceField: "Pest Control",
        link: "pest-control",
        image: pest_control,
        availableServices: [],
        description: `HomeHive provides a premium pest control and termite services\n.
        Using only the highest quality products on the market, HomeHive  provides treatments that are not just safe and effective, but totally guaranteed!`,
    },
    {
        serviceField: "Handyman",
        link: "handyman",
        image: handyman,
        availableServices: [],
        description: `Our handymen service  and are accredited, security checked and fully insured for your peace of mind. They can handle almost any property maintenance task you throw at them, from general repairs to painting, roofing, carpentry, tiling and even installing locks & screens. `,
    },
];

export const availableServices = {
    LAWN_MAINTENANCE: [
        {
            link: "",
            serviceField: "Garden Care",
            description:
                "Homehive provides professionals for gardening services that go beyond simple aesthetics. In addition to beautifying your outdoor spaces, we also offer tree and stump removal, litter pick-up, weeding and cleaning.",
            fee: 54,
            image: garden_care,
        },
        {
            link: "",
            serviceField: "Lawn Mowing",
            description:
                "Home Hive is dedicated to providing exceptional lawn care to homeowners. We have experienced professionals who would deliver outstanding service that makes your lawn look the best throughout the entire season.",
            fee: 54,
            image: lawn_mowing,
        },
        {
            link: "",
            serviceField: "Hedging and Pruning",
            description:
                "Home Hive is dedicated to providing exceptional lawn care to homeowners. We have experienced professionals who would deliver outstanding service that makes your lawn look the best throughout the entire season.",

            fee: 54,
            image: hedging,
        },
    ],
    ACHS: [
        {
            link: "",
            serviceField: "Air Conditioning and Heater Repairs",
            description:
                "When it comes to detecting problems and fixing the air conditioning and heater unit. Homehive provide with the professionals. As they are fully licensed and the best in the town.",
            fee: 41,
            image: aircon_repair,
        },
        {
            link: "",
            serviceField: "Air Conditioning and Heater Installation",
            description:
                "Homehive provide professionals to install your new air conditioner or heater. Just provide the professional with air conditioner or heater and rest will be fixed according to your needs.",
            fee: 41,
            image: aircon_installation,
        },
        {
            link: "",
            serviceField: "Air Conditioning and Heater Servicing",
            description:
                "We give a complete report on system performance and efficiency related to all parts which are included in the Air conditioning or heater system as a result of frequent use, the system's inside becomes clogged with dirt, dust, allergies, and eventually mould. Homehive is here to provide with professionals who are experts at servicing.",
            fee: 41,
            image: airecon_servicing,
        },
    ],
    PAINTING: [
        {
            link: "",
            serviceField: "House Painting",
            description:
                "Hiring a professional house painter will make the finest possible first impression on your property. A superb paint job, and an excellent clean up. Paints interior and exterior according to the needs.If you have any walls with minor damage, plasterers can help you with repairs.",
            fee: 35,
            image: house_paiting,
        },
        {
            link: "",
            serviceField: "Roof Painting",
            description:
                "Although painting the roof of your residence might not feel like a difficult task, it can be problematic. Your results will be greatly influenced by the local weather, and even little changes in the weather can  be noticed on the roof of your home. So hire a professional from Homehive who could do it perfectly.",
            fee: 35,
            image: roof_paiting,
        },
    ],
    FENCE_INSTALLATION: [
        {
            link: "",
            serviceField: "Fencing and Gate",
            description:
                "We do any type of fencing and gate installation such as timber fencing, colorbond fencing, traditional fencing and many more. Just let us know what type you want and provide the materials needed rest will be taken care by the Homehive professionals.",
            fee: 50,
            image: fencing_gate,
        },
        {
            link: "",
            serviceField: "Fencing Repairs",
            description:
                "Fences after a while will start to show damages. The one which needs repairs can be done by Homehive professionals.",
            fee: 50,
            image: fencing_repairs,
        },
    ],
    HANDYMAN: [
        {
            link: "",
            serviceField: "Carpentry Services",
            description:
                "We do any type of fencing and gate installation such as timber fencing, colorbond fencing, traditional fencing and many more. Just let us know what type you want and provide the materials needed rest will be taken care by the Homehive professionals.",
            fee: 58,
            image: Carpentry,
        },
        {
            link: "",
            serviceField: "Plumbing Services",
            description:
                "Fences after a while will start to show damages. The one which needs repairs can be done by Homehive professionals.",
            fee: 58,
            image: Plumbing,
        },
        {
            link: "",
            serviceField: "Electrical Services",
            description:
                "Fences after a while will start to show damages. The one which needs repairs can be done by Homehive professionals.",
            fee: 58,
            image: Electrical,
        },
    ],
};

export const serviceOptions = [
    "Lawn Maintenance",
    "HandyMan",
    "Painting",
    "Pest Control",
    "Air Conditioning and Heater Repairs",
];
