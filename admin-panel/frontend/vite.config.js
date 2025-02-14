import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite' // [!code ++] // [!code focus]

export default defineConfig({
	plugins: [sveltekit(), 
		tailwindcss(), 
		Icons({
			compiler: 'svelte', 
		}),
	]
});
