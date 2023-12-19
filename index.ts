
import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";

async function main () {

    const wallet = Address.parse('UQBS5qr3a4ZliFjdzt_rLefDfLO6fF5oeQ7P1S-k4rRHj2qF');
    const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

    const endpoint = await getHttpEndpoint({
        network: "testnet",
    });

    const client = new TonClient({ endpoint });

    const miningData = await client.callGetMethod(collection, 'get_mining_data')

    console.log(miningData)


}

main()