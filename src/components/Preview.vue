<script setup>
import { useRoute } from 'vue-router';
import { useProject } from '@/stores/project';

const route = useRoute();
const project = useProject();
</script>

<template>
    <template v-if="project.selectedProject != null">
        <!-- Desktop -->
        <div
            class="sticky top-28 hidden h-[500px] w-2/6 flex-col rounded-2xl bg-zinc-200 shadow-md shadow-zinc-400/20 xl:flex">
            <div class="flex h-[260px] w-full justify-center rounded-t-2xl">
                <img
                    class="rounded-t-2xl"
                    :src="`https://api.project-kalian.rmecha.my.id/img/${project.selectedProject.image}`"
                    alt="Project Preview" />
            </div>
            <div class="space-y-3 overflow-y-scroll p-5">
                <div>
                    <h4 class="font-bold">Author</h4>
                    <p>{{ project.selectedProject.username }}</p>
                </div>
                <div>
                    <h4 class="font-bold">Sent Date</h4>
                    <p>{{ project.selectedProject.image }}</p>
                </div>
                <div>
                    <h4 class="font-bold">Project Link</h4>
                    <a
                        class="text-blue-400 hover:text-blue-500"
                        target="_link"
                        :href="project.selectedProject.link"
                        >{{ project.selectedProject.link }}</a
                    >
                </div>
                <div>
                    <h4 class="font-bold">Message</h4>
                    <div v-html="project.selectedProject.message" class="prose"></div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div
            class="fixed bottom-0 left-1/2 z-50 flex h-[500px] w-full -translate-x-1/2 flex-col rounded-t-2xl bg-zinc-200 sm:w-[550px] xl:hidden">
            <div class="relative mx-auto flex h-[260px] w-full justify-center">
                <img
                    class="mt-0 rounded-t-2xl sm:rounded-2xl"
                    :src="`https://api.project-kalian.rmecha.my.id/img/${project.selectedProject.image}`"
                    alt="Project Preview" />
                <button
                    @click="project.setSelectedProject(null)"
                    class="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="mx-auto w-full space-y-3 overflow-y-scroll p-5">
                <div>
                    <h4 class="font-bold">Author</h4>
                    <p>{{ project.selectedProject.username }}</p>
                </div>
                <div>
                    <h4 class="font-bold">Sent Date</h4>
                    <p>{{ project.selectedProject.showcaseDate }}</p>
                </div>
                <div>
                    <h4 class="font-bold">Project Link</h4>
                    <a
                        class="text-blue-400 hover:text-blue-500"
                        target="_link"
                        :href="project.selectedProject.link"
                        >{{ project.selectedProject.link }}</a
                    >
                </div>
                <div>
                    <h4 class="font-bold">Pesan</h4>
                    <div v-html="project.selectedProject.message" class="prose"></div>
                </div>
            </div>
        </div>
    </template>
    <div
        v-else
        v-if="route.name == 'Home'"
        class="sticky top-28 hidden h-[500px] w-2/6 items-center justify-center rounded-2xl bg-zinc-200 shadow-md shadow-zinc-400/20 xl:flex">
        <h1 class="text-2xl font-bold text-zinc-400">Data Not Found</h1>
    </div>
</template>
