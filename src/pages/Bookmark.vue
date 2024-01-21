<script setup>
import Preview from '@/components/Preview.vue';
import List from '@/components/List.vue';
import { onMounted, ref, watch } from 'vue';
import { useMisc } from '@/stores/misc';
import { useProject } from '@/stores/project';

const project = useProject();
const misc = useMisc();
const saved = ref();

onMounted(() => {
    saved.value = project.getSavedProject();
});

watch(saved, () => {
    setTimeout(() => {
        saved.value = project.getSavedProject();
    }, 10);
});

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
            <!-- Header Table -->
            <div
                class="sticky top-28 z-40 mb-6 flex w-full justify-between rounded-2xl bg-zinc-200 px-6 py-6 font-bold shadow-sm shadow-black/20">
                <h3>Season</h3>
                <h3>Username</h3>
                <h3></h3>
            </div>

            <template v-if="saved != null">                
                <!-- Body Table -->
                <div v-if="saved != 0" class="flex flex-col space-y-4">
                    <List
                        v-for="(proj, index) in saved"
                        @click="selectedProject(proj)"
                        :projects="proj"
                        :number="index + 1" />
                </div>
                <!-- Body Table Placeholder -->
                <div v-else class="flex h-[500px] items-center justify-center">
                    <h1 class="text-2xl font-bold text-zinc-400">Data Not Found</h1>
                </div>
            </template>
            <template v-else>
                <div class="flex h-[500px] items-center justify-center">
                    <h1 class="text-2xl font-bold text-zinc-400">Data Not Found</h1>
                </div>
            </template>
        </div>

        <!-- Preview Component -->
        <Preview />
    </div>
</template>
