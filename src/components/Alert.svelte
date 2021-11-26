<script context="module" lang="ts">
  export type AlertType = 'default' | 'info' | 'success' | 'warning' | 'error';
</script>

<script lang="ts">
  import Button from './Button.svelte'
  import Icon from "./Icon.svelte";
  import { classnames } from './utils'

  export let type:AlertType = 'default' as AlertType;
  export let icon:string = '';
  export let iconColor:string = type;

  export let cancelButtonLabel:string = 'Cancel';
  export let cancelAction:any = null;

  export let confirmButtonLabel:string = 'OK';
  export let confirmAction:any = null;

  let className = '';
  export { className as class };
  $: classes = classnames(
      className,
      `alert alert-${type}`
  );
</script>

<div
  {...$$restProps}
  class={classes}
>
  
  <div class="flex-1">
    {#if icon}
      <Icon name={icon} color={iconColor} class="w-6 h-6" />
    {/if}
    <div class="mx-2">
      <h4>
        <slot />
      </h4>

      {#if $$slots.text}
        <p class="text-sm text-base-content text-opacity-60"><slot name="text" /></p>
      {/if}

    </div>
  </div>

  {#if cancelAction || confirmAction}
  <div class="flex-none space-x-2">
    {#if cancelAction}
      <Button size="sm" color="ghost" on:click={cancelAction}>{cancelButtonLabel}</Button> 
    {/if}
    {#if confirmAction}
      <Button size="sm" color="primary" on:click={confirmAction}>{confirmButtonLabel}</Button>
    {/if}
  </div>
  {/if}

</div>