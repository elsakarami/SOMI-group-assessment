<template>
  <div class="tabs">
    <div class="tabs__navigation">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :style="tabButtonStyle(tab)"
        :class="['tabs__button', { 'tabs__button--active': index === activeTab }]"
        @click="selectTab(index)"
      >
        <div class="tabs__color" :style="tabColorStyle(tab.color)"></div>
      </button>
    </div>
    <div class="tabs__border" :style="activeTabBorderStyle"></div>
    <div ref="tabContent" class="tabs__content" :style="activeTabBackgroundStyle">
      <div class="tabs__inner">
        <div class="tabs__logo">
          <div :style="tabLogoStyle" class="tabs__logo-image">
            <img :src="`/images/${activeTabData.logoName}`" alt="" />
          </div>
        </div>
        <div class="tabs__title" v-html="activeTabData.title"></div>
        <p class="tabs__description">
          {{ activeTabData.content }}
        </p>
        <button
          :style="tabColorStyle(activeTabData.color)"
          class="tabs__button-primary"
        >
          {{ activeTabData.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref, computed } from "vue";

interface Tab {
  title: string;
  content: string;
  color: string;
  bgColor: string;
  logoName: string;
  buttonText: string;
}

const tabs = ref<Tab[]>([
  {
    title: `<h3>recru<span class="text-[#6a89b7]">IT</span>ing. solutions.</h3>`,
    color: "#6a89b7",
    bgColor: "#152031",
    logoName: "SOMI-Experts-Logo.svg",
    content:
      "Seit 2010 bieten wir als Full-Service-Dienstleister spezialisierte Recruiting- und Consulting-Lösungen mit einem Fokus auf die IT-Branche an. Unser Team vermittelt hochqualifizierte Experten und unterstützt Unternehmen bei der Umsetzung innovativer IT-Projekte. Mit maßgeschneiderten Lösungen …",
    buttonText: "zu SOMI Experts",
  },
  {
    title: `<h3>excellent <span class="text-[#008996]">Support </span>in a different way</h3>`,

    color: "#008996",
    bgColor: "#142933",
    logoName: "SOMI-Services-Logo.svg",
    content:
      "Ausgegliedert im Jahr 2023 von SOMI Experts, sind wir nun als eigenständige Gesellschaft tätig, um Ihnen noch mehr Kompetenz und spezialisierte Dienstleistungen bieten zu können. Als verlässlicher Partner für erfolgreiche IT-Projekte und Managed Services unterstützen wir Sie dabei, Ihre technologischen Herausforderungen …",
    buttonText: "zu SOMI Services",
  },
  {
    title: `<h3>discover, hire and <br/><span class="text-[#cf8829]">manage talent.</span></h3>`,
    color: "#cf8829",
    bgColor: "#4a2d0f",
    logoName: "SOMI-Software-Logo.svg",
    content:
      "Im Jahr 2024 aus der SOMI Experts ausgegliedert, haben wir unsere Kompetenz weiter gestärkt, um Ihnen spezialisierte Softwarelösungen bieten zu können. Bei SOMI Software sind wir auf die Entwicklung maßgeschneiderter Lösungen im Bereich der Personalbeschaffung spezialisiert und bieten innovative Tools …",
    buttonText: "zu SOMI Software",
  },
  {
    title: `<h3>unlock your <span class="text-[#A22E5C]">potential.</span></h3>`,
    color: "#A22E5C",
    bgColor: "#4b0d23",
    logoName: "SOMI-Academy-Logo.svg",
    content:
      "Bei SOMI Academy glauben wir daran, dass Ihr Unternehmen und jeder Einzelne in Ihrem Team das Potenzial hat, Großes zu erreichen. Unsere Mission ist es, dieses Potenzial zu entfesseln, indem wir Ihnen maßgeschneiderte Onboardings und Schulungen anbieten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind. …",
    buttonText: "zu SOMI Academy",
  },
]);

const activeTab = ref<number>(0);
const tabContent = ref<HTMLElement | null>(null);
const selectTab = (index: number): void => {
  activeTab.value = index;

  nextTick(() => {
    if (tabContent.value) {
      tabContent.value.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  });
};

const activeTabData = computed(() => tabs.value[activeTab.value]);

const activeTabBackgroundStyle = computed(() => ({
  backgroundColor: activeTabData.value.bgColor,
}));

const activeTabBorderStyle = computed(() => ({
  borderColor: activeTabData.value.color,
}));

const tabButtonStyle = (tab: Tab) => ({
  backgroundColor: tab.color,
  color: activeTab.value === tabs.value.indexOf(tab) ? "#fff" : "",
});

const tabColorStyle = (color: string) => ({
  backgroundColor: color,
});

const tabLogoStyle = computed(() => ({
  backgroundImage: `url('/images/${activeTabData.value.logoName}')`,
}));
</script>

