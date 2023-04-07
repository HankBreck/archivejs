import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCda, MsgApproveCda, MsgWitnessApproveCda, MsgFinalizeCda, MsgVoidCda, MsgRegisterContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/archive.cda.MsgCreateCda", MsgCreateCda], ["/archive.cda.MsgApproveCda", MsgApproveCda], ["/archive.cda.MsgWitnessApproveCda", MsgWitnessApproveCda], ["/archive.cda.MsgFinalizeCda", MsgFinalizeCda], ["/archive.cda.MsgVoidCda", MsgVoidCda], ["/archive.cda.MsgRegisterContract", MsgRegisterContract]];
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

    witnessApproveCda(value: MsgWitnessApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgWitnessApproveCda",
        value: MsgWitnessApproveCda.encode(value).finish()
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.encode(value).finish()
      };
    },

    voidCda(value: MsgVoidCda) {
      return {
        typeUrl: "/archive.cda.MsgVoidCda",
        value: MsgVoidCda.encode(value).finish()
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

    witnessApproveCda(value: MsgWitnessApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgWitnessApproveCda",
        value
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value
      };
    },

    voidCda(value: MsgVoidCda) {
      return {
        typeUrl: "/archive.cda.MsgVoidCda",
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
  toJSON: {
    createCda(value: MsgCreateCda) {
      return {
        typeUrl: "/archive.cda.MsgCreateCda",
        value: MsgCreateCda.toJSON(value)
      };
    },

    approveCda(value: MsgApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgApproveCda",
        value: MsgApproveCda.toJSON(value)
      };
    },

    witnessApproveCda(value: MsgWitnessApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgWitnessApproveCda",
        value: MsgWitnessApproveCda.toJSON(value)
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.toJSON(value)
      };
    },

    voidCda(value: MsgVoidCda) {
      return {
        typeUrl: "/archive.cda.MsgVoidCda",
        value: MsgVoidCda.toJSON(value)
      };
    },

    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/archive.cda.MsgRegisterContract",
        value: MsgRegisterContract.toJSON(value)
      };
    }

  },
  fromJSON: {
    createCda(value: any) {
      return {
        typeUrl: "/archive.cda.MsgCreateCda",
        value: MsgCreateCda.fromJSON(value)
      };
    },

    approveCda(value: any) {
      return {
        typeUrl: "/archive.cda.MsgApproveCda",
        value: MsgApproveCda.fromJSON(value)
      };
    },

    witnessApproveCda(value: any) {
      return {
        typeUrl: "/archive.cda.MsgWitnessApproveCda",
        value: MsgWitnessApproveCda.fromJSON(value)
      };
    },

    finalizeCda(value: any) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.fromJSON(value)
      };
    },

    voidCda(value: any) {
      return {
        typeUrl: "/archive.cda.MsgVoidCda",
        value: MsgVoidCda.fromJSON(value)
      };
    },

    registerContract(value: any) {
      return {
        typeUrl: "/archive.cda.MsgRegisterContract",
        value: MsgRegisterContract.fromJSON(value)
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

    witnessApproveCda(value: MsgWitnessApproveCda) {
      return {
        typeUrl: "/archive.cda.MsgWitnessApproveCda",
        value: MsgWitnessApproveCda.fromPartial(value)
      };
    },

    finalizeCda(value: MsgFinalizeCda) {
      return {
        typeUrl: "/archive.cda.MsgFinalizeCda",
        value: MsgFinalizeCda.fromPartial(value)
      };
    },

    voidCda(value: MsgVoidCda) {
      return {
        typeUrl: "/archive.cda.MsgVoidCda",
        value: MsgVoidCda.fromPartial(value)
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