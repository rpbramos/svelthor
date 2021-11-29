<script context="module" lang="ts">
    export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error';
    export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
    export type ButtonShape = 'regular' | 'circle' | 'square';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let shape:ButtonShape = 'regular' as ButtonShape;
    export let size:ButtonSize = 'md' as ButtonSize;
    export let color:ButtonColor = 'primary' as ButtonColor;
    export let wide:boolean = false;
    export let block:boolean = false;
    export let link:boolean = false;
    export let outline:boolean = false;
    export let isActive:boolean = false;
    export let isDisabled:boolean = false;
    export let glass:boolean = false;
    export let loading:boolean = false;
    export let noAnimation:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `btn btn-${color} btn-${size} btn-${shape}`,
        wide && 'btn-wide',
        block && 'btn-block',
        link && 'btn-link',
        outline && 'btn-outline',
        isActive && 'btn-active',
        isDisabled && 'btn-disabled',
        glass && 'glass',
        loading && 'loading',
        noAnimation && 'no-animation'
    );
</script>

<button
    {...$$restProps}
    class={classes}
    on:click
>
    <slot />
</button>
