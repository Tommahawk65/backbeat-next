import type { CountyRecord } from "../types";

import { hampshire } from "./hampshire";
import { surrey } from "./surrey";
import { berkshire } from "./berkshire";
import { westSussex } from "./west-sussex";
import { dorset } from "./dorset";
import { wiltshire } from "./wiltshire";
import { oxfordshire } from "./oxfordshire";
import { isleOfWight } from "./isle-of-wight";
import { eastSussex } from "./east-sussex";
import { kent } from "./kent";
import { somerset } from "./somerset";
import { gloucestershire } from "./gloucestershire";
import { buckinghamshire } from "./buckinghamshire";
import { bristol } from "./bristol";
import { greaterLondon } from "./greater-london";
import { eastDevon } from "./east-devon";

export const counties: CountyRecord[] = [
  hampshire,
  surrey,
  berkshire,
  westSussex,
  eastSussex,
  kent,
  dorset,
  wiltshire,
  somerset,
  gloucestershire,
  oxfordshire,
  buckinghamshire,
  bristol,
  greaterLondon,
  eastDevon,
  isleOfWight,
];
