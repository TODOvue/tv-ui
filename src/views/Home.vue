<script setup>
import { useRouter } from 'vue-router'
import { components } from '../utils/helpers';

import GitHubIcon from '../assets/icons/github-white.svg';
import TODOvueIcon from '../assets/icons/TODOvue.svg';
import CrisDevIcon from '../assets/icons/CrisDev.png';

const logoUi = 'https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png'

const router = useRouter();

const menus = [
  {
    id: 1,
    title: "TODOvue Blog",
    url: "/blog"
  }
]

const configFooter = {
  version: 'v0.1.1',
  brand: {
    logo: logoUi,
    url: '/'
  },
  copyright: '© {year} TODOvue UI. Designed & Developed by cris-dev.com. All rights reserved.',
  legal: [
    {
      label: 'TODOvue Blog',
      url: 'https://todovue.blog',
    },
    {
      label: 'CrisDev',
      url: 'https://cris-dev.com',
    }
  ],
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/TODOvue/tv-ui',
      iconUrl: GitHubIcon
    },
    {
      label: 'TODOvue Blog',
      url: 'https://todovue.blog',
      iconUrl: TODOvueIcon
    },
    {
      label: 'CrisDev',
      url: 'https://cris-dev.com',
      iconUrl: CrisDevIcon
    }
  ],
}

const handleClickMenu = (menu) => {
  if (menu?.url === '/blogs') {
    window.open('https://todovue.blog/', '_self')
  }
};

const navigateTo = (link, isExternal = false) => {
  if (isExternal) {
    window.open(link, '_blank')
    return
  }
  router.push(link)
};

const searchQuery = (query) => {
  if (typeof query === 'string') {
    const { link } = components.find(c => c.title.toLowerCase().includes(query.toLowerCase()));
    if (link) {
      navigateTo(link);
      return;
    }
    return;
  }
  const { link } = query;
  navigateTo(link);
};
</script>

<template>
  <div class="container-home">
    <tv-menu
      :image-menu="logoUi"
      :menus="menus"
      placeholder="Search component..."
      title-button="Search"
      :results="components"
      @click-menu="handleClickMenu"
      @search-menu="searchQuery"
    />
    <main class="container-cards">
      <template
        v-for="{ link, image, title, description, id, source } in components"
        :key="id"
      >
        <tv-card
          :config-card="{
            title,
            description,
            alt: `image-${title}`,
            image,
            primaryButtonText: 'View Demo',
            secondaryButtonText: 'View Source',
          }"
          @clickButton="navigateTo(link)"
          @clickSecondaryButton="navigateTo(source, true)"
        />
      </template>
    </main>
  </div>
  <tv-footer
    :config="configFooter"
  />
  <tv-scroll-top />
</template>

<style scoped>
.container-home {
  width: 80%;
  margin: 10px auto;
}

.container-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}
</style>
