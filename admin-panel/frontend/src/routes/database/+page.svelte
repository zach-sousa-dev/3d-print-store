<script>
    import Button from "$lib/components/Button.svelte";
    import DatabaseLine from "$lib/components/DatabaseLine.svelte";
    import Dropdown from "$lib/components/Dropdown.svelte";

    // icons
    import DeleteIcon from "~icons/material-symbols/delete-outline";
    // -----
    

    let currentTable = "products";
    function changeTable(/**@type {string}*/ tableName) {
        currentTable = tableName;
    };

    let testJSON = { 
        product_id: "11", 
        product_cost: "$3.28", 
        product_price: "$14.99", 
        product_name: "Battery Mount (Black PETG)",
        archived: "false", 
        series_id: "4", 
        product_qty: "6", 
        image_id: "105",
    };
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

<p>You are currently viewing the <span class="font-bold uppercase text-blue-700">{currentTable}</span> table.</p>
<br>

<!--Database navigation-->
<div class="flex flex-wrap justify-start gap-5 bg-slate-200 p-2">
    <p class="my-auto">Navigation:</p>
    <Button text="Series Table" id="button-series" clickFunction={ ()=>{ changeTable("series") } }/>
    <Button text="Products Table" id="button-products" clickFunction={ ()=>{ changeTable("products") } }/>
    <Button text="Images Table" id="button-images" clickFunction={ ()=>{ changeTable("images") } }/>
    <Button text="Emails Table" id="button-emails" clickFunction={ ()=>{ changeTable("emails") } }/>
    <Button text="Orders Table" id="button-orders" clickFunction={ ()=>{ changeTable("orders") } }/>
</div>
<!--/-->

<!--Interaction buttons-->
<div class="flex flex-wrap justify-start gap-5 border-t-2 border-slate-400 bg-slate-200 p-2 mb-5">
    <p class="my-auto">Actions:</p>
    <Button text="Add new {currentTable} entry" id="button-orders"/>
</div>
<!--/-->
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>


