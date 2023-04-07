import { contactMethodFromJSON } from "./contract";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgCreateCda, MsgApproveCda, MsgWitnessApproveCda, MsgFinalizeCda, MsgVoidCda, MsgRegisterContract } from "./tx";
export interface AminoMsgCreateCda extends AminoMsg {
  type: "/archive.cda.MsgCreateCda";
  value: {
    creator: string;
    signer_ids: Long[];
    contract_id: string;
    legal_metadata_uri: string;
    signing_data: Uint8Array;
    utc_expire_time: {
      seconds: string;
      nanos: number;
    };
    witness_init_msg: Uint8Array;
  };
}
export interface AminoMsgApproveCda extends AminoMsg {
  type: "/archive.cda.MsgApproveCda";
  value: {
    creator: string;
    cda_id: string;
    signer_id: string;
    signing_data: Uint8Array;
  };
}
export interface AminoMsgWitnessApproveCda extends AminoMsg {
  type: "/archive.cda.MsgWitnessApproveCda";
  value: {
    creator: string;
    cda_id: string;
    signing_data: Uint8Array;
  };
}
export interface AminoMsgFinalizeCda extends AminoMsg {
  type: "/archive.cda.MsgFinalizeCda";
  value: {
    creator: string;
    cda_id: string;
  };
}
export interface AminoMsgVoidCda extends AminoMsg {
  type: "/archive.cda.MsgVoidCda";
  value: {
    creator: string;
    cda_id: string;
  };
}
export interface AminoMsgRegisterContract extends AminoMsg {
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
    witness_code_id: string;
  };
}
export const AminoConverter = {
  "/archive.cda.MsgCreateCda": {
    aminoType: "/archive.cda.MsgCreateCda",
    toAmino: ({
      creator,
      signerIds,
      contractId,
      legalMetadataUri,
      signingData,
      utcExpireTime,
      witnessInitMsg
    }: MsgCreateCda): AminoMsgCreateCda["value"] => {
      return {
        creator,
        signer_ids: signerIds.map(el0 => el0.toString()),
        contract_id: contractId.toString(),
        legal_metadata_uri: legalMetadataUri,
        signing_data: signingData,
        utc_expire_time: utcExpireTime,
        witness_init_msg: witnessInitMsg
      };
    },
    fromAmino: ({
      creator,
      signer_ids,
      contract_id,
      legal_metadata_uri,
      signing_data,
      utc_expire_time,
      witness_init_msg
    }: AminoMsgCreateCda["value"]): MsgCreateCda => {
      return {
        creator,
        signerIds: signer_ids.map(el0 => Long.fromString(el0)),
        contractId: Long.fromString(contract_id),
        legalMetadataUri: legal_metadata_uri,
        signingData: signing_data,
        utcExpireTime: utc_expire_time,
        witnessInitMsg: witness_init_msg
      };
    }
  },
  "/archive.cda.MsgApproveCda": {
    aminoType: "/archive.cda.MsgApproveCda",
    toAmino: ({
      creator,
      cdaId,
      signerId,
      signingData
    }: MsgApproveCda): AminoMsgApproveCda["value"] => {
      return {
        creator,
        cda_id: cdaId.toString(),
        signer_id: signerId.toString(),
        signing_data: signingData
      };
    },
    fromAmino: ({
      creator,
      cda_id,
      signer_id,
      signing_data
    }: AminoMsgApproveCda["value"]): MsgApproveCda => {
      return {
        creator,
        cdaId: Long.fromString(cda_id),
        signerId: Long.fromString(signer_id),
        signingData: signing_data
      };
    }
  },
  "/archive.cda.MsgWitnessApproveCda": {
    aminoType: "/archive.cda.MsgWitnessApproveCda",
    toAmino: ({
      creator,
      cdaId,
      signingData
    }: MsgWitnessApproveCda): AminoMsgWitnessApproveCda["value"] => {
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
    }: AminoMsgWitnessApproveCda["value"]): MsgWitnessApproveCda => {
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
    }: MsgFinalizeCda): AminoMsgFinalizeCda["value"] => {
      return {
        creator,
        cda_id: cdaId.toString()
      };
    },
    fromAmino: ({
      creator,
      cda_id
    }: AminoMsgFinalizeCda["value"]): MsgFinalizeCda => {
      return {
        creator,
        cdaId: Long.fromString(cda_id)
      };
    }
  },
  "/archive.cda.MsgVoidCda": {
    aminoType: "/archive.cda.MsgVoidCda",
    toAmino: ({
      creator,
      cdaId
    }: MsgVoidCda): AminoMsgVoidCda["value"] => {
      return {
        creator,
        cda_id: cdaId.toString()
      };
    },
    fromAmino: ({
      creator,
      cda_id
    }: AminoMsgVoidCda["value"]): MsgVoidCda => {
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
      templateSchemaUri,
      witnessCodeId
    }: MsgRegisterContract): AminoMsgRegisterContract["value"] => {
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
        template_schema_uri: templateSchemaUri,
        witness_code_id: witnessCodeId.toString()
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
      template_schema_uri,
      witness_code_id
    }: AminoMsgRegisterContract["value"]): MsgRegisterContract => {
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
        templateSchemaUri: template_schema_uri,
        witnessCodeId: Long.fromString(witness_code_id)
      };
    }
  }
};