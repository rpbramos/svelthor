<script context="module" lang="ts">
    export type KbdSize = 'xs' | 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let key:string = '';
    export let size:KbdSize = 'md' as KbdSize;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `kbd kbd-${size}`
    );
</script>

<kbd
    {...$$restProps}
    class={classes}
    on:click
    on:blur
    on:focus
    on:mouseover
    on:mouseout
>
    {key}
</kbd>
