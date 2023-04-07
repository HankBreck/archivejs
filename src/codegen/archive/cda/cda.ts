import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * the state of the CDA
 * pending - waiting approval by signing parties
 * finalized - all signatures present
 * voided - inactive
 */

export enum CDA_ContractStatus {
  Pending = 0,
  Finalized = 1,
  Voided = 2,
  UNRECOGNIZED = -1,
}
/**
 * the state of the CDA
 * pending - waiting approval by signing parties
 * finalized - all signatures present
 * voided - inactive
 */

export enum CDA_ContractStatusSDKType {
  Pending = 0,
  Finalized = 1,
  Voided = 2,
  UNRECOGNIZED = -1,
}
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
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA */

  id: Long;
  /** the list of identity IDs that must sign the CDA */

  signerIdentities: Long[];
  /** the id of the registered contract template */

  contractId: Long;
  /** the URI pointing to the contract's metadata */

  legalMetadataUri: string;
  /** the expiration UTC timestamp of this agreement */

  utcExpireTime?: Timestamp;
  /** the current status of the CDA */

  status: CDA_ContractStatus;
  /** the address of the witness smart contract */

  witnessAddress: string;
}
export interface CDASDKType {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA */

  id: Long;
  /** the list of identity IDs that must sign the CDA */

  signer_identities: Long[];
  /** the id of the registered contract template */

  contract_id: Long;
  /** the URI pointing to the contract's metadata */

  legal_metadata_uri: string;
  /** the expiration UTC timestamp of this agreement */

  utc_expire_time?: TimestampSDKType;
  /** the current status of the CDA */

  status: CDA_ContractStatusSDKType;
  /** the address of the witness smart contract */

  witness_address: string;
}
export interface SigningDataExtension {
  signingData: Uint8Array;
}
export interface SigningDataExtensionSDKType {
  signing_data: Uint8Array;
}

function createBaseCDA(): CDA {
  return {
    creator: "",
    id: Long.UZERO,
    signerIdentities: [],
    contractId: Long.UZERO,
    legalMetadataUri: "",
    utcExpireTime: undefined,
    status: 0,
    witnessAddress: ""
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

    writer.uint32(26).fork();

    for (const v of message.signerIdentities) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (!message.contractId.isZero()) {
      writer.uint32(32).uint64(message.contractId);
    }

    if (message.legalMetadataUri !== "") {
      writer.uint32(42).string(message.legalMetadataUri);
    }

    if (message.utcExpireTime !== undefined) {
      Timestamp.encode(message.utcExpireTime, writer.uint32(50).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    if (message.witnessAddress !== "") {
      writer.uint32(66).string(message.witnessAddress);
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.signerIdentities.push((reader.uint64() as Long));
            }
          } else {
            message.signerIdentities.push((reader.uint64() as Long));
          }

          break;

        case 4:
          message.contractId = (reader.uint64() as Long);
          break;

        case 5:
          message.legalMetadataUri = reader.string();
          break;

        case 6:
          message.utcExpireTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        case 8:
          message.witnessAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CDA {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      signerIdentities: Array.isArray(object?.signerIdentities) ? object.signerIdentities.map((e: any) => Long.fromValue(e)) : [],
      contractId: isSet(object.contractId) ? Long.fromValue(object.contractId) : Long.UZERO,
      legalMetadataUri: isSet(object.legalMetadataUri) ? String(object.legalMetadataUri) : "",
      utcExpireTime: isSet(object.utcExpireTime) ? fromJsonTimestamp(object.utcExpireTime) : undefined,
      status: isSet(object.status) ? cDA_ContractStatusFromJSON(object.status) : 0,
      witnessAddress: isSet(object.witnessAddress) ? String(object.witnessAddress) : ""
    };
  },

  toJSON(message: CDA): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());

    if (message.signerIdentities) {
      obj.signerIdentities = message.signerIdentities.map(e => (e || Long.UZERO).toString());
    } else {
      obj.signerIdentities = [];
    }

    message.contractId !== undefined && (obj.contractId = (message.contractId || Long.UZERO).toString());
    message.legalMetadataUri !== undefined && (obj.legalMetadataUri = message.legalMetadataUri);
    message.utcExpireTime !== undefined && (obj.utcExpireTime = fromTimestamp(message.utcExpireTime).toISOString());
    message.status !== undefined && (obj.status = cDA_ContractStatusToJSON(message.status));
    message.witnessAddress !== undefined && (obj.witnessAddress = message.witnessAddress);
    return obj;
  },

  fromPartial(object: Partial<CDA>): CDA {
    const message = createBaseCDA();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.signerIdentities = object.signerIdentities?.map(e => Long.fromValue(e)) || [];
    message.contractId = object.contractId !== undefined && object.contractId !== null ? Long.fromValue(object.contractId) : Long.UZERO;
    message.legalMetadataUri = object.legalMetadataUri ?? "";
    message.utcExpireTime = object.utcExpireTime !== undefined && object.utcExpireTime !== null ? Timestamp.fromPartial(object.utcExpireTime) : undefined;
    message.status = object.status ?? 0;
    message.witnessAddress = object.witnessAddress ?? "";
    return message;
  }

};

function createBaseSigningDataExtension(): SigningDataExtension {
  return {
    signingData: new Uint8Array()
  };
}

export const SigningDataExtension = {
  encode(message: SigningDataExtension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signingData.length !== 0) {
      writer.uint32(10).bytes(message.signingData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningDataExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningDataExtension();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signingData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SigningDataExtension {
    return {
      signingData: isSet(object.signingData) ? bytesFromBase64(object.signingData) : new Uint8Array()
    };
  },

  toJSON(message: SigningDataExtension): unknown {
    const obj: any = {};
    message.signingData !== undefined && (obj.signingData = base64FromBytes(message.signingData !== undefined ? message.signingData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<SigningDataExtension>): SigningDataExtension {
    const message = createBaseSigningDataExtension();
    message.signingData = object.signingData ?? new Uint8Array();
    return message;
  }

};