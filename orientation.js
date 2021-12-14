window.addEventListener('orientationchange', e => console.log(makeRequest(JSON.stringify({timestamp:new Date().toJSON(), type: 'orientationchange', session: sessionStorage.token}))));

