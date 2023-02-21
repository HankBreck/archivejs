import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Issuer, IssuerSDKType } from "./issuer";
import { Certificate, CertificateSDKType } from "./certificate";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryIdentityMembersRequest {
  id: Long;
  isPending: boolean;
  pagination?: PageRequest;
}
export interface QueryIdentityMembersRequestSDKType {
  id: Long;
  is_pending: boolean;
  pagination?: PageRequestSDKType;
}
export interface QueryIdentityMembersResponse {
  members: string[];
  pagination?: PageResponse;
}
export interface QueryIdentityMembersResponseSDKType {
  members: string[];
  pagination?: PageResponseSDKType;
}
export interface QueryIssuersRequest {
  pagination?: PageRequest;
}
export interface QueryIssuersRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryIssuersResponse {
  issuers: string[];
  pagination?: PageResponse;
}
export interface QueryIssuersResponseSDKType {
  issuers: string[];
  pagination?: PageResponseSDKType;
}
export interface QueryIssuerInfoRequest {
  issuer: string;
}
export interface QueryIssuerInfoRequestSDKType {
  issuer: string;
}
export interface QueryIssuerInfoResponse {
  issuerInfo?: Issuer;
}
export interface QueryIssuerInfoResponseSDKType {
  issuer_info?: IssuerSDKType;
}
export interface QueryIdentityRequest {
  id: Long;
}
export interface QueryIdentityRequestSDKType {
  id: Long;
}
export interface QueryIdentityResponse {
  certificate?: Certificate;
}
export interface QueryIdentityResponseSDKType {
  certificate?: CertificateSDKType;
}
export interface QueryOperatorsRequest {
  id: Long;
  pagination?: PageRequest;
}
export interface QueryOperatorsRequestSDKType {
  id: Long;
  pagination?: PageRequestSDKType;
}
export interface QueryOperatorsResponse {
  operators: string[];
  pagination?: PageResponse;
}
export interface QueryOperatorsResponseSDKType {
  operators: string[];
  pagination?: PageResponseSDKType;
}
export interface QueryMemberRoleRequest {
  id: Long;
  member: string;
}
export interface QueryMemberRoleRequestSDKType {
  id: Long;
  member: string;
}
export interface QueryMemberRoleResponse {
  role: string;
}
export interface QueryMemberRoleResponseSDKType {
  role: string;
}
export interface QueryIsFrozenRequest {
  id: Long;
}
export interface QueryIsFrozenRequestSDKType {
  id: Long;
}
export interface QueryIsFrozenResponse {
  isFrozen: boolean;
}
export interface QueryIsFrozenResponseSDKType {
  is_frozen: boolean;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryIdentityMembersRequest(): QueryIdentityMembersRequest {
  return {
    id: Long.UZERO,
    isPending: false,
    pagination: undefined
  };
}

export const QueryIdentityMembersRequest = {
  encode(message: QueryIdentityMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.isPending === true) {
      writer.uint32(16).bool(message.isPending);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdentityMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityMembersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.isPending = reader.bool();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIdentityMembersRequest>): QueryIdentityMembersRequest {
    const message = createBaseQueryIdentityMembersRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.isPending = object.isPending ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIdentityMembersResponse(): QueryIdentityMembersResponse {
  return {
    members: [],
    pagination: undefined
  };
}

export const QueryIdentityMembersResponse = {
  encode(message: QueryIdentityMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdentityMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityMembersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.members.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIdentityMembersResponse>): QueryIdentityMembersResponse {
    const message = createBaseQueryIdentityMembersResponse();
    message.members = object.members?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIssuersRequest(): QueryIssuersRequest {
  return {
    pagination: undefined
  };
}

export const QueryIssuersRequest = {
  encode(message: QueryIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIssuersRequest>): QueryIssuersRequest {
    const message = createBaseQueryIssuersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIssuersResponse(): QueryIssuersResponse {
  return {
    issuers: [],
    pagination: undefined
  };
}

export const QueryIssuersResponse = {
  encode(message: QueryIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.issuers) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuers.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = createBaseQueryIssuersResponse();
    message.issuers = object.issuers?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIssuerInfoRequest(): QueryIssuerInfoRequest {
  return {
    issuer: ""
  };
}

export const QueryIssuerInfoRequest = {
  encode(message: QueryIssuerInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIssuerInfoRequest>): QueryIssuerInfoRequest {
    const message = createBaseQueryIssuerInfoRequest();
    message.issuer = object.issuer ?? "";
    return message;
  }

};

function createBaseQueryIssuerInfoResponse(): QueryIssuerInfoResponse {
  return {
    issuerInfo: undefined
  };
}

export const QueryIssuerInfoResponse = {
  encode(message: QueryIssuerInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerInfo !== undefined) {
      Issuer.encode(message.issuerInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuerInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIssuerInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerInfo = Issuer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIssuerInfoResponse>): QueryIssuerInfoResponse {
    const message = createBaseQueryIssuerInfoResponse();
    message.issuerInfo = object.issuerInfo !== undefined && object.issuerInfo !== null ? Issuer.fromPartial(object.issuerInfo) : undefined;
    return message;
  }

};

function createBaseQueryIdentityRequest(): QueryIdentityRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryIdentityRequest = {
  encode(message: QueryIdentityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdentityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityRequest();

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

  fromPartial(object: DeepPartial<QueryIdentityRequest>): QueryIdentityRequest {
    const message = createBaseQueryIdentityRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIdentityResponse(): QueryIdentityResponse {
  return {
    certificate: undefined
  };
}

export const QueryIdentityResponse = {
  encode(message: QueryIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdentityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIdentityResponse>): QueryIdentityResponse {
    const message = createBaseQueryIdentityResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
  }

};

function createBaseQueryOperatorsRequest(): QueryOperatorsRequest {
  return {
    id: Long.UZERO,
    pagination: undefined
  };
}

export const QueryOperatorsRequest = {
  encode(message: QueryOperatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOperatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOperatorsRequest>): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOperatorsResponse(): QueryOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}

export const QueryOperatorsResponse = {
  encode(message: QueryOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operators) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operators.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOperatorsResponse>): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryMemberRoleRequest(): QueryMemberRoleRequest {
  return {
    id: Long.UZERO,
    member: ""
  };
}

export const QueryMemberRoleRequest = {
  encode(message: QueryMemberRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMemberRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberRoleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.member = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMemberRoleRequest>): QueryMemberRoleRequest {
    const message = createBaseQueryMemberRoleRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.member = object.member ?? "";
    return message;
  }

};

function createBaseQueryMemberRoleResponse(): QueryMemberRoleResponse {
  return {
    role: ""
  };
}

export const QueryMemberRoleResponse = {
  encode(message: QueryMemberRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMemberRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberRoleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryMemberRoleResponse>): QueryMemberRoleResponse {
    const message = createBaseQueryMemberRoleResponse();
    message.role = object.role ?? "";
    return message;
  }

};

function createBaseQueryIsFrozenRequest(): QueryIsFrozenRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryIsFrozenRequest = {
  encode(message: QueryIsFrozenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsFrozenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFrozenRequest();

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

  fromPartial(object: DeepPartial<QueryIsFrozenRequest>): QueryIsFrozenRequest {
    const message = createBaseQueryIsFrozenRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIsFrozenResponse(): QueryIsFrozenResponse {
  return {
    isFrozen: false
  };
}

export const QueryIsFrozenResponse = {
  encode(message: QueryIsFrozenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isFrozen === true) {
      writer.uint32(8).bool(message.isFrozen);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsFrozenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFrozenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isFrozen = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIsFrozenResponse>): QueryIsFrozenResponse {
    const message = createBaseQueryIsFrozenResponse();
    message.isFrozen = object.isFrozen ?? false;
    return message;
  }

};