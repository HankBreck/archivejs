import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCdaRequest, QueryCdaResponse, QueryCdasRequest, QueryCdasResponse, QueryCdasOwnedRequest, QueryCdasOwnedResponse, QueryApprovalRequest, QueryApprovalResponse, QueryContractRequest, QueryContractResponse, QueryContractsRequest, QueryContractsResponse, QuerySigningDataRequest, QuerySigningDataResponse, QuerySigningDataSchemaRequest, QuerySigningDataSchemaResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Cda items. */

  cda(request: QueryCdaRequest): Promise<QueryCdaResponse>;
  /** Queries a list of Cdas items. */

  cdas(request?: QueryCdasRequest): Promise<QueryCdasResponse>;
  /** Queries a list of CdasOwned items. */

  cdasOwned(request: QueryCdasOwnedRequest): Promise<QueryCdasOwnedResponse>;
  /** Queries a list of Approvals items. */

  approval(request: QueryApprovalRequest): Promise<QueryApprovalResponse>;
  contract(request: QueryContractRequest): Promise<QueryContractResponse>;
  contracts(request?: QueryContractsRequest): Promise<QueryContractsResponse>;
  signingData(request: QuerySigningDataRequest): Promise<QuerySigningDataResponse>;
  signingDataSchema(request: QuerySigningDataSchemaRequest): Promise<QuerySigningDataSchemaResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.cda = this.cda.bind(this);
    this.cdas = this.cdas.bind(this);
    this.cdasOwned = this.cdasOwned.bind(this);
    this.approval = this.approval.bind(this);
    this.contract = this.contract.bind(this);
    this.contracts = this.contracts.bind(this);
    this.signingData = this.signingData.bind(this);
    this.signingDataSchema = this.signingDataSchema.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  cda(request: QueryCdaRequest): Promise<QueryCdaResponse> {
    const data = QueryCdaRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Cda", data);
    return promise.then(data => QueryCdaResponse.decode(new _m0.Reader(data)));
  }

  cdas(request: QueryCdasRequest = {
    pagination: undefined
  }): Promise<QueryCdasResponse> {
    const data = QueryCdasRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Cdas", data);
    return promise.then(data => QueryCdasResponse.decode(new _m0.Reader(data)));
  }

  cdasOwned(request: QueryCdasOwnedRequest): Promise<QueryCdasOwnedResponse> {
    const data = QueryCdasOwnedRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "CdasOwned", data);
    return promise.then(data => QueryCdasOwnedResponse.decode(new _m0.Reader(data)));
  }

  approval(request: QueryApprovalRequest): Promise<QueryApprovalResponse> {
    const data = QueryApprovalRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Approval", data);
    return promise.then(data => QueryApprovalResponse.decode(new _m0.Reader(data)));
  }

  contract(request: QueryContractRequest): Promise<QueryContractResponse> {
    const data = QueryContractRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Contract", data);
    return promise.then(data => QueryContractResponse.decode(new _m0.Reader(data)));
  }

  contracts(request: QueryContractsRequest = {
    pagination: undefined
  }): Promise<QueryContractsResponse> {
    const data = QueryContractsRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "Contracts", data);
    return promise.then(data => QueryContractsResponse.decode(new _m0.Reader(data)));
  }

  signingData(request: QuerySigningDataRequest): Promise<QuerySigningDataResponse> {
    const data = QuerySigningDataRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "SigningData", data);
    return promise.then(data => QuerySigningDataResponse.decode(new _m0.Reader(data)));
  }

  signingDataSchema(request: QuerySigningDataSchemaRequest): Promise<QuerySigningDataSchemaResponse> {
    const data = QuerySigningDataSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Query", "SigningDataSchema", data);
    return promise.then(data => QuerySigningDataSchemaResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    cda(request: QueryCdaRequest): Promise<QueryCdaResponse> {
      return queryService.cda(request);
    },

    cdas(request?: QueryCdasRequest): Promise<QueryCdasResponse> {
      return queryService.cdas(request);
    },

    cdasOwned(request: QueryCdasOwnedRequest): Promise<QueryCdasOwnedResponse> {
      return queryService.cdasOwned(request);
    },

    approval(request: QueryApprovalRequest): Promise<QueryApprovalResponse> {
      return queryService.approval(request);
    },

    contract(request: QueryContractRequest): Promise<QueryContractResponse> {
      return queryService.contract(request);
    },

    contracts(request?: QueryContractsRequest): Promise<QueryContractsResponse> {
      return queryService.contracts(request);
    },

    signingData(request: QuerySigningDataRequest): Promise<QuerySigningDataResponse> {
      return queryService.signingData(request);
    },

    signingDataSchema(request: QuerySigningDataSchemaRequest): Promise<QuerySigningDataSchemaResponse> {
      return queryService.signingDataSchema(request);
    }

  };
};