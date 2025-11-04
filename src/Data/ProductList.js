import Logo1 from "../assets/Products/Brands/Logo1.svg";
import Logo2 from "../assets/Products/Brands/Logo2.svg";
import Logo3 from "../assets/Products/Brands/Logo3.svg";
import Logo4 from "../assets/Products/Brands/Logo4.svg";
import Logo5 from "../assets/Products/Brands/Logo5.svg";
import Logo6 from "../assets/Products/Brands/Logo6.svg";
import Logo7 from "../assets/Products/Brands/Logo7.svg";
import Logo8 from "../assets/Products/Brands/Logo8.svg";
import Logo9 from "../assets/Products/Brands/Logo9.svg";
import Logo10 from "../assets/Products/Brands/Logo10.svg";
// Images
import ProImg from "../assets/Products/ProImages/ProImg.webp";
import SteamOilGasWater from "../assets/Products/ProImages/SteamOilGasWater.webp";
import ExplosionProofMotor from "../assets/Products/ProImages/ExplosionProofMotor.webp";
import FlushBottom from "../assets/Products/ProImages/FlushBottom.webp";
import Strainers from "../assets/Products/ProImages/Strainers.webp";
import NRV from "../assets/Products/ProImages/NRV.webp";
import GateValves from "../assets/Products/ProImages/GateValves.webp";
import GlobeValves from "../assets/Products/ProImages/GlobeValves.webp";
import ModulatingControl from "../assets/Products/ProImages/ModulatingControl.webp";
import CompactSteamImg from "../assets/Products/ProImages/CompactSteam.webp";
import CondensateRecoveryPumpsImg from "../assets/Products/ProImages/CondensateRecoveryPumps.webp";
import PRVPRSDCVImg from "../assets/Products/ProImages/PRV,PRS,DCV.webp";
import PistonValvesImg from "../assets/Products/ProImages/PistonValves.webp";
import ballfloatImg from "../assets/Products/ProImages/ballfloat.webp";
import Saundersparediaphragm from "../assets/Products/ProImages/Saundersparediaphragm.webp";
import IndustrialDiaphragmValvesImg from "../assets/Products/ProImages/ProImg.webp";
import WayDiaphragmValves from "../assets/Products/ProImages/2-WayDiaphragmValves.webp";
import BlockValvesDeadLegValvesImg from "../assets/Products/ProImages/BlockValvesDeadLegValves.webp";
// PDF
import IndustrialDiaphragmValves from "../assets/Products/PDF/IndustrialDiaphragmValves.pdf";
import BlockValvesDeadLegValves from "../assets/Products/PDF/BlockValvesDeadLegValves.pdf";
import ballfloat from "../assets/Products/PDF/ballfloat.pdf";
import PistonValves from "../assets/Products/PDF/PistonValves.pdf";
import PRVPRSDCV from "../assets/Products/PDF/PRV,PRS,DCV.pdf";
import CondensateRecoveryPumps from "../assets/Products/PDF/CondensateRecoveryPumps.pdf";
import CompactSteam from "../assets/Products/PDF/CompactSteam.pdf";
import SwastikCatalogue from "../assets/Products/PDF/SwastikCatalogue.pdf";
import LesreCatalog from "../assets/Products/PDF/LesreCatalog.pdf";
import wiloCatalog from "../assets/Products/PDF/wiloCatalog.pdf";

import Manual from "../assets/Products/ShahTradersCatalogue.pdf";

