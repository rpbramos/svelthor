import { CountUp } from 'countup.js';

export default (node, config) => {
    const countUp = new CountUp(node, config.endVal, config.options ?? {});
    
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}