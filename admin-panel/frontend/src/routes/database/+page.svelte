<script>
    import Button from "$lib/components/Button.svelte";
    import DatabaseLine from "$lib/components/DatabaseLine.svelte";

    let testJSON = { 
        key1: "value1", 
        key2: "value2", 
        key3: "value3", 
        key4: "value4",
        key5: "value5", 
        key6: "value6", 
        key7: "value7", 
        key8: "value8",
        key9: "value9", 
        key10: "value10", 
        key11: "value11", 
        key12: "value12"
    };
</script>

<p class="font-bold text-8xl text-slate-800">Database</p>
<br>
<!--Database navigation-->
<div class="flex flex-wrap justify-around bg-slate-200 p-2">
    <Button text="Series Table" id="button-series"/>
    <Button text="Products Table" id="button-products"/>
    <Button text="Images Table" id="button-images"/>
    <Button text="Emails Table" id="button-series"/>
    <Button text="Orders Table" id="button-series"/>
</div>
<!--/-->
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>
<DatabaseLine dataJSON={testJSON}/>