export const ProductData = [
  // 🟢 VALVES
  {
    id: 1,
    name: "Industrial Diaphragm Valves (Manual & Auto)",
    category: "Valve",
    brand: "Saunders",
    logo: Logo2,
    img: IndustrialDiaphragmValvesImg,
    pdf: IndustrialDiaphragmValves,
  },
  {
    id: 2,
    name: "Aseptic Machined Block Valves & Zero Dead Leg Valves",
    category: "Valve",
    brand: "Saunders",
    logo: Logo2,
    img: BlockValvesDeadLegValvesImg,
    pdf: BlockValvesDeadLegValves,
  },
  {
    id: 3,
    name: "2-Way Diaphragm Valves (Manual & Auto)",
    category: "Valve",
    brand: "Sunders",
    logo: Logo2,
    img: WayDiaphragmValves,
    pdf: BlockValvesDeadLegValves,
  },
  {
    id: 4,
    name: "Saunders Spare Diaphragm Rubber & PTFE",
    category: "Valve",
    brand: "Sunders",
    img: Saundersparediaphragm,
    logo: Logo2,
    pdf: BlockValvesDeadLegValves,
  },
  {
    id: 5,
    name: "Ball Float Steam Traps / TD Traps",
    category: "Valve",
    brand: "Forbes",
    logo: Logo5,
    img: ballfloatImg,
    pdf: ballfloat,
  },
  {
    id: 6,
    name: "Piston Valves",
    category: "Valve",
    logo: Logo5,
    brand: "Forbes",
    img: PistonValvesImg,
    pdf: PistonValves,
  },
  {
    id: 7,
    name: "PRV, PRS, DCV",
    category: "Valve",
    brand: "Forbes",
    logo: Logo5,
    img: PRVPRSDCVImg,
    pdf: PRVPRSDCV,
  },
  {
    id: 8,
    name: "Condensate Recovery Pumps (PPPPU)",
    category: "pumps",
    brand: "Forbes",
    logo: Logo5,
    img: CondensateRecoveryPumpsImg,
    pdf: CondensateRecoveryPumps ,
  },
  {
    id: 9,
    name: "Compact Steam trap Modules / TOF",
    category: "pumps",
    brand: "Forbes",
    logo: Logo5,
    img: CompactSteamImg,
    pdf: CompactSteam,
  },
  // Swastik Data
  {
    id: 10,
    name: "Ball Valves - Manual & Auto",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: ProImg,
    // Imag Pandding
    pdf: SwastikCatalogue, 
  },
  {
    id: 11,
    name: "Modulating Control Valve",
    category: "valves",
    brand: "Swastik",
    logo: Logo10,
    img: ModulatingControl,
    pdf: SwastikCatalogue,
  },
  {
    id: 12,
    name: "Globe Valves",
    category: "valves",
    brand: "Swastik",
    logo: Logo10,
    img: GlobeValves,
    pdf: SwastikCatalogue,
  },
  {
    id: 13,
    name: "Gate Valves", 
    category: "valves",
    brand: "Swastik",
    logo: Logo10,
    img: GateValves,
    pdf: SwastikCatalogue,
  },
  {
    id: 14,
    name: "NRV",
    category: "valves",
    brand: "Swastik",
    logo: Logo10, 
    img: NRV,
    pdf: SwastikCatalogue,
  },
  {
    id: 15,
    name: "Strainers",
    category: "vlves",
    brand: "Swastik",
    logo: Logo10,
    img: Strainers,
    pdf: SwastikCatalogue,
  },
  {
    id: 16,
    name: "Flush Bottom Valves",
    category: "valves",
    brand: "Swastik",
    logo: Logo10,
    img: FlushBottom,
    pdf: SwastikCatalogue,
  },
  // Leser Data
  {
    id: 17,
    name: "Safety Valves C.S./S.S.",
    category: "valves",
    brand: "Leser",
    logo: Logo8,
    img: ExplosionProofMotor,
    pdf: LesreCatalog,
  },
  {
    id: 18,
    name: "Steam/Oil/Gas/Water",
    category: "valves",
    brand: "Leser",
    logo: Logo8,
    img: SteamOilGasWater,
    pdf: LesreCatalog,
  },
  // wilo Data
  // Work in progress data
  {
    id: 19,
    name: "Split Casing Pumps (SCP)",
    category: "pumps",
    brand: "wilo",
    logo: Logo1,
    img: ProImg,
    pdf: wiloCatalog,
    // wiloCatalog
  },
  {
    id: 20,
    name: "Heavy Duty Motor",
    category: "Motors",
    brand: "Swastik",
    img: ProImg,
    pdf: Manual,
  },

  // 🟠 PUMPS
  {
    id: 21,
    name: "Centrifugal Pump",
    category: "Pumps",
    brand: "Wilo",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 22,
    name: "Submersible Pump",
    category: "Pumps",
    brand: "Saunders",
    logo: Logo2,
    Logo: Logo2,
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 23,
    name: "Diaphragm Pump",
    category: "Pumps",
    brand: "IDEX",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 24,
    name: "Peristaltic Pump",
    category: "Pumps",
    brand: "Sandpiper",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 25,
    name: "Piston Pump",
    category: "Pumps",
    brand: "Forbes",
    logo: Logo5,
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 26,
    name: "Vacuum Pump",
    category: "Pumps",
    brand: "Crane",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 27,
    name: "Gear Pump",
    category: "Pumps",
    brand: "Swastik",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 28,
    name: "Screw Pump",
    category: "Pumps",
    brand: "Leser",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 29,
    name: "Magnetic Drive Pump",
    category: "Pumps",
    brand: "Teadit",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 30,
    name: "High Pressure Pump",
    category: "Pumps",
    brand: "Havells",
    img: ProImg,
    pdf: Manual,
  },

  // 🟣 GASKETS
  {
    id: 31,
    name: "Spiral Wound Gasket",
    category: "Gasket",
    brand: "Teadit",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 32,
    name: "Ring Joint Gasket",
    category: "Gasket",
    brand: "Swastik",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 33,
    name: "Metal Jacketed Gasket",
    category: "Gasket",
    brand: "IDEX",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 34,
    name: "Soft Cut Gasket",
    category: "Gasket",
    brand: "Leser",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 35,
    name: "Graphite Gasket",
    category: "Gasket",
    brand: "Crane",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 36,
    name: "PTFE Gasket",
    category: "Gasket",
    brand: "Forbes",
    logo: Logo5,
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 37,
    name: "Rubber Gasket",
    category: "Gasket",
    brand: "Sandpiper",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 38,
    name: "Non-Asbestos Gasket",
    category: "Gasket",
    brand: "Wilo",
    img: ProImg,
    pdf: Manual,
  },
  {
    id: 39,
    name: "CAF Gasket",
    category: "Gasket",
    brand: "Havells",
    img: ProImg,
    pdf: Manual,
  },
  // {
  //   id: 40,
  //   name: "Composite Gasket",
  //   category: "Gasket",
  //   brand: "Saunders",
  //   logo: Logo2,
  //   img: ProImg,
  //   pdf: Manual,
  // },
];
