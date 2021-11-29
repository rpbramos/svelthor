<script context="module" lang="ts">
    export type LinkColor = 'primary' | 'secondary' | 'accent' | 'neutral';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let color:LinkColor = 'primary' as LinkColor;
    export let hover:boolean = false;
    export let href:string = '';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `link link-${color}`,
        hover && 'link-hover'
    );
</script>

<a
    {...$$restProps}
    class={classes}
    href={href}
>
    <slot />
</a>
