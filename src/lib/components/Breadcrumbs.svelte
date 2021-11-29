<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'text-sm breadcrumbs'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <ul>
        <slot />
    </ul>
</div>