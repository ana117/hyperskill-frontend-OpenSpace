const PASSWORD = 'TrustNo1'

function toggleLaunchControl(enable) {
    let checkboxes = document.getElementsByClassName('check-buttons')[0].children;
    let sliders = document.getElementsByClassName('levers')[0].children;
    let launchButton = document.getElementById('launch-button');

    for (let i=0; i<checkboxes.length; i++) {
        toggleInput(checkboxes[i], enable);
    }
    for (let i=0; i<sliders.length; i++) {
        toggleInput(sliders[i], enable);
    }
    toggleInput(launchButton, enable);
}

function toggleInput(input, enable) {
    input.disabled = !enable;
}

window.addEventListener('load', function () {
    let okButton = document.getElementById('ok-button');
    okButton.addEventListener('click', function () {
        let passwordInput = document.getElementById('password-input');
        if (passwordInput.value === PASSWORD) {
            toggleLaunchControl(true);
            toggleInput(passwordInput, false);
            toggleInput(okButton, false);
        } else {
            toggleLaunchControl(false);
            toggleInput(passwordInput, true);
            toggleInput(okButton, true);
        }
        passwordInput.value = '';
    });
})


