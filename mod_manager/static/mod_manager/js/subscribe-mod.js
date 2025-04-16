(() => {
    document.getElementById('subscribe_form').addEventListener('submit', submitSubscribeFormEvent);

    function updateSubscribeLog(message) {
        message = message.replace(/\n/g, '<br/>');
        document.querySelector('#subscribe_live .log-panel').innerHTML = message;
    }

    function setSubscribeProgress(percent) {
        const progress = document.querySelector('#subscribe_live .progress');
        const progressText = document.querySelector("#subscribe_live .text");

        progress.style.width = percent + '%';
        progressText.innerHTML = percent + '%';
    }

    function disableSubscribeForm() {
        const form = document.getElementById('subscribe_form');
        [form['subscribe_url'], form.querySelector('.submit-button')].forEach((node) => {
            node.setAttribute('disabled', 'disabled');
            node.classList.add('disabled');
        });
    }

    function enableSubscribeForm() {
        const form = document.getElementById('subscribe_form');
        [form['subscribe_url'], form.querySelector('.submit-button')].forEach((node) => {
            node.removeAttribute('disabled', 'disabled');
            node.classList.remove('disabled');
        });
    }

    function submitSubscribeFormEvent(e) {
        e.preventDefault();

        disableSubscribeForm();

        const form = e.target;
        const bodyArray = [];
        form.querySelectorAll('input[name]').forEach((input) => {
            const key = input.name;
            const value = encodeURIComponent(input.value)
            bodyArray.push(`${key}=${value}`);
        });
        const fetchConfig = {
            method: form.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyArray.join('&')
        };

        fetch(form.action, fetchConfig).then((response) => {
            if (!response.ok) {
                return null;
            }
            return response.json();
        }, (error) => {
            console.log(error);
            return null;
        }).then((responseJson) => {
            if (responseJson !== null && responseJson.success !== 1) {
                enableSubscribeForm();
                alert(responseJson.message);
                return null;
            }

            const logUrl = form.getAttribute('data-log-url') + '?task_id=' + responseJson['task_id'];
            getSubscribeProgress(logUrl);
        });
    }

    function getSubscribeProgress(url) {
        fetch(url).then((response) => {
            if (!response.ok) {
                return null;
            }
            return response.json();
        }, (error) => {
            console.log(error);
            return null;
        }).then((responseJson) => {
            if (responseJson === null) {
                updateSubscribeLog('未知错误');
                enableSubscribeForm();
                return null;
            }
            if (responseJson.success === 0) {
                updateSubscribeLog(responseJson.message);
                enableSubscribeForm();
                return null;
            }

            updateSubscribeLog(responseJson.message);
            setSubscribeProgress(responseJson['download_progress']);

            if (responseJson.status === 'end') {
                enableSubscribeForm();
            } else {
                setTimeout(() => {
                    getSubscribeProgress(url);
                }, 1000);
            }
        });
    }
})();
