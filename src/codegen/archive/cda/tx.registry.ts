import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCda, MsgApproveCda, MsgFinalizeCda, MsgRegisterContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/archive.cda.MsgCreateCda", MsgCreateCda], ["/archive.cda.MsgApproveCda", MsgApproveCda], ["/archive.cda.MsgFinalizeCda", MsgFinalizeCda], ["/archive.cda.MsgRegisterContract", MsgRegisterContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCda(value: MsgCreateCda) {
      return {
        typeUrl: "/archive.cda.MsgCreateCda",
        value: MsgCreateCda.encode(value).finish()
      };
    },

    approveCda(value: MsgApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgApproveCda",
        value: MsgApproveCda.encode(value).finish()
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.encode(value).finish()
      };
    },

    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/archive.cda.MsgRegisterContract",
        value: MsgRegisterContract.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createCda(value: MsgCreateCda) {
      return {
        typeUrl: "/archive.cda.MsgCreateCda",
        value
      };
    },

    approveCda(value: MsgApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgApproveCda",
        value
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value
      };
    },

    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/archive.cda.MsgRegisterContract",
        value
      };
    }

  },
  fromPartial: {
    createCda(value: MsgCreateCda) {
      return {
        typeUrl: "/archive.cda.MsgCreateCda",
        value: MsgCreateCda.fromPartial(value)
      };
    },

    approveCda(value: MsgApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgApproveCda",
        value: MsgApproveCda.fromPartial(value)
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.fromPartial(value)
      };
    },

    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/archive.cda.MsgRegisterContract",
        value: MsgRegisterContract.fromPartial(value)
      };
    }

  }
};