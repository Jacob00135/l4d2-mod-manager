(() => {
    function setSubscribeProgress(percent) {
        const progress = document.querySelector('#subscribe_live .progress');
        const progressText = document.querySelector("#subscribe_live .text");

        progress.style.width = percent + '%';
        progressText.innerHTML = percent + '%';
    }
})();
