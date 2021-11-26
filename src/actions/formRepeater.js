export default (node, target) => {
    function repeatNode() {
        let clone = node.cloneNode(true);
        node.parentNode.insertBefore(clone, node.nextSibling);
    }

    let button = document.querySelector(target);
    button.addEventListener('click', repeatNode);

    return {
		destroy() {
			button.removeEventListener('click', repeatNode);
		}
	};
}