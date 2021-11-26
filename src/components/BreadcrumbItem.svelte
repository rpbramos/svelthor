<script lang="ts">
    import Icon from './Icon.svelte';
    import Link from './Link.svelte';
    import { classnames } from './utils';

    export let label:string = '';
    export let url:string = '';
    export let icon:string = '';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'text-sm breadcrumbs'
    );
</script>

<li
    {...$$restProps}
    class={classes}
>
    <Link href={url} color="neutral" hover>
        {#if icon}
            <Icon name={icon} size={16} class="w-4 h-4 mr-2" />
        {/if}
        {label}
    </Link>
</li>