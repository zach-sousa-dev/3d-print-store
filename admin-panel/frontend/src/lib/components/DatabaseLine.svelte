<script>
    export let dataJSON;
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=delete" />

<div class="bg-slate-200 border-t-slate-400 border-t-2 flex justify-around p-3">
    {#each Object.entries(dataJSON) as [key, value]}
        <div>
            <p class="my-1">{key}: <span class="bg-white text-black">{value}</span></p>
        </div>
    {/each}
    <button type="button">
        <span class="material-symbols-outlined text-slate-400 align-middle transition-colors duration-200 hover:text-red-600 hover:cursor-pointer" title="Delete">
            delete
        </span>
    </button>
</div>