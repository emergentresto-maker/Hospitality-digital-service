import heroMountainResortImg from './images/hero_mountain_resort_1793846126809.jpg';
import locationNashikVineyardResortImg from './images/location_nashik_vineyard_resort_1793856162866.jpg';
import locationNashikTrimbakeshwarImg from './images/location_nashik_trimbakeshwar_1793850205400.jpg';
import locationUjjainHospitalityImg from './images/location_ujjain_hospitality_1793850207311.jpg';
import locationIndoreHospitalityImg from './images/location_indore_hospitality_1793850206782.jpg';

/**
 * Central registry for static and Vite-bundled visual assets.
 * Importing images via ES modules guarantees hashed asset emission in `dist/assets/` during `npm run build`.
 */
export const assetPaths = {
  imagesDir: '/images',
  heroMountainResort: heroMountainResortImg,
  locationNashikVineyardResort: locationNashikVineyardResortImg,
  locationNashikTrimbakeshwar: locationNashikTrimbakeshwarImg,
  locationUjjainHospitality: locationUjjainHospitalityImg,
  locationIndoreHospitality: locationIndoreHospitalityImg,
} as const;
