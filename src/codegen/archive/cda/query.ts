import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { CDA, CDASDKType } from "./cda";
import { Contract, ContractSDKType } from "./contract";
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
  pagination?: PageRequestSDKType;
}
export interface QueryCdasResponse {
  /** List of CDA objects */
  CDAs: CDA[];
  /** Pagination to view all CDAs */

  pagination?: PageResponse;
}
export interface QueryCdasResponseSDKType {
  CDAs: CDASDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCdasOwnedRequest {
  /** Account address for the owner */
  owner: string;
  /** Pagination to view all ids */

  pagination?: PageRequest;
}
export interface QueryCdasOwnedRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
export interface QueryCdasOwnedResponse {
  /** List of CDA ids belonging to the owner */
  ids: Long[];
  /** Pagination to view all CDAs */

  pagination?: PageResponse;
}
export interface QueryCdasOwnedResponseSDKType {
  ids: Long[];
  pagination?: PageResponseSDKType;
}
export interface QueryApprovalRequest {
  /** The id of the CDA to check */
  cdaId: Long;
  /** The wallet address of the owner to check */

  owner: string;
}
export interface QueryApprovalRequestSDKType {
  cdaId: Long;
  owner: string;
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
  contracts: ContractSDKType[];
  pagination?: PageResponseSDKType;
}
/** QuerySigningDataRequest is the request type for the Query/SigningData RPC method */

export interface QuerySigningDataRequest {
  /** QuerySigningDataRequest is the request type for the Query/SigningData RPC method */
  id: Long;
}
/** QuerySigningDataRequest is the request type for the Query/SigningData RPC method */

export interface QuerySigningDataRequestSDKType {
  id: Long;
}
/** QuerySigningDataResponse is the response type for the Query/SigningData RPC method */

export interface QuerySigningDataResponse {
  signingData: Uint8Array;
}
/** QuerySigningDataResponse is the response type for the Query/SigningData RPC method */

export interface QuerySigningDataResponseSDKType {
  signing_data: Uint8Array;
}
/**
 * QuerySigningDataSchemaRequest is the request type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaRequest {
  /**
   * QuerySigningDataSchemaRequest is the request type for the Query/SigningData RPC
   * method
   */
  id: Long;
}
/**
 * QuerySigningDataSchemaRequest is the request type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaRequestSDKType {
  id: Long;
}
/**
 * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaResponse {
  schema: Uint8Array;
}
/**
 * QuerySigningDataResponse is the reseponse type for the Query/SigningData RPC
 * method
 */

export interface QuerySigningDataSchemaResponseSDKType {
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

  fromPartial(object: DeepPartial<QueryCdaRequest>): QueryCdaRequest {
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

  fromPartial(object: DeepPartial<QueryCdaResponse>): QueryCdaResponse {
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

  fromPartial(object: DeepPartial<QueryCdasRequest>): QueryCdasRequest {
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

  fromPartial(object: DeepPartial<QueryCdasResponse>): QueryCdasResponse {
    const message = createBaseQueryCdasResponse();
    message.CDAs = object.CDAs?.map(e => CDA.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdasOwnedRequest(): QueryCdasOwnedRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryCdasOwnedRequest = {
  encode(message: QueryCdasOwnedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasOwnedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
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

  fromPartial(object: DeepPartial<QueryCdasOwnedRequest>): QueryCdasOwnedRequest {
    const message = createBaseQueryCdasOwnedRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdasOwnedResponse(): QueryCdasOwnedResponse {
  return {
    ids: [],
    pagination: undefined
  };
}

export const QueryCdasOwnedResponse = {
  encode(message: QueryCdasOwnedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdasOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdasOwnedResponse();

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

  fromPartial(object: DeepPartial<QueryCdasOwnedResponse>): QueryCdasOwnedResponse {
    const message = createBaseQueryCdasOwnedResponse();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryApprovalRequest(): QueryApprovalRequest {
  return {
    cdaId: Long.UZERO,
    owner: ""
  };
}

export const QueryApprovalRequest = {
  encode(message: QueryApprovalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cdaId.isZero()) {
      writer.uint32(8).uint64(message.cdaId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
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
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryApprovalRequest>): QueryApprovalRequest {
    const message = createBaseQueryApprovalRequest();
    message.cdaId = object.cdaId !== undefined && object.cdaId !== null ? Long.fromValue(object.cdaId) : Long.UZERO;
    message.owner = object.owner ?? "";
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

  fromPartial(object: DeepPartial<QueryApprovalResponse>): QueryApprovalResponse {
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

  fromPartial(object: DeepPartial<QueryContractRequest>): QueryContractRequest {
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

  fromPartial(object: DeepPartial<QueryContractResponse>): QueryContractResponse {
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

  fromPartial(object: DeepPartial<QueryContractsRequest>): QueryContractsRequest {
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

  fromPartial(object: DeepPartial<QueryContractsResponse>): QueryContractsResponse {
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

  fromPartial(object: DeepPartial<QuerySigningDataRequest>): QuerySigningDataRequest {
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

  fromPartial(object: DeepPartial<QuerySigningDataResponse>): QuerySigningDataResponse {
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

  fromPartial(object: DeepPartial<QuerySigningDataSchemaRequest>): QuerySigningDataSchemaRequest {
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

  fromPartial(object: DeepPartial<QuerySigningDataSchemaResponse>): QuerySigningDataSchemaResponse {
    const message = createBaseQuerySigningDataSchemaResponse();
    message.schema = object.schema ?? new Uint8Array();
    return message;
  }

};