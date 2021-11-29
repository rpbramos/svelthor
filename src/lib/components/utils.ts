export function classnames(...args: string[]):string {
    return Array.from(args).filter(x => x !== null).join(' ');
}