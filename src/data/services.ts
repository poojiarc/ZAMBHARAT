import survey from "@/assets/svc-survey.jpg";
import borehole from "@/assets/svc-borehole.jpg";
import pump from "@/assets/svc-pump.jpg";
import tank from "@/assets/svc-tank.jpg";
import core from "@/assets/svc-core.jpg";
import mud from "@/assets/svc-mud.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  whatWeDo?: string;
  applications?: string[];
  technology?: string[];
  icon: "Search" | "Droplets" | "Wrench" | "Building2" | "Mountain" | "Cog";
  image: string;
  benefits: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "geophysical-survey",
    title: "Geophysical Survey",
    short: "Identify the most suitable borehole location with scientific subsurface analysis.",
    description:
      "Our geophysical survey service helps identify the most suitable location for borehole drilling by analyzing underground water presence using scientific techniques.",
    whatWeDo:
      "We use advanced equipment to study subsurface conditions, ensuring accurate detection of groundwater sources before drilling begins.",
    icon: "Search",
    image: survey,
    benefits: [
      "Reduces drilling risk",
      "Saves time and cost",
      "Improves success rate",
      "Accurate water source identification",
    ],
    process: [
      { step: "Site Inspection", detail: "On-site terrain and access assessment." },
      { step: "Data Collection", detail: "Readings taken with geophysical tools." },
      { step: "Analysis", detail: "Underground water levels analysed by experts." },
      { step: "Final Report", detail: "Detailed report with recommended drilling point." },
    ],
  },
  {
    slug: "water-borehole-drilling",
    title: "Water Borehole Drilling (Up to 300 Meters)",
    short: "Professional borehole drilling up to 300 metres using modern machinery.",
    description:
      "We provide professional borehole drilling services up to 300 meters using modern machinery and efficient techniques.",
    whatWeDo:
      "Our team ensures precise drilling to reach reliable underground water sources suitable for long-term use.",
    applications: [
      "Residential water supply",
      "Agricultural irrigation",
      "Industrial water systems",
      "Commercial properties",
    ],
    icon: "Droplets",
    image: borehole,
    benefits: [
      "Deep and reliable water access",
      "Long-lasting water supply",
      "Suitable for all soil types",
      "High success rate",
    ],
    process: [
      { step: "Site Preparation", detail: "Rig and equipment positioned for drilling." },
      { step: "Drilling Operation", detail: "Precision drilling to target depth." },
      { step: "Casing Installation", detail: "Steel/PVC casing fitted to protect the well." },
      { step: "Water Testing", detail: "Yield and quality tested before completion." },
    ],
  },
  {
    slug: "pump-installation",
    title: "Hand Pump & Submersible Pump Installation",
    short: "Complete supply, installation and maintenance of hand and submersible pumps.",
    description:
      "We supply and install high-quality hand pumps and submersible pump systems for efficient water extraction.",
    whatWeDo:
      "We provide complete pump solutions, including installation, testing, and maintenance support.",
    applications: [
      "Hand Pumps — for rural and low-cost solutions",
      "Submersible Pumps — for deep boreholes and high demand",
    ],
    icon: "Wrench",
    image: pump,
    benefits: [
      "Reliable water flow",
      "Energy-efficient systems",
      "Durable and long-lasting",
      "Easy maintenance",
    ],
    process: [
      { step: "Pump Selection", detail: "Based on borehole depth and water demand." },
      { step: "Installation", detail: "Pump, riser, cabling and controls fitted." },
      { step: "Testing", detail: "Full system test and commissioning." },
      { step: "User Guidance", detail: "Training and after-sales support." },
    ],
  },
  {
    slug: "overhead-tank-construction",
    title: "Construction of Overhead Tanks",
    short: "Strong, durable overhead tanks designed for steady water supply.",
    description:
      "We design and construct strong and durable overhead tanks for water storage and distribution.",
    whatWeDo:
      "Our tanks are built to ensure safe storage and steady water supply for homes, businesses, and farms.",
    applications: [
      "Residential buildings",
      "Farms and irrigation systems",
      "Commercial facilities",
    ],
    icon: "Building2",
    image: tank,
    benefits: [
      "Continuous water availability",
      "Proper water pressure",
      "Durable construction",
      "Custom designs based on requirements",
    ],
    process: [
      { step: "Design Planning", detail: "Capacity and tower height engineered." },
      { step: "Material Selection", detail: "High-grade steel and components sourced." },
      { step: "Construction", detail: "Tower and tank built and installed." },
      { step: "Quality Inspection", detail: "Final checks and handover." },
    ],
  },
  {
    slug: "core-drilling",
    title: "Core Drilling for Mineral Exploration",
    short: "Specialized core drilling for mineral exploration and geological studies.",
    description:
      "We offer specialized core drilling services for mineral exploration and geological studies.",
    whatWeDo:
      "Our advanced drilling techniques extract core samples from the earth for detailed analysis.",
    applications: [
      "Mining companies",
      "Geological research",
      "Resource evaluation",
    ],
    icon: "Mountain",
    image: core,
    benefits: [
      "Accurate geological data",
      "Reliable mineral exploration",
      "Supports mining projects",
      "High precision drilling",
    ],
    process: [
      { step: "Site Assessment", detail: "Drill program designed with geologists." },
      { step: "Core Drilling", detail: "Continuous core extracted from target depth." },
      { step: "Sample Extraction", detail: "Cores boxed and labelled on site." },
      { step: "Analysis & Reporting", detail: "Cores logged and report delivered." },
    ],
  },
  {
    slug: "mud-drilling",
    title: "Mud Drilling & New Technology Machine Drilling",
    short: "Modern mud rotary drilling for stable, efficient operation in tough terrains.",
    description:
      "We utilize modern drilling techniques including mud drilling and advanced machinery for efficient and effective operations.",
    whatWeDo:
      "Mud drilling helps stabilize the borehole and improve drilling efficiency in challenging soil conditions.",
    technology: [
      "Advanced drilling rigs",
      "Mud circulation systems",
      "Precision drilling tools",
    ],
    icon: "Cog",
    image: mud,
    benefits: [
      "Suitable for difficult terrains",
      "Faster drilling process",
      "Improved borehole stability",
      "Higher efficiency",
    ],
    process: [
      { step: "Site Preparation", detail: "Pads and supply lines set up." },
      { step: "Mud System Setup", detail: "Mud pits and circulation lines configured." },
      { step: "Drilling Execution", detail: "Drilling carried out with stable walls." },
      { step: "Final Completion", detail: "Borehole cleaned and finalised." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
