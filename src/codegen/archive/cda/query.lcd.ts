import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCdaRequest, QueryCdaResponseSDKType, QueryCdasRequest, QueryCdasResponseSDKType, QueryCdasOwnedRequest, QueryCdasOwnedResponseSDKType, QueryApprovalRequest, QueryApprovalResponseSDKType, QueryContractRequest, QueryContractResponseSDKType, QueryContractsRequest, QueryContractsResponseSDKType, QuerySigningDataRequest, QuerySigningDataResponseSDKType, QuerySigningDataSchemaRequest, QuerySigningDataSchemaResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `archive/cda/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Cda items. */


  async cda(params: QueryCdaRequest): Promise<QueryCdaResponseSDKType> {
    const endpoint = `archive/cda/cda/${params.id}`;
    return await this.req.get<QueryCdaResponseSDKType>(endpoint);
  }
  /* Queries a list of Cdas items. */


  async cdas(params: QueryCdasRequest = {
    pagination: undefined
  }): Promise<QueryCdasResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/cda/cdas`;
    return await this.req.get<QueryCdasResponseSDKType>(endpoint, options);
  }
  /* Queries a list of CdasOwned items. */


  async cdasOwned(params: QueryCdasOwnedRequest): Promise<QueryCdasOwnedResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/cda/cdas_owned/${params.owner}`;
    return await this.req.get<QueryCdasOwnedResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Approvals items. */


  async approval(params: QueryApprovalRequest): Promise<QueryApprovalResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    const endpoint = `archive/cda/approval/${params.cdaId}`;
    return await this.req.get<QueryApprovalResponseSDKType>(endpoint, options);
  }
  /* Contract */


  async contract(params: QueryContractRequest): Promise<QueryContractResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `archive/cda/contract`;
    return await this.req.get<QueryContractResponseSDKType>(endpoint, options);
  }
  /* Contracts */


  async contracts(params: QueryContractsRequest = {
    pagination: undefined
  }): Promise<QueryContractsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `archive/cda/contracts`;
    return await this.req.get<QueryContractsResponseSDKType>(endpoint, options);
  }
  /* SigningData */


  async signingData(params: QuerySigningDataRequest): Promise<QuerySigningDataResponseSDKType> {
    const endpoint = `archive/cda/signing_data/${params.id}`;
    return await this.req.get<QuerySigningDataResponseSDKType>(endpoint);
  }
  /* SigningDataSchema */


  async signingDataSchema(params: QuerySigningDataSchemaRequest): Promise<QuerySigningDataSchemaResponseSDKType> {
    const endpoint = `archive/cda/signing_data_schema/${params.id}`;
    return await this.req.get<QuerySigningDataSchemaResponseSDKType>(endpoint);
  }

}