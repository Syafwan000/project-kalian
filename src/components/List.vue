<script setup>
import { ref, onMounted } from 'vue';
import { useProject } from '@/stores/project';

const { data, projects, number } = defineProps(['data', 'number', 'projects']);
const project = useProject();
const numbering = ref(null);

onMounted(() => {
    number < 10 ? (numbering.value = '0' + number) : (numbering.value = number);
});
</script>

<template>
    <button
        class="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-zinc-100 px-6 py-4 text-sm text-black shadow-sm shadow-black/20 outline-none transition hover:bg-zinc-200/80 sm:text-base">
        <span class="absolute text-[115px] font-black text-[#e9e9ec] group-hover:text-zinc-100">{{
            numbering
        }}</span>
        <template v-if="project.selectedDate == null">
            <p class="z-10 font-medium">{{ project.season }}</p>
            <p class="z-10 font-medium">{{ data.date }}</p>
            <p class="z-10 font-medium">{{ data.projects.length }} Showcased</p>
        </template>
        <template v-else>
            <p class="z-10 font-medium">{{ projects.username }}</p>
        </template>
        <div class="rounded-full bg-black p-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="h-6 w-6 rotate-180 p-1">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
    </button>
</template>
