<script>
    import { slide } from "svelte/transition";

    //icons
    import DropdownIcon from "~icons/material-symbols/arrow-drop-down";
    import DropupIcon from "~icons/material-symbols/arrow-drop-up";
    //----

    export let header;
    export let content;

    let isOpen = false;
    function toggleDropDown() {
        isOpen = !isOpen;
    }
</script>

<button class="
            text-2xl 
            border-2 
            border-blue-400 
            bg-blue-100 
            p-2
            transition-all 
            duration-200 
            hover:bg-blue-200
            hover:cursor-pointer
            rounded-t-2xl
            w-full
            text-left
" onclick={toggleDropDown} type="button">
    { header }
    {#if isOpen}
        <DropupIcon class = "inline"/>
    {:else}
        <DropdownIcon class = "inline"/>
    {/if}
</button>

{ #if isOpen}
    <div transition:slide class="border-blue-400 border-l-2 border-r-2 border-b-2 rounded-b-2xl p-2">
        { @html content }
    </div>
{ /if }

<div class="my-3"></div>
