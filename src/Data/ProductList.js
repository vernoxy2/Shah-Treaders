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
import CamProfile from "../assets/Products/ProImages/CamProfile.webp";
import SpiralWound from "../assets/Products/ProImages/SpiralWound.webp";
import GlandPackaging from "../assets/Products/ProImages/GlandPackaging.webp";
import ExpandedPTFEJointSealant from "../assets/Products/ProImages/ExpandedPTFEJointSealant.webp";
import CompressedNonAsbestos from "../assets/Products/ProImages/CompressedNonAsbestos.webp";
import HeavyDutyFlap from "../assets/Products/ProImages/HeavyDutyFlap.webp";
import HeavyDutyBall from "../assets/Products/ProImages/HeavyDutyBall.webp";
import StandardDutyNonMetallic from "../assets/Products/ProImages/StandardDutyNonMetallic.webp";
import StandardDutyMetallic from "../assets/Products/ProImages/StandardDutyMetallic.webp";
import SmokeExtractionMotors from "../assets/Products/ProImages/SmokeExtractionMotors.webp";
import BrakeMotors from "../assets/Products/ProImages/BrakeMotors.webp";
import InverterDutyMotors from "../assets/Products/ProImages/InverterDutyMotors.webp";
import FireHydrantPumps from "../assets/Products/ProImages/FireHydrantPumps.webp";
import BoilerFeedPumps from "../assets/Products/ProImages/BoilerFeedPumps.webp";
import EndSuctionPumps from "../assets/Products/ProImages/EndSuctionPumps.webp";
import SplitCasing from "../assets/Products/ProImages/SplitCasing.webp";
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
import HavellsCatalogue from "../assets/Products/PDF/HavellsCatalogue.pdf";
import HavellsCatalogue1 from "../assets/Products/PDF/HavellsCatalogue1.pdf";
import wiloCatalog from "../assets/Products/PDF/wiloCatalog.pdf";
import SandPiperCatalogue from "../assets/Products/PDF/SandPiperCatalogue.pdf";
import TeaditCatalogue from "../assets/Products/PDF/TeaditCatalogue.pdf";
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
    category: "Pumps",
    brand: "Forbes",
    logo: Logo5,
    img: CondensateRecoveryPumpsImg,
    pdf: CondensateRecoveryPumps,
  },
  {
    id: 9,
    name: "Compact Steam trap Modules / TOF",
    category: "Pumps",
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
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: ModulatingControl,
    pdf: SwastikCatalogue,
  },
  {
    id: 12,
    name: "Globe Valve",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: GlobeValves,
    pdf: SwastikCatalogue,
  },
  {
    id: 13,
    name: "Gate Valves",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: GateValves,
    pdf: SwastikCatalogue,
  },
  {
    id: 14,
    name: "NRV",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: NRV,
    pdf: SwastikCatalogue,
  },
  {
    id: 15,
    name: "Strainers",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: Strainers,
    pdf: SwastikCatalogue,
  },
  {
    id: 16,
    name: "Flush Bottom Valves",
    category: "Valve",
    brand: "Swastik",
    logo: Logo10,
    img: FlushBottom,
    pdf: SwastikCatalogue,
  },
  // Leser Data
  {
    id: 17,
    name: "Safety Valves C.S./S.S.",
    category: "Valve",
    brand: "Leser",
    logo: Logo8,
    img: ExplosionProofMotor,
    pdf: LesreCatalog,
  },
  {
    id: 18,
    name: "Steam/Oil/Gas/Water",
    category: "Valve",
    brand: "Leser",
    logo: Logo8,
    img: SteamOilGasWater,
    pdf: LesreCatalog,
  },
  // wilo Data
  {
    id: 19,
    name: "Split Casing Pumps (SCP)",
    category: "Pumps",
    brand: "wilo",
    logo: Logo1,
    img: SplitCasing,
    pdf: wiloCatalog,
  },
  {
    id: 20,
    name: "End Suction Pumps",
    category: "Pumps",
    brand: "wilo",
    logo: Logo1,
    img: EndSuctionPumps,
    pdf: wiloCatalog,
  },
  {
    id: 21,
    name: "Boiler Feed Pumps",
    category: "Pumps",
    brand: "Wilo",
    logo: Logo1,
    img: BoilerFeedPumps,
    pdf: wiloCatalog,
  },
  {
    id: 22,
    name: "Fire Hydrant Pumps",
    category: "Pumps",
    brand: "wilo",
    logo: Logo1,
    img: FireHydrantPumps,
    pdf: wiloCatalog,
  },
  // Havells Data
  {
    id: 23,
    name: "Efficiency Range IE2 & IE3",
    category: "Motors",
    brand: "havells",
    logo: Logo3,
    img: ProImg,
    pdf: HavellsCatalogue,
  },
  {
    id: 24,
    name: "Inverter Duty Motors",
    category: "Motors",
    brand: "havells",
    logo: Logo3,
    img: InverterDutyMotors,
    pdf: HavellsCatalogue1,
  },
  {
    id: 25,
    name: "Brake Motors",
    category: "Motors",
    brand: "havells",
    logo: Logo3,
    img: BrakeMotors,
    pdf: HavellsCatalogue1,
  },
  {
    id: 26,
    name: "Smoke Extraction Motors",
    category: "Motors",
    brand: "havells",
    logo: Logo3,
    img: SmokeExtractionMotors,
    pdf: HavellsCatalogue1,
  },
  // Sandpiper Data
  {
    id: 27,
    name: "Standard Duty Metallic Pumps",
    category: "Pumps",
    brand: "Sandpiper",
    logo: Logo9,
    img: StandardDutyMetallic,
    pdf: SandPiperCatalogue,
  },
  {
    id: 28,
    name: "Standard Duty Non Metallic Pumps",
    category: "Pumps",
    brand: "Sandpiper",
    logo: Logo9,
    img: StandardDutyNonMetallic,
    pdf: SandPiperCatalogue,
  },
  {
    id: 29,
    name: "Heavy Duty Ball Valve Pumps",
    category: "Pumps",
    brand: "Sandpiper",
    logo: Logo9,
    img: HeavyDutyBall,
    pdf: SandPiperCatalogue,
  },
  {
    id: 30,
    name: "Heavy Duty Flap Valve Pumps",
    category: "Pumps",
    brand: "Sandpiper",
    logo: Logo9,
    img: HeavyDutyFlap,
    pdf: SandPiperCatalogue,
  },
  // Teadit Data
  {
    id: 31,
    name: "Compressed Non-Asbestos Gasket Sheet",
    category: "Gasket",
    brand: "Teadit",
    logo: Logo7,
    img: CompressedNonAsbestos,
    pdf: TeaditCatalogue,
  },
  {
    id: 32,
    name: "Expanded PTFE Joint Sealant and Sheet Material",
    category: "Gasket",
    brand: "Teadit",
    logo: Logo7,
    img: ExpandedPTFEJointSealant,
    pdf: TeaditCatalogue,
  },
  {
    id: 33,
    name: "Gland Packaging (Graphited/PTFE & FDA Approved)",
    category: "Gasket",
    brand: "Teadit",
    logo: Logo7,
    img: GlandPackaging,
    pdf: TeaditCatalogue  ,
  },
  {
    id: 34,
    name: "Spiral Wound Gaskets",
    category: "Gasket",
    brand: "Teadit",
    logo: Logo7,
    img: SpiralWound,
    pdf: TeaditCatalogue,
  },
  {
    id: 35,
    name: "Cam Profile Gaskets",
    category: "Gasket",
    brand: "Teadit",
    logo: Logo7,
    img: CamProfile,
    pdf: TeaditCatalogue,
  },
  // Work in progress data
  
];
