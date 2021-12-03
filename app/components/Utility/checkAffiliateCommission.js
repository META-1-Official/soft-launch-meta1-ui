import {ChainTypes as grapheneChainTypes, ChainStore} from "meta1js";
import counterpart from "counterpart";
import utils from "common/utils";

const {operations} = grapheneChainTypes;

const ops = Object.keys(operations);
ops.push(
    "property_create_operation",
    "property_update_operation",
    "property_approve_operation",
    "property_delete_operation",
    "asset_price_publish_operation"
);

export default function getDataSource(o, referred_user, callback) {
    const dynGlobalObject = ChainStore.getObject("2.1.0");
    const lastIrreversibleBlockNum = dynGlobalObject.get(
        "last_irreversible_block_num"
    );
    let trxTypes = counterpart.translate("transaction.trxTypes");
    console.log("Called by chain", trxTypes[ops[o.op[0]]], referred_user);
    if (
        trxTypes[ops[o.op[0]]] !== "Transfer" ||
        o.block_num > lastIrreversibleBlockNum ||
        !referred_user
    ) {
        console.log("Pending or not related transaction");
        return;
    }
    // let fee = o.op[1].fee;
    const info = [
        {
            type: "account",
            details: ChainStore.getAccount(o.op[1].from)
                ? ChainStore.getAccount(o.op[1].from).toJS()
                : {},
            arg: "from"
        },
        {
            type: "amount",
            value: o.op[1].amount,
            details: ChainStore.getAsset(o.op[1].amount.asset_id)
                ? ChainStore.getAsset(o.op[1].amount.asset_id).toJS()
                : {}
        },
        {
            type: "account",
            details: ChainStore.getAccount(o.op[1].to)
                ? ChainStore.getAccount(o.op[1].to).toJS()
                : {},
            arg: "to"
        }
    ];
    // fee.amount = parseInt(fee.amount, 10);

    // o.block_num > lastIrreversibleBlockNum
    // fee.amount
    // fee.asset_id
    // trxTypes[ops[o.op[0]]]
    // o.id
    // info.column

    // console.log("fee", fee.amount);
    // console.log("fee asset", fee.asset_id);
    // console.log("tx type", trxTypes[ops[o.op[0]]]);
    // console.log("info with id:", o.id, info);
    // console.log("from:::", info[0].details.name, info[0].details.id);
    // console.log("to:::", info[2].details.name, info[2].details.id);
    // console.log("amount::: ", info[1].details.symbol, info[1].details.precision, info[1].value.amount * 10**-info[1].details.precision);
    if (referred_user === info[2].details.name) {
        const precision = utils.get_asset_precision(info[1].details.precision);
        const decimalOffset =
            o.op[1].amount.asset_id.asset_id === "1.3.0" ? 5 : 0;
        const decimals = Math.max(0, precision - decimalOffset);
        // console.log("amount parsed::: ", o.id, info[1].details.symbol, precision, decimals, info[1].value.amount / decimals);
        console.log("finalizing and tracking", info, decimals);
        debugger;
        tap("conversion", `${o.id}`, info[1].value.amount / decimals, {
            customer_id: info[2].details.name,
            meta_data: {
                raw_amount: info[1].value.amount,
                parsed_amount: info[1].value.amount / decimals,
                crypto_currency: info[1].details.symbol,
                precision: precision,
                sender: info[0].details.name,
                sender_id: info[0].details.id,
                receiver: info[2].details.name,
                received_id: info[2].details.id
            }
        });
        callback();
    }
}
