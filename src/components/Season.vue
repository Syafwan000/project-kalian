<script setup>
import LogoWPU from '@/assets/images/wpu.png';
import { useProject } from '@/stores/project';
import { useMisc } from '@/stores/misc';

const misc = useMisc();
const project = useProject();

const chooseSeason = (season) => {
    project.setSeason(season);
    misc.screens <= 1280 && misc.setHidden();
};
</script>

<template>
    <div class="relative h-screen w-full bg-zinc-100">
        <div
            class="absolute left-1/2 top-1/2 flex w-[350px] -translate-x-1/2 -translate-y-1/2 flex-col border-zinc-300 px-8 py-3">
            <!-- Logo -->
            <div class="flex justify-center space-x-5">
                <img class="h-16 w-16" :src="LogoWPU" alt="WPU" />
                <div class="flex flex-col">
                    <h1 class="text-4xl font-extrabold">ProKa</h1>
                    <p class="text-xl">Project Kalian</p>
                </div>
            </div>

            <!-- Choose Season -->
            <div
                class="mx-auto mt-8 h-[315px] w-[250px] space-y-3 overflow-y-auto rounded-md bg-zinc-200/30 p-3"
                :class="project.listProject.dataLength > 5 ? 'h-[315px]' : 'h-full'">
                <button
                    v-if="project.listProject.data"
                    v-for="season in project.listProject.data"
                    @click="chooseSeason(season.season)"
                    class="group relative w-full overflow-hidden rounded-md bg-zinc-200 py-3 font-semibold shadow-sm shadow-black/20 outline-none transition-all duration-150 hover:bg-zinc-400/30">
                    <svg
                        class="absolute -left-4 -top-2 h-20 w-20 text-zinc-400/30 group-hover:text-zinc-100/50"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                    </svg>
                    {{ season.season }}
                </button>
                <div v-else class="flex items-center justify-center">
                    <svg
                        class="my-3 h-6 w-6 animate-spin text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            </div>
            <h3 class="mt-12 text-center text-sm">&copy; Web Programming Unpas</h3>
        </div>
    </div>
</template>
