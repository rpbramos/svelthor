<script context="module" lang="ts">
    export type TooltipColor = 'dark' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let text:string = '';
    export let open:boolean = false;
    export let color:TooltipColor = 'dark' as TooltipColor;
    export let position:TooltipPosition = 'default' as TooltipPosition;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `tooltip tooltip-${position} tooltip-${color}`,
        open && 'tooltip-open'
    );
</script>

<div
    {...$$restProps}
    class={classes}
    data-tip={text}
>
    <slot />
</div>
