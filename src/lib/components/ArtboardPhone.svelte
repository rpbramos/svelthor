<script context="module" lang="ts">
    export type PhoneSize = 1 | 2 | 3 | 4 | 5 | 6;
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let size:PhoneSize = 1 as PhoneSize;
    export let horizontal:boolean = false;
    export let isDemo:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `artboard phone-${size} ${horizontal && 'horizontal'}`,
        isDemo && 'artboard-demo'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <slot />
</div>