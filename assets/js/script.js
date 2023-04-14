globalThis.myApp = {
    copy: (form) => {
        var form = document.getElementById('#property-hub-form');
        let copyText = [];
        for (const key in form) {
            if (Object.hasOWnProperty.call(form, key)) {
                const val = form[key].value;
                if (val) {
                    copyText.push(form [key].value);
                }
            }
        }
        navigator.clipboard
            .writeText(copyText.join('\n'))
            .then(() => console.log("form values copied"))
            .catch((err) => console.log(err));
    }
};

// object.addEventListener("click". globalThis.myApp);