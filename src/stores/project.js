import axios from 'axios';
import { defineStore } from 'pinia';
import { onMounted, ref, watch } from 'vue';

export const useProject = defineStore('project', () => {
    const listProject = ref({});
    const season = ref(null);
    const filtered = ref(null);
    const projects = ref(null);
    const selectedDate = ref(null);
    const selectedProject = ref(null);
    const sort = ref('Latest');

    onMounted(() => {
        axios
            .get('/all.json')
            .then((res) => {
                listProject.value = {
                    data: res.data.data, 
                    dataLength: res.data.data.length
                };

                getProjectBySeason();
            })
            .catch((err) => {
                console.log(err);
            });

        season.value = localStorage.getItem('season');
    });

    const getProjectBySeason = () => {
        filtered.value = listProject.value.data.filter(item => item.season === season.value).pop();
        projects.value = filtered.value.dates.reverse();
    }

    const getProjectReversed = (sortBy) => {
        sort.value = sortBy;
        projects.value = filtered.value.dates.reverse();
    }

    const setSeason = (selected) => {
        if(selected == null) {
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
    }

    const setSelectedDate = (data) => {
        if(data == null) {
            selectedDate.value = null;
        } else {
            selectedDate.value = data.projects;
        }
    };

    const setSelectedProject = (data) => {
        if(data == null) {
            selectedProject.value = null;
        } else {
            selectedProject.value = data;
        }
    }
    // const getData = ref([]);
    // const project = ref([]);
    // const seasons = ref([]);
    // const status = ref(null);

    // const getProject = (sort = 'Latest', filter) => {
    //     axios
    //         .get(`/projects-by-${sort.toLowerCase()}.json`)
    //         .then((res) => {
    //             status.value = sort;
    //             getData.value = res.data.data;
    //             filterProject(filter);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    //     return project;
    // };

    // const filterProject = (filter) => {
    //     let totalData = getData.value.length - filter;
    //     project.value = getData.value.slice(getData, -totalData);

    //     return project;
    // };

    // // const getSeasons = () => {
    // //     getData.value.forEach((p, i) => {
    // //         seasons.value[i] = p.season;
    // //     });

    // //     return seasons;
    // // };

    // return { getData, project, seasons, status, getProject, filterProject };

    return { 
        listProject, 
        selectedDate, 
        selectedProject, 
        projects, 
        season, 
        sort,
        getProjectReversed,
        setSeason,
        setSelectedDate,
        setSelectedProject
    };
});
