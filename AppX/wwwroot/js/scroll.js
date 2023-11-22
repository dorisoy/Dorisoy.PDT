window.ScrollToBottom = (elementName) => {
    element = document.getElementById(elementName);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

window.ScrollToSection = (elementName) => {
    element = document.getElementById(elementName);
    document.documentElement.scrollTop = document.body.scrollTop = element.offsetTop
}

window.scrollToElementId = (elementId) => {
    console.info('scrolling to element', elementId);
    var element = document.getElementById(elementId);
    if (!element) {
        console.warn('element was not found', elementId);
        return false;
    }
    //document.documentElement.scrollTop = document.body.scrollTop = element.offsetTop
    element.scrollIntoView();
    return true;
}

window.consoleLog = (log) => {
    console.info('-->', log);
}

window.OnScrollEvent = (scroll) => {
    document.documentElement.scrollTop = scroll;
}
