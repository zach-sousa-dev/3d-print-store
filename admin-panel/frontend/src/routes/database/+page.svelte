<script>
    import Button from "$lib/components/Button.svelte";
    import DatabaseWrapper from "$lib/components/DatabaseWrapper.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";

    // icons
    import DeleteIcon from "~icons/material-symbols/delete-outline";
    // -----
</script>

<p class="font-bold text-8xl text-slate-800">Database</p>
<p>Click on any of the blue <b>Navigation</b> buttons below to choose which table to view. The data entries for the selected table will be shown in a list underneath the buttons.
    You can click the "Add new xyz entry" button listed under <b>Actions</b> to add a new original item to the selected table. 
    You can click the 
    <DeleteIcon class=
        "
            text-2xl
            inline
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
    button to <b>permanently</b> delete entries, when available.    
</p>
<br>
<Dropdown header="Quick Note" content="
    <p>Currently, the admin panel only supports adding and removing entries from the 
    following tables: <b>series, products, images</b>. This is due to the automated 
    processes surrounding order creation. For example, if you removed an email that is 
    tied to an order, that order would now point to an email which no longer exists. It's
    worth noting that upon pressing the delete button you will be prompted a second time
    to confirm the action. Just keep in mind that this is a permanent action, and some tables
    (such as <b>products</b>) have a field which indicates whether the entry should be archived
    rather than deleted. This would often times be preferable, like for seasonable items which
    should only be listed during certain times of year, for example.</p>
"/>

<DatabaseWrapper/>



