<script lang="ts">
    import { classnames } from './utils';

    export let border:boolean = false;
    export let circle:boolean = false;
    export let image:string = '';
    export let size:number = 10;
    export let offline:boolean = false;
    export let online:boolean = false;
    export let placeholder:string = null;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'avatar',
        online && 'online',
        offline && 'offline',
        placeholder && 'placeholder'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    {#if placeholder}
        <div class={`bg-neutral-focus text-neutral-content ${circle ? 'rounded-full' : 'rounded-btn' } w-${size} h-${size}`}>
            <span class="text-1xl">{placeholder}</span>
        </div>
    {:else}
        <div class={`${circle ? 'rounded-full' : 'rounded-btn' } w-${size} h-${size} ${border && 'ring ring-primary ring-offset-base-100 ring-offset-2'}`}>
            <img src={image} alt="Avatar">
        </div>
    {/if}
</div>
