import axios from 'axios';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';
import { useMisc } from './misc';

export const useProject = defineStore('project', () => {
    const misc = useMisc();
    const listProject = ref({});
    const season = ref(null);
    const filtered = ref(null);
    const projects = ref(null);
    const selectedDate = ref(null);
    const selectedProject = ref(null);
    const savedProject = ref(null);
    const date = ref(null);
    const sort = ref('Latest');

    onMounted(() => {
        axios
            .get('/all.json')
            .then((res) => {
                listProject.value = {
                    data: res.data.data,
                    dataLength: res.data.data.length,
                };

                getProjectBySeason();
            })
            .catch((err) => {
                console.log(err);
            });

        season.value = localStorage.getItem('season');
    });

    const getProjectBySeason = () => {
        filtered.value = listProject.value.data
            .filter((item) => item.season === season.value)
            .pop();
        if (filtered.value != null) {
            projects.value = filtered.value.dates.reverse();
        }
    };

    const getProjectReversed = (sortBy) => {
        sort.value = sortBy;
        projects.value = filtered.value.dates.reverse();
    };

    const getSavedProject = () => {
        savedProject.value = JSON.parse(localStorage.getItem('bookmark'));

        return savedProject.value;
    };

    const setSeason = (selected) => {
        if (selected == null) {
            localStorage.removeItem('season');
            season.value = null;
            filtered.value = null;
            projects.value = null;
            selectedDate.value = null;
            selectedProject.value = null;
            sort.value = 'Latest';
        } else {
            localStorage.setItem('season', selected);
            season.value = selected;

            getProjectBySeason();
        }
    };

    const setSelectedDate = (data) => {
        if (data == null) {
            selectedDate.value = null;
        } else {
            date.value = data.date;
            selectedDate.value = data.projects;
        }
    };

    const setSelectedProject = (data) => {
        if (data == null) {
            selectedProject.value = null;
        } else {
            selectedProject.value = data;
        }
    };

    const setSavedProject = () => {
        let projectToSave = [];
        let removeProject;

        projectToSave = JSON.parse(localStorage.getItem('bookmark')) || [];
        removeProject = projectToSave.findIndex(
            (item) => item.image === selectedProject.value.image,
        );

        if (projectToSave.find((item) => item.image == selectedProject.value.image)) {
            misc.setProjectSaved(false);

            let afterRemove = projectToSave
                .slice(0, removeProject)
                .concat(projectToSave.slice(removeProject + 1));
            localStorage.setItem('bookmark', JSON.stringify(afterRemove));
        } else {
            misc.setProjectSaved(true);

            projectToSave.push(selectedProject.value);
            localStorage.setItem('bookmark', JSON.stringify(projectToSave));
        }
    };

    return {
        listProject,
        selectedDate,
        selectedProject,
        projects,
        savedProject,
        date,
        season,
        sort,
        getProjectReversed,
        getSavedProject,
        setSeason,
        setSelectedDate,
        setSelectedProject,
        setSavedProject,
    };
});
