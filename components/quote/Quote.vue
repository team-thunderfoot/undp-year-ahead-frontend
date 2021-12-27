<template>
  <div class="b--quote-a" :class="customClass">
    <div class="b--quote-a__content b--content-a">
      <div v-html="chapter.quote_content" />
      <!-- <SanityContent :blocks="chapter.quote" :serializers="serializers"/> -->
    </div>
    <div class="b--quote-a__meta">
      <a
        :href="chapter.quote_author_link"
        target="_blank"
        rel="noopener noreferrer"
        class="b--quote-a__meta__title"
        >{{ chapter.quote_author }}</a
      >
      <h4 class="b--quote-a__meta__subtitle">
        {{ chapter.quote_author_description }}
      </h4>
    </div>
  </div>
</template>
<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content';
import SanityLinks from '~/mixins/sanityLinks';

export default {
  mixins: [SanityLinks],
  components: {
    SanityContent,
  },
  props: ['chapter', 'customClass'],
  created(){
      this.serializers = this.getSerialize();
  }
}
</script>