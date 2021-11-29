<script context="module" lang="ts">
    export type IconType = 'none' | 'arrow' | 'plus';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let icon:IconType = 'none' as IconType;
    export let open:boolean = false;
    export let close:boolean = false;
    export let border:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'collapse',
        icon !== 'none' && `collapse-${icon}`,
        open && 'collapse-open',
        close && 'collapse-close',
        border && 'border rounded-box border-base-300',
    );
</script>

<div
    {...$$restProps}
    class={classes}
    tabindex="0"
>
    {#if $$slots.title}
    <div class="collapse-title text-xl font-medium">
        <slot name="title" />
    </div>
    {/if}
    {#if $$slots.content}
    <div class="collapse-content"> 
        <slot name="content" />
    </div>
    {/if}
</div>
