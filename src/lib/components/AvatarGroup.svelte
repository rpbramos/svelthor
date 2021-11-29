<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        '-space-x-6 avatar-group'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <slot />
</div>
