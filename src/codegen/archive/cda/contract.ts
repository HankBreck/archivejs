import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ContactMethod {
  /** Phone - People won't want to publish their phone number on here */
  Phone = 0,
  Email = 1,
  UNRECOGNIZED = -1,
}
export const ContactMethodSDKType = ContactMethod;
export function contactMethodFromJSON(object: any): ContactMethod {
  switch (object) {
    case 0:
    case "Phone":
      return ContactMethod.Phone;

    case 1:
    case "Email":
      return ContactMethod.Email;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ContactMethod.UNRECOGNIZED;
  }
}
export function contactMethodToJSON(object: ContactMethod): string {
  switch (object) {
    case ContactMethod.Phone:
      return "Phone";

    case ContactMethod.Email:
      return "Email";

    case ContactMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Contract {
  id: Long;
  description: string;
  authors: string[];
  contactInfo?: ContactInfo;
  moreInfoUri: string;
  templateUri: string;
  templateSchemaUri: string;
}
export interface ContractSDKType {
  id: Long;
  description: string;
  authors: string[];
  contact_info?: ContactInfoSDKType;
  more_info_uri: string;
  template_uri: string;
  template_schema_uri: string;
}
export interface ContactInfo {
  method: ContactMethod;
  value: string;
}
export interface ContactInfoSDKType {
  method: ContactMethod;
  value: string;
}

function createBaseContract(): Contract {
  return {
    id: Long.UZERO,
    description: "",
    authors: [],
    contactInfo: undefined,
    moreInfoUri: "",
    templateUri: "",
    templateSchemaUri: ""
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

    if (message.templateUri !== "") {
      writer.uint32(50).string(message.templateUri);
    }

    if (message.templateSchemaUri !== "") {
      writer.uint32(58).string(message.templateSchemaUri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
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
          message.templateUri = reader.string();
          break;

        case 7:
          message.templateSchemaUri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.description = object.description ?? "";
    message.authors = object.authors?.map(e => e) || [];
    message.contactInfo = object.contactInfo !== undefined && object.contactInfo !== null ? ContactInfo.fromPartial(object.contactInfo) : undefined;
    message.moreInfoUri = object.moreInfoUri ?? "";
    message.templateUri = object.templateUri ?? "";
    message.templateSchemaUri = object.templateSchemaUri ?? "";
    return message;
  }

};

function createBaseContactInfo(): ContactInfo {
  return {
    method: 0,
    value: ""
  };
}

export const ContactInfo = {
  encode(message: ContactInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.method = (reader.int32() as any);
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContactInfo>): ContactInfo {
    const message = createBaseContactInfo();
    message.method = object.method ?? 0;
    message.value = object.value ?? "";
    return message;
  }

};