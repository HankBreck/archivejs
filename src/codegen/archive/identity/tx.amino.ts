import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
import { MsgRegisterIssuer, MsgIssueCertificate, MsgAcceptIdentity, MsgRejectIdentity, MsgRenounceIdentity, MsgUpdateOperators, MsgUpdateMembers, MsgFreezeIdentity } from "./tx";
export interface AminoMsgRegisterIssuer extends AminoMsg {
  type: "/archive.identity.MsgRegisterIssuer";
  value: {
    creator: string;
    name: string;
    more_info_uri: string;
  };
}
export interface AminoMsgIssueCertificate extends AminoMsg {
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
export interface AminoMsgAcceptIdentity extends AminoMsg {
  type: "/archive.identity.MsgAcceptIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgRejectIdentity extends AminoMsg {
  type: "/archive.identity.MsgRejectIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgRenounceIdentity extends AminoMsg {
  type: "/archive.identity.MsgRenounceIdentity";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgUpdateOperators extends AminoMsg {
  type: "/archive.identity.MsgUpdateOperators";
  value: {
    creator: string;
    id: string;
    toAdd: string[];
    toRemove: string[];
  };
}
export interface AminoMsgUpdateMembers extends AminoMsg {
  type: "/archive.identity.MsgUpdateMembers";
  value: {
    creator: string;
    id: string;
    toAdd: string[];
    toRemove: string[];
  };
}
export interface AminoMsgFreezeIdentity extends AminoMsg {
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
    }: MsgRegisterIssuer): AminoMsgRegisterIssuer["value"] => {
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
    }: AminoMsgRegisterIssuer["value"]): MsgRegisterIssuer => {
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
    }: MsgIssueCertificate): AminoMsgIssueCertificate["value"] => {
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
    }: AminoMsgIssueCertificate["value"]): MsgIssueCertificate => {
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
    }: MsgAcceptIdentity): AminoMsgAcceptIdentity["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgAcceptIdentity["value"]): MsgAcceptIdentity => {
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
    }: MsgRejectIdentity): AminoMsgRejectIdentity["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgRejectIdentity["value"]): MsgRejectIdentity => {
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
    }: MsgRenounceIdentity): AminoMsgRenounceIdentity["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgRenounceIdentity["value"]): MsgRenounceIdentity => {
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
    }: MsgUpdateOperators): AminoMsgUpdateOperators["value"] => {
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
    }: AminoMsgUpdateOperators["value"]): MsgUpdateOperators => {
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
    }: MsgUpdateMembers): AminoMsgUpdateMembers["value"] => {
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
    }: AminoMsgUpdateMembers["value"]): MsgUpdateMembers => {
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
    }: MsgFreezeIdentity): AminoMsgFreezeIdentity["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgFreezeIdentity["value"]): MsgFreezeIdentity => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  }
};