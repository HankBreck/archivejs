import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Issuer {
  creator: string;
  name: string;
  moreInfoUri: string;
}
export interface IssuerSDKType {
  creator: string;
  name: string;
  more_info_uri: string;
}

function createBaseIssuer(): Issuer {
  return {
    creator: "",
    name: "",
    moreInfoUri: ""
  };
}

export const Issuer = {
  encode(message: Issuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssuer();

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

  fromJSON(object: any): Issuer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      moreInfoUri: isSet(object.moreInfoUri) ? String(object.moreInfoUri) : ""
    };
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.moreInfoUri !== undefined && (obj.moreInfoUri = message.moreInfoUri);
    return obj;
  },

  fromPartial(object: Partial<Issuer>): Issuer {
    const message = createBaseIssuer();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.moreInfoUri = object.moreInfoUri ?? "";
    return message;
  }

};