export default (node, target) => {
    node.addEventListener('click', () => {
        if (target)
            document.querySelector(target).scrollIntoView();
        else
            window.scrollTo(0,0);
    });
}