<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Season from '@/components/Season.vue';
import { useProject } from '@/stores/project';
import { useSidebar } from './stores/sidebar';

const project = useProject();
const sidebar = useSidebar();
</script>

<template>
    <div class="antialiased">
        <Season v-if="project.season == null" />

        <div v-if="project.season != null" class="flex">
            <Sidebar v-if="sidebar.hidden" />
            <div class="flex flex-grow flex-col">
                <Navbar :class="`sticky top-0`" />
                <div class="px-4 py-8 xl:px-8">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
