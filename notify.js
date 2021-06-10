//A method to start a new notification in JS

showNotify = () => {

    const notification = new Notification("New Message",{
        body:"The Message",  //body of the notification
        icon:"./bell.png"    //icon on notification panel
    });

    notification.onclick = (e) => {

        window.location.href = "https://google.com";
    };
}

// display notification permission on log
    console.log(Notification.permission);

    if(Notification.permission === "granted"){
        showNotify();

    } else if (Notification.permission !== "denied"){

        // if denied request user to allow notification on browser
        Notification.requestPermission().then(permission => {
            if(permission === "granted"){

            showNotify();
            }
        
        });
    }
