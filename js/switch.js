const radioButtons = document.querySelectorAll('[name="toggle-state"]');

// Switch between themes
radioButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const html = document.documentElement;
        html.dataset.theme = this.dataset.toggleTheme;
    });
});