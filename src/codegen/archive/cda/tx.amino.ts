import { contactMethodFromJSON } from "./contract";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgCreateCda, MsgApproveCda, MsgFinalizeCda, MsgRegisterContract } from "./tx";
export interface MsgCreateCdaAminoType extends AminoMsg {
  type: "/archive.cda.MsgCreateCda";
  value: {
    creator: string;
    signing_parties: string[];
    contract_id: string;
    legal_metadata_uri: string;
    signing_data: Uint8Array;
    utc_expire_time: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface MsgApproveCdaAminoType extends AminoMsg {
  type: "/archive.cda.MsgApproveCda";
  value: {
    creator: string;
    cda_id: string;
    signing_data: Uint8Array;
  };
}
export interface MsgFinalizeCdaAminoType extends AminoMsg {
  type: "/archive.cda.MsgFinalizeCda";
  value: {
    creator: string;
    cda_id: string;
  };
}
export interface MsgRegisterContractAminoType extends AminoMsg {
  type: "/archive.cda.MsgRegisterContract";
  value: {
    creator: string;
    description: string;
    authors: string[];
    contact_info: {
      method: number;
      value: string;
    };
    more_info_uri: string;
    signing_data_schema: Uint8Array;
    template_uri: string;
    template_schema_uri: string;
  };
}
export const AminoConverter = {
  "/archive.cda.MsgCreateCda": {
    aminoType: "/archive.cda.MsgCreateCda",
    toAmino: ({
      creator,
      signingParties,
      contractId,
      legalMetadataUri,
      signingData,
      utcExpireTime
    }: MsgCreateCda): MsgCreateCdaAminoType["value"] => {
      return {
        creator,
        signing_parties: signingParties,
        contract_id: contractId.toString(),
        legal_metadata_uri: legalMetadataUri,
        signing_data: signingData,
        utc_expire_time: utcExpireTime
      };
    },
    fromAmino: ({
      creator,
      signing_parties,
      contract_id,
      legal_metadata_uri,
      signing_data,
      utc_expire_time
    }: MsgCreateCdaAminoType["value"]): MsgCreateCda => {
      return {
        creator,
        signingParties: signing_parties,
        contractId: Long.fromString(contract_id),
        legalMetadataUri: legal_metadata_uri,
        signingData: signing_data,
        utcExpireTime: utc_expire_time
      };
    }
  },
  "/archive.cda.MsgApproveCda": {
    aminoType: "/archive.cda.MsgApproveCda",
    toAmino: ({
      creator,
      cdaId,
      signingData
    }: MsgApproveCda): MsgApproveCdaAminoType["value"] => {
      return {
        creator,
        cda_id: cdaId.toString(),
        signing_data: signingData
      };
    },
    fromAmino: ({
      creator,
      cda_id,
      signing_data
    }: MsgApproveCdaAminoType["value"]): MsgApproveCda => {
      return {
        creator,
        cdaId: Long.fromString(cda_id),
        signingData: signing_data
      };
    }
  },
  "/archive.cda.MsgFinalizeCda": {
    aminoType: "/archive.cda.MsgFinalizeCda",
    toAmino: ({
      creator,
      cdaId
    }: MsgFinalizeCda): MsgFinalizeCdaAminoType["value"] => {
      return {
        creator,
        cda_id: cdaId.toString()
      };
    },
    fromAmino: ({
      creator,
      cda_id
    }: MsgFinalizeCdaAminoType["value"]): MsgFinalizeCda => {
      return {
        creator,
        cdaId: Long.fromString(cda_id)
      };
    }
  },
  "/archive.cda.MsgRegisterContract": {
    aminoType: "/archive.cda.MsgRegisterContract",
    toAmino: ({
      creator,
      description,
      authors,
      contactInfo,
      moreInfoUri,
      signingDataSchema,
      templateUri,
      templateSchemaUri
    }: MsgRegisterContract): MsgRegisterContractAminoType["value"] => {
      return {
        creator,
        description,
        authors,
        contact_info: {
          method: contactInfo.method,
          value: contactInfo.value
        },
        more_info_uri: moreInfoUri,
        signing_data_schema: signingDataSchema,
        template_uri: templateUri,
        template_schema_uri: templateSchemaUri
      };
    },
    fromAmino: ({
      creator,
      description,
      authors,
      contact_info,
      more_info_uri,
      signing_data_schema,
      template_uri,
      template_schema_uri
    }: MsgRegisterContractAminoType["value"]): MsgRegisterContract => {
      return {
        creator,
        description,
        authors,
        contactInfo: {
          method: contactMethodFromJSON(contact_info.method),
          value: contact_info.value
        },
        moreInfoUri: more_info_uri,
        signingDataSchema: signing_data_schema,
        templateUri: template_uri,
        templateSchemaUri: template_schema_uri
      };
    }
  }
};