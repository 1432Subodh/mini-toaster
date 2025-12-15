(function () {

    function init() {

        // Load Tailwind
        if (!document.getElementById('tailwind-cdn')) {
            const script = document.createElement('script');
            script.id = 'tailwind-cdn';
            script.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(script);
        }

        function createToast(config) {
            let container = document.getElementById('mini-toaster');

            if (!container) {
                container = document.createElement('div');
                container.id = 'mini-toaster';
                container.className =
                    'fixed top-6 right-6 z-50 flex flex-col gap-3 items-end';
                document.body.appendChild(container);
            }

            return function (message) {
                const toast = document.createElement('div');
                toast.className =
                    'bg-gray-900 text-white text-xs px-4 py-3 rounded shadow max-w-sm w-full';
                toast.innerText = message;

                container.appendChild(toast);

                setTimeout(() => {
                    toast.remove();
                }, (config.duration || 2) * 1000);
            };
        }

        window.toaster = createToast({
            duration: 2
        });
    }

    // ✅ THIS WAS MISSING
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
