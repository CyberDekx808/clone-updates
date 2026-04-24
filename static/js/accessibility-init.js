//customer/accessibility-init.js

//initialisation of accessibility widget to meet WCAG standards 

window.addEventListener('load', function () {
    if (window.SiennaAccessibility) {
        SiennaAccessibility.init({
            position: 'bottom-right',
            triggerLabel: 'Accessibility'
        });
    } else {
        console.error('SiennaAccessibility not found');
    }
});