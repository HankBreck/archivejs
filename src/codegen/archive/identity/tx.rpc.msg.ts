import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterIssuer, MsgRegisterIssuerResponse, MsgIssueCertificate, MsgIssueCertificateResponse, MsgAcceptIdentity, MsgAcceptIdentityResponse, MsgRejectIdentity, MsgRejectIdentityResponse, MsgRenounceIdentity, MsgRenounceIdentityResponse, MsgUpdateOperators, MsgUpdateOperatorsResponse, MsgUpdateMembers, MsgUpdateMembersResponse, MsgFreezeIdentity, MsgFreezeIdentityResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  registerIssuer(request: MsgRegisterIssuer): Promise<MsgRegisterIssuerResponse>;
  issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
  acceptIdentity(request: MsgAcceptIdentity): Promise<MsgAcceptIdentityResponse>;
  rejectIdentity(request: MsgRejectIdentity): Promise<MsgRejectIdentityResponse>;
  renounceIdentity(request: MsgRenounceIdentity): Promise<MsgRenounceIdentityResponse>;
  updateOperators(request: MsgUpdateOperators): Promise<MsgUpdateOperatorsResponse>;
  updateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse>;
  freezeIdentity(request: MsgFreezeIdentity): Promise<MsgFreezeIdentityResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerIssuer = this.registerIssuer.bind(this);
    this.issueCertificate = this.issueCertificate.bind(this);
    this.acceptIdentity = this.acceptIdentity.bind(this);
    this.rejectIdentity = this.rejectIdentity.bind(this);
    this.renounceIdentity = this.renounceIdentity.bind(this);
    this.updateOperators = this.updateOperators.bind(this);
    this.updateMembers = this.updateMembers.bind(this);
    this.freezeIdentity = this.freezeIdentity.bind(this);
  }

  registerIssuer(request: MsgRegisterIssuer): Promise<MsgRegisterIssuerResponse> {
    const data = MsgRegisterIssuer.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "RegisterIssuer", data);
    return promise.then(data => MsgRegisterIssuerResponse.decode(new _m0.Reader(data)));
  }

  issueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse> {
    const data = MsgIssueCertificate.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "IssueCertificate", data);
    return promise.then(data => MsgIssueCertificateResponse.decode(new _m0.Reader(data)));
  }

  acceptIdentity(request: MsgAcceptIdentity): Promise<MsgAcceptIdentityResponse> {
    const data = MsgAcceptIdentity.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "AcceptIdentity", data);
    return promise.then(data => MsgAcceptIdentityResponse.decode(new _m0.Reader(data)));
  }

  rejectIdentity(request: MsgRejectIdentity): Promise<MsgRejectIdentityResponse> {
    const data = MsgRejectIdentity.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "RejectIdentity", data);
    return promise.then(data => MsgRejectIdentityResponse.decode(new _m0.Reader(data)));
  }

  renounceIdentity(request: MsgRenounceIdentity): Promise<MsgRenounceIdentityResponse> {
    const data = MsgRenounceIdentity.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "RenounceIdentity", data);
    return promise.then(data => MsgRenounceIdentityResponse.decode(new _m0.Reader(data)));
  }

  updateOperators(request: MsgUpdateOperators): Promise<MsgUpdateOperatorsResponse> {
    const data = MsgUpdateOperators.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "UpdateOperators", data);
    return promise.then(data => MsgUpdateOperatorsResponse.decode(new _m0.Reader(data)));
  }

  updateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse> {
    const data = MsgUpdateMembers.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "UpdateMembers", data);
    return promise.then(data => MsgUpdateMembersResponse.decode(new _m0.Reader(data)));
  }

  freezeIdentity(request: MsgFreezeIdentity): Promise<MsgFreezeIdentityResponse> {
    const data = MsgFreezeIdentity.encode(request).finish();
    const promise = this.rpc.request("archive.identity.Msg", "FreezeIdentity", data);
    return promise.then(data => MsgFreezeIdentityResponse.decode(new _m0.Reader(data)));
  }

}