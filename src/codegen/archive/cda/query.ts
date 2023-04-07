import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { CDA, CDASDKType } from "./cda";
import { Contract, ContractSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../helpers";
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
  /** params holds all the parameters of this module. */
  params?: ParamsSDKType;
}
export interface QueryCdaRequest {
  id: Long;
}
export interface QueryCdaRequestSDKType {
  id: Long;
}
export interface QueryCdaResponse {
  cda?: CDA;
}
export interface QueryCdaResponseSDKType {
  cda?: CDASDKType;
}
export interface QueryCdasRequest {
  /** Pagination to view all CDAs */
  pagination?: PageRequest;
}
export interface QueryCdasRequestSDKType {
  /** Pagination to view all CDAs */
  pagination?: PageRequestSDKType;
}
export interface QueryCdasResponse {
  /** List of CDA objects */
  CDAs: CDA[];
  /** Pagination to view all CDAs */

  pagination?: PageResponse;
}
export interface QueryCdasResponseSDKType {
  /** List of CDA objects */
  CDAs: CDASDKType[];
  /** Pagination to view all CDAs */

  pagination?: PageResponseSDKType;
}
export interface QueryCdasBySignerRequest {
  /** Account address for the owner */
  signer: Long;
  /** Pagination to view all ids */

  pagination?: PageRequest;
}
export interface QueryCdasBySignerRequestSDKType {
  /** Account address for the owner */
  signer: Long;
  /** Pagination to view all ids */

  pagination?: PageRequestSDKType;
}
export interface QueryCdasBySignerResponse {
  /** List of CDA ids belonging to the owner */
  ids: Long[];
  /** Pagination to view all CDAs */

  pagination?: PageResponse;
}
export interface QueryCdasBySignerResponseSDKType {
  /** List of CDA ids belonging to the owner */
  ids: Long[];
  /** Pagination to view all CDAs */

  pagination?: PageResponseSDKType;
}
export interface QueryApprovalRequest {
  /** The CDA ID to check */
  cdaId: Long;
  /** The identity ID of the signer to check */

  signerId: Long;
}
export interface QueryApprovalRequestSDKType {
  /** The CDA ID to check */
  cda_id: Long;
  /** The identity ID of the signer to check */

  signer_id: Long;
}
export interface QueryApprovalResponse {
  approved: boolean;
}
export interface QueryApprovalResponseSDKType {
  approved: boolean;
}
/** QueryContractRequest is the request type for the Query/Contract RPC method. */

export interface QueryContractRequest {
  /** QueryContractRequest is the request type for the Query/Contract RPC method. */
  id: Long;
}
/** QueryContractRequest is the request type for the Query/Contract RPC method. */

export interface QueryContractRequestSDKType {
  /** QueryContractRequest is the request type for the Query/Contract RPC method. */
  id: Long;
}
/**
 * QueryContractResponse is the response type for the Query/Contracts RPC
 * method.
 */

export interface QueryContractResponse {
  contract?: Contract;
}
/**
 * QueryContractResponse is the response type for the Query/Contracts RPC
 * method.
 */

export interface QueryContractResponseSDKType {
  contract?: ContractSDKType;
}
/** QueryContractsRequest is the request type for the Query/Contracts RPC method. */

export interface QueryContractsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryContractsRequest is the request type for the Query/Contracts RPC method. */

export interface QueryContractsRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsResponse is the response type for the Query/Contracts RPC
 * method.
 */

export interface QueryContractsResponse {
  /** the ids of the contracts registered */
  contracts: Contract[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryContractsResponse is the response type for the Query/Contracts RPC
 * method.
 */

export interface QueryContractsResponseSDKType {
  /** the ids of the contracts registered */
  contracts: ContractSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QuerySigningDataRequest is the request type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataRequest {
  /**
   * QuerySigningDataRequest is the request type for the Query/SigningData RPC
   * method
   */
  id: Long;
}
/**
 * QuerySigningDataRequest is the request type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataRequestSDKType {
  /**
   * QuerySigningDataRequest is the request type for the Query/SigningData RPC
   * method
   */
  id: Long;
}
/**
 * QuerySigningDataResponse is the response type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataResponse {
  /**
   * QuerySigningDataResponse is the response type for the Query/SigningData RPC
   * method
   */
  signingData: Uint8Array;
}
/**
 * QuerySigningDataResponse is the response type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataResponseSDKType {
  /**
   * QuerySigningDataResponse is the response type for the Query/SigningData RPC
   * method
   */
  signing_data: Uint8Array;
}
/**
 * QuerySigningDataSchemaRequest is the request type for the Query/SigningData
 * RPC method
 */

export interface QuerySigningDataSchemaRequest {
  /**
   * QuerySigningDataSchemaRequest is the request type for the Query/SigningData
   * RPC method
   */
  id: Long;
}
/**
 * QuerySigningDataSchemaRequest is the request type for the Query/SigningData
 * RPC method
 */

