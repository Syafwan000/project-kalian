import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

export const useMisc = defineStore('misc', () => {
    const hidden = ref(true);
    const screens = ref(null);
    const dropped = ref(false);
    const isLoaded = ref(false);

    onMounted(() => {
        screens.value = screen.width;
        screen.width <= 1280 ? (hidden.value = false) : (hidden.value = true);

        window.addEventListener('resize', () => {
            screens.value = screen.width;
            screen.width <= 1280 ? (hidden.value = false) : (hidden.value = true);
        });
    });

    const setDrop = () => dropped.value = !dropped.value;
    const setHidden = () => hidden.value = !hidden.value;
    const setImageLoaded = (load) => isLoaded.value = load;

    return { dropped, hidden, screens, isLoaded, setDrop, setHidden, setImageLoaded };
});
