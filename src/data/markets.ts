import { businessConfig, TargetMarket } from '../config/business';

/**
 * Verified target hospitality markets served by UPWORD.
 * Sourced directly from central business configuration with no fabricated data.
 */
export const targetMarkets: TargetMarket[] = businessConfig.targetMarkets;

export default targetMarkets;
