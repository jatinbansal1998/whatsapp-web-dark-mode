window.onload = function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (window.location.hostname == "web.whatsapp.com")
            document.body.classList.add("dark");
        if (window.location.hostname == "www.facebook.com") {
            var root = document.getElementsByTagName('html')[0];
            root.setAttribute('class', '__fb-dark-mode');
        }
    }

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        if (window.location.hostname == "web.whatsapp.com")
            document.body.classList.remove("dark");
        if (window.location.hostname == "www.facebook.com") {
            var root = document.getElementsByTagName('html')[0];
            root.removeAttribute('class')
        }
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    console.log(newColorScheme);
    if (newColorScheme == "dark") {
        if (window.location.hostname == "web.whatsapp.com")
            document.body.classList.add("dark");
        if (window.location.hostname == "www.facebook.com") {
            var root = document.getElementsByTagName('html')[0];
            root.setAttribute('class', '__fb-dark-mode');
        }
    }
    if (newColorScheme == "light") {
        if (window.location.hostname == "web.whatsapp.com")
            document.body.classList.remove("dark");
        if (window.location.hostname == "www.facebook.com") {
            var root = document.getElementsByTagName('html')[0];
            root.removeAttribute('class')
        }
    }
});


