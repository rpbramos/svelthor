<script context="module" lang="ts">
    export type MyType = '';
</script>

<script lang="ts">
    import { classnames } from '$lib/components/utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'aaa'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <slot />
</div>
