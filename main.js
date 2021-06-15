console.log('demo extention loaded');

let loop = () => {
        fetch('/resource')
                .then(res => res.text())
                .then(t => console.log(t))
                .catch(err => console.error(err));
        setTimeout(loop, 2000);
};
loop();
