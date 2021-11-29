<script context="module" lang="ts">
    export type CheckboxColor = 'primary' | 'secondary' | 'accent';
    export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let color:CheckboxColor = 'primary' as CheckboxColor;
    export let size:CheckboxSize = 'md' as CheckboxSize;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `checkbox checkbox-${color} checkbox-${size}`
    );
</script>

{#if $$slots.label}

<div class="form-control">
    <label class="cursor-pointer label">
        <span class="label-text">
            <slot name="label" />
        </span> 
        <input
            {...$$restProps}
            class={classes}
            type="checkbox"
        />
    </label>
</div>

{:else}

<input
    {...$$restProps}
    class={classes}
    type="checkbox"
/>

{/if}