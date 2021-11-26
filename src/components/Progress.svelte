<script context="module" lang="ts">
    export type ProgressColor = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let color:ProgressColor = 'primary' as ProgressColor;
    export let value:number = 50;
    export let max:number = 100;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `progress progress-${color}`
    );
</script>

<progress
    {...$$restProps}
    class={classes}
    {value}
    {max}
/>
