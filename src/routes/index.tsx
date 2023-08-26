import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/starter/hero/hero';
export default component$(() => {
  return (
    <>
      <Hero />

      <div class="section bright">

      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Offical corgi store',
  meta: [
    {
      name: 'Welcome to Yadin Corgi Store',
      content: 'Corgi Store',
    },
  ],
};
