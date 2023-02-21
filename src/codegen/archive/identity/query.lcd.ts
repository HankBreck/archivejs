import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryIdentityMembersRequest, QueryIdentityMembersResponseSDKType, QueryIssuersRequest, QueryIssuersResponseSDKType, QueryIssuerInfoRequest, QueryIssuerInfoResponseSDKType, QueryIdentityRequest, QueryIdentityResponseSDKType, QueryOperatorsRequest, QueryOperatorsResponseSDKType, QueryMemberRoleRequest, QueryMemberRoleResponseSDKType, QueryIsFrozenRequest, QueryIsFrozenResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.identityMembers = this.identityMembers.bind(this);
    this.issuers = this.issuers.bind(this);
    this.issuerInfo = this.issuerInfo.bind(this);
    this.identity = this.identity.bind(this);
    this.operators = this.operators.bind(this);
    this.memberRole = this.memberRole.bind(this);
    this.isFrozen = this.isFrozen.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `archive/identity/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of IdentityMembers items. */


  async identityMembers(params: QueryIdentityMembersRequest): Promise<QueryIdentityMembersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/identity/identity_members/${params.id}/${params.isPending}`;
    return await this.req.get<QueryIdentityMembersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Issuers items. */


  async issuers(params: QueryIssuersRequest = {
    pagination: undefined
  }): Promise<QueryIssuersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/identity/issuers`;
    return await this.req.get<QueryIssuersResponseSDKType>(endpoint, options);
  }
  /* Queries a list of IssuerInfo items. */


  async issuerInfo(params: QueryIssuerInfoRequest): Promise<QueryIssuerInfoResponseSDKType> {
    const endpoint = `archive/identity/issuer_info/${params.issuer}`;
    return await this.req.get<QueryIssuerInfoResponseSDKType>(endpoint);
  }
  /* Queries a list of Identity items. */


  async identity(params: QueryIdentityRequest): Promise<QueryIdentityResponseSDKType> {
    const endpoint = `archive/identity/identity/${params.id}`;
    return await this.req.get<QueryIdentityResponseSDKType>(endpoint);
  }
  /* Queries a list of Operators items. */


  async operators(params: QueryOperatorsRequest): Promise<QueryOperatorsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/identity/operators/${params.id}`;
    return await this.req.get<QueryOperatorsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of MemberRole items. */


  async memberRole(params: QueryMemberRoleRequest): Promise<QueryMemberRoleResponseSDKType> {
    const endpoint = `archive/identity/member_role/${params.id}/${params.member}`;
    return await this.req.get<QueryMemberRoleResponseSDKType>(endpoint);
  }
  /* Queries an Identity to see if it is frozen */


  async isFrozen(params: QueryIsFrozenRequest): Promise<QueryIsFrozenResponseSDKType> {
    const endpoint = `archive/identity/is_frozen/${params.id}`;
    return await this.req.get<QueryIsFrozenResponseSDKType>(endpoint);
  }

}