<script setup>
import { useProject } from '@/stores/project';
import { useMisc } from '@/stores/misc';

const project = useProject();
const misc = useMisc();

const imageLoaded = () => misc.setImageLoaded(true);
const savedProject = () => {
    let savedProject = project.getSavedProject();

    if (savedProject != null) {
        if (savedProject.find((item) => item.image == project.selectedProject.image)) {
            misc.setProjectSaved(true);
        } else {
            misc.setProjectSaved(false);
        }
    }

    project.setSavedProject();
};
const closePreview = () => {
    misc.setImageLoaded(false);
    project.setSelectedProject(null);
};
</script>

<template>
    <template v-if="project.selectedProject != null">
        <!-- Desktop -->
        <div
            class="sticky top-28 hidden h-[500px] w-2/6 flex-col rounded-2xl bg-zinc-200 shadow-md shadow-zinc-400/20 xl:flex">
            <!-- Desktop Image Loaded -->
            <div
                v-show="misc.isLoaded"
                class="relative flex h-[260px] w-full justify-center rounded-t-2xl">
                <img
                    @load="imageLoaded"
                    class="rounded-t-2xl"
                    :src="`https://api.project-kalian.rmecha.my.id/img/${project.selectedProject.image}`"
                    alt="Project Preview" />
                <button
                    @click="savedProject"
                    class="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs shadow-lg shadow-black/20 outline-none">
                    <svg
                        v-if="misc.isSaved"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        class="h-4 w-4">
                        <path
                            fill-rule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                            clip-rule="evenodd" />
                    </svg>
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="h-4 w-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </button>
            </div>

            <!-- Desktop Image Placeholder -->
            <div
                v-if="misc.isLoaded != true"
                class="relative mx-auto flex h-[600px] w-full animate-pulse justify-center rounded-t-2xl bg-zinc-400/50">
                <div
                    class="absolute bottom-5 right-5 flex h-8 w-8 animate-none rounded-full bg-black/50"></div>
            </div>

            <!-- Desktop Body -->
            <div class="relative overflow-y-scroll">
                <div class="desktop-gradient-up sticky -top-1 left-0 h-[30px] w-full"></div>
                <div class="space-y-3">
                    <div class="px-5">
                        <h4 class="font-bold">Author</h4>
                        <p>{{ project.selectedProject.username }}</p>
                    </div>
                    <div class="px-5">
                        <h4 class="font-bold">Project Link</h4>
                        <a
                            class="text-blue-500 hover:text-blue-600"
                            target="_link"
                            :href="project.selectedProject.link"
                            >{{ project.selectedProject.link }}</a
                        >
                    </div>
                    <div class="px-5">
                        <h4 class="font-bold">Message</h4>
                        <div v-html="project.selectedProject.message" class="prose"></div>
                    </div>
                </div>
                <div
                    class="desktop-gradient-down sticky bottom-0 left-0 h-[30px] w-full rounded-2xl"></div>
            </div>
        </div>

        <!-- Mobile -->
        <div
            class="fixed left-0 top-0 z-50 h-screen w-full bg-zinc-400/20 backdrop-blur xl:hidden"></div>
        <div
            class="fixed bottom-0 left-1/2 z-50 flex h-[500px] w-full -translate-x-1/2 flex-col rounded-t-2xl bg-zinc-300 sm:w-[550px] xl:hidden">
            <!-- Mobile Image Loaded -->
            <div
                v-show="misc.isLoaded"
                class="relative mx-auto flex h-[260px] w-full justify-center">
                <img
                    @load="imageLoaded"
                    class="mt-0 rounded-t-2xl sm:rounded-2xl"
                    :src="`https://api.project-kalian.rmecha.my.id/img/${project.selectedProject.image}`"
                    alt="Project Preview" />
                <button
                    @click="closePreview"
                    class="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="h-4 w-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <button
                    @click="savedProject"
                    class="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs shadow-lg shadow-black/20 outline-none">
                    <svg
                        v-if="misc.isSaved"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        class="h-4 w-4">
                        <path
                            fill-rule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                            clip-rule="evenodd" />
                    </svg>
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="h-4 w-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Image Placeholder -->
            <div
                v-if="misc.isLoaded != true"
                class="relative mx-auto flex h-[600px] w-full animate-pulse justify-center rounded-t-2xl bg-zinc-400/50">
                <button
                    @click="closePreview"
                    class="absolute right-5 top-5 flex h-8 w-8 animate-none items-center justify-center rounded-full bg-red-500 text-xs outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="h-4 w-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div
                    class="absolute bottom-5 right-5 flex h-8 w-8 animate-none rounded-full bg-black/50"></div>
            </div>

            <!-- Mobile Body -->
            <div class="relative mx-auto w-full overflow-y-scroll">
                <div class="mobile-gradient-up sticky -top-1 left-0 h-[30px] w-full"></div>
                <div class="space-y-3">
                    <div class="px-5">
                        <h4 class="font-bold">Author</h4>
                        <p>{{ project.selectedProject.username }}</p>
                    </div>
                    <div class="px-5">
                        <h4 class="font-bold">Project Link</h4>
                        <a
                            class="text-blue-500 hover:text-blue-600"
                            target="_link"
                            :href="project.selectedProject.link"
                            >{{ project.selectedProject.link }}</a
                        >
                    </div>
                    <div class="px-5">
                        <h4 class="font-bold">Message</h4>
                        <div v-html="project.selectedProject.message" class="prose"></div>
                    </div>
                </div>
                <div class="mobile-gradient-down sticky bottom-0 left-0 h-[30px] w-full"></div>
            </div>
        </div>
    </template>
    <div
        v-else
        class="sticky top-28 hidden h-[500px] w-2/6 items-center justify-center rounded-2xl bg-zinc-200 shadow-md shadow-zinc-400/20 xl:flex">
        <h1 class="text-2xl font-bold text-zinc-400">Data Not Found</h1>
    </div>
</template>

<style scoped>
.desktop-gradient-up {
    background: rgb(228, 228, 231);
    background: linear-gradient(
        180deg,
        rgba(228, 228, 231, 1) 20%,
        rgba(228, 228, 231, 0.7) 40%,
        rgba(228, 228, 231, 0.4) 60%,
        rgba(228, 228, 231, 0) 80%
    );
}

.desktop-gradient-down {
    background: rgb(228, 228, 231);
    background: linear-gradient(
        0deg,
        rgba(228, 228, 231, 1) 20%,
        rgba(228, 228, 231, 0.7) 40%,
        rgba(228, 228, 231, 0.4) 60%,
        rgba(228, 228, 231, 0) 80%
    );
}

.mobile-gradient-up {
    background: rgb(212, 212, 216);
    background: linear-gradient(
        180deg,
        rgba(212, 212, 216, 1) 20%,
        rgba(212, 212, 216, 0.7) 40%,
        rgba(212, 212, 216, 0.4) 60%,
        rgba(212, 212, 216, 0) 80%
    );
}

.mobile-gradient-down {
    background: rgb(212, 212, 216);
    background: linear-gradient(
        0deg,
        rgba(212, 212, 216, 1) 20%,
        rgba(212, 212, 216, 0.7) 40%,
        rgba(212, 212, 216, 0.4) 60%,
        rgba(212, 212, 216, 0) 80%
    );
}
</style>
