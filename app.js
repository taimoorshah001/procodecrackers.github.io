const tl = gsap.timeline();

tl.from(
    'h1',
    {
        opacity: 0,
        duration: 2,
        y: -50,
        x: -50,
        ease: 'elastic'
    });
tl.from(
    '.img',
    {
        opacity: 1,
        duration: 2,
        x: 4,
        ease: 'ease-in-out'
    });
