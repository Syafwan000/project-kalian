import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export const useSidebar = defineStore('sidebar', () => {
    const hidden = ref(true);
    const dropped = ref(false);
    const screens = ref(null);

    onMounted(() => {
        screens.value = screen.width;
        screen.width <= 1280 ? (hidden.value = false) : (hidden.value = true);

        window.addEventListener('resize', () => {
            screens.value = screen.width;
            screen.width <= 1280 ? (hidden.value = false) : (hidden.value = true);
        });
    });

    const setDrop = () => {
        dropped.value = !dropped.value;
    };

    const setHidden = () => {
        hidden.value = !hidden.value;
    };

    return { dropped, hidden, screens, setDrop, setHidden };
});
