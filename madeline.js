import Lite from 'madeline-ton';

const liteClient = new Lite()

liteClient.connect().then(async () => {
    console.log("Connected!")

    console.log(await liteClient.getVersion())
    console.log(await liteClient.getTime())
    console.log(await liteClient.methodCall('liteServer.getMasterchainInfo'))

    await liteClient.last()
    const state = await liteClient.methodCall('liteServer.getAccountState', {
        account: 'EQAnoW6-IZHisrcCsiSFDewx79W4oYfocKveh3b44uNIIepe'
    })
    console.log(state)
    console.log(liteClient.slice(state.state)) // Deserialize BOC
})
