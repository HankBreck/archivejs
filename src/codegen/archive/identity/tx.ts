import { HashEntry, HashEntrySDKType } from "./certificate";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
export interface MsgRegisterIssuer {
  creator: string;
  name: string;
  moreInfoUri: string;
}
export interface MsgRegisterIssuerSDKType {
  creator: string;
  name: string;
  more_info_uri: string;
}
export interface MsgRegisterIssuerResponse {}
export interface MsgRegisterIssuerResponseSDKType {}
export interface MsgIssueCertificate {
  creator: string;
  recipient: string;
  salt: string;
  metadataSchemaUri: string;
  hashes: HashEntry[];
}
export interface MsgIssueCertificateSDKType {
  creator: string;
  recipient: string;
  salt: string;
  metadata_schema_uri: string;
  hashes: HashEntrySDKType[];
}
export interface MsgIssueCertificateResponse {
  id: Long;
}
export interface MsgIssueCertificateResponseSDKType {
  id: Long;
}
export interface MsgAcceptIdentity {
  creator: string;
  id: Long;
}
export interface MsgAcceptIdentitySDKType {
  creator: string;
  id: Long;
}
export interface MsgAcceptIdentityResponse {}
export interface MsgAcceptIdentityResponseSDKType {}
export interface MsgRejectIdentity {
  creator: string;
  id: Long;
}
export interface MsgRejectIdentitySDKType {
  creator: string;
  id: Long;
}
export interface MsgRejectIdentityResponse {}
export interface MsgRejectIdentityResponseSDKType {}
export interface MsgRenounceIdentity {
  creator: string;
  id: Long;
}
export interface MsgRenounceIdentitySDKType {
  creator: string;
  id: Long;
}
export interface MsgRenounceIdentityResponse {}
export interface MsgRenounceIdentityResponseSDKType {}
export interface MsgUpdateOperators {
  creator: string;
  id: Long;
  toAdd: string[];
  toRemove: string[];
}
export interface MsgUpdateOperatorsSDKType {
  creator: string;
  id: Long;
  toAdd: string[];
  toRemove: string[];
}
export interface MsgUpdateOperatorsResponse {}
export interface MsgUpdateOperatorsResponseSDKType {}
export interface MsgUpdateMembers {
  creator: string;
  id: Long;
  toAdd: string[];
  toRemove: string[];
}
export interface MsgUpdateMembersSDKType {
  creator: string;
  id: Long;
  toAdd: string[];
  toRemove: string[];
}
export interface MsgUpdateMembersResponse {}
export interface MsgUpdateMembersResponseSDKType {}
export interface MsgFreezeIdentity {
  creator: string;
  id: Long;
}
export interface MsgFreezeIdentitySDKType {
  creator: string;
  id: Long;
}
export interface MsgFreezeIdentityResponse {}
export interface MsgFreezeIdentityResponseSDKType {}

function createBaseMsgRegisterIssuer(): MsgRegisterIssuer {
  return {
    creator: "",
    name: "",
    moreInfoUri: ""
  };
}

