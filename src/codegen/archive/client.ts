import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as archiveCdaTxRegistry from "./cda/tx.registry";
import * as archiveIdentityTxRegistry from "./identity/tx.registry";
import * as archiveCdaTxAmino from "./cda/tx.amino";
import * as archiveIdentityTxAmino from "./identity/tx.amino";
export const archiveAminoConverters = { ...archiveCdaTxAmino.AminoConverter,
  ...archiveIdentityTxAmino.AminoConverter
};
export const archiveProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...archiveCdaTxRegistry.registry, ...archiveIdentityTxRegistry.registry];
export const getSigningArchiveClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...archiveProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...archiveAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningArchiveClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningArchiveClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};