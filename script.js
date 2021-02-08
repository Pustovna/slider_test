document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        fixedWidth: '410px',
        gap: '40px',
        accessibility: true,
        keyboard: true,
        breakpoints: {
            2500: {
                pagination: false
            },
            1280: {
                fixedWidth: '270px',
                pagination: false
            },
            600: {
                pagination: true,
                fixedWidth: '270px',
                gap: '20px'
            },
            320: {
                perPage: 1,
                pagination: true,
                fixedWidth: '300px',
            }
        }
    } ).mount();
});
