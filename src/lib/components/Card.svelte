<script lang="ts">
    import { classnames } from './utils';

    export let bordered:boolean = false;
    export let compact:boolean = false;
    export let imageAside:boolean = false;
    export let imageFull:boolean = false;
    export let image:string = null;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'card',
        bordered && 'bordered',
        compact && 'compact',
        imageAside && 'card-side',
        imageFull && 'image-full'
    );
</script>

<div
    {...$$restProps}
    class={classes}
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
>
    {#if image}
    <figure>
      <img src="{image}" alt="Card feature">
    </figure>
    {/if}
    <slot />
</div>
