document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        fixedWidth: '410px',
        gap: '40px',
        breakpoints: {
            1280: {
                fixedWidth: '270px',
                fixedHeight: '568px'
            },
            600: {
                perPage: 2,
                pagination: true,
                gap: '20px',
                fixedWidth: '270px',
                fixedHeight: '548px'
            },
            320: {
                perPage: 1,
                pagination: true,
                fixedWidth: '300px',
                fixedHeight: '548px'
            }
        }
    } ).mount();
});
