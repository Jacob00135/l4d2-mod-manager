(() => {

    updateServerLog();
    window.updateServerLogTimer = setInterval(updateServerLog, 5000);

    document.getElementById('start-server').addEventListener('click', startServer);
    document.getElementById('stop-server').addEventListener('click', stopServer);
    document.getElementById('changelevel_form').addEventListener('submit', changelevelFormSubmitEvent);

    function updateServerLog() {
        const box = document.getElementById('server_log');
        const url = box.getAttribute('data-log-url');
        const panel = box.querySelector('.log-panel');
        
        fetch(url).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'log': `请求服务器日志时状态码异常：${response.status}`};
            }
            return response.json();
        }, (error) => {
            return {'success': 0, 'log': error};
        }).then((responseJson) => {
            panel.innerHTML = responseJson.log;
        });
    }

    function startServer(e) {
        const url = document.getElementById('start-server').getAttribute('data-start-url');
        const csrfmiddlewaretoken = document.getElementById('changelevel_form')['csrfmiddlewaretoken'].value;
        const fetchConfig = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `csrfmiddlewaretoken=${csrfmiddlewaretoken}`
        };

        fetch(url, fetchConfig).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'log': `请求服务器日志时状态码异常：${response.status}`};
            }
            return response.json();
        }, (error) => {
            return {'success': 0, 'log': error};
        }).then((responseJson) => {
            clearInterval(window.updateServerLogTimer);
            document.querySelector('#server_log .log-panel').innerHTML = responseJson.log;
        });
    }

    function stopServer(e) {
        const url = document.getElementById('stop-server').getAttribute('data-stop-url');
        const csrfmiddlewaretoken = document.getElementById('changelevel_form')['csrfmiddlewaretoken'].value;
        const fetchConfig = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `csrfmiddlewaretoken=${csrfmiddlewaretoken}`
        };

        fetch(url, fetchConfig).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'log': `请求服务器日志时状态码异常：${response.status}`};
            }
            return response.json();
        }, (error) => {
            return {'success': 0, 'log': error};
        }).then((responseJson) => {
            clearInterval(window.updateServerLogTimer);
            document.querySelector('#server_log .log-panel').innerHTML = responseJson.log;
        });
    }

    function changelevelFormSubmitEvent(e) {
        e.preventDefault();

        const form = e.target;
        const bodyArray = [];
        form.querySelectorAll('input[name]').forEach((input) => {
            const key = input.name;
            const value = encodeURIComponent(input.value)
            bodyArray.push(`${key}=${value}`);
        });
        const fetchConfig = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyArray.join('&')
        };

        fetch(form.action, fetchConfig).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'log': `请求服务器日志时状态码异常：${response.status}`};
            }
            return response.json();
        }, (error) => {
            return {'success': 0, 'log': error};
        }).then((responseJson) => {
            clearInterval(window.updateServerLogTimer);
            document.querySelector('#server_log .log-panel').innerHTML = responseJson.log;
        });
    }
})();
