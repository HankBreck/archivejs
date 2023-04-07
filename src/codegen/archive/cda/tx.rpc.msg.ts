import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCda, MsgCreateCdaResponse, MsgApproveCda, MsgApproveCdaResponse, MsgWitnessApproveCda, MsgWitnessApproveCdaResponse, MsgFinalizeCda, MsgFinalizeCdaResponse, MsgVoidCda, MsgVoidCdaResponse, MsgRegisterContract, MsgRegisterContractResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  createCda(request: MsgCreateCda): Promise<MsgCreateCdaResponse>;
  approveCda(request: MsgApproveCda): Promise<MsgApproveCdaResponse>;
  witnessApproveCda(request: MsgWitnessApproveCda): Promise<MsgWitnessApproveCdaResponse>;
  finalizeCda(request: MsgFinalizeCda): Promise<MsgFinalizeCdaResponse>;
  voidCda(request: MsgVoidCda): Promise<MsgVoidCdaResponse>;
  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCda = this.createCda.bind(this);
    this.approveCda = this.approveCda.bind(this);
    this.witnessApproveCda = this.witnessApproveCda.bind(this);
    this.finalizeCda = this.finalizeCda.bind(this);
    this.voidCda = this.voidCda.bind(this);
    this.registerContract = this.registerContract.bind(this);
  }

  createCda(request: MsgCreateCda): Promise<MsgCreateCdaResponse> {
    const data = MsgCreateCda.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "CreateCda", data);
    return promise.then(data => MsgCreateCdaResponse.decode(new _m0.Reader(data)));
  }

  approveCda(request: MsgApproveCda): Promise<MsgApproveCdaResponse> {
    const data = MsgApproveCda.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "ApproveCda", data);
    return promise.then(data => MsgApproveCdaResponse.decode(new _m0.Reader(data)));
  }

  witnessApproveCda(request: MsgWitnessApproveCda): Promise<MsgWitnessApproveCdaResponse> {
    const data = MsgWitnessApproveCda.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "WitnessApproveCda", data);
    return promise.then(data => MsgWitnessApproveCdaResponse.decode(new _m0.Reader(data)));
  }

  finalizeCda(request: MsgFinalizeCda): Promise<MsgFinalizeCdaResponse> {
    const data = MsgFinalizeCda.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "FinalizeCda", data);
    return promise.then(data => MsgFinalizeCdaResponse.decode(new _m0.Reader(data)));
  }

  voidCda(request: MsgVoidCda): Promise<MsgVoidCdaResponse> {
    const data = MsgVoidCda.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "VoidCda", data);
    return promise.then(data => MsgVoidCdaResponse.decode(new _m0.Reader(data)));
  }

  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse> {
    const data = MsgRegisterContract.encode(request).finish();
    const promise = this.rpc.request("archive.cda.Msg", "RegisterContract", data);
    return promise.then(data => MsgRegisterContractResponse.decode(new _m0.Reader(data)));
  }

}