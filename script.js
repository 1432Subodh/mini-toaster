//closure toaster

if (!window.tailwind) {
  const script = document.createElement("script");
  script.src = "https://cdn.tailwindcss.com";
  document.head.appendChild(script);
}
function createToast(config){

    //something here

    let mainToasterDiv = document.createElement('div');
    mainToasterDiv.className = 'toaster fixed z-50 top-6 right-6 flex flex-col gap-3 items-end'

    document.body.appendChild(mainToasterDiv);
    return function (notification){
        let toaster = document.createElement('div');
        toaster.className = `flex items-start gap-3 max-w-sm w-full bg-gray-900 text-xs text-white/70 rounded-sm p-3`;
    
        mainToasterDiv.appendChild(toaster);
        console.log('notification', notification);
        toaster.innerText = notification;

        setTimeout(()=>{
            toaster.remove();
        }, config.duration * 1000);
    }
}
const toaster = createToast({
     positionX: 'right',
     positionY: 'top',
     duration: 2,
});

toaster('notification message here');
toaster('notification ad here');