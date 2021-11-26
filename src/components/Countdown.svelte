<script lang="ts">
    import { classnames } from './utils';

    export let start:number = 60;
    export let reset:boolean = true;

    start -= 1;
    let initialStart = start;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'countdown font-mono'
    );

    $: setTimeout(() => {
        if (start > 0) {
            start -= 1
        }

        if (start === 1 && reset) {
            start = initialStart
        }
    }, 1000);
</script>

<span
    {...$$restProps}
    class={classes}
>
    <span style={`--value:${start};`}></span>
</span>
