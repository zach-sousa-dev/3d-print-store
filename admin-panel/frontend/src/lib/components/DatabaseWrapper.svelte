<script>
    import Button from "$lib/components/Button.svelte";
    import DatabaseLine from "$lib/components/DatabaseLine.svelte";

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

<p>You are currently viewing the <span class="font-bold uppercase text-blue-700">{currentTable}</span> table.</p>
<br>

<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>