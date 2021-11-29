<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'modal'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
    <div class="modal-box">

        <slot />

        <div class="modal-action">
            <slot name="actions" />
          </div>
    </div>
</div>
