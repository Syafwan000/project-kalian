<script setup>
import LogoWPU from '@/assets/images/wpu.png';
import { useRoute } from 'vue-router';
import { useMisc } from '@/stores/misc';
import { useProject } from '@/stores/project';

const misc = useMisc();
const route = useRoute();
const project = useProject();
</script>

<template>
    <div
        class="fixed top-0 z-50 flex h-screen w-full flex-col justify-between space-y-8 bg-zinc-100 sm:w-[300px] xl:sticky">
        <div>
            <!-- Logo -->
            <div class="flex items-center space-x-5 border-b border-zinc-300 px-8 py-3">
                <img class="h-12 w-12" :src="LogoWPU" alt="WPU" />
                <div class="flex flex-col">
                    <h1 class="text-3xl font-extrabold">ProKa</h1>
                    <p>Project Kalian</p>
                </div>
            </div>

            <!-- List Menu -->
            <div class="mt-8 flex flex-col px-12">
                <router-link
                    @click="misc.screens <= 1280 && misc.setHidden()"
                    :class="
                        route.name == 'Home'
                            ? 'hover:bg-black hover:shadow-lg hover:shadow-black/20'
                            : 'hover:bg-zinc-400/30'
                    "
                    class="mb-4 flex items-center space-x-5 rounded-2xl bg-zinc-200 px-6 py-3 text-lg font-semibold text-black shadow-sm shadow-black/20"
                    to="/">
                    <svg
                        :stroke="route.name == 'Home' ? 'white' : 'black'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <div class="text-base">Home</div>
                </router-link>
                <router-link
                    @click="misc.screens <= 1280 && misc.setHidden()"
                    :class="
                        route.name == 'Bookmark'
                            ? 'hover:bg-black hover:shadow-lg hover:shadow-black/20'
                            : 'hover:bg-zinc-400/30'
                    "
                    class="flex items-center space-x-5 rounded-2xl bg-zinc-200 px-6 py-3 text-lg font-semibold text-black shadow-sm shadow-black/20"
                    to="/bookmark">
                    <svg
                        :stroke="route.name == 'Bookmark' ? 'white' : 'black'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        data-slot="icon"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <div class="text-base">Bookmark</div>
                </router-link>
                <div class="my-5 h-[2px] w-full rounded-full bg-zinc-300"></div>
                <button
                    @click="project.setSeason(null)"
                    class="flex items-center space-x-5 rounded-2xl bg-red-500 px-6 py-3 text-lg font-semibold text-white shadow-sm shadow-red-500/20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <div class="text-sm">Change Season</div>
                </button>
            </div>
        </div>

        <!-- Sidebar Toggler Hidden -->
        <div class="ml-auto pb-6 pr-6">
            <button
                @click="misc.setHidden()"
                class="rounded-2xl bg-zinc-200 p-4 shadow-sm shadow-black/20 outline-none hover:bg-zinc-400/30">
                <svg
                    stroke="black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="h-6 w-6 scale-[.8]">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    </div>
</template>
