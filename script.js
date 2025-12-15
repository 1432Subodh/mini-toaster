(function () {

    function init() {

        // Load Tailwind CDN once
        if (!document.getElementById('tailwind-cdn')) {
            const tw = document.createElement('script');
            tw.id = 'tailwind-cdn';
            tw.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(tw);
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

        // expose globally
        window.toaster = createToast({
            duration: 2
        });
    }

    // ✅ WAIT FOR BODY TO EXIST
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
