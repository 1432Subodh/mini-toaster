(function () {
    // wait until body exists
    function ready(fn) {
        if (document.body) fn();
        else setTimeout(() => ready(fn), 10);
    }

    ready(function () {
        // create container once
        let container = document.getElementById('simple-toaster');

        if (!container) {
            container = document.createElement('div');
            container.id = 'simple-toaster';

            container.style.position = 'fixed';
            container.style.top = '20px';
            container.style.right = '20px';
            container.style.zIndex = '9999';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.gap = '10px';

            document.body.appendChild(container);
        }

        // expose global function
        window.toaster = function (message, duration = 2000) {
            const toast = document.createElement('div');

            toast.style.background = '#111';
            toast.style.color = '#fff';
            toast.style.fontSize = '12px';
            toast.style.padding = '10px 14px';
            toast.style.borderRadius = '4px';
            toast.style.maxWidth = '260px';
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.2s ease';

            toast.innerText = message;

            container.appendChild(toast);

            // fade in
            requestAnimationFrame(() => {
                toast.style.opacity = '1';
            });

            // remove
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 200);
            }, duration);
        };
    });
})();