export interface QuerySigningDataSchemaRequestSDKType {
  /**
   * QuerySigningDataSchemaRequest is the request type for the Query/SigningData
   * RPC method
   */
  id: Long;
}
/**
 * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaResponse {
  /**
   * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
   * method
   */
  schema: Uint8Array;
}
/**
 * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaResponseSDKType {
  /**
   * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
   * method
   */
  schema: Uint8Array;
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryCdaRequest(): QueryCdaRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryCdaRequest = {
  encode(message: QueryCdaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdaRequest();

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

  fromJSON(object: any): QueryCdaRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryCdaRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCdaRequest>): QueryCdaRequest {
    const message = createBaseQueryCdaRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryCdaResponse(): QueryCdaResponse {
  return {
    cda: undefined
  };
}

export const QueryCdaResponse = {
  encode(message: QueryCdaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cda !== undefined) {
      CDA.encode(message.cda, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cda = CDA.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCdaResponse {
    return {
      cda: isSet(object.cda) ? CDA.fromJSON(object.cda) : undefined
    };
  },

  toJSON(message: QueryCdaResponse): unknown {
    const obj: any = {};
    message.cda !== undefined && (obj.cda = message.cda ? CDA.toJSON(message.cda) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCdaResponse>): QueryCdaResponse {
    const message = createBaseQueryCdaResponse();
    message.cda = object.cda !== undefined && object.cda !== null ? CDA.fromPartial(object.cda) : undefined;
    return message;
  }

};

function createBaseQueryCdasRequest(): QueryCdasRequest {
  return {
    pagination: undefined
  };
}

export const QueryCdasRequest = {
  encode(message: QueryCdasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasRequest();

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

  fromJSON(object: any): QueryCdasRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdasRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCdasRequest>): QueryCdasRequest {
    const message = createBaseQueryCdasRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdasResponse(): QueryCdasResponse {
  return {
    CDAs: [],
    pagination: undefined
  };
}

export const QueryCdasResponse = {
  encode(message: QueryCdasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.CDAs) {
      CDA.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CDAs.push(CDA.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCdasResponse {
    return {
      CDAs: Array.isArray(object?.CDAs) ? object.CDAs.map((e: any) => CDA.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdasResponse): unknown {
    const obj: any = {};

    if (message.CDAs) {
      obj.CDAs = message.CDAs.map(e => e ? CDA.toJSON(e) : undefined);
    } else {
      obj.CDAs = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCdasResponse>): QueryCdasResponse {
    const message = createBaseQueryCdasResponse();
    message.CDAs = object.CDAs?.map(e => CDA.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdasBySignerRequest(): QueryCdasBySignerRequest {
  return {
    signer: Long.UZERO,
    pagination: undefined
  };
}

export const QueryCdasBySignerRequest = {
  encode(message: QueryCdasBySignerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.signer.isZero()) {
      writer.uint32(8).uint64(message.signer);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasBySignerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasBySignerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = (reader.uint64() as Long);
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

  fromJSON(object: any): QueryCdasBySignerRequest {
    return {
      signer: isSet(object.signer) ? Long.fromValue(object.signer) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdasBySignerRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = (message.signer || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCdasBySignerRequest>): QueryCdasBySignerRequest {
    const message = createBaseQueryCdasBySignerRequest();
    message.signer = object.signer !== undefined && object.signer !== null ? Long.fromValue(object.signer) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdasBySignerResponse(): QueryCdasBySignerResponse {
  return {
    ids: [],
    pagination: undefined
  };
}

export const QueryCdasBySignerResponse = {
  encode(message: QueryCdasBySignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasBySignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasBySignerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

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

  fromJSON(object: any): QueryCdasBySignerResponse {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdasBySignerResponse): unknown {
    const obj: any = {};

    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCdasBySignerResponse>): QueryCdasBySignerResponse {
    const message = createBaseQueryCdasBySignerResponse();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryApprovalRequest(): QueryApprovalRequest {
  return {
    cdaId: Long.UZERO,
    signerId: Long.UZERO
  };
}

export const QueryApprovalRequest = {
  encode(message: QueryApprovalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cdaId.isZero()) {
      writer.uint32(8).uint64(message.cdaId);
    }

    if (!message.signerId.isZero()) {
      writer.uint32(16).uint64(message.signerId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApprovalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cdaId = (reader.uint64() as Long);
          break;

        case 2:
          message.signerId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryApprovalRequest {
    return {
      cdaId: isSet(object.cdaId) ? Long.fromValue(object.cdaId) : Long.UZERO,
      signerId: isSet(object.signerId) ? Long.fromValue(object.signerId) : Long.UZERO
    };
  },

  toJSON(message: QueryApprovalRequest): unknown {
    const obj: any = {};
    message.cdaId !== undefined && (obj.cdaId = (message.cdaId || Long.UZERO).toString());
    message.signerId !== undefined && (obj.signerId = (message.signerId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryApprovalRequest>): QueryApprovalRequest {
    const message = createBaseQueryApprovalRequest();
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    message.signerId = object.signerId !== undefined && object.signerId !== null ? Long.fromValue(object.signerId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryApprovalResponse(): QueryApprovalResponse {
  return {
    approved: false
  };
}

export const QueryApprovalResponse = {
  encode(message: QueryApprovalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.approved === true) {
      writer.uint32(8).bool(message.approved);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApprovalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApprovalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.approved = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryApprovalResponse {
    return {
      approved: isSet(object.approved) ? Boolean(object.approved) : false
    };
  },

  toJSON(message: QueryApprovalResponse): unknown {
    const obj: any = {};
    message.approved !== undefined && (obj.approved = message.approved);
    return obj;
  },

  fromPartial(object: Partial<QueryApprovalResponse>): QueryApprovalResponse {
    const message = createBaseQueryApprovalResponse();
    message.approved = object.approved ?? false;
    return message;
  }

};

function createBaseQueryContractRequest(): QueryContractRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryContractRequest = {
  encode(message: QueryContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRequest();

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

  fromJSON(object: any): QueryContractRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryContractRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryContractRequest>): QueryContractRequest {
    const message = createBaseQueryContractRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryContractResponse(): QueryContractResponse {
  return {
    contract: undefined
  };
}

export const QueryContractResponse = {
  encode(message: QueryContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== undefined) {
      Contract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = Contract.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractResponse {
    return {
      contract: isSet(object.contract) ? Contract.fromJSON(object.contract) : undefined
    };
  },

  toJSON(message: QueryContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? Contract.toJSON(message.contract) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractResponse>): QueryContractResponse {
    const message = createBaseQueryContractResponse();
    message.contract = object.contract !== undefined && object.contract !== null ? Contract.fromPartial(object.contract) : undefined;
    return message;
  }

};

function createBaseQueryContractsRequest(): QueryContractsRequest {
  return {
    pagination: undefined
  };
}

export const QueryContractsRequest = {
  encode(message: QueryContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsRequest();

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

  fromJSON(object: any): QueryContractsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsRequest>): QueryContractsRequest {
    const message = createBaseQueryContractsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryContractsResponse(): QueryContractsResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}

export const QueryContractsResponse = {
  encode(message: QueryContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsResponse): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsResponse>): QueryContractsResponse {
    const message = createBaseQueryContractsResponse();
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySigningDataRequest(): QuerySigningDataRequest {
  return {
    id: Long.UZERO
  };
}

export const QuerySigningDataRequest = {
  encode(message: QuerySigningDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningDataRequest();

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

  fromJSON(object: any): QuerySigningDataRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: QuerySigningDataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QuerySigningDataRequest>): QuerySigningDataRequest {
    const message = createBaseQuerySigningDataRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySigningDataResponse(): QuerySigningDataResponse {
  return {
    signingData: new Uint8Array()
  };
}

export const QuerySigningDataResponse = {
  encode(message: QuerySigningDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signingData.length !== 0) {
      writer.uint32(10).bytes(message.signingData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningDataResponse();

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

  fromJSON(object: any): QuerySigningDataResponse {
    return {
      signingData: isSet(object.signingData) ? bytesFromBase64(object.signingData) : new Uint8Array()
    };
  },

  toJSON(message: QuerySigningDataResponse): unknown {
    const obj: any = {};
    message.signingData !== undefined && (obj.signingData = base64FromBytes(message.signingData !== undefined ? message.signingData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QuerySigningDataResponse>): QuerySigningDataResponse {
    const message = createBaseQuerySigningDataResponse();
    message.signingData = object.signingData ?? new Uint8Array();
    return message;
  }

};

function createBaseQuerySigningDataSchemaRequest(): QuerySigningDataSchemaRequest {
  return {
    id: Long.UZERO
  };
}

export const QuerySigningDataSchemaRequest = {
  encode(message: QuerySigningDataSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningDataSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningDataSchemaRequest();

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

  fromJSON(object: any): QuerySigningDataSchemaRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },

  toJSON(message: QuerySigningDataSchemaRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QuerySigningDataSchemaRequest>): QuerySigningDataSchemaRequest {
    const message = createBaseQuerySigningDataSchemaRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySigningDataSchemaResponse(): QuerySigningDataSchemaResponse {
  return {
    schema: new Uint8Array()
  };
}

export const QuerySigningDataSchemaResponse = {
  encode(message: QuerySigningDataSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema.length !== 0) {
      writer.uint32(10).bytes(message.schema);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningDataSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningDataSchemaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schema = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySigningDataSchemaResponse {
    return {
      schema: isSet(object.schema) ? bytesFromBase64(object.schema) : new Uint8Array()
    };
  },

  toJSON(message: QuerySigningDataSchemaResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = base64FromBytes(message.schema !== undefined ? message.schema : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QuerySigningDataSchemaResponse>): QuerySigningDataSchemaResponse {
    const message = createBaseQuerySigningDataSchemaResponse();
    message.schema = object.schema ?? new Uint8Array();
    return message;
  }

};