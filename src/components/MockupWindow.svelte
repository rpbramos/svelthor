<script lang="ts">
    import { classnames } from './utils';

    export let border:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'mockup-window',
        border ? 'border border-base-300' : 'bg-base-300'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <div class={`flex justify-center px-4 py-16 ${border ? 'border-t border-base-300' : 'bg-base-200'}`}>
        <slot />
    </div>
</div>
  