<script context="module" lang="ts">
    export type PhoneSize = 1 | 2 | 3 | 4 | 5 | 6;
</script>

<script lang="ts">
    import ArtboardPhone from './ArtboardPhone.svelte';
    import { classnames } from './utils';

    export let size:PhoneSize = 1 as PhoneSize;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'mockup-phone'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <div class="camera"></div> 
        <div class="display">
            <ArtboardPhone {size} isDemo>
                <slot />
            </ArtboardPhone>
        </div>
</div>
