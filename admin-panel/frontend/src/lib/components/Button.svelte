<script>
    export let text;
    export let id;
    export let link = "#";
    export let clickFunction = () => {};
</script>


<button id={id} type="button" onclick={clickFunction} class="
    bg-blue-700 
    border-blue-300 
    border-1 
    p-2.5 
    rounded-2xl 
    text-white
    transition-all 
    duration-200 
    hover:bg-blue-900
    hover:scale-110
    hover:cursor-pointer
    text-nowrap
"><a href={link} class="w-full h-full">{text}</a></button>
