import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { ContactInfo, ContactInfoSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp, base64FromBytes, fromTimestamp } from "../../helpers";
export interface MsgCreateCda {
  /** the account that sent the message */
  creator: string;
  /** the list of identity IDs that must sign the CDA */

  signerIds: Long[];
  /** the id of the registered contract template */

  contractId: Long;
  /** the URI pointing to the contract's metadata */

  legalMetadataUri: string;
  /** the json encoded on-chain data that should be used */

  signingData: Uint8Array;
  /** the expiration UTC timestamp of this agreement */

  utcExpireTime?: Timestamp;
  /**
   * the json encoded message to be passed to the witness contract on
   * instantiation
   */

  witnessInitMsg: Uint8Array;
}
export interface MsgCreateCdaSDKType {
  /** the account that sent the message */
  creator: string;
  /** the list of identity IDs that must sign the CDA */

  signer_ids: Long[];
  /** the id of the registered contract template */

  contract_id: Long;
  /** the URI pointing to the contract's metadata */

  legal_metadata_uri: string;
  /** the json encoded on-chain data that should be used */

  signing_data: Uint8Array;
  /** the expiration UTC timestamp of this agreement */

  utc_expire_time?: TimestampSDKType;
  /**
   * the json encoded message to be passed to the witness contract on
   * instantiation
   */

  witness_init_msg: Uint8Array;
}
export interface MsgCreateCdaResponse {
  /** the ID of the new CDA */
  id: Long;
  /** the address of the witness contract */

  witnessAddress: string;
  /** the response from the witness contract */

  witnessInitResponse: Uint8Array;
}
export interface MsgCreateCdaResponseSDKType {
  /** the ID of the new CDA */
  id: Long;
  /** the address of the witness contract */

  witness_address: string;
  /** the response from the witness contract */

  witness_init_response: Uint8Array;
}
export interface MsgApproveCda {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to approve */

  cdaId: Long;
  /** the identity ID to sign on behalf of */

  signerId: Long;
  /** the on-chain data specified in MsgCreateCda */

  signingData: Uint8Array;
}
export interface MsgApproveCdaSDKType {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to approve */

  cda_id: Long;
  /** the identity ID to sign on behalf of */

  signer_id: Long;
  /** the on-chain data specified in MsgCreateCda */

  signing_data: Uint8Array;
}
export interface MsgApproveCdaResponse {}
export interface MsgApproveCdaResponseSDKType {}
export interface MsgWitnessApproveCda {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to approve */

  cdaId: Long;
  /** the on-chain data specified in MsgCreateCda */

  signingData: Uint8Array;
}
export interface MsgWitnessApproveCdaSDKType {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to approve */

  cda_id: Long;
  /** the on-chain data specified in MsgCreateCda */

  signing_data: Uint8Array;
}
export interface MsgWitnessApproveCdaResponse {}
export interface MsgWitnessApproveCdaResponseSDKType {}
export interface MsgFinalizeCda {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to finalize */

  cdaId: Long;
}
export interface MsgFinalizeCdaSDKType {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to finalize */

  cda_id: Long;
}
export interface MsgFinalizeCdaResponse {}
export interface MsgFinalizeCdaResponseSDKType {}
export interface MsgVoidCda {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to void */

  cdaId: Long;
}
export interface MsgVoidCdaSDKType {
  /** the account that sent the message */
  creator: string;
  /** the ID of the CDA to void */

  cda_id: Long;
}
export interface MsgVoidCdaResponse {}
export interface MsgVoidCdaResponseSDKType {}
export interface MsgRegisterContract {
  /** the account that sent the message */
  creator: string;
  /** the description of the contract */

  description: string;
  /** the list of contract authors */

  authors: string[];
  /** information on how to contract the authors */

  contactInfo?: ContactInfo;
  /** a URI pointing to extra information about the ocntract */

  moreInfoUri: string;
  /** the JSON schema that specifies the required on-chain data */

  signingDataSchema: Uint8Array;
  /** a URI pointing to the template legal contract */

  templateUri: string;
  /** a URI pointing to the template legal contract's schema */

