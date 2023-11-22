
window.SetFocusToElement = (element) => {
    element.focus();
};


function eventArgsCreator(event) {
    return {
        customProperty1: 'any value for property 1',
        customProperty2: event.srcElement.value
    };
}

//export function SetFocusToElement(element) {
//    element.focus();
//}

//export function afterStarted(blazor) {
//    blazor.registerCustomEventType('custompaste', {
//        browserEventName: 'paste',
//        createEventArgs: event => {
//            return {
//                eventTimestamp: new Date(),
//                pastedData: event.clipboardData.getData('text')
//            };
//        }
//    });
//}