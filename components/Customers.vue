<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100">
                        Simple, transparent pricing
                    </h2>
                    <p class="mt-4 text-gray-500 dark:text-gray-400">No Contracts. No surprise fees.</p>
                </div>
            </div>

            <!-- Pricing Cards -->
            <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="plan in pricingData" :key="plan.name"
                    :class="{ 'bg-gray-700 text-white': plan.highlight,
                     'hover:bg-gray-200 dark:hover:bg-gray-800': !plan.highlight }"
                    class="flex flex-col px-6 py-4 transition-colors duration-300 transform rounded-lg shadow-md">

                    <p class="text-lg font-medium">{{ plan.name }}</p>
                    <h4 class="mt-2 text-3xl font-semibold">
                        {{ `₹${plan.monthly} / Month` }}
                    </h4>
                    <p class="mt-4 text-gray-500 dark:text-gray-300">{{ plan.description }}</p>

                    <div class="mt-8 space-y-4">
                        <div v-for="feature in plan.features" :key="feature" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="ml-4 text-gray-700 dark:text-gray-300">{{ feature }}</span>
                        </div>
                    </div>

                    <!-- Button container with mt-auto to push it to the bottom -->
                    <div class="mt-auto">
                        <button
                            class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const isYearly = ref(false);

const pricingData = ref([
    { 
      name: "Basic", 
      monthly: 1800, 
      description: "Ideal for occasional physiotherapy sessions.",
      features: [
        "2 sessions per month", 
        "Basic muscle therapy", 
        "Posture correction tips"
      ] 
    },
    { 
      name: "Standard", 
      monthly: 3200, 
      description: "Perfect for regular therapy and pain management.",
      features: [
        "4 sessions per month", 
        "Advanced physiotherapy techniques", 
        "Pain relief strategies", 
        "Personalized exercise plan"
      ] 
    },
    { 
      name: "Advanced", 
      monthly: 6200, 
      description: "Best for injury recovery and specialized therapy.",
      features: [
        "8 sessions per month", 
        "Specialized injury rehabilitation", 
        "Sports physiotherapy", 
        "Post-surgery care",
        "24/7 therapist consultation"
      ]
    },
    { 
      name: "Premium", 
      monthly: 9900,
      description: "Comprehensive care for long-term recovery.",
      features: [
        "28 sessions per month", 
        "Full-body analysis & therapy", 
        "Exclusive access to advanced equipment", 
        "Priority booking",
        "Dedicated therapist"
      ] 
    },
  ]);
</script>