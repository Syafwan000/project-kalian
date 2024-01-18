<script setup>
import Preview from '@/components/Preview.vue';
import List from '@/components/List.vue';
import { useMisc } from '@/stores/misc';
import { useProject } from '@/stores/project';

const project = useProject();
const misc = useMisc();
const backHandler = () => {
    project.setSelectedDate(null);
    project.setSelectedProject(null);
};

const selectedProject = (proj) => {
    let savedProject = project.getSavedProject();

    if (savedProject != null) {
        if (savedProject.find((item) => item.image == proj.image)) {
            misc.setProjectSaved(true);
        } else {
            misc.setProjectSaved(false);
        }
    }

    if (proj == project.selectedProject) {
        project.setSelectedProject(proj);
    } else {
        misc.setImageLoaded(false);
        project.setSelectedProject(proj);
    }
};
</script>

<template>
    <div class="flex xl:space-x-8">
        <div class="flex flex-grow flex-col">
            <!-- Information Section -->
            <div class="mb-2 flex items-center justify-between pb-4">
                <!-- Information Section Group Project -->
                <template v-if="project.selectedDate == null">
                    <h3 class="font-bold">{{ project.season }}</h3>
                    <div class="flex flex-row-reverse sm:flex-row">
                        <div class="space-x-3">
                            <button
                                @click="project.getProjectReversed('Latest')"
                                :disabled="project.sort == 'Latest'"
                                :class="
                                    project.sort == 'Latest'
                                        ? `bg-black text-white shadow-lg shadow-black/20`
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
                                        ? `bg-black text-white shadow-lg shadow-black/20`
                                        : `bg-zinc-200 text-black hover:bg-zinc-300/80`
                                "
                                class="rounded-lg px-6 py-2 text-sm font-medium shadow-sm shadow-black/20 outline-none">
                                Oldest
                            </button>
                        </div>
                    </div>
                </template>

                <!-- Information Section Project Detail -->
                <template v-else>
                    <h3 class="font-bold">
                        {{ project.season }}
                        <span class="text-sm font-normal">{{ project.date }}</span>
                    </h3>
                    <button
                        @click="backHandler"
                        class="flex items-center justify-center rounded-full bg-black py-1.5 pl-2 pr-4 text-sm text-white shadow-lg shadow-black/20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="white"
                            class="h-6 w-6 p-1">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Back
                    </button>
                </template>
            </div>

            <!-- Header Table -->
            <div
                class="sticky top-28 z-40 mb-6 flex w-full justify-between rounded-2xl bg-zinc-200 px-6 py-6 font-bold shadow-sm shadow-black/20">
                <!-- Header Table Group Project -->
                <template v-if="project.selectedDate == null">
                    <h3>Season</h3>
                    <h3>Date</h3>
                    <h3>Projects</h3>
                    <h3></h3>
                </template>

                <!-- Header Table Project Detail -->
                <template v-else>
                    <h3>Username</h3>
                    <h3>Date</h3>
                    <h3></h3>
                </template>
            </div>

            <!-- Body Table -->
            <div v-if="project.projects" class="flex flex-col space-y-4">
                <!-- Body Table Group Project -->
                <List
                    v-if="project.selectedDate == null"
                    v-for="(proj, index) in project.projects"
                    @click="project.setSelectedDate(proj)"
                    :data="proj"
                    :number="index + 1" />

                <!-- Body Table Project Detail -->
                <List
                    v-else
                    v-for="(proj, index) in project.selectedDate"
                    @click="selectedProject(proj)"
                    :projects="proj"
                    :number="index + 1" />
            </div>

            <!-- Body Table Placeholder -->
            <div v-else class="flex flex-col space-y-4">
                <div
                    v-for="n in 5"
                    class="animate pulse h-[63px] w-full rounded-2xl bg-zinc-200"></div>
            </div>
        </div>

        <!-- Preview Component -->
        <Preview />
    </div>
</template>
