<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'stack'
    );
</script>

<div
    {...$$restProps}
    class={classes}
    on:click
    on:blur
    on:focus
    on:mouseover
    on:mouseout
>
    <slot />
</div>
