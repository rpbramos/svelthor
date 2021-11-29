<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'flex w-auto space-x-10 flex-nowrap',
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <slot />
</div>
