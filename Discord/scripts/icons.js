const addServerDiv = document.querySelector('.add-server-div');
const addServer = document.querySelector('.add-server');
const addServerWhite = document.querySelector('.add-server-hide');

const compassDiv = document.querySelector('.compass-div');
const compass = document.querySelector('.compass');
const compassWhite = document.querySelector('.compass-hide');

const downloadDiv = document.querySelector('.download-div');
const download = document.querySelector('.download');
const downloadWhite = document.querySelector('.download-hide');

const nitroDiv = document.querySelector('.nitro-div');
const nitro = document.querySelector('.nitro-icon');
const nitroWhite = document.querySelector('.nitro-icon-hide');

const shopDiv = document.querySelector('.shop-div');
const shop = document.querySelector('.shop-icon');
const shopWhite = document.querySelector('.shop-icon-hide');

const microphoneDiv = document.querySelector('.microphone-div');
const microphoneDisabled = document.querySelector('.microphone-hide');
const microphone = document.querySelector('.microphone');

const earphoneDiv = document.querySelector('.earphone-div');
const earphoneDisabled = document.querySelector('.earphone-hide');
const earphone = document.querySelector('.earphone');


function iconMouseOver(name, whiteName, showClassName, hideClassName) {
    name.classList.remove(showClassName);
    name.classList.add(hideClassName);

    whiteName.classList.remove(hideClassName);
    whiteName.classList.add(showClassName);
}

function iconMouseOut(name, whiteName, showClassName, hideClassName) {
    name.classList.add(showClassName);
    name.classList.remove(hideClassName);

    whiteName.classList.add(hideClassName);
    whiteName.classList.remove(showClassName);
}


addServerDiv.addEventListener('mouseover', function() {iconMouseOver(addServer, addServerWhite, 'add-server', 'add-server-hide')});
addServerDiv.addEventListener('mouseout', function() {iconMouseOut(addServer, addServerWhite, 'add-server', 'add-server-hide')});

compassDiv.addEventListener('mouseover', function() {iconMouseOver(compass, compassWhite, 'compass', 'compass-hide')});
compassDiv.addEventListener('mouseout', function() {iconMouseOut(compass, compassWhite, 'compass', 'compass-hide')});

downloadDiv.addEventListener('mouseover', function() {iconMouseOver(download, downloadWhite, 'download', 'download-hide')});
downloadDiv.addEventListener('mouseout', function() {iconMouseOut(download, downloadWhite, 'download', 'download-hide')});

nitroDiv.addEventListener('mouseover', function() {iconMouseOver(nitro, nitroWhite, 'nitro-icon', 'nitro-icon-hide')});
nitroDiv.addEventListener('mouseout', function() {iconMouseOut(nitro, nitroWhite, 'nitro-icon', 'nitro-icon-hide')});

shopDiv.addEventListener('mouseover', function() {iconMouseOver(shop, shopWhite, 'shop-icon', 'shop-icon-hide')});
shopDiv.addEventListener('mouseout', function() {iconMouseOut(shop, shopWhite, 'shop-icon', 'shop-icon-hide')});


microphoneDiv.addEventListener('click', () => {
    if (microphone.classList.contains('microphone')) {

        microphone.classList.remove('microphone');
        microphone.classList.add('microphone-hide');

        microphoneDisabled.classList.remove('microphone-hide');
        microphoneDisabled.classList.add('microphone');
    }

    else {
        microphoneDisabled.classList.remove('microphone');
        microphoneDisabled.classList.add('microphone-hide');

        microphone.classList.remove('microphone-hide');
        microphone.classList.add('microphone');
    }
})

earphoneDiv.addEventListener('click', () => {
    if (earphone.classList.contains('earphone')) {

        earphone.classList.remove('earphone');
        earphone.classList.add('earphone-hide');

        earphoneDisabled.classList.remove('earphone-hide');
        earphoneDisabled.classList.add('earphone');
    }

    else {
        earphoneDisabled.classList.remove('earphone');
        earphoneDisabled.classList.add('earphone-hide');

        earphone.classList.remove('earphone-hide');
        earphone.classList.add('earphone');
    }
})