<script context="module" lang="ts">
    export type MaskShape = 'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let shape:MaskShape = 'squircle' as MaskShape;

    let className = '';
    export { className as class }
    $: classes = classnames(
        className,
        `mask mask-${shape}`
    );
</script>


<!-- svelte-ignore a11y-missing-attribute -->
<img
    {...$$restProps}
    class={classes}
/>
