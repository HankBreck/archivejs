import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryIdentityMembersRequest, QueryIdentityMembersResponse, QueryIssuersRequest, QueryIssuersResponse, QueryIssuerInfoRequest, QueryIssuerInfoResponse, QueryIdentityRequest, QueryIdentityResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryMemberRoleRequest, QueryMemberRoleResponse, QueryIsFrozenRequest, QueryIsFrozenResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of IdentityMembers items. */

  identityMembers(request: QueryIdentityMembersRequest): Promise<QueryIdentityMembersResponse>;
  /** Queries a list of Issuers items. */

  issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
  /** Queries a list of IssuerInfo items. */

  issuerInfo(request: QueryIssuerInfoRequest): Promise<QueryIssuerInfoResponse>;
  /** Queries a list of Identity items. */

  identity(request: QueryIdentityRequest): Promise<QueryIdentityResponse>;
  /** Queries a list of Operators items. */

  operators(request: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
  /** Queries a list of MemberRole items. */

  memberRole(request: QueryMemberRoleRequest): Promise<QueryMemberRoleResponse>;
  /** Queries an Identity to see if it is frozen */

  isFrozen(request: QueryIsFrozenRequest): Promise<QueryIsFrozenResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.identityMembers = this.identityMembers.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuerInfo = this.issuerInfo.bind(this);
    this.identity = this.identity.bind(this);
    this.operators = this.operators.bind(this);
    this.memberRole = this.memberRole.bind(this);
    this.isFrozen = this.isFrozen.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  identityMembers(request: QueryIdentityMembersRequest): Promise<QueryIdentityMembersResponse> {
    const data = QueryIdentityMembersRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "IdentityMembers", data);
    return promise.then(data => QueryIdentityMembersResponse.decode(new _m0.Reader(data)));
  }

  issuers(request: QueryIssuersRequest = {
    pagination: undefined
  }): Promise<QueryIssuersResponse> {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "Issuers", data);
    return promise.then(data => QueryIssuersResponse.decode(new _m0.Reader(data)));
  }

  issuerInfo(request: QueryIssuerInfoRequest): Promise<QueryIssuerInfoResponse> {
    const data = QueryIssuerInfoRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "IssuerInfo", data);
    return promise.then(data => QueryIssuerInfoResponse.decode(new _m0.Reader(data)));
  }

  identity(request: QueryIdentityRequest): Promise<QueryIdentityResponse> {
    const data = QueryIdentityRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "Identity", data);
    return promise.then(data => QueryIdentityResponse.decode(new _m0.Reader(data)));
  }

  operators(request: QueryOperatorsRequest): Promise<QueryOperatorsResponse> {
    const data = QueryOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "Operators", data);
    return promise.then(data => QueryOperatorsResponse.decode(new _m0.Reader(data)));
  }

  memberRole(request: QueryMemberRoleRequest): Promise<QueryMemberRoleResponse> {
    const data = QueryMemberRoleRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "MemberRole", data);
    return promise.then(data => QueryMemberRoleResponse.decode(new _m0.Reader(data)));
  }

  isFrozen(request: QueryIsFrozenRequest): Promise<QueryIsFrozenResponse> {
    const data = QueryIsFrozenRequest.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Query", "IsFrozen", data);
    return promise.then(data => QueryIsFrozenResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    identityMembers(request: QueryIdentityMembersRequest): Promise<QueryIdentityMembersResponse> {
      return queryService.identityMembers(request);
    },

    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse> {
      return queryService.issuers(request);
    },

    issuerInfo(request: QueryIssuerInfoRequest): Promise<QueryIssuerInfoResponse> {
      return queryService.issuerInfo(request);
    },

    identity(request: QueryIdentityRequest): Promise<QueryIdentityResponse> {
      return queryService.identity(request);
    },

    operators(request: QueryOperatorsRequest): Promise<QueryOperatorsResponse> {
      return queryService.operators(request);
    },

    memberRole(request: QueryMemberRoleRequest): Promise<QueryMemberRoleResponse> {
      return queryService.memberRole(request);
    },

    isFrozen(request: QueryIsFrozenRequest): Promise<QueryIsFrozenResponse> {
      return queryService.isFrozen(request);
    }

  };
};