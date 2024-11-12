import anime from "/assets/plugins/animejs/anime.es.js"

new AirDatepicker('#el', {
    range: true, 
    isMobile: true,
    autoClose: true,
    position({$datepicker, $target, $pointer, isViewChange, done}) {
        let popper = Popper.createPopper($target, $datepicker, {
            placement: 'top',
            onFirstUpdate: state => {
                !isViewChange && anime.remove($datepicker);

                $datepicker.style.transformOrigin = 'center top';

                !isViewChange && anime({
                    targets: $datepicker,
                    opacity: [0, 1],
                    rotateX: [-90, 0],
                    easing: 'spring(1.3, 80, 5, 0)',
                })

            },
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10]
                    }
                },
                {
                    name: 'arrow',
                    options: {
                        element: $pointer,
                    }
                },
                {
                    name: 'computeStyles',
                    options: {
                        gpuAcceleration: false,
                    },
                },
            ]
        });

        return () => {
            anime({
                targets: $datepicker,
                opacity: 0,
                rotateX: -90,
                duration: 300,
                easing: 'easeOutCubic'
            }).finished.then(() => {
                popper.destroy();
                done();
            })
        }
    }}
)