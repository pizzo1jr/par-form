globalThis.myApp = {
    copy: (propertyHubForm) => {
        var propertyHubForm = document.getElementById("#property-hub-form");
        let copyText = [];
        for (const key in propertyHubForm) {
            if (Object.hasOWnProperty.call(propertyHubForm, key)) {
                const val = propertyHubForm[key].value;
                if (val) {
                    copyText.push(propertyHubForm [key].value);
                }
            }
        }
        navigator.clipboard
            .writeText(copyText.join('\n'))
            .then(() => console.log("form values copied"))
            .catch((err) => console.log(err));
    }
};

button.addEventListener("click". globalThis.myApp.copy);