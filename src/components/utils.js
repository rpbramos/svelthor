export function classnames(...args) {
    return Array.from(args).filter(x => x !== null).join(' ');
}