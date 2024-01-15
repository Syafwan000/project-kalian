<script setup>
import { useMisc } from '@/stores/misc';

const misc = useMisc();
</script>

<template>
    <div class="z-40 flex space-x-4 border-b border-zinc-300 bg-white px-4 py-4 xl:px-8">
        <!-- Navbar Toggler -->
        <button
            @click="misc.setHidden()"
            class="rounded-2xl bg-zinc-200 p-4 shadow-sm shadow-black/20 outline-none hover:bg-zinc-400/30">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="h-5 w-5">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <!-- Search Bar -->
        <div class="relative w-full">
            <input
                class="w-full rounded-2xl bg-zinc-100 py-3.5 pl-14 pr-8 shadow-md shadow-zinc-400/30 outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300"
                type="text"
                placeholder="What project are you looking for" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>

        <!-- Search Button -->
        <button class="rounded-2xl bg-black px-4 shadow-lg shadow-black/20 outline-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="h-5 w-5">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
    </div>
</template>
