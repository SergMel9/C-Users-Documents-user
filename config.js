const liteClient = new Lite({
    config: liteConfig, // Contents of ton-lite-client-test1.config.json
    wssProxies: {       // Websocket proxy endpoints, per-IP
        1137658550: 'wss://ton-ws.madelineproto.xyz/testnet'
    },
    schemes: {
        1: schemeTON, // ton API TL scheme JSON file
        2: schemeLite // lite API TL scheme JSON file
    },
})
