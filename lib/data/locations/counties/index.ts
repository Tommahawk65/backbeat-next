import type { CountyRecord } from "../types";

import { hampshire } from "./hampshire";
import { surrey } from "./surrey";
import { berkshire } from "./berkshire";
import { westSussex } from "./west-sussex";
import { dorset } from "./dorset";
import { wiltshire } from "./wiltshire";
import { oxfordshire } from "./oxfordshire";
import { isleOfWight } from "./isle-of-wight";

export const counties: CountyRecord[] = [
  hampshire,
  surrey,
  berkshire,
  westSussex,
  dorset,
  wiltshire,
  oxfordshire,
  isleOfWight,
];