  templateSchemaUri: string;
  /** the ID of the wasm code to be used as the contract's witness */

  witnessCodeId: Long;
}
export interface MsgRegisterContractSDKType {
  /** the account that sent the message */
  creator: string;
  /** the description of the contract */

  description: string;
  /** the list of contract authors */

  authors: string[];
  /** information on how to contract the authors */

  contact_info?: ContactInfoSDKType;
  /** a URI pointing to extra information about the ocntract */

  more_info_uri: string;
  /** the JSON schema that specifies the required on-chain data */

  signing_data_schema: Uint8Array;
  /** a URI pointing to the template legal contract */

  template_uri: string;
  /** a URI pointing to the template legal contract's schema */

  template_schema_uri: string;
  /** the ID of the wasm code to be used as the contract's witness */

  witness_code_id: Long;
}
export interface MsgRegisterContractResponse {
  id: Long;
}
export interface MsgRegisterContractResponseSDKType {
  id: Long;
}

function createBaseMsgCreateCda(): MsgCreateCda {
  return {
    creator: "",
    signerIds: [],
    contractId: Long.UZERO,
    legalMetadataUri: "",
    signingData: new Uint8Array(),
    utcExpireTime: undefined,
    witnessInitMsg: new Uint8Array()
  };
}

export const MsgCreateCda = {
  encode(message: MsgCreateCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    writer.uint32(18).fork();

    for (const v of message.signerIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (!message.contractId.isZero()) {
      writer.uint32(24).uint64(message.contractId);
    }

    if (message.legalMetadataUri !== "") {
      writer.uint32(34).string(message.legalMetadataUri);
    }

    if (message.signingData.length !== 0) {
      writer.uint32(42).bytes(message.signingData);
    }

    if (message.utcExpireTime !== undefined) {
      Timestamp.encode(message.utcExpireTime, writer.uint32(50).fork()).ldelim();
    }

    if (message.witnessInitMsg.length !== 0) {
      writer.uint32(58).bytes(message.witnessInitMsg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCda {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCda();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.signerIds.push((reader.uint64() as Long));
            }
          } else {
            message.signerIds.push((reader.uint64() as Long));
          }

          break;

        case 3:
          message.contractId = (reader.uint64() as Long);
          break;

        case 4:
          message.legalMetadataUri = reader.string();
          break;

        case 5:
          message.signingData = reader.bytes();
          break;

        case 6:
          message.utcExpireTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.witnessInitMsg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateCda {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      signerIds: Array.isArray(object?.signerIds) ? object.signerIds.map((e: any) => Long.fromValue(e)) : [],
      contractId: isSet(object.contractId) ? Long.fromValue(object.contractId) : Long.UZERO,
      legalMetadataUri: isSet(object.legalMetadataUri) ? String(object.legalMetadataUri) : "",
      signingData: isSet(object.signingData) ? bytesFromBase64(object.signingData) : new Uint8Array(),
      utcExpireTime: isSet(object.utcExpireTime) ? fromJsonTimestamp(object.utcExpireTime) : undefined,
      witnessInitMsg: isSet(object.witnessInitMsg) ? bytesFromBase64(object.witnessInitMsg) : new Uint8Array()
    };
  },

  toJSON(message: MsgCreateCda): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);

    if (message.signerIds) {
      obj.signerIds = message.signerIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.signerIds = [];
    }

    message.contractId !== undefined && (obj.contractId = (message.contractId || Long.UZERO).toString());
    message.legalMetadataUri !== undefined && (obj.legalMetadataUri = message.legalMetadataUri);
    message.signingData !== undefined && (obj.signingData = base64FromBytes(message.signingData !== undefined ? message.signingData : new Uint8Array()));
    message.utcExpireTime !== undefined && (obj.utcExpireTime = fromTimestamp(message.utcExpireTime).toISOString());
    message.witnessInitMsg !== undefined && (obj.witnessInitMsg = base64FromBytes(message.witnessInitMsg !== undefined ? message.witnessInitMsg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgCreateCda>): MsgCreateCda {
    const message = createBaseMsgCreateCda();
    message.creator = object.creator ?? "";
    message.signerIds = object.signerIds?.map(e => Long.fromValue(e)) || [];
    message.contractId = object.contractId !== undefined && object.contractId !== null ? Long.fromValue(object.contractId) : Long.UZERO;
    message.legalMetadataUri = object.legalMetadataUri ?? "";
    message.signingData = object.signingData ?? new Uint8Array();
    message.utcExpireTime = object.utcExpireTime !== undefined && object.utcExpireTime !== null ? Timestamp.fromPartial(object.utcExpireTime) : undefined;
    message.witnessInitMsg = object.witnessInitMsg ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCreateCdaResponse(): MsgCreateCdaResponse {
  return {
    id: Long.UZERO,
    witnessAddress: "",
    witnessInitResponse: new Uint8Array()
  };
}

export const MsgCreateCdaResponse = {
  encode(message: MsgCreateCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.witnessAddress !== "") {
      writer.uint32(18).string(message.witnessAddress);
    }

    if (message.witnessInitResponse.length !== 0) {
      writer.uint32(26).bytes(message.witnessInitResponse);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.witnessAddress = reader.string();
          break;

        case 3:
          message.witnessInitResponse = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateCdaResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      witnessAddress: isSet(object.witnessAddress) ? String(object.witnessAddress) : "",
      witnessInitResponse: isSet(object.witnessInitResponse) ? bytesFromBase64(object.witnessInitResponse) : new Uint8Array()
    };
  },

  toJSON(message: MsgCreateCdaResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.witnessAddress !== undefined && (obj.witnessAddress = message.witnessAddress);
    message.witnessInitResponse !== undefined && (obj.witnessInitResponse = base64FromBytes(message.witnessInitResponse !== undefined ? message.witnessInitResponse : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgCreateCdaResponse>): MsgCreateCdaResponse {
    const message = createBaseMsgCreateCdaResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.witnessAddress = object.witnessAddress ?? "";
    message.witnessInitResponse = object.witnessInitResponse ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgApproveCda(): MsgApproveCda {
  return {
    creator: "",
    cdaId: Long.UZERO,
    signerId: Long.UZERO,
    signingData: new Uint8Array()
  };
}

export const MsgApproveCda = {
  encode(message: MsgApproveCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.cdaId.isZero()) {
      writer.uint32(16).uint64(message.cdaId);
    }

    if (!message.signerId.isZero()) {
      writer.uint32(24).uint64(message.signerId);
    }

    if (message.signingData.length !== 0) {
      writer.uint32(34).bytes(message.signingData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveCda {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveCda();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cdaId = (reader.uint64() as Long);
          break;

        case 3:
          message.signerId = (reader.uint64() as Long);
          break;

        case 4:
          message.signingData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgApproveCda {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cdaId: isSet(object.cdaId) ? Long.fromValue(object.cdaId) : Long.UZERO,
      signerId: isSet(object.signerId) ? Long.fromValue(object.signerId) : Long.UZERO,
      signingData: isSet(object.signingData) ? bytesFromBase64(object.signingData) : new Uint8Array()
    };
  },

  toJSON(message: MsgApproveCda): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdaId !== undefined && (obj.cdaId = (message.cdaId || Long.UZERO).toString());
    message.signerId !== undefined && (obj.signerId = (message.signerId || Long.UZERO).toString());
    message.signingData !== undefined && (obj.signingData = base64FromBytes(message.signingData !== undefined ? message.signingData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgApproveCda>): MsgApproveCda {
    const message = createBaseMsgApproveCda();
    message.creator = object.creator ?? "";
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    message.signerId = object.signerId !== undefined && object.signerId !== null ? Long.fromValue(object.signerId) : Long.UZERO;
    message.signingData = object.signingData ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgApproveCdaResponse(): MsgApproveCdaResponse {
  return {};
}

export const MsgApproveCdaResponse = {
  encode(_: MsgApproveCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgApproveCdaResponse {
    return {};
  },

  toJSON(_: MsgApproveCdaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgApproveCdaResponse>): MsgApproveCdaResponse {
    const message = createBaseMsgApproveCdaResponse();
    return message;
  }

};

function createBaseMsgWitnessApproveCda(): MsgWitnessApproveCda {
  return {
    creator: "",
    cdaId: Long.UZERO,
    signingData: new Uint8Array()
  };
}

export const MsgWitnessApproveCda = {
  encode(message: MsgWitnessApproveCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.cdaId.isZero()) {
      writer.uint32(16).uint64(message.cdaId);
    }

    if (message.signingData.length !== 0) {
      writer.uint32(34).bytes(message.signingData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWitnessApproveCda {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWitnessApproveCda();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cdaId = (reader.uint64() as Long);
          break;

        case 4:
          message.signingData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWitnessApproveCda {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cdaId: isSet(object.cdaId) ? Long.fromValue(object.cdaId) : Long.UZERO,
      signingData: isSet(object.signingData) ? bytesFromBase64(object.signingData) : new Uint8Array()
    };
  },

  toJSON(message: MsgWitnessApproveCda): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdaId !== undefined && (obj.cdaId = (message.cdaId || Long.UZERO).toString());
    message.signingData !== undefined && (obj.signingData = base64FromBytes(message.signingData !== undefined ? message.signingData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgWitnessApproveCda>): MsgWitnessApproveCda {
    const message = createBaseMsgWitnessApproveCda();
    message.creator = object.creator ?? "";
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    message.signingData = object.signingData ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgWitnessApproveCdaResponse(): MsgWitnessApproveCdaResponse {
  return {};
}

export const MsgWitnessApproveCdaResponse = {
  encode(_: MsgWitnessApproveCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWitnessApproveCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWitnessApproveCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgWitnessApproveCdaResponse {
    return {};
  },

  toJSON(_: MsgWitnessApproveCdaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWitnessApproveCdaResponse>): MsgWitnessApproveCdaResponse {
    const message = createBaseMsgWitnessApproveCdaResponse();
    return message;
  }

};

function createBaseMsgFinalizeCda(): MsgFinalizeCda {
  return {
    creator: "",
    cdaId: Long.UZERO
  };
}

export const MsgFinalizeCda = {
  encode(message: MsgFinalizeCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.cdaId.isZero()) {
      writer.uint32(16).uint64(message.cdaId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeCda {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeCda();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cdaId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgFinalizeCda {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cdaId: isSet(object.cdaId) ? Long.fromValue(object.cdaId) : Long.UZERO
    };
  },

  toJSON(message: MsgFinalizeCda): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdaId !== undefined && (obj.cdaId = (message.cdaId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgFinalizeCda>): MsgFinalizeCda {
    const message = createBaseMsgFinalizeCda();
    message.creator = object.creator ?? "";
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgFinalizeCdaResponse(): MsgFinalizeCdaResponse {
  return {};
}

export const MsgFinalizeCdaResponse = {
  encode(_: MsgFinalizeCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgFinalizeCdaResponse {
    return {};
  },

  toJSON(_: MsgFinalizeCdaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgFinalizeCdaResponse>): MsgFinalizeCdaResponse {
    const message = createBaseMsgFinalizeCdaResponse();
    return message;
  }

};

function createBaseMsgVoidCda(): MsgVoidCda {
  return {
    creator: "",
    cdaId: Long.UZERO
  };
}

export const MsgVoidCda = {
  encode(message: MsgVoidCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.cdaId.isZero()) {
      writer.uint32(16).uint64(message.cdaId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoidCda {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoidCda();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cdaId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVoidCda {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cdaId: isSet(object.cdaId) ? Long.fromValue(object.cdaId) : Long.UZERO
    };
  },

  toJSON(message: MsgVoidCda): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cdaId !== undefined && (obj.cdaId = (message.cdaId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgVoidCda>): MsgVoidCda {
    const message = createBaseMsgVoidCda();
    message.creator = object.creator ?? "";
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgVoidCdaResponse(): MsgVoidCdaResponse {
  return {};
}

export const MsgVoidCdaResponse = {
  encode(_: MsgVoidCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoidCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoidCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgVoidCdaResponse {
    return {};
  },

  toJSON(_: MsgVoidCdaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgVoidCdaResponse>): MsgVoidCdaResponse {
    const message = createBaseMsgVoidCdaResponse();
    return message;
  }

};

function createBaseMsgRegisterContract(): MsgRegisterContract {
  return {
    creator: "",
    description: "",
    authors: [],
    contactInfo: undefined,
    moreInfoUri: "",
    signingDataSchema: new Uint8Array(),
    templateUri: "",
    templateSchemaUri: "",
    witnessCodeId: Long.UZERO
  };
}

export const MsgRegisterContract = {
  encode(message: MsgRegisterContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.authors) {
      writer.uint32(26).string(v!);
    }

    if (message.contactInfo !== undefined) {
      ContactInfo.encode(message.contactInfo, writer.uint32(34).fork()).ldelim();
    }

    if (message.moreInfoUri !== "") {
      writer.uint32(42).string(message.moreInfoUri);
    }

    if (message.signingDataSchema.length !== 0) {
      writer.uint32(50).bytes(message.signingDataSchema);
    }

    if (message.templateUri !== "") {
      writer.uint32(58).string(message.templateUri);
    }

    if (message.templateSchemaUri !== "") {
      writer.uint32(66).string(message.templateSchemaUri);
    }

    if (!message.witnessCodeId.isZero()) {
      writer.uint32(72).uint64(message.witnessCodeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.authors.push(reader.string());
          break;

        case 4:
          message.contactInfo = ContactInfo.decode(reader, reader.uint32());
          break;

        case 5:
          message.moreInfoUri = reader.string();
          break;

        case 6:
          message.signingDataSchema = reader.bytes();
          break;

        case 7:
          message.templateUri = reader.string();
          break;

        case 8:
          message.templateSchemaUri = reader.string();
          break;

        case 9:
          message.witnessCodeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      authors: Array.isArray(object?.authors) ? object.authors.map((e: any) => String(e)) : [],
      contactInfo: isSet(object.contactInfo) ? ContactInfo.fromJSON(object.contactInfo) : undefined,
      moreInfoUri: isSet(object.moreInfoUri) ? String(object.moreInfoUri) : "",
      signingDataSchema: isSet(object.signingDataSchema) ? bytesFromBase64(object.signingDataSchema) : new Uint8Array(),
      templateUri: isSet(object.templateUri) ? String(object.templateUri) : "",
      templateSchemaUri: isSet(object.templateSchemaUri) ? String(object.templateSchemaUri) : "",
      witnessCodeId: isSet(object.witnessCodeId) ? Long.fromValue(object.witnessCodeId) : Long.UZERO
    };
  },

  toJSON(message: MsgRegisterContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);

    if (message.authors) {
      obj.authors = message.authors.map(e => e);
    } else {
      obj.authors = [];
    }

    message.contactInfo !== undefined && (obj.contactInfo = message.contactInfo ? ContactInfo.toJSON(message.contactInfo) : undefined);
    message.moreInfoUri !== undefined && (obj.moreInfoUri = message.moreInfoUri);
    message.signingDataSchema !== undefined && (obj.signingDataSchema = base64FromBytes(message.signingDataSchema !== undefined ? message.signingDataSchema : new Uint8Array()));
    message.templateUri !== undefined && (obj.templateUri = message.templateUri);
    message.templateSchemaUri !== undefined && (obj.templateSchemaUri = message.templateSchemaUri);
    message.witnessCodeId !== undefined && (obj.witnessCodeId = (message.witnessCodeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.authors = object.authors?.map(e => e) || [];
    message.contactInfo = object.contactInfo !== undefined && object.contactInfo !== null ? ContactInfo.fromPartial(object.contactInfo) : undefined;
    message.moreInfoUri = object.moreInfoUri ?? "";
    message.signingDataSchema = object.signingDataSchema ?? new Uint8Array();
    message.templateUri = object.templateUri ?? "";
    message.templateSchemaUri = object.templateSchemaUri ?? "";
    message.witnessCodeId = object.witnessCodeId !== undefined && object.witnessCodeId !== null ? Long.fromValue(object.witnessCodeId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgRegisterContractResponse = {
  encode(message: MsgRegisterContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterContractResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgRegisterContractResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};