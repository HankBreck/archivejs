import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgRegisterIssuer, MsgIssueCertificate, MsgAcceptIdentity, MsgRejectIdentity, MsgRenounceIdentity, MsgUpdateOperators, MsgUpdateMembers, MsgFreezeIdentity } from "./tx";
export interface MsgRegisterIssuerAminoType extends AminoMsg {
  type: "/archive.identity.MsgRegisterIssuer";
  value: {
    creator: string;
    name: string;
    more_info_uri: string;
  };
}
export interface MsgIssueCertificateAminoType extends AminoMsg {
  type: "/archive.identity.MsgIssueCertificate";
  value: {
    creator: string;
    recipient: string;
    salt: string;
    metadata_schema_uri: string;
    hashes: {
      field: string;
      hash: string;
    }[];
  };
}
export interface MsgAcceptIdentityAminoType extends AminoMsg {
  type: "/archive.identity.MsgAcceptIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface MsgRejectIdentityAminoType extends AminoMsg {
  type: "/archive.identity.MsgRejectIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface MsgRenounceIdentityAminoType extends AminoMsg {
  type: "/archive.identity.MsgRenounceIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface MsgUpdateOperatorsAminoType extends AminoMsg {
  type: "/archive.identity.MsgUpdateOperators";
  value: {
    creator: string;
    id: string;
    toAdd: string[];
    toRemove: string[];
  };
}
export interface MsgUpdateMembersAminoType extends AminoMsg {
  type: "/archive.identity.MsgUpdateMembers";
  value: {
    creator: string;
    id: string;
    toAdd: string[];
    toRemove: string[];
  };
}
export interface MsgFreezeIdentityAminoType extends AminoMsg {
  type: "/archive.identity.MsgFreezeIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export const AminoConverter = {
  "/archive.identity.MsgRegisterIssuer": {
    aminoType: "/archive.identity.MsgRegisterIssuer",
    toAmino: ({
      creator,
      name,
      moreInfoUri
    }: MsgRegisterIssuer): MsgRegisterIssuerAminoType["value"] => {
      return {
        creator,
        name,
        more_info_uri: moreInfoUri
      };
    },
    fromAmino: ({
      creator,
      name,
      more_info_uri
    }: MsgRegisterIssuerAminoType["value"]): MsgRegisterIssuer => {
      return {
        creator,
        name,
        moreInfoUri: more_info_uri
      };
    }
  },
  "/archive.identity.MsgIssueCertificate": {
    aminoType: "/archive.identity.MsgIssueCertificate",
    toAmino: ({
      creator,
      recipient,
      salt,
      metadataSchemaUri,
      hashes
    }: MsgIssueCertificate): MsgIssueCertificateAminoType["value"] => {
      return {
        creator,
        recipient,
        salt,
        metadata_schema_uri: metadataSchemaUri,
        hashes: hashes.map(el0 => ({
          field: el0.field,
          hash: el0.hash
        }))
      };
    },
    fromAmino: ({
      creator,
      recipient,
      salt,
      metadata_schema_uri,
      hashes
    }: MsgIssueCertificateAminoType["value"]): MsgIssueCertificate => {
      return {
        creator,
        recipient,
        salt,
        metadataSchemaUri: metadata_schema_uri,
        hashes: hashes.map(el0 => ({
          field: el0.field,
          hash: el0.hash
        }))
      };
    }
  },
  "/archive.identity.MsgAcceptIdentity": {
    aminoType: "/archive.identity.MsgAcceptIdentity",
    toAmino: ({
      creator,
      id
    }: MsgAcceptIdentity): MsgAcceptIdentityAminoType["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: MsgAcceptIdentityAminoType["value"]): MsgAcceptIdentity => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/archive.identity.MsgRejectIdentity": {
    aminoType: "/archive.identity.MsgRejectIdentity",
    toAmino: ({
      creator,
      id
    }: MsgRejectIdentity): MsgRejectIdentityAminoType["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: MsgRejectIdentityAminoType["value"]): MsgRejectIdentity => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/archive.identity.MsgRenounceIdentity": {
    aminoType: "/archive.identity.MsgRenounceIdentity",
    toAmino: ({
      creator,
      id
    }: MsgRenounceIdentity): MsgRenounceIdentityAminoType["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: MsgRenounceIdentityAminoType["value"]): MsgRenounceIdentity => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/archive.identity.MsgUpdateOperators": {
    aminoType: "/archive.identity.MsgUpdateOperators",
    toAmino: ({
      creator,
      id,
      toAdd,
      toRemove
    }: MsgUpdateOperators): MsgUpdateOperatorsAminoType["value"] => {
      return {
        creator,
        id: id.toString(),
        toAdd,
        toRemove
      };
    },
    fromAmino: ({
      creator,
      id,
      toAdd,
      toRemove
    }: MsgUpdateOperatorsAminoType["value"]): MsgUpdateOperators => {
      return {
        creator,
        id: Long.fromString(id),
        toAdd,
        toRemove
      };
    }
  },
  "/archive.identity.MsgUpdateMembers": {
    aminoType: "/archive.identity.MsgUpdateMembers",
    toAmino: ({
      creator,
      id,
      toAdd,
      toRemove
    }: MsgUpdateMembers): MsgUpdateMembersAminoType["value"] => {
      return {
        creator,
        id: id.toString(),
        toAdd,
        toRemove
      };
    },
    fromAmino: ({
      creator,
      id,
      toAdd,
      toRemove
    }: MsgUpdateMembersAminoType["value"]): MsgUpdateMembers => {
      return {
        creator,
        id: Long.fromString(id),
        toAdd,
        toRemove
      };
    }
  },
  "/archive.identity.MsgFreezeIdentity": {
    aminoType: "/archive.identity.MsgFreezeIdentity",
    toAmino: ({
      creator,
      id
    }: MsgFreezeIdentity): MsgFreezeIdentityAminoType["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: MsgFreezeIdentityAminoType["value"]): MsgFreezeIdentity => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  }
};