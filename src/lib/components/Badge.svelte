<script context="module" lang="ts">
    export type BadgeColor = 'primary' | 'secondary' | 'accent' | 'ghost' | 'info' | 'success' | 'warning' | 'error'
    export type BadgeSize = 'lg' | 'md' | 'sm' | 'xs';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let color:BadgeColor = 'ghost' as BadgeColor;
    export let size:BadgeSize = 'sm' as BadgeSize;
    export let outline:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `badge badge-${color} badge-${size}`,
        outline && 'badge-outline'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <slot />
</div>
