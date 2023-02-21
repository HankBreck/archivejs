import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterIssuer, MsgIssueCertificate, MsgAcceptIdentity, MsgRejectIdentity, MsgRenounceIdentity, MsgUpdateOperators, MsgUpdateMembers, MsgFreezeIdentity } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/archive.identity.MsgRegisterIssuer", MsgRegisterIssuer], ["/archive.identity.MsgIssueCertificate", MsgIssueCertificate], ["/archive.identity.MsgAcceptIdentity", MsgAcceptIdentity], ["/archive.identity.MsgRejectIdentity", MsgRejectIdentity], ["/archive.identity.MsgRenounceIdentity", MsgRenounceIdentity], ["/archive.identity.MsgUpdateOperators", MsgUpdateOperators], ["/archive.identity.MsgUpdateMembers", MsgUpdateMembers], ["/archive.identity.MsgFreezeIdentity", MsgFreezeIdentity]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerIssuer(value: MsgRegisterIssuer) {
      return {
        typeUrl: "/archive.identity.MsgRegisterIssuer",
        value: MsgRegisterIssuer.encode(value).finish()
      };
    },

    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/archive.identity.MsgIssueCertificate",
        value: MsgIssueCertificate.encode(value).finish()
      };
    },

    acceptIdentity(value: MsgAcceptIdentity) {
      return {
        typeUrl: "/archive.identity.MsgAcceptIdentity",
        value: MsgAcceptIdentity.encode(value).finish()
      };
    },

    rejectIdentity(value: MsgRejectIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRejectIdentity",
        value: MsgRejectIdentity.encode(value).finish()
      };
    },

    renounceIdentity(value: MsgRenounceIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRenounceIdentity",
        value: MsgRenounceIdentity.encode(value).finish()
      };
    },

    updateOperators(value: MsgUpdateOperators) {
      return {
        typeUrl: "/archive.identity.MsgUpdateOperators",
        value: MsgUpdateOperators.encode(value).finish()
      };
    },

    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/archive.identity.MsgUpdateMembers",
        value: MsgUpdateMembers.encode(value).finish()
      };
    },

    freezeIdentity(value: MsgFreezeIdentity) {
      return {
        typeUrl: "/archive.identity.MsgFreezeIdentity",
        value: MsgFreezeIdentity.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerIssuer(value: MsgRegisterIssuer) {
      return {
        typeUrl: "/archive.identity.MsgRegisterIssuer",
        value
      };
    },

    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/archive.identity.MsgIssueCertificate",
        value
      };
    },

    acceptIdentity(value: MsgAcceptIdentity) {
      return {
        typeUrl: "/archive.identity.MsgAcceptIdentity",
        value
      };
    },

    rejectIdentity(value: MsgRejectIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRejectIdentity",
        value
      };
    },

    renounceIdentity(value: MsgRenounceIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRenounceIdentity",
        value
      };
    },

    updateOperators(value: MsgUpdateOperators) {
      return {
        typeUrl: "/archive.identity.MsgUpdateOperators",
        value
      };
    },

    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/archive.identity.MsgUpdateMembers",
        value
      };
    },

    freezeIdentity(value: MsgFreezeIdentity) {
      return {
        typeUrl: "/archive.identity.MsgFreezeIdentity",
        value
      };
    }

  },
  fromPartial: {
    registerIssuer(value: MsgRegisterIssuer) {
      return {
        typeUrl: "/archive.identity.MsgRegisterIssuer",
        value: MsgRegisterIssuer.fromPartial(value)
      };
    },

    issueCertificate(value: MsgIssueCertificate) {
      return {
        typeUrl: "/archive.identity.MsgIssueCertificate",
        value: MsgIssueCertificate.fromPartial(value)
      };
    },

    acceptIdentity(value: MsgAcceptIdentity) {
      return {
        typeUrl: "/archive.identity.MsgAcceptIdentity",
        value: MsgAcceptIdentity.fromPartial(value)
      };
    },

    rejectIdentity(value: MsgRejectIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRejectIdentity",
        value: MsgRejectIdentity.fromPartial(value)
      };
    },

    renounceIdentity(value: MsgRenounceIdentity) {
      return {
        typeUrl: "/archive.identity.MsgRenounceIdentity",
        value: MsgRenounceIdentity.fromPartial(value)
      };
    },

    updateOperators(value: MsgUpdateOperators) {
      return {
        typeUrl: "/archive.identity.MsgUpdateOperators",
        value: MsgUpdateOperators.fromPartial(value)
      };
    },

    updateMembers(value: MsgUpdateMembers) {
      return {
        typeUrl: "/archive.identity.MsgUpdateMembers",
        value: MsgUpdateMembers.fromPartial(value)
      };
    },

    freezeIdentity(value: MsgFreezeIdentity) {
      return {
        typeUrl: "/archive.identity.MsgFreezeIdentity",
        value: MsgFreezeIdentity.fromPartial(value)
      };
    }

  }
};