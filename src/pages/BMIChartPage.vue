<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>BMI Chart</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <!-- <p class="font-bold text-xl text-gray-900 pl-3 pb-3">
            BMI Chart
          </p> -->
          <ul class="divide-y divide-gray-200">
            <li class="py-4 flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  BMI Category: Underweight
                </p>
                <p class="text-sm text-gray-500">
                  BMI: Below 18.5
                </p>
              </div>
            </li>

            <li class="py-4 flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  BMI Category: Normal weight
                </p>
                <p class="text-sm text-gray-500">
                  BMI: 18.5 – 24.9
                </p>
              </div>
            </li>

            <li class="py-4 flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  BMI Category: Overweight
                </p>
                <p class="text-sm text-gray-500">BMI: 25.0 – 29.9</p>
              </div>
            </li>

            <li class="py-4 flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  BMI Category: Obese
                </p>
                <p class="text-sm text-gray-500">BMI: 30.0 and Above</p>
              </div>
            </li>
          </ul>
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
});
</script>
