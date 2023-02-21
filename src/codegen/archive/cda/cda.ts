import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum CDA_ContractStatus {
  Pending = 0,
  Finalized = 1,
  Voided = 2,
  UNRECOGNIZED = -1,
}
export const CDA_ContractStatusSDKType = CDA_ContractStatus;
export function cDA_ContractStatusFromJSON(object: any): CDA_ContractStatus {
  switch (object) {
    case 0:
    case "Pending":
      return CDA_ContractStatus.Pending;

    case 1:
    case "Finalized":
      return CDA_ContractStatus.Finalized;

    case 2:
    case "Voided":
      return CDA_ContractStatus.Voided;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CDA_ContractStatus.UNRECOGNIZED;
  }
}
export function cDA_ContractStatusToJSON(object: CDA_ContractStatus): string {
  switch (object) {
    case CDA_ContractStatus.Pending:
      return "Pending";

    case CDA_ContractStatus.Finalized:
      return "Finalized";

    case CDA_ContractStatus.Voided:
      return "Voided";

    case CDA_ContractStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface CDA {
  creator: string;
  id: Long;
  signingParties: string[];
  contractId: Long;
  legalMetadataUri: string;
  utcExpireTime?: Date;
  status: CDA_ContractStatus;
}
export interface CDASDKType {
  creator: string;
  id: Long;
  signing_parties: string[];
  contract_id: Long;
  legal_metadata_uri: string;
  utc_expire_time?: Date;
  status: CDA_ContractStatus;
}
export interface Ownership {
  owner: string;
  ownership: Long;
}
export interface OwnershipSDKType {
  owner: string;
  ownership: Long;
}

function createBaseCDA(): CDA {
  return {
    creator: "",
    id: Long.UZERO,
    signingParties: [],
    contractId: Long.UZERO,
    legalMetadataUri: "",
    utcExpireTime: undefined,
    status: 0
  };
}

export const CDA = {
  encode(message: CDA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    for (const v of message.signingParties) {
      writer.uint32(26).string(v!);
    }

    if (!message.contractId.isZero()) {
      writer.uint32(32).uint64(message.contractId);
    }

    if (message.legalMetadataUri !== "") {
      writer.uint32(42).string(message.legalMetadataUri);
    }

    if (message.utcExpireTime !== undefined) {
      Timestamp.encode(toTimestamp(message.utcExpireTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDA();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.signingParties.push(reader.string());
          break;

        case 4:
          message.contractId = (reader.uint64() as Long);
          break;

        case 5:
          message.legalMetadataUri = reader.string();
          break;

        case 6:
          message.utcExpireTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CDA>): CDA {
    const message = createBaseCDA();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.signingParties = object.signingParties?.map(e => e) || [];
    message.contractId = object.contractId !== undefined && object.contractId !== null ? Long.fromValue(object.contractId) : Long.UZERO;
    message.legalMetadataUri = object.legalMetadataUri ?? "";
    message.utcExpireTime = object.utcExpireTime ?? undefined;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseOwnership(): Ownership {
  return {
    owner: "",
    ownership: Long.UZERO
  };
}

export const Ownership = {
  encode(message: Ownership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.ownership.isZero()) {
      writer.uint32(16).uint64(message.ownership);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ownership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnership();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.ownership = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Ownership>): Ownership {
    const message = createBaseOwnership();
    message.owner = object.owner ?? "";
    message.ownership = object.ownership !== undefined && object.ownership !== null ? Long.fromValue(object.ownership) : Long.UZERO;
    return message;
  }

};