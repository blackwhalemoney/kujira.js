import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
export declare const protobufPackage = "kujira.denom";
/** Params holds parameters for the denom module */
export interface Params {
    creation_fee: Coin[];
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
