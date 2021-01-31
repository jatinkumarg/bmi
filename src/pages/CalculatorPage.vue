<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>BMI CALC</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div ion-fixed>
        <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div
                class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"
              >
                <button
                  type="button"
                  :class="
                    unitType == 0
                      ? 'p-5 relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                      : 'p-5 ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                  "
                  @click="changeUnitType"
                >
                  Imperial
                </button>
                <button
                  type="button"
                  :class="
                    unitType == 1
                      ? 'p-5 relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                      : 'p-5 ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                  "
                  @click="changeUnitType"
                >
                  Metric
                </button>
              </div>

              <!-- 1st -->
              <div
                class="mt-6 rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between"
              >
                <div class="flex items-center">
                  <div class="text-sm">
                    <p class="font-medium text-gray-900">
                      Height
                    </p>

                    <div class="mt-3 text-gray-500">
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-l-md shadow-sm">
                          <input
                            type="number"
                            name="username"
                            id="username"
                            autocomplete="username"
                            class="font-bold p-3 flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            style="background:#f7f7f5;"
                            v-model="height"
                          />
                          <span
                            class="inline-flex items-center px-6 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                          >
                            {{ heightType }}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div v-if="unitType == 0" class="mt-3 text-gray-500">
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-l-md shadow-sm">
                          <input
                            type="number"
                            name="username"
                            id="username"
                            autocomplete="username"
                            class="font-bold p-3 flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            style="background:#f7f7f5;"
                            v-model="heightInch"
                          />
                          <span
                            class="pl-5 inline-flex items-center px-3 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                          >
                            inch
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2st -->
              <div
                class="mt-4 rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between"
              >
                <div class="flex items-center">
                  <div class="text-sm">
                    <p class="font-medium text-gray-900">
                      Weight
                    </p>

                    <div class="mt-3 text-gray-500">
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-l-md shadow-sm">
                          <input
                            type="number"
                            name="username"
                            id="username"
                            autocomplete="username"
                            class="font-bold p-3 flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            style="background:#f7f7f5;"
                            v-model="weight"
                          />
                          <span
                            class="inline-flex items-center px-3 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                          >
                            {{ weightType }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                v-bind:disabled="height == 0 || weight == 0"
                type="button"
                class="font-bold mt-6 ml-4 mr-4 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="checkBMI"
              >
                Check BMI
              </button>
              <div
                v-show="score != 0"
                class="mt-6 rounded-lg px-28 bg-white items-center hover:border-gray-400"
              >
                <div class="flex items-center">
                  <div class="text-lg">
                    <span class="pl-8 font-bold center text-gray-900">
                      BMI
                    </span>
                    <br />
                    <span
                      class="pl-9 center text-white  font-bold text-blue-500"
                    >
                      {{ score }}
                    </span>
                  </div>
                </div>
              </div>
              <div
                v-show="category != ''"
                class="mt-4 rounded-lg ml-2 px-16 bg-white items-center hover:border-gray-400"
              >
                <div class="flex items-center">
                  <div class="text-lg">
                    <span class="pl-8 font-bold text-gray-900">
                      BMI Category
                    </span>
                    <br />
                    <span class="pl-8 text-white  font-bold text-blue-500">
                      {{ category }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      height: 0,
      heightInch: 0,
      weight: 0,
      heightType: "ft",
      weightType: "lbs",
      unitType: 0,
      score: 0,
      category: "",
    };
  },

  methods: {
    changeUnitType() {
      this.unitType = this.unitType == 0 ? 1 : 0;
      this.height = 0;
      this.weight = 0;
      this.heightInch = 0;

      if (this.unitType == 0) {
        this.heightType = "ft";
        this.weightType = "lbs";
      } else {
        this.heightType = "cm";
        this.weightType = "kg";
      }
    },
    checkBMI() {
      let vm;
      vm = this;
      if (vm.unitType == 0) {
        let finalHeight =
          (+vm.height * 12 + +vm.heightInch) *
          (+vm.height * 12 + +vm.heightInch);
        vm.score = vm.weight / finalHeight;
        vm.score = Math.round(+vm.score * 703);
        vm.heightType = "ft";
        vm.weightType = "lbs";
      } else {
        vm.heightType = "cm";
        vm.weightType = "kg";
        vm.score = Math.round(
          +vm.weight / ((+vm.height / 100) * (+vm.height / 100))
        );
      }

      //category
      if (vm.score > 30.5) {
        vm.category = "Underweight";
      } else if (vm.score > 24.9) {
        vm.category = "Normal weight";
      } else if (vm.score > 29.9) {
        vm.category = "Overweight";
      } else if (vm.score > 30) {
        vm.category = "Obese";
      } else {
        vm.category = "Please re-check above inputs";
      }
    },
  },
});
</script>
