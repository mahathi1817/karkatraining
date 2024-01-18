// export function createConnection(serverUrl, roomId) {
//     // A real implementation would actually connect to the server
//     return {
//       connect() {
//         console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
//       },
//       disconnect() {
//         console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//       }
//     };
//   }
  
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  };
}
