let config = {
    
}
let webConfig = {
    test: {
      sessionId: 'p2p-1008611',
      url: "http://121.43.174.41/",
      httpUrl:"http://121.43.174.41/crm/",
      appkey: '39b5b8380a846355afbe1d31f0b83705',
    },
    www: {
      sessionId: 'p2p-10086',
      url: "http://www.classbro.com/",
      httpUrl:"https://www.classbro.com/crm/",
      appkey: '1fe5406367b44a65224e9e2a48e02b80',
    }
  }
let env  = 'test'
config = Object.assign(config,webConfig[env])
export default config