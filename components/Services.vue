<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="mt-6 md:flex md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Explore our Advanced Physiotherapy Services
          </h1>

          <div class="flex mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div class="flex justify-between mt-8 md:mt-0">
          <button @click="prevSlide" title="left arrow" class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <Icon icon="mdi:chevron-left" class="w-6 h-6" />
          </button>

          <button @click="nextSlide" title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <Icon icon="mdi:chevron-right" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
        <div v-for="(service, index) in paginatedServices" :key="index" class="p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <p class="leading-loose text-gray-500 dark:text-gray-400">{{ service.description }}</p>

          <div class="flex items-center mt-8 -mx-2">
            <span class="p-3 bg-blue-100 text-blue-500 rounded-full dark:bg-blue-500 dark:text-white">
              <Icon :icon="service.icon" class="w-6 h-6" />
            </span>

            <div class="mx-2">
              <h1 class="font-semibold text-gray-800 dark:text-white">{{ service.title }}</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const services = ref([
  { title: "Orthopedic Physiotherapy", description: "Comprehensive care for musculoskeletal injuries, fractures, arthritis, and post-surgical rehabilitation.", icon: "mdi:bone" },
  { title: "Neurological Rehabilitation", description: "Advanced therapy for stroke, Parkinson’s disease, spinal cord injuries, and neurological disorders.", icon: "mdi:brain" },
  { title: "Sports Injury Management", description: "Customized rehabilitation plans for athletes to recover from injuries and enhance performance.", icon: "mdi:run" },
  { title: "Post-Surgical Recovery", description: "Rehabilitation programs for joint replacements, spinal surgeries, and other complex medical procedures.", icon: "mdi:medical-bag" },
  { title: "Pediatric Physiotherapy", description: "Specialized therapy for children with developmental delays, cerebral palsy, and musculoskeletal issues.", icon: "mdi:baby" },
  { title: "Geriatric Care", description: "Holistic physiotherapy programs for elderly patients to improve mobility and prevent falls.", icon: "mdi:elderly" },
  { title: "Ergonomics & Workplace Wellness", description: "Postural correction and ergonomic training to prevent workplace injuries and chronic pain.", icon: "mdi:chair-rolling" },
  { title: "Pain Management", description: "Evidence-based pain relief strategies for chronic pain, arthritis, and fibromyalgia.", icon: "mdi:pill" },
  { title: "Ayurveda & Yoga Therapy", description: "Integrative treatments combining physiotherapy with Ayurvedic and yoga principles.", icon: "mdi:yoga" },
  { title: "Public Health & Wellness Programs", description: "Corporate wellness programs and community health awareness initiatives.", icon: "mdi:heart-pulse" },
  { title: "Rehabilitation for Specially-Abled", description: "Comprehensive therapy for individuals with disabilities to enhance mobility and independence.", icon: "mdi:wheelchair-accessibility" },
  { title: "Medical Education & Training", description: "Workshops, research collaborations, and physiotherapy training programs.", icon: "mdi:school" },
]);

const currentPage = ref(0);
const itemsPerPage = 3;

const paginatedServices = computed(() => {
  return services.value.slice(currentPage.value * itemsPerPage, (currentPage.value + 1) * itemsPerPage);
});

const nextSlide = () => {
  if ((currentPage.value + 1) * itemsPerPage < services.value.length) {
    currentPage.value++;
  }
};

const prevSlide = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
</script>
