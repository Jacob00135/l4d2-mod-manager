(() => {

    document.querySelectorAll('.delete-mod-form').forEach((form) => {
        form.addEventListener('submit', deleteModFormSubmitEvent);
    });
    document.querySelectorAll('#mod_list .sha256-button').forEach((btn) => {
        btn.addEventListener('click', getSHA256Code);
    });

    function deleteModFormSubmitEvent(e) {
        e.preventDefault();

        const form = e.target;
        const modFilename = form['filename'].value;
        const confirmDelete = confirm(`确定删除该MOD？删除后无法撤销！\n${modFilename}`);
        if (!confirmDelete) {
            return undefined;
        }

        form.submit();
    }

    function getSHA256Code(e) {
        const btn = e.target;
        const url = btn.getAttribute('data-sha256-url');
        const index = btn.getAttribute('data-index');
        const panel = document.querySelector(`#mod_list .mod-sha256[data-index="${index}"] .text`);
        
        fetch(url).then((response) => {
            if (!response.ok) {
                alert(`请求状态码异常：${response.status}`);
                return null;
            }
            return response.json();
        }, (error) => {
            alert(error);
            return null;
        }).then((responseJson) => {
            if (responseJson !== null) {
                panel.innerHTML = responseJson.data;
            }
        });
    }
})();
