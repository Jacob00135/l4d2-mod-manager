(() => {
    document.querySelector('#file').addEventListener('change', changeFileInput);
    document.querySelector('#upload_form').addEventListener('submit', submitUploadFormEvent);

    function changeFileInput(e) {
        const input = e.target;
        const files = input.files;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let index = file.name.lastIndexOf('.');
            if (index < 0 || file.name.slice(index + 1) != 'vpk') {
                alert('只能上传VPK文件');
                return undefined;
            }
        }

        const uploadFileList = document.getElementById('upload_file_list');
        uploadFileList.innerHTML = '';
        for (let i = 0; i < files.length; i++) {
            let li = document.createElement('li');
            li.className = 'upload-file';
            li.innerHTML = `<div class="progress"></div>
                            <div class="filename">${files[i].name}</div>
                            <div class="progress-text">0%</div>`;
            uploadFileList.appendChild(li);
        }
    }

    function showUploadInfo(index, message) {
        const li = document.getElementById('upload_file_list').children[index];
        const filenameNode = li.querySelector('.filename');
        filenameNode.innerHTML = `${filenameNode.innerHTML}<br/><div class="upload-info">${message}</div>`;
        li.querySelector('.progress-text').innerHTML = '失败';
    }

    function ajaxFileExists(filename) {
        const route = document.getElementById('upload_form').getAttribute('data-exist-url');
        const queryString = `?filename=${filename}`;
        const url = route + queryString;
        
        return fetch(url).then((response) => {
            if (!response.ok) {
                return {'success': 0, 'message': '响应状态码异常：' + response.status};
            }
            return response.json();
        }, (error) => {
            return {'success': 0, 'message': error};
        });
    }

    function ajaxUploadFile(file, progressCallback, responseCallback) {
        const form = document.getElementById('upload_form');
        const url = form.action;
        const formData = new FormData();
        formData.append('csrfmiddlewaretoken', form['csrfmiddlewaretoken'].value);
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (e) => {
            if (!e.lengthComputable) {
                return undefined;
            }

            const rate = Math.floor((e.loaded / e.total) * 100);
            progressCallback && progressCallback(rate);
        });

        xhr.addEventListener('readystatechange', (e) => {
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                return undefined;
            }

            const response = JSON.parse(xhr.responseText);
            responseCallback && responseCallback(response);
        });

        xhr.open('post', url, true);
        xhr.send(formData);
    }

    function uploadAllFile(files, results) {
        if (results === undefined) {
            results = [];
        }
        if (results.length >= files.length) {
            console.log(results);
            return results;
        }

        const file = files[results.length];

        ajaxFileExists(file.name).then((responseJson) => {

            if (responseJson.success === 0) {
                showUploadInfo(results.length, responseJson.message);
                results.push(responseJson);
                uploadAllFile(files, results);
                return undefined;
            }

            if (responseJson.exist === 1) {
                showUploadInfo(results.length, '文件已存在');
                results.push(responseJson);
                uploadAllFile(files, results);
                return undefined;
            }

            const li = document.getElementById('upload_file_list').children[results.length];
            const progressBar = li.querySelector('.progress');
            const progressText = li.querySelector('.progress-text');
            ajaxUploadFile(file, (progressRate) => {
                progressBar.style.width = `${progressRate}%`;
                progressText.innerHTML = `${progressRate}%`;
            }, (responseJson) => {
                if (responseJson.success === 1) {
                    progressText.innerHTML = '成功';
                } else {
                    progressText.innerHTML = '失败';
                    showUploadInfo(results.length, responseJson.message);
                }
                results.push(responseJson);
                uploadAllFile(files, results);
            });
        });
    }

    function submitUploadFormEvent(e) {
        e.preventDefault();

        const form = e.target;
        uploadAllFile(form['file'].files);
    }
})();
