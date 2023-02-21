import * as _1 from "./cda/cda";
import * as _2 from "./cda/contract";
import * as _3 from "./cda/genesis";
import * as _4 from "./cda/params";
import * as _5 from "./cda/query";
import * as _6 from "./cda/tx";
import * as _7 from "./identity/certificate";
import * as _8 from "./identity/genesis";
import * as _9 from "./identity/issuer";
import * as _10 from "./identity/params";
import * as _11 from "./identity/query";
import * as _12 from "./identity/tx";
import * as _125 from "./cda/tx.amino";
import * as _126 from "./identity/tx.amino";
import * as _127 from "./cda/tx.registry";
import * as _128 from "./identity/tx.registry";
import * as _129 from "./cda/query.lcd";
import * as _130 from "./identity/query.lcd";
import * as _131 from "./cda/query.rpc.Query";
import * as _132 from "./identity/query.rpc.Query";
import * as _133 from "./cda/tx.rpc.msg";
import * as _134 from "./identity/tx.rpc.msg";
import * as _212 from "./lcd";
import * as _213 from "./rpc.query";
import * as _214 from "./rpc.tx";
export namespace archive {
  export const cda = { ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._125,
    ..._127,
    ..._129,
    ..._131,
    ..._133
  };
  export const identity = { ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._126,
    ..._128,
    ..._130,
    ..._132,
    ..._134
  };
  export const ClientFactory = { ..._212,
    ..._213,
    ..._214
  };
}