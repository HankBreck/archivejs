import { Timestamp } from "../../google/protobuf/timestamp";
import { ContactInfo, ContactInfoSDKType } from "./contract";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateCda {
  creator: string;
  signingParties: string[];
  contractId: Long;
  legalMetadataUri: string;
  signingData: Uint8Array;
  utcExpireTime?: Date;
}
export interface MsgCreateCdaSDKType {
  creator: string;
  signing_parties: string[];
  contract_id: Long;
  legal_metadata_uri: string;
  signing_data: Uint8Array;
  utc_expire_time?: Date;
}
export interface MsgCreateCdaResponse {
  id: Long;
}
export interface MsgCreateCdaResponseSDKType {
  id: Long;
}
export interface MsgApproveCda {
  creator: string;
  cdaId: Long;
  signingData: Uint8Array;
}
export interface MsgApproveCdaSDKType {
  creator: string;
  cda_id: Long;
  signing_data: Uint8Array;
}
export interface MsgApproveCdaResponse {}
export interface MsgApproveCdaResponseSDKType {}
export interface MsgFinalizeCda {
  creator: string;
  cdaId: Long;
}
export interface MsgFinalizeCdaSDKType {
  creator: string;
  cda_id: Long;
}
export interface MsgFinalizeCdaResponse {}
export interface MsgFinalizeCdaResponseSDKType {}
export interface MsgRegisterContract {
  creator: string;
  description: string;
  authors: string[];
  contactInfo?: ContactInfo;
  moreInfoUri: string;
  signingDataSchema: Uint8Array;
  templateUri: string;
  templateSchemaUri: string;
}
export interface MsgRegisterContractSDKType {
  creator: string;
  description: string;
  authors: string[];
  contact_info?: ContactInfoSDKType;
  more_info_uri: string;
  signing_data_schema: Uint8Array;
  template_uri: string;
  template_schema_uri: string;
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
    signingParties: [],
    contractId: Long.UZERO,
    legalMetadataUri: "",
    signingData: new Uint8Array(),
    utcExpireTime: undefined
  };
}

export const MsgCreateCda = {
  encode(message: MsgCreateCda, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    for (const v of message.signingParties) {
      writer.uint32(18).string(v!);
    }

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
      Timestamp.encode(toTimestamp(message.utcExpireTime), writer.uint32(50).fork()).ldelim();
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
          message.signingParties.push(reader.string());
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
          message.utcExpireTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateCda>): MsgCreateCda {
    const message = createBaseMsgCreateCda();
    message.creator = object.creator ?? "";
    message.signingParties = object.signingParties?.map(e => e) || [];
    message.contractId = object.contractId !== undefined && object.contractId !== null ? Long.fromValue(object.contractId) : Long.UZERO;
    message.legalMetadataUri = object.legalMetadataUri ?? "";
    message.signingData = object.signingData ?? new Uint8Array();
    message.utcExpireTime = object.utcExpireTime ?? undefined;
    return message;
  }

};

function createBaseMsgCreateCdaResponse(): MsgCreateCdaResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgCreateCdaResponse = {
  encode(message: MsgCreateCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateCdaResponse>): MsgCreateCdaResponse {
    const message = createBaseMsgCreateCdaResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgApproveCda(): MsgApproveCda {
  return {
    creator: "",
    cdaId: Long.UZERO,
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

    if (message.signingData.length !== 0) {
      writer.uint32(26).bytes(message.signingData);
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
          message.signingData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgApproveCda>): MsgApproveCda {
    const message = createBaseMsgApproveCda();
    message.creator = object.creator ?? "";
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
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

  fromPartial(_: DeepPartial<MsgApproveCdaResponse>): MsgApproveCdaResponse {
    const message = createBaseMsgApproveCdaResponse();
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

  fromPartial(object: DeepPartial<MsgFinalizeCda>): MsgFinalizeCda {
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

  fromPartial(_: DeepPartial<MsgFinalizeCdaResponse>): MsgFinalizeCdaResponse {
    const message = createBaseMsgFinalizeCdaResponse();
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
    templateSchemaUri: ""
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterContract>): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.authors = object.authors?.map(e => e) || [];
    message.contactInfo = object.contactInfo !== undefined && object.contactInfo !== null ? ContactInfo.fromPartial(object.contactInfo) : undefined;
    message.moreInfoUri = object.moreInfoUri ?? "";
    message.signingDataSchema = object.signingDataSchema ?? new Uint8Array();
    message.templateUri = object.templateUri ?? "";
    message.templateSchemaUri = object.templateSchemaUri ?? "";
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

  fromPartial(object: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};