<script>
    let { text, link } = $props();
</script>

<a class="uppercase text-xl md:text-3xl font-bold text-white py-2 transition-colors duration-300 hover:bg-slate-600" href={link}>{text}</a>