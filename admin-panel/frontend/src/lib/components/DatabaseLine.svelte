<script>
    export let dataJSON;

    //icons
    import DeleteIcon from "~icons/material-symbols/delete-outline";
    //----

    // let loadedJSON;

    // new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("resolution");
    //     }, 1000);
    // }).then(() => {
    //     loadedJSON = dataJSON;
    // });
</script>

<div class="mb-5 flex flex-col bg-slate-200 rounded-2xl">
    <div class="border-b-slate-400 border-b-2 flex justify-start flex-row flex-wrap px-1.5 p-3 gap-2">
        {#each Object.entries(dataJSON) as [key, value]}
            <div>
                <p class="rounded-2xl py-3 mx-2 px-3 font-bold bg-slate-300">{key}: <span class="bg-white font-normal text-black">{value}</span></p>
            </div>
        {/each}
        
    </div>
    <button type="button" class="m-auto">
        <DeleteIcon class=
            "
                text-2xl
                material-symbols-outlined 
                text-slate-400 
                align-middle 
                transition-colors 
                duration-200 
                hover:text-red-600 
                hover:cursor-pointer
                select-none
            "
        />
    </button>
</div>
