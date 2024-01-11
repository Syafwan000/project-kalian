<script setup>
import Preview from '@/components/Preview.vue';
import List from '@/components/List.vue';
import { useProject } from '@/stores/project';

const project = useProject();
</script>

<template>
    <div class="flex xl:space-x-8">
        <div class="flex flex-grow flex-col">
            <div
                class="flex flex-col items-start justify-between space-y-3 pb-4 sm:flex-row sm:items-center sm:space-y-0">
                <template v-if="project.selectedDate == null">
                    <p><span class="font-bold">Sort:</span> {{ project.sort }}</p>
                    <div class="flex flex-row-reverse sm:flex-row">
                        <div class="space-x-3">
                            <button
                                @click="project.getProjectReversed('Latest')"
                                :disabled="project.sort == 'Latest'"
                                :class="
                                    project.sort == 'Latest'
                                        ? `bg-black text-white`
                                        : `bg-zinc-200 text-black hover:bg-zinc-300/80`
                                "
                                class="rounded-lg px-6 py-2 text-sm font-medium shadow-sm shadow-black/20 outline-none">
                                Latest
                            </button>
                            <button
                                @click="project.getProjectReversed('Oldest')"
                                :disabled="project.sort == 'Oldest'"
                                :class="
                                    project.sort == 'Oldest'
                                        ? `bg-black text-white`
                                        : `bg-zinc-200 text-black hover:bg-zinc-300/80`
                                "
                                class="rounded-lg px-6 py-2 text-sm font-medium shadow-sm shadow-black/20 outline-none">
                                Oldest
                            </button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <button @click="project.setSelectedDate(null)" class="flex justify-center items-center text-sm bg-black text-white rounded-full pl-2 pr-4 py-1.5 shadow-sm shadow-black/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6 p-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                </template>
            </div>
            <div
                class="sticky top-28 z-40 mb-6 flex w-full justify-between rounded-2xl bg-zinc-200 px-6 py-6 font-bold shadow-sm shadow-black/20">
                <template v-if="project.selectedDate == null">
                    <h3>Season</h3>
                    <h3>Date</h3>
                    <h3>Projects</h3>
                    <h3></h3>
                </template>
                <template v-else>
                    <h3>Username</h3>
                    <h3>Link</h3>
                    <h3></h3>
                </template>
            </div>
            <div v-if="project.projects" class="flex flex-col space-y-4">
                <List v-if="project.selectedDate == null" v-for="(proj, index) in project.projects" @click="project.setSelectedDate(proj)" :data="proj" :number="index + 1"></List>
                <List v-else v-for="(proj, index) in project.selectedDate" @click="project.setSelectedProject(proj)" :projects="proj" :number="index + 1"></List>
            </div>
            <div v-else class="flex h-[500px] items-center justify-center">
                <h1 class="text-2xl font-bold text-zinc-400">Data Not Found</h1>
            </div>
        </div>
        <Preview></Preview>
    </div>
</template>
