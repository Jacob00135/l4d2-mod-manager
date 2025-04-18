(() => {

    updateServerLog();
    setInterval(updateServerLog, 3000);

    function updateServerLog() {
        const box = document.getElementById('server_log');
        const url = box.getAttribute('data-log-url');
        const panel = box.querySelector('.log-panel');
        
        fetch(url).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'log': `请求服务器日志时状态码异常：${response.status}`};
            }
            return response.json()
        }, (error) => {
            return {'success': 0, 'log': error};
        }).then((responseJson) => {
            panel.innerHTML = responseJson.log;
        });
    }
})();
