(() => {

    document.querySelectorAll('.delete-mod-form').forEach((form) => {
        form.addEventListener('submit', deleteModFormSubmitEvent);
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
})();
