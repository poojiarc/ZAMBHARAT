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
  icon: "Search" | "Droplets" | "Wrench" | "Building2" | "Mountain" | "Cog";
  image: string;
  benefits: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "geophysical-survey",
    title: "Geophysical Survey",
    short: "Accurate underground water detection using advanced geophysical methods.",
    description:
      "Our geophysical survey service uses resistivity meters and electromagnetic instruments to locate underground aquifers with precision. We identify the most productive drilling points before a single hole is sunk, saving you time and money.",
    icon: "Search",
    image: survey,
    benefits: [
      "Pinpoint accurate water sources",
      "Reduce dry-hole risk dramatically",
      "Detailed site reports & recommendations",
      "Save costs on drilling",
    ],
    process: [
      { step: "Site Assessment", detail: "On-site inspection and terrain analysis." },
      { step: "Data Collection", detail: "Resistivity & electromagnetic readings." },
      { step: "Interpretation", detail: "Expert geologists analyse subsurface data." },
      { step: "Reporting", detail: "Detailed report with recommended drill points." },
    ],
  },
  {
    slug: "water-borehole-drilling",
    title: "Water Borehole Drilling",
    short: "Professional borehole drilling up to 300 metres with modern rigs.",
    description:
      "We drill clean, high-yield water boreholes up to 300 metres deep using state-of-the-art rotary and DTH rigs. From domestic to commercial and agricultural projects, we deliver reliable water sources built to last.",
    icon: "Droplets",
    image: borehole,
    benefits: [
      "Depths up to 300 metres",
      "Modern DTH and rotary rigs",
      "Casing and screening included",
      "Yield & quality testing",
    ],
    process: [
      { step: "Mobilisation", detail: "Rig deployed to your site." },
      { step: "Drilling", detail: "Precision drilling to target depth." },
      { step: "Casing", detail: "Steel/PVC casing and gravel pack installed." },
      { step: "Development", detail: "Borehole flushed, tested and certified." },
    ],
  },
  {
    slug: "pump-installation",
    title: "Hand Pump & Submersible Pump Installation",
    short: "Complete pump supply, installation and maintenance services.",
    description:
      "We supply and install both hand pumps and submersible pumps from leading brands. Our technicians size and configure each system to match your borehole yield and water demand for years of trouble-free service.",
    icon: "Wrench",
    image: pump,
    benefits: [
      "Brand-name pumps and parts",
      "Solar-ready submersible options",
      "Professional installation",
      "After-sales maintenance support",
    ],
    process: [
      { step: "Pump Sizing", detail: "Select the right pump for your yield." },
      { step: "Installation", detail: "Pump, riser, cabling and controls fitted." },
      { step: "Commissioning", detail: "Full system test and handover." },
      { step: "Support", detail: "Ongoing maintenance and warranty." },
    ],
  },
  {
    slug: "overhead-tank-construction",
    title: "Overhead Tank Construction",
    short: "Sturdy overhead water storage tank towers built to spec.",
    description:
      "We design and build overhead water storage tanks and steel towers tailored to your capacity and pressure needs — perfect for households, schools, farms and industrial sites that need reliable gravity-fed water supply.",
    icon: "Building2",
    image: tank,
    benefits: [
      "Custom heights and capacities",
      "Engineered steel towers",
      "Plumbing and distribution included",
      "Long-lasting corrosion protection",
    ],
    process: [
      { step: "Design", detail: "Capacity and tower height engineered." },
      { step: "Foundation", detail: "Reinforced concrete base poured." },
      { step: "Erection", detail: "Steel tower and tank installed." },
      { step: "Plumbing", detail: "Pipework connected and tested." },
    ],
  },
  {
    slug: "core-drilling",
    title: "Core Drilling for Mineral Exploration",
    short: "Precision core drilling for mining and mineral exploration projects.",
    description:
      "Our diamond core drilling services deliver intact rock samples for accurate geological analysis. We support mining, mineral exploration and geotechnical investigations across Zambia and the region.",
    icon: "Mountain",
    image: core,
    benefits: [
      "High-quality intact core recovery",
      "NQ, HQ and PQ sizes available",
      "Experienced exploration crews",
      "Detailed core logging support",
    ],
    process: [
      { step: "Planning", detail: "Drill program designed with geologists." },
      { step: "Set-up", detail: "Rig positioned and pad prepared." },
      { step: "Coring", detail: "Continuous core extracted and boxed." },
      { step: "Handover", detail: "Cores logged and delivered." },
    ],
  },
  {
    slug: "mud-drilling",
    title: "Mud Drilling & New Technology Machine Drilling",
    short: "Modern mud rotary drilling for soft and unstable formations.",
    description:
      "Combining classic mud rotary techniques with the latest drilling technology, we tackle challenging formations efficiently. Our modern rigs ensure clean borehole walls and excellent water yield, even in difficult ground.",
    icon: "Cog",
    image: mud,
    benefits: [
      "Effective in soft formations",
      "Stable, clean borehole walls",
      "Latest-generation machinery",
      "Faster project turnaround",
    ],
    process: [
      { step: "Site Prep", detail: "Mud pits and supply lines set up." },
      { step: "Circulation", detail: "Drilling fluid keeps walls stable." },
      { step: "Drilling", detail: "Target depth reached efficiently." },
      { step: "Completion", detail: "Borehole cleaned and finalised." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