export const MsgRegisterIssuer = {
  encode(message: MsgRegisterIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.moreInfoUri !== "") {
      writer.uint32(26).string(message.moreInfoUri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.moreInfoUri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterIssuer>): MsgRegisterIssuer {
    const message = createBaseMsgRegisterIssuer();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.moreInfoUri = object.moreInfoUri ?? "";
    return message;
  }

};

function createBaseMsgRegisterIssuerResponse(): MsgRegisterIssuerResponse {
  return {};
}

export const MsgRegisterIssuerResponse = {
  encode(_: MsgRegisterIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterIssuerResponse();

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

  fromPartial(_: DeepPartial<MsgRegisterIssuerResponse>): MsgRegisterIssuerResponse {
    const message = createBaseMsgRegisterIssuerResponse();
    return message;
  }

};

function createBaseMsgIssueCertificate(): MsgIssueCertificate {
  return {
    creator: "",
    recipient: "",
    salt: "",
    metadataSchemaUri: "",
    hashes: []
  };
}

export const MsgIssueCertificate = {
  encode(message: MsgIssueCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }

    if (message.metadataSchemaUri !== "") {
      writer.uint32(34).string(message.metadataSchemaUri);
    }

    for (const v of message.hashes) {
      HashEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.salt = reader.string();
          break;

        case 4:
          message.metadataSchemaUri = reader.string();
          break;

        case 5:
          message.hashes.push(HashEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIssueCertificate>): MsgIssueCertificate {
    const message = createBaseMsgIssueCertificate();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.salt = object.salt ?? "";
    message.metadataSchemaUri = object.metadataSchemaUri ?? "";
    message.hashes = object.hashes?.map(e => HashEntry.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgIssueCertificateResponse(): MsgIssueCertificateResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgIssueCertificateResponse = {
  encode(message: MsgIssueCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCertificateResponse();

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

  fromPartial(object: DeepPartial<MsgIssueCertificateResponse>): MsgIssueCertificateResponse {
    const message = createBaseMsgIssueCertificateResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAcceptIdentity(): MsgAcceptIdentity {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgAcceptIdentity = {
  encode(message: MsgAcceptIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptIdentity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAcceptIdentity>): MsgAcceptIdentity {
    const message = createBaseMsgAcceptIdentity();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAcceptIdentityResponse(): MsgAcceptIdentityResponse {
  return {};
}

export const MsgAcceptIdentityResponse = {
  encode(_: MsgAcceptIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptIdentityResponse();

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

  fromPartial(_: DeepPartial<MsgAcceptIdentityResponse>): MsgAcceptIdentityResponse {
    const message = createBaseMsgAcceptIdentityResponse();
    return message;
  }

};

function createBaseMsgRejectIdentity(): MsgRejectIdentity {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgRejectIdentity = {
  encode(message: MsgRejectIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectIdentity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRejectIdentity>): MsgRejectIdentity {
    const message = createBaseMsgRejectIdentity();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRejectIdentityResponse(): MsgRejectIdentityResponse {
  return {};
}

export const MsgRejectIdentityResponse = {
  encode(_: MsgRejectIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectIdentityResponse();

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

  fromPartial(_: DeepPartial<MsgRejectIdentityResponse>): MsgRejectIdentityResponse {
    const message = createBaseMsgRejectIdentityResponse();
    return message;
  }

};

function createBaseMsgRenounceIdentity(): MsgRenounceIdentity {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgRenounceIdentity = {
  encode(message: MsgRenounceIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenounceIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenounceIdentity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRenounceIdentity>): MsgRenounceIdentity {
    const message = createBaseMsgRenounceIdentity();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRenounceIdentityResponse(): MsgRenounceIdentityResponse {
  return {};
}

export const MsgRenounceIdentityResponse = {
  encode(_: MsgRenounceIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenounceIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenounceIdentityResponse();

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

  fromPartial(_: DeepPartial<MsgRenounceIdentityResponse>): MsgRenounceIdentityResponse {
    const message = createBaseMsgRenounceIdentityResponse();
    return message;
  }

};

function createBaseMsgUpdateOperators(): MsgUpdateOperators {
  return {
    creator: "",
    id: Long.UZERO,
    toAdd: [],
    toRemove: []
  };
}

export const MsgUpdateOperators = {
  encode(message: MsgUpdateOperators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    for (const v of message.toAdd) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.toRemove) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperators();

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
          message.toAdd.push(reader.string());
          break;

        case 4:
          message.toRemove.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateOperators>): MsgUpdateOperators {
    const message = createBaseMsgUpdateOperators();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.toAdd = object.toAdd?.map(e => e) || [];
    message.toRemove = object.toRemove?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgUpdateOperatorsResponse(): MsgUpdateOperatorsResponse {
  return {};
}

export const MsgUpdateOperatorsResponse = {
  encode(_: MsgUpdateOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorsResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateOperatorsResponse>): MsgUpdateOperatorsResponse {
    const message = createBaseMsgUpdateOperatorsResponse();
    return message;
  }

};

function createBaseMsgUpdateMembers(): MsgUpdateMembers {
  return {
    creator: "",
    id: Long.UZERO,
    toAdd: [],
    toRemove: []
  };
}

export const MsgUpdateMembers = {
  encode(message: MsgUpdateMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    for (const v of message.toAdd) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.toRemove) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembers();

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
          message.toAdd.push(reader.string());
          break;

        case 4:
          message.toRemove.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUpdateMembers>): MsgUpdateMembers {
    const message = createBaseMsgUpdateMembers();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.toAdd = object.toAdd?.map(e => e) || [];
    message.toRemove = object.toRemove?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgUpdateMembersResponse(): MsgUpdateMembersResponse {
  return {};
}

export const MsgUpdateMembersResponse = {
  encode(_: MsgUpdateMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMembersResponse();

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

  fromPartial(_: DeepPartial<MsgUpdateMembersResponse>): MsgUpdateMembersResponse {
    const message = createBaseMsgUpdateMembersResponse();
    return message;
  }

};

function createBaseMsgFreezeIdentity(): MsgFreezeIdentity {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgFreezeIdentity = {
  encode(message: MsgFreezeIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeIdentity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFreezeIdentity>): MsgFreezeIdentity {
    const message = createBaseMsgFreezeIdentity();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgFreezeIdentityResponse(): MsgFreezeIdentityResponse {
  return {};
}

export const MsgFreezeIdentityResponse = {
  encode(_: MsgFreezeIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeIdentityResponse();

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

  fromPartial(_: DeepPartial<MsgFreezeIdentityResponse>): MsgFreezeIdentityResponse {
    const message = createBaseMsgFreezeIdentityResponse();
    return message;
  }

};