const PASSWORD = 'TrustNo1'

function toggleLaunchControl(enable) {
    let checkboxes = document.getElementsByClassName('check-buttons')[0].children;
    let sliders = document.getElementsByClassName('levers')[0].children;

    for (let i=0; i<checkboxes.length; i++) {
        toggleInput(checkboxes[i], enable);
    }
    for (let i=0; i<sliders.length; i++) {
        toggleInput(sliders[i], enable);
    }
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

    let launchButton = document.getElementById('launch-button');
    launchButton.addEventListener('click', launchRocket);

    let checkboxes = document.getElementsByClassName('check-buttons')[0].children;
    for (let i=0; i<checkboxes.length; i++) {
        checkboxes[i].onchange = function () {
            if (checkLaunchRequirement()) {
                toggleInput(launchButton, true);
            } else {
                toggleInput(launchButton, false);
            }
        };
    }

    let sliders = document.getElementsByClassName('levers')[0].children;
    for (let i=0; i<sliders.length; i++) {
        sliders[i].onchange = function () {
            if (checkLaunchRequirement()) {
                toggleInput(launchButton, true);
            } else {
                toggleInput(launchButton, false);
            }
        };
    }
})

function checkLaunchRequirement() {
    let checkboxes = document.getElementsByClassName('check-buttons')[0].children;
    for (let i=0; i<checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            return false;
        }
    }

    let sliders = document.getElementsByClassName('levers')[0].children;
    for (let i=0; i<sliders.length; i++) {
        if (sliders[i].value !== '100') {
            return false;
        }
    }

    return true;
}

function launchRocket() {
    let rocket = document.getElementById('rocket');
    let rect = rocket.getBoundingClientRect();
    let targetLeft = `${rect.left + 200}px`;
    let targetTop = `${rect.top - 180}px`;

    rocket.addEventListener('animationend', () => {
        rocket.style.left = targetLeft;
        rocket.style.top = targetTop;
    });

    rocket.animate(
        [{left: targetLeft, top: targetTop}],
        {duration: 1000, iterations: 1}
    );

    setTimeout(() => {
        rocket.style.left = targetLeft;
        rocket.style.top = targetTop;
        console.log(1);
    }, 1000);
}


