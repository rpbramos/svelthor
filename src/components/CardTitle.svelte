<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'card-title'
    );
</script>

<h2
    {...$$restProps}
    class={classes}
>
    <slot />
</h2>