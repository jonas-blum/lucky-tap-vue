import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowWidth() {
  const screenWidth = ref(window.innerWidth);

  const handleResize = () => {
    screenWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return screenWidth;
}
