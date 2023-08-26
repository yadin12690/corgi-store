import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex justify-center items-center h-12">
      <span>{serverTime.value.date}</span>
    </footer>
  );
});
